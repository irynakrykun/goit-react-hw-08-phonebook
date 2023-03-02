import { Description, Button } from '../Contact/Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { GoPerson } from "react-icons/go";
import { HiPhone } from "react-icons/hi2";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <Description><GoPerson/>  {contact.name}</Description>
      <Description><HiPhone/>  {contact.number}</Description>
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
