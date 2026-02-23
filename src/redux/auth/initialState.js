export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: !!localStorage.getItem('token'),
  isRefreshing: false,
};
