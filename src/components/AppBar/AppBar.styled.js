import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid blue;
  margin-left: 20px;

  margin-right: 20px;
  > nav {
    display: flex;
  }
`;
