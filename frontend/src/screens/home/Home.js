import React, { useState, useEffect } from "react";
import LastTen from "./LastTen";
import Register from "./Register";
import classes from "./Home.module.css";
import Login from "./Login";

// import redux hoods
import { useSelector, useDispatch } from "react-redux";
import { getLastTen, reset } from "../../features/photos/photosSlice";
import Spinner from "../../components/layout/Spinner";

const Home = () => {
  const [regComponent, setRegComponent] = useState(true);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { photos, isPhotoLoading, isPhotoSuccess } = useSelector(
    (state) => state.photo
  );

  useEffect(() => {
    dispatch(getLastTen());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      if (isPhotoSuccess) {
        dispatch(reset());
      }
    };
  }, [isPhotoSuccess, dispatch]);
  console.log(photos);
  if (isPhotoLoading) {
    return <Spinner />;
  }

  const onComponentChange = (prop) => {
    setRegComponent(prop);
  };
  return (
    <section className={classes.main}>
      <LastTen />
      {!user && (
        <div>
          {regComponent ? (
            <Register onComponentChange={onComponentChange} />
          ) : (
            <Login onComponentChange={onComponentChange} />
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
