import UserUtils from './UserUtils';

export const isLogin = () => {
  const token = UserUtils.getAccessToken();
  if (token !== null) {
    return true;
  }
  return false;
}