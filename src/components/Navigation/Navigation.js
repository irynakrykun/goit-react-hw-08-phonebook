import { Link } from "./Navigation.styled";
// import { useAuth } from 'hooks/useAuth';


export const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link  to="/">
        Home
      </Link>
      
        <Link  to="/contacts">
          Contacts
        </Link>
      
    </nav>
  );
};