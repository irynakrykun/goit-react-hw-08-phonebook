import styled from 'styled-components';

export const Description = styled.p`
  // margin-left: 50px;
  margin-right: auto;
`;
export const Button = styled.button`
  margin-top: 20px;
  color: snow;
  text-shadow: darkslateblue 1px 1px 1px;
  width: 90px;
  line-height: 1.5rem;
  background: blue;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 1px 1px blue, 0px 1px 1px green, 0px 1px 1px blue;
  cursor: pointer;
  transition: all 150ms ease 0s;
  &:hover,
  &:focus {
    background: green;
    box-shadow: 2px 5px 5px darkorchid;
  }
`;
