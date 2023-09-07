import React, { useState } from 'react';
import 'firebase/database';
import '../../scss/Posts.scss';
import logo from '../../assets/pictures/app-logo.png';
const Posts = (props) => {
  const handleLike = () => {};

  const handleComment = () => {
    // Add comment functionality here
  };

  const handleSave = () => {
    // Save post functionality here
  };

  return (
    <div className="social-media-post">
      <h1>Example</h1>
      <img src={props.picture} />
      <p>Example of a description</p>
      <div className="post-actions">
        <button onClick={handleLike} className={`like-button`}>
          Like ()
        </button>
        <button onClick={handleComment} className="comment-button">
          Comment
        </button>
        <button onClick={handleSave} className="save-button">
          Save
        </button>
      </div>
    </div>
  );
};

export default Posts;
