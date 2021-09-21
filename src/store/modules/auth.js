import axios from 'axios';
import router from '../../router'

const state = {
  user: null,
  posts: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StatePosts: (state) => state.posts,
  getUser: (state) => state.user,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios.post('register', form);
    let UserForm = new FormData();
    UserForm.append('username', form.username);
    UserForm.append('password', form.password);
    await dispatch('LogIn', UserForm);
  },

  
    async LogIn({commit}, payload) {
      try{
         let resp = await axios.post('api/user/login',{
        email: payload.emailLogin,
        password: payload.passwordLogin,
      })
      console.log("the resp", resp)
    await commit("setUser", payload.emailLogin);
    router.push("/menus");
      }catch(err){
        console.log("ERROR", err)
      }
  
    
    },
  

  async CreatePost({ dispatch }, post) {
    await axios.post('post', post);
    return await dispatch('GetPosts');
  },

  async GetPosts({ commit }) {
    let response = await axios.get('posts');
    commit('setPosts', response.data);
  },

  async LogOut({ commit }) {
    let user = null;
    commit('logout', user);
  },
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },

  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
  
};

export default {
  state,
  getters,
  actions,
  mutations,
};
