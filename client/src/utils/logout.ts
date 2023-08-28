import Cookie from 'js-cookie';

export default function logout() {
  // Manually remove user store
  window.localStorage.removeItem('user-storage');
  window.localStorage.removeItem('jwt');
  Cookie.remove('jwt');
}
