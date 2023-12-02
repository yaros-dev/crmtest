import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../header/header';
import { useEffect } from 'react';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
