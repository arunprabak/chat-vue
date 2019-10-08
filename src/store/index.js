import Vue from 'vue';
import Vuex from 'vuex';
import sourceData from '@/data.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser(state) {
      return state.users[state.authId];
    }
  },
  actions: {
    createPost(context, post) {
      const postId =
        'greatPost' +
        Math.random()
          .toString()
          .replace('.', '');
      post['.key'] = postId;
      context.commit('setPost', { post, postId });
      // Adding the post id to thread
      context.commit('appendPostIdToThread', {
        postId,
        threadId: post.threadId
      });
      // Adding the post id to user
      context.commit('appendPostIdToUser', { post, userId: post.userId });
    }
  },
  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },
    appendPostIdToThread(state, { postId, threadId }) {
      const thread = state.threads[threadId];
      Vue.set(thread.posts, postId, postId);
    },
    appendPostIdToUser(state, { postId, userId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    }
  }
});
