import PropTypes from 'prop-types';
import { Formik} from 'formik';
import * as yup from 'yup';
import { Button, FormLabel, FormErr,Label, Input } from './FormContacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(9).max(9).required(),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    console.log(values);

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts`);
      return;
    }
    dispatch(addContact(values));

    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormLabel autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <FormErr name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <FormErr name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormLabel>
    </Formik>
  );
};

FormContacts.propTypes = {
  initialValues: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  validationSchema: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default FormContacts;
