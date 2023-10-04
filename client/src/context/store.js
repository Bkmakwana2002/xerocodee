import { create } from 'zustand'
import axios from 'axios'
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, provider, provider2 } from '../firebase';

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: localStorage.getItem('user') ? true : false,
  login: async (userData) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, userData);

      const user = response.data;
      console.log('api', user)
      set({ user, isAuthenticated: true });

      localStorage.setItem('user', JSON.stringify(user.user));
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },
  register: async (userData) => {
    try {

      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/register`, userData);


      const newUser = response.data;
      console.log(response)
      set({ user: newUser, isAuthenticated: true });

      localStorage.setItem('user', JSON.stringify(newUser.user));
    } catch (error) {
      console.error('Error registering user:', error);
    }
  },
  signInWithGoogle: () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const user_data = {
          firstName: name,
          email: email,
          lastName: ""
        }
        localStorage.setItem('user', JSON.stringify(user_data))
        set({ user: user_data, isAuthenticated: true });
        // console.log(isAuthenticated)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  signInWithGithub: () => {
    signInWithPopup(auth, provider2)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken
        const user = result.user;
        const name = user.displayName;
        const email = user.email;
        const user_data = {
          firstName: name,
          email: email,
          lastName: ""
        }
        localStorage.setItem('user', JSON.stringify(user_data))
        set({ user: user_data, isAuthenticated: true });
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  }
}));

export default useAuthStore;