import React, { useState } from "react";
import { Link } from "react-router-dom";

import { getFirebase } from "../firebase";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setrecipes] = useState([]);

  if (loading && !recipes.length) {
    getFirebase()
      .database()
      .ref("/recipes")
      .orderByChild("date")
      .once("value")
      .then(snapshot => {
        let recipes = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          recipes.push(snapshotVal[slug]);
        }

        const newestFirst = recipes.reverse();
        setrecipes(newestFirst);
        setLoading(false);
      });
  }
  
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <p className="intro">A collection of recipes from around the world</p>
      {recipes.map(recipe => (
        <section key={recipe.name} className="card">
          <Link to={`/${recipe.slug}`}>
          <img src={recipe.image} alt={recipe.imageAlt} />
            <h2>
              {recipe.name}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${recipe.description.substring(0, 200)}...`
              }}
            ></p>
            </Link>
        </section>
      ))}
    </>
  );
};

export default Home;
