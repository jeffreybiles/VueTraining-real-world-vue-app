import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import PostService from '@/services/PostService'

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts({commit}) {
      let response = await PostService.getPosts()
      commit('SET_POSTS', response.data)
    }
  },
  modules: {
  },
  getters: {
    findPost: state => id => {
      console.log(id, state.posts)
      return state.posts.find(p => p.id == id)
    }
  }
})
