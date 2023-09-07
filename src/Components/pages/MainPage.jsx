import Header from '../Header';
import Posts from './Posts';
import Card from '../Card';
import '../../scss/MainPage.scss';
import { useEffect, useState } from 'react';
const MainPage = () => {
  const [pictures, setPictures] = useState([]);

  const handleFetch = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/5');
    const data = await response.json();
    setPictures(data.message);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="main-page">
        <Card>
          <Posts picture={pictures[0]}></Posts>
        </Card>
        <Card>
          <Posts picture={pictures[1]}></Posts>
        </Card>
        <Card>
          <Posts picture={pictures[2]}></Posts>
        </Card>
        <Card>
          <Posts picture={pictures[3]}></Posts>
        </Card>
        <Card>
          <Posts picture={pictures[4]}></Posts>
        </Card>
      </div>
    </>
  );
};

export default MainPage;
