import Header from '../Header';
import Card from '../Card';
import '../../scss/Welcome.scss';
const Welcome = () => {
  const HandleLogin = () => {
    console.log('yes2');
  };
  const HandleSignUp = () => {
    console.log('yes1');
  };

  return (
    <>
      <Header />
      <Card>
        <div className="welcome-main">
          <h1>Welcome to Dog-app</h1>
          <h2>Your app to view and share cute dogs you see online</h2>
          <ul className="welcome-main__signLog">
            <li className="welcome-main__signLog__list">
              <button
                className="welcome-main__signLog__list__button"
                onClick={HandleSignUp}>
                Sign-up
              </button>
            </li>
            <li className="welcome-main__signLog__list">
              <button
                className="welcome-main__signLog__list__button"
                onClick={HandleLogin}>
                Log-in
              </button>
            </li>
          </ul>
        </div>
      </Card>
    </>
  );
};

export default Welcome;
