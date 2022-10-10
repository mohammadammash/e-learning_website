import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById("root"));

window.baseURL = "http://127.0.0.1:8000/api/v0.1";
window.image_folder_URL ="C:\\Users\\DellPc2\\Desktop\\e-learning_website\\backend\\public\\user_images\\";
window.asssignment_folder_URL ="C:\\Users\\DellPc2\\Desktop\\e-learning_website\\backend\\public\\assignments\\";

window.getAPI = async (api_url, jwt_token = "") => {
  try {
    return await axios(api_url, {
      headers: {
        Authorization: "Bearer " + jwt_token,
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log("/GET API:", error);
  }
};

window.postAPI = async (api_url, api_data, jwt_token = "") => {
  try {
    return await axios.post(api_url, api_data, {
      headers: {
        Authorization: "Bearer " + jwt_token,
        Accept: "application/json",
      },
    });
  } catch (error) {
    console.log("/POST API:", error);
  }
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
