import React, { useState, useEffect } from "react";
import classes from "./AddPhotos.module.css";

import { toast } from "react-toastify";
import Spinner from "../../components/layout/Spinner";

// Getting redux hooks
import { useSelector, useDispatch } from "react-redux";

import { v4 } from "uuid";

const AddPhotos = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    photo: "",
  });
  const { title, description } = formData;
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
      photos: e.target.files[0],
    }));
  };

  const onSubmit = (e) => {};

  return (
    <section className="main">
      <form className={classes.form} onSubmit={onSubmit}>
        <label htmlFor="title">Заглавие</label>
        <input
          type="text"
          placeholder=""
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
          cols="10"
          rows="10"
          value={description}
          onChange={descInputHandler}
          required
        ></textarea>

        <div className={classes.upload__button}>
          <label className={classes.upload} htmlFor="photos">
            Добави снимки
          </label>
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
