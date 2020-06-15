<template>
  <div>
    <Navbar />
    <el-row v-loading="loading">
      <el-col :span="12" :offset="3">
        <div>
          <el-avatar :size="120" :src="user.avatar_url"> </el-avatar>
        </div>
        <h2>{{ user.login }}</h2>
        <p v-if="user.name">Full Name: {{ user.name }}</p>
        <p v-if="user.email">Email: {{ user.email }}</p>
        <p v-if="user.bio">Bio: {{ user.bio }}</p>
        <p>Repositories: {{ user.public_repos }}</p>
        <p>Gists: {{ user.public_gists }}</p>
        <p>Followers: {{ user.followers }}</p>
        <p>Following: {{ user.following }}</p>
        <p v-if="user.company">Company: {{ user.company }}</p>
        <p v-if="user.blog">
          Website: <a :href="user.blog" target="_blank">{{ user.blog }}</a>
        </p>
        <p v-if="user.location">Location: {{ user.location }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapGetters("users", ["user", "error", "loading"]),
  },
  methods: {
    ...mapActions({
      getUser: "users/fetchUser",
    }),
  },
  created() {
    this.getUser(this.$route.params.username);
  },
};
</script>
