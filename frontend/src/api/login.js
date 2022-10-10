export const loginUser_postAPI = async (email, password) => {
  const loginURL = `${window.baseURL}/login`;
  const data = { email: email, password: password };

  try {
    const response = await window.postAPI(loginURL, data);

    if (response && response.status === 200) {
      const user = response.data.data;
      return user;
    } else {
      return "USER NOT FOUND";
    }
  } catch (err) {
    return "DATA NOT RETIREVED";
  }
};
