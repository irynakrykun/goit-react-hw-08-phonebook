import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Link } from './SharedLayout.styled';
export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
                  <Link to="/register">Register</Link>
                  <Link to="/login">Login</Link>
        </nav>
      </Header>
      <Suspense  fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      
    </Container>
  );
};