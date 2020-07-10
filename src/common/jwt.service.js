export const TOKEN_SPOONACULAR = process.env.VUE_APP_TOKEN_SPOONACULAR;

export const getToken = () => {
  return window.localStorage.getItem(TOKEN_SPOONACULAR);
};

export const saveToken = token => {
  window.localStorage.setItem(TOKEN_SPOONACULAR, token);
};

export const destroyToken = () => {
  window.localStorage.removeItem(TOKEN_SPOONACULAR);
};

export default { getToken, saveToken, destroyToken };
