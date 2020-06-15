/* eslint-disable no-unused-vars */

import axios from "axios";

const state = {
  users: [],
  error: "",
  user: {},
  loading: false,
};

const getters = {
  users: (state) => {
    return state.users;
  },
  user: (state) => {
    return state.user;
  },
  error: (state) => {
    return state.error;
  },
  loading: (state) => {
    return state.loading;
  },
};

const actions = {
  async fetchUsers({ commit }) {
    commit("setLoading", true);
    commit("setError", "");
    try {
      const response = await axios.get("https://api.github.com/users");
      commit("setUsers", response.data.slice(0, 20));
    } catch (e) {
      commit(
        "setError",
        "Could not get users, please check your connection and try again"
      );
    } finally {
      commit("setLoading", false);
    }
  },
  async fetchUser({ commit }, username) {
    commit("setLoading", true);
    commit("setError", "");
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      commit("setUser", response.data);
    } catch (e) {
      commit(
        "setError",
        e?.response?.status === 404
          ? "User not found"
          : "Could not get user, please check your connection and try again"
      );
    } finally {
      commit("setLoading", false);
    }
  },
};

const mutations = {
  setLoading(state, value) {
    state.loading = value;
  },
  setUsers(state, value) {
    state.users = value;
  },
  setUser(state, value) {
    state.user = value;
  },
  setError(state, value) {
    state.Error = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
