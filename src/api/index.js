import axios from "axios";

const BASE_URL = "https://api.chucknorris.io/jokes";

export const getRandomOne = async () => {
  try {
    let response = axios.get(`${BASE_URL}/random`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    let response = axios.get(`${BASE_URL}/categories`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getByText = async (param) => {
  try {
    let response = axios.get(`${BASE_URL}/search?query=${param}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getByCategories = async (param) => {
  try {
    let response = axios.get(`${BASE_URL}/random?category=${param}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
