import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "redux/contacts/operations";
import { getIsLoading, getError } from "redux/contacts/selectors";
import FormContacts from "components/FormContacts/FormContacts";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";

 const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <FormContacts />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </>
  );
};
export default Contacts;