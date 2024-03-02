import axios from 'axios';

export const createOrder = async order => {
  try {
    const { data } = await axios.post('http://localhost:8000/api/orders/create', order);
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get('/api/orders/newOrderForCurrentUser');
  return data;
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get('http://localhost:8000/api/orders/track/' + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`http://localhost:8000/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`http://localhost:8000/api/orders/allstatus`);
  return data;
};