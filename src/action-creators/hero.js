import axios from 'axios';

export const fetchHeroes = () => {
  return async (dispatch) => {
    try {
      const id = Math.floor(Math.random() * 731) + 1;
      const { data } = await axios.get(
        `https://superheroapi.com/api.php/${import.meta.env.VITE_API_KEY}/${id}`
      );

      console.log(data);
      console.log(data.image.url);

      dispatch({
        type: 'LOAD_HEROES',
        payload: [
          {
            name: data.name,
            stats: data.powerstats,
            img: data.image.url
          }
        ]
      });
    } catch (e) {
      dispatch({
        type: 'SET_ERROR',
        payload: e
      });
    }
  };
};
