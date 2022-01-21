import axios from 'axios';

const _apiBase = 'http://localhost:8888/';

export const getTodoList = async () => {
  try {
    return await axios.patch(_apiBase);
  } catch (error) {
    return error;
  }
};

export const sendLoginForm = async (data) => {
  try {
    return await axios.post(`${_apiBase}auth/login`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendRegisterForm = async (data) => {
  try {
    return await axios.post(`${_apiBase}auth/register`, data);
  } catch (error) {
    return error;
  }
};

export const updateItem = async (id, data) => {
  try {
    return await axios.put(`${_apiBase}${id}`, data);
  } catch (error) {
    return error;
  }
};

export const deleteItem = async (id) => {
  try {
    return await axios.delete(`${_apiBase}${id}`);
  } catch (error) {
    return error;
  }
};

export const addItem = async (data) => {
  try {
    return await axios.post(`${_apiBase}`, data);
  } catch (error) {
    return error;
  }
};
export const userLogout = async () => {
  try {
    return await axios.patch(`${_apiBase}auth/logout`);
  } catch (error) {
    return error;
  }
};
