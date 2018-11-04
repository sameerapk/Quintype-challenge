import axios from 'axios';

const baseUrl = 'http://localhost:3000/';
const customAxios = axios.create({ baseURL: baseUrl });

//to fetch the gamedata from to pass on to the local storage
export const getGameData = async () => {
  const result = await customAxios.get('/game_data');

  if (result.status === 200) {
    return result.data;
  }
  throw new Error('Oh snap something bad happened!');
};

//to fetch the id of a corresponding block in the 8X8 board
export const revealCell = async (id) => {
  const result = await customAxios.put(`/cell/${id}`);

  if (result.status === 200) {
    return result.data;
  }
  throw new Error('Oh snap something bad happened!');
};
