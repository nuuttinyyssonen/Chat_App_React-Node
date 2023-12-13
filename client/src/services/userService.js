import axios from 'axios';

const baseUrl = 'http://localhost:5000';
const getToken = () => {
  return localStorage.getItem('token');
};

const getConfig = () => {
  const token = getToken();
  return {
    headers: {
      Authorization: `bearer ${token}`
    }
  };
};

const createUser = async (user) => {
  const response = await axios.post(`${baseUrl}/signup`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

const loginUser = async (user) => {
  const response = await axios.post(`${baseUrl}/login`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

const getUsers = async (username) => {
  const response = await axios.get(`${baseUrl}/users/${username}`);
  return response.data;
};

const getUser = async (username) => {
  const response = await axios.get(`${baseUrl}/user/${username}`);
  return response.data;
};

const getUserById = async (id) => {
  const response = await axios.get(`${baseUrl}/user/id/${id}`);
  return response.data;
};

const getAuthUser = async () => {
  const config = getConfig();
  const response = await axios.get(`${baseUrl}/user`, config);
  return response.data;
};

const deleteUser = async () => {
  const config = getConfig();
  const response = await axios.delete(`${baseUrl}/user`, config);
  return response.data;
};

const changeProfilePicture = async (data) => {
  const token = getToken();
  const response = await axios.put(`${baseUrl}/user/upload/image`, data, {
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

const updateUserField = async (field, data) => {
  const token = getToken();
  const response = await axios.put(`${baseUrl}/user/update/${field}`, data, {
    headers: {
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export default {
  createUser,
  loginUser,
  getUsers,
  getUser,
  getUserById,
  getAuthUser,
  deleteUser,
  getToken,
  changeProfilePicture,
  updateUserField
};
