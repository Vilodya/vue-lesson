import { defineStore } from "pinia";
import { useRoute } from "vue-router";
import axios from "axios";

export const usePostStore = defineStore("posts", {
  state: () => ({
    posts: [],
    post: {
      title: "",
      content: "",
    },
  }),

  getters: {
    postTitle: (state) => state.post.title,
  },

  actions: {
    getPosts() {
      axios.get("http://localhost:3000/posts").then((res) => {
        this.posts = res.data;
      });
    },

    getPost() {
      axios
        .get(`http://localhost:3000/posts/${useRoute().params.id}`)
        .then((res) => {
          this.post = res.data;
        });
    },

    storePost() {
      axios.post("http://localhost:3000/posts", this.post).then();
    },

    updatePost() {
      axios
        .patch(`http://localhost:3000/posts/${this.post.id}`, this.post)
        .then((res) => {});
    },

    deletePost(post) {
      axios.delete(`http://localhost:3000/posts/${post.id}`).then((res) => {
        this.posts = this.posts.filter((postItem) => postItem.id !== post.id);
      });
    },
  },
});
