import React, { useState, useEffect } from "react";
import classes from "./AddPhotos.module.css";

import { toast } from "react-toastify";
import Spinner from "../../components/layout/Spinner";

// Importing Firebase upload functions
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";

// Getting redux hooks
import { useSelector, useDispatch } from "react-redux";

import { v4 } from "uuid";

const AddPhotos = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    photo: "",
  });
  const { title, description, photo } = formData;
  const { user } = useSelector((state) => state.auth);

  //   useEffect(() => {
  //     if (isError) {
  //       toast.error(message);
  //     }
  //     dispatch(reset());
  //   }, [message, isError, isSuccess, navigate, dispatch]);

  const titleInputHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      title: e.target.title,
    }));
  };

  const descInputHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      description: e.target.description,
    }));
  };

  const handlePhotoUpload = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (photo === null) {
      return;
    }

    const imageRef = ref(
      storage,
      `${user.id}/${title.split(" ").join("")}/${photo.name + v4()}`
    );
    uploadBytes(imageRef, photo).then((res) => {
      console.log(res);
    });
  };

  return (
    <section className="main">
      <form className={classes.form} onSubmit={onSubmit}>
        {/* <label htmlFor="title">Заглавие</label> */}
        <input
          type="text"
          placeholder="Задай заглавие/име на твоята снимка"
          name="title"
          id="title"
          value={title}
          onChange={titleInputHandler}
          required
        />

        <p className={classes.white}>
          Добави описание или кратка информация за снимката. Например - къде е
          заснета, каква техника е използвана или друга мисъл, която искаш да
          споделиш.
        </p>
        <textarea
          className={classes.textArea}
          name="preparation"
          id="preparation"
          cols="8"
          rows="8"
          value={description}
          onChange={descInputHandler}
          required
        ></textarea>

        <div className={classes.upload__button}>
          <label htmlFor="photos">Добави снимка</label>
          <input
            style={{ display: "none" }}
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photos"
            id="photos"
            filename="photos"
            onChange={handlePhotoUpload}
            required
          />
        </div>

        <button className="primaryBtn">Публикувай</button>
      </form>
    </section>
  );
};

export default AddPhotos;
