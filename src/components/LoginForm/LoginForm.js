import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Label,Input,Button, FormContainer } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormContainer  onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" placeholder="Enter your email"/>
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Enter your password" />
      </Label>
      <Button type="submit">Log In</Button>
    </FormContainer>
  );
};