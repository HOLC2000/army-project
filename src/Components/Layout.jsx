import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import '../scss/Layout.scss';

const Layout = () => {
  return (
    <div className="page">
      <main>
        <Outlet></Outlet>
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
