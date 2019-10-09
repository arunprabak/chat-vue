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
      return Promise.resolve(state.posts[postId]);
    },

    createThread({ commit, state, dispatch }, { title, text, forumId }) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        const threadId =
          'greatThread' +
          Math.random()
            .toString()
            .replace('.', '');

        const userId = state.authId;
        const publishedAt = Math.floor(Date.now() / 1000);

        const thread = {
          '.key': threadId,
          title,
          forumId,
          publishedAt,
          userId
        };
        commit('setThread', { threadId, thread });
        dispatch('createPost', { text, threadId }).then(post => {
          commit('setThread', {
            threadId,
            thread: { ...thread, firstPostId: post['.key'] }
          });
        });
        commit('appendThreadIdToForum', { forumId, threadId });
        commit('appendThreadIdToUser', { userId, threadId });
        resolve(state.threads[threadId]);
      });
    },

    updateThread({ commit, state }, { id, title, text }) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        const thread = state.threads[id];
        const post = state.posts[thread.firstPostId];

        const newThread = { ...thread, title };
        const newPost = { ...post, text };
        commit('setThread', { thread: newThread, threadId: id });
        commit('setPost', { post: newPost, postId: thread.firstPostId });

        resolve(newThread);
      });
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

    setThread(state, { thread, threadId }) {
      Vue.set(state.threads, threadId, thread);
    },

    appendPostIdToThread(state, { postId, threadId }) {
      const thread = state.threads[threadId];
      if (!thread.posts) {
        Vue.set(thread, 'posts', {});
      }

      Vue.set(thread.posts, postId, postId);
    },

    appendPostIdToUser(state, { postId, userId }) {
      const user = state.users[userId];
      Vue.set(user.posts, postId, postId);
    },

    appendThreadIdToForum(state, { forumId, threadId }) {
      const forum = state.forums[forumId];
      if (!forum.threads) {
        Vue.set(forum, 'threads', {});
      }
      Vue.set(forum.threads, threadId, threadId);
    },

    appendThreadIdToUser(state, { userId, threadId }) {
      const user = state.users[userId];
      if (!user.threads) {
        Vue.set(user, 'threads', {});
      }
      Vue.set(user.threads, threadId, threadId);
    }
  }
});
