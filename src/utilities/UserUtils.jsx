const ACCESS_TOKEN = "huvr::access_token";

const userUtils = {
  /* Autherization */
  setAccessToken(access_token) {
    localStorage.setItem(ACCESS_TOKEN, access_token);
  },
  getAccessToken() {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  removeAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN);
  },

  /* Logout */
  logout() {
    //localStorage.clear();
    /* Autherization */
    localStorage.removeItem(ACCESS_TOKEN);

  }
}
export default userUtils;
