import axios from "axios";

const URL = "http://localhost:5000";

export const addProduct = async (product, image) => {
  let formData = new FormData();
  formData.append("productheading", product.productheading);
  formData.append("productDescription", product.productDescription);
  formData.append("productPrice", product.productPrice);
  formData.append("productStrike", product.productStrike);
  formData.append("productOffer", product.productOffer);

  // Append image
  if (image) {
    formData.append("ProductImage", image);
  }

  try {
    const response = await axios.post(`${URL}/addProducts`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const updateProductById = async (productId, product, image) => {
  let formData = new FormData();
  formData.append("productheading", product.productheading);
  formData.append("productDescription", product.productDescription);
  formData.append("productPrice", product.productPrice);
  formData.append("productStrike", product.productStrike);
  formData.append("productOffer", product.productOffer);

  // Append image
  if (image) {
    formData.append("ProductImage", image);
  }

  try {
    const response = await axios.put(
      `${URL}/updateProduct/${productId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
};

export const getProductById = async (productId) => {
  const response = await axios.get(`${URL}/getProduct/${productId}`);
  return response.data[0];
};

export const getProducts = async () => {
  const response = await axios.get(`${URL}/getAllProducts`);
  return response.data;
};

export const deleteProductById = async (productId) => {
  const response = await axios.delete(`${URL}/deleteProduct/${productId}`);
  return response.data;
};
