import Api from '@/services/Api';

export default {
  userSignUp() {
    return Api().post('api/user/signup');
  },

  addUser(params) {
    return Api().post('api/user/signup', params);
  },

  // updatePost (params) {
  //   return Api().put('api/posts/' + params.id, params)
  // },

  getUser (params) {
    return Api().get('api/user/login' + params.id)
  },

  // deletePost (id) {
  //   return Api().delete('api/posts/' + id)
  // }
};
