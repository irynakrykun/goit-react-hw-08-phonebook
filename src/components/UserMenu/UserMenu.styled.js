import styled from 'styled-components';

export const Button = styled.button`
  margin-bottom: 5px;
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

export const Text = styled.p`
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-top: 16px;`