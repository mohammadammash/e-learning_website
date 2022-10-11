export const courseAssignment_getAPI = async (token, course_id) => {
  const api_url = `${window.baseURL}/courses/${course_id}/assignments`;

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
