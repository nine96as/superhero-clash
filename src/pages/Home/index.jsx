import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHeroes } from '../../action-creators/hero';
import { CardContainer, ShuffleButton } from '../../components';

const Home = () => {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);

  const handleClick = () => {
    dispatch(fetchHeroes());
  };

  return (
    <>
      {error && (
        <div role='alert' id='error'>
          {error.message}
        </div>
      )}
      <h1>Home</h1>
      <CardContainer />
      <ShuffleButton handleClick={handleClick} />
    </>
  );
};

export default Home;
