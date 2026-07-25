const setAccessToken = (acsTkn: string) => {
  if (acsTkn) {
    localStorage.setItem("accessToken", acsTkn);
  } else {
    localStorage.removeItem("accessToken");
  }
};

const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

const clearTokens = () => {
  localStorage.removeItem("accessToken");
};

export {
  getAccessToken,
  setAccessToken,
  clearTokens,
};
