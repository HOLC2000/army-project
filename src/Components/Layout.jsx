import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../scss/Layout.scss'

const Layout = () => {
  return (
    <div className='page'>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>

    </div>
  );
};

export default Layout;
