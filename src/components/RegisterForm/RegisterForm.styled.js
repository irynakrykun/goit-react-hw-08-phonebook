import styled from "styled-components";


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

export const Input = styled.input`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;