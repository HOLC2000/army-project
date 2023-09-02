import '../scss/ErrorElement.scss';
import Header from './Header';

const ErrorElement = () => {
  return (
    <>
      <Header />
      <div className="Error">
        <h2>Oops!</h2>
        <h3>You've arrived at the wrong end</h3>
        <h3>Page not found</h3>
        <h1>404</h1>
      </div>
    </>
  );
};

export default ErrorElement;
