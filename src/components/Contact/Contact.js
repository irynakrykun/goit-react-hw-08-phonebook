import { Description, Button } from '../Contact/Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <Description>{contact.name}</Description>
      <Description>{contact.number}</Description>

      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </>
  );
};
Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
