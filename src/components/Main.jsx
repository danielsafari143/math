import { Outlet } from 'react-router-dom';
import Nav from './Nav';

function Main() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default Main;
