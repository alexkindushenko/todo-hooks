const _apiBase = 'http://localhost:8888/';

export const getTodoList = async () => {
  try {
    return await fetch.patch(_apiBase);
  } catch (error) {
    return error;
  }
};

export const sendLoginForm = async (data) => {
  try {
    return await fetch.post(`${_apiBase}login`, data);
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const sendRegisterForm = async (data) => {
  try {
    return await fetch.post(`${_apiBase}register`, data);
  } catch (error) {
    return error;
  }
};

export const updateItem = async (data) => {
  try {
    return await fetch.put(`${_apiBase}`, data);
  } catch (error) {
    return error;
  }
};

export const deleteItem = async (data) => {
  try {
    return await fetch.delete(`${_apiBase}`, { params: data });
  } catch (error) {
    return error;
  }
};

export const addItem = async (data) => {
  try {
    return await fetch.post(`${_apiBase}`, data);
  } catch (error) {
    return error;
  }
};
export const userLogout = async () => {
  try {
    return await fetch.patch(`${_apiBase}logout`);
  } catch (error) {
    return error;
  }
};
