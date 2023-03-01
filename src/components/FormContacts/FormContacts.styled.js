import { Form,ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
  color: green;
  text-shadow: 0.5px 0.5px 0.5px blue;
  text-align: center;
`;

export const Input = styled(Field)`
  width: 320px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid green;

  box-shadow: 0px 1px 1px blue, 0px 1px 1px blue,
    0px 1px 1px blue;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 20px;
  color: snow;
  text-shadow: darkslateblue 1px 1px 1px;
  width: 150px;
  line-height: 1.5rem;
  background: green;
  border: none;
  border-radius: 7px;
   box-shadow: 0px 1px 1px blue, 0px 1px 1px blue,
    0px 1px 1px blue;
  cursor: pointer;
  transition: all 150ms ease 0s;
  &:hover,
  &:focus {
    background: blue;
    box-shadow: 2px 5px 5px darkorchid;
  }
`;

export const FormLabel = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

// export const FormLabel = styled(Form)`
//   display: inline-flex;
//   flex-direction: column;
//   align-items: flex-end;
//   gap: 12px;
//   margin-bottom: 16px;
//   padding: 8px;
//   border: 1px solid #2a2a2a;
//   border-radius: 4px;
// `;

// export const Button = styled.button`
//   background-color: green;
//   border: 1px solid #0926a6;
//   border-radius: 5px;
//   color: black;
//   padding: 5px 10px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 14px;
//   cursor: pointer;
// `;

const ErrorText = styled.p`
color: red;
font-size: 14px`

export const FormErr = ({ name })=> {
  return (
    <ErrorMessage name={name}
      render={message => <ErrorText>{message}</ErrorText>}/>
  )
}
  