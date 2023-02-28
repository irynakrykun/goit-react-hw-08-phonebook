import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from 'redux/auth/operations';
// import { useAuth } from 'hooks/useAuth';


const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import("pages/Register"));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(()=>import('pages/Contacts'))

const App = () => {
  const dispatch = useDispatch();
  //  const { isRefreshing } = useAuth();

  useEffect(() => { 
    dispatch(currentUser())
  },[dispatch])

  //  return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
    return(
    <>
      
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element ={<Home/> } />
        <Route path='/register' element ={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/contacts' element={<Contacts/> } />
          </Route>
      </Routes>
    </>
  )
}

export default App;
