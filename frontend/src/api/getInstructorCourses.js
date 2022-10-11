export const instructorCourses_getAPI = async (token) => {
  const api_url = `${window.baseURL}/instructor/courses`;

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
