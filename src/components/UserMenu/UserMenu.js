import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { logOut } from "redux/auth/operations";
import { Button,Text } from "./UserMenu.styled";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <Text >Welcome,{user.email} </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};