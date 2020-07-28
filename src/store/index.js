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
    },
    UPDATE_POST(state, updatedPost) {
      let index = state.posts.findIndex(p => p.id == updatedPost.id)
      Vue.set(state.posts, index ,updatedPost)
    },
    ADD_POST(state, newPost) {
      state.posts.push(newPost)
    }
  },
  actions: {
    async fetchPosts({commit}) {
      let response = await PostService.getPosts()
      commit('SET_POSTS', response.data)
    },
    async updatePost({commit}, editedPost) {
      let response = await PostService.update(editedPost)
      commit('UPDATE_POST', response.data)
      return response.data
    },
    async createPost({commit}, newPost) {
      let response = await PostService.create(newPost)
      commit('ADD_POST', response.data)
      return response.data;
    }
  },
  modules: {
  },
  getters: {
    findPost: state => id => {
      return state.posts.find(p => p.id == id)
    }
  }
})
