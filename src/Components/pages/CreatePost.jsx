import Header from '../Header';
import Card from '../Card';
import Logo from '../../assets/pictures/app-logo.png';
import '../../scss/CreatePost.scss';
const CreatePost = () => {
  return (
    <>
      <Header></Header>
      <Card>
        <div className="container">
          <img src={Logo} className="dog-picture" />
          <button className="dog-next button">Next picture</button>
          <input placeholder="Enter Description" className="dog-description" />
          <button className="dog-upload button">Upload</button>
        </div>
      </Card>
    </>
  );
};

export default CreatePost;
