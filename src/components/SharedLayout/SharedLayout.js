import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { Container } from './SharedLayout.styled';
import { AppBar } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
