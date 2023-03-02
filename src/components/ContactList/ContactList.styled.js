import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 16px;
  margin-left: 40px;
  margin-right: 40px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;

export const Contain = styled.div`
  width: 720px;
  padding: 35px 15px;
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(99, 212, 174);
`;
