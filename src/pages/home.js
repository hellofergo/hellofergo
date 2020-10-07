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
      {recipes.map(recipe => (
        <section key={recipe.name} className="card">
          <Link to={`/${recipe.slug}`}>
          <img src={recipe.image} alt={recipe.imageAlt} />
          <div className="details">
            <h2>
              {recipe.name}
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${recipe.datePretty}`
              }}
            ></p>
            </div>
            </Link>
        </section>
      ))}
    </>
  );
};

export default Home;
