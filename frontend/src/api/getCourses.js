export const courses_getAPI = async (token, user_type) => {
  let api_url = window.baseURL;
  if (user_type === "instructor") api_url += "/instructor";
  api_url += "/courses";

  try {
    const response = await window.getAPI(api_url, token);
    if (!response) return false; //courses not found

    if (response && response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    return "DATA NOT RETIREVED";
  }
};
