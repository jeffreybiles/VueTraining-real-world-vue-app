import axios from 'axios'
    
const apiClient = axios.create({  
  baseURL: `http://localhost:3000`
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  },
  update(post){
    return apiClient.put(`/posts/${post.id}`, post)
  },
  create(post) {
    return apiClient.post(`/posts`, post)
  }
}