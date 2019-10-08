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
    createPost({ commit, state }, post) {
      const postId =
        'greatPost' +
        Math.random()
          .toString()
          .replace('.', '');
      post['.key'] = postId;

      post.publishedAt = Math.floor(Date.now() / 1000);
      post.userId = state.authId;
      commit('setPost', { post, postId });
      commit('appendPostIdToThread', {
        postId,
        threadId: post.threadId
      });
      commit('appendPostIdToUser', { post, userId: post.userId });
    },
    updateUser({ commit }, user) {
      commit('setUser', { userId: user['.key'], user });
    }
  },

  mutations: {
    setPost(state, { post, postId }) {
      Vue.set(state.posts, postId, post);
    },

    setUser(state, { userId, user }) {
      Vue.set(state.users, userId, user);
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
