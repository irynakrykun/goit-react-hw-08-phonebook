// import FormContacts from '../FormContacts/FormContacts';
// import { Contain, PhoneBook, PhoneContacts } from './App.styled';
// import Filter from '../Filter/Filter';
// import ContactList from '../ContactList/ContactList';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getIsLoading, getError } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';

// export const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <Contain>
//       <PhoneBook>Phonebook</PhoneBook>
//       <FormContacts />
//       <PhoneContacts>Contacts</PhoneContacts>
//       <Filter />
//       {isLoading && !error && <b>Request in progress...</b>}
//       <ContactList />
//     </Contain>
//   );
// };

import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';


const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(()=> import ('pages/Login'))

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element ={<Home/> } />
        <Route path='register' element ={<Register />} />
          <Route path='login' element={<Login />} />
          </Route>
      </Routes>
    </>
  )
}

export default App;
