export const authInitialState = {
  user: { name: null, email: null },
  // token: localStorage.getItem('token') || null,
  // isLoggedIn: !!localStorage.getItem('token'),
  // isRefreshing: false,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
