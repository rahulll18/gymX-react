import axios from "axios";

const URL = "http://localhost:5000";

export const addProduct = async(product) =>{
    const response = await axios.post(`${URL}/addProducts` , product);
    console.log(response);
    return response;
}

export const getProducts = async() =>{
    const response = await axios.get(`${URL}/getAllProducts`);
    return response.data;
}