import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { getFirebase } from "../firebase";

const Post = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState();

  if (loading && !currentPost) {
    getFirebase()
      .database()
      .ref()
      .child(`/recipes/${slug}`)
      .once("value")
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val());
        }
        setLoading(false);
      });
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const postDoesNotExist = !currentPost
  if (postDoesNotExist) {
    return <Redirect to="/404" />;
  }


return (
  <div className="card">
    <img src={currentPost.image} alt={currentPost.imageAlt}></img>
    <div className="details">
    <h2>{currentPost.name}</h2>
    <p>{currentPost.datePretty}</p>
    <p dangerouslySetInnerHTML={{ __html: currentPost.description }}></p>
    </div>
  </div>
);
};

export default Post;

