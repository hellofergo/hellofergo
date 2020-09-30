import React, { useState } from "react";
import { getFirebase } from "../firebase";

const Create = ({ history }) => {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [image, setImage] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [description, setDescription] = useState("");

  const generateDate = () => {
    const now = new Date();
    const options = { month: "long", day: "numeric", year: "numeric" };

    const year = now.getFullYear();

    let month = now.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    let day = now.getDate();
    if (day < 10) {
      day = `0${day}`;
    }

    return {
      formatted: `${year}-${month}-${day}`,
      pretty: now.toLocaleDateString("en-US", options)
    };
  };

  const createPost = () => {
    const date = generateDate();
    const newPost = {
      name,
      dateFormatted: date.formatted,
      datePretty: date.pretty,
      slug,
      image,
      imageAlt,
      description
    };
    getFirebase()
      .database()
      .ref()
      .child(`recipes/${slug}`)
      .set(newPost)
      .then(() => history.push(`/`));
  };

  return (
    <>
      <h1>Create a new recipe</h1>
      <section>
        <label>Name</label>
        <input id="title-field" type="text" value={name}
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />

        <label htmlFor="slug-field">Slug</label>
        <input id="slug-field" type="text" value={slug}
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label htmlFor="cover-image-field">Image</label>
        <input id="cover-image-field" type="text" value={image}
          onChange={({ target: { value } }) => {
            setImage(value);
          }}
        />

        <label htmlFor="cover-image-alt-field">Image alt text</label>
        <input id="cover-image-alt-field" type="text" value={imageAlt}
          onChange={({ target: { value } }) => {
            setImageAlt(value);
          }}
        />

        <label htmlFor="content-field">Description</label>
        <textarea
          style={{ height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={description}
          onChange={({ target: { value } }) => {
            setDescription(value);
          }}
        />
          <button onClick={createPost}>Create</button>
      </section>
    </>
  );
};

export default Create;

