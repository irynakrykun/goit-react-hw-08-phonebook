import styled from 'styled-components';

// export const List = styled.ul`

//    margin: 0;
//   padding: 10;
//   display: flex;
//   flex-direction:column;
//   gap: 8px;
// `;


// export const ListItem  = styled.li`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//     padding: 5px;
//   margin-bottom: 8px;
// `;

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

// export const MainContainer = styled.div`
//   display: flex;
//   width: 650px;
//   justify-content: space-between;
// `;

export const Contain = styled.div`
  width: 720px;
  padding: 35px 15px;
  margin-top: 20px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;