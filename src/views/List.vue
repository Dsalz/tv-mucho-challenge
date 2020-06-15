<template>
  <div>
    <Navbar activeIndex="3" />
    <el-row v-loading="loading">
      <el-col :span="18" :offset="3">
        <p v-if="error && !loading">{{ error }}</p>
        <el-col
          v-for="user in users"
          :key="user.id"
          style="margin-bottom: 10px;"
        >
          <el-card>
            <span>{{ user.login }}</span>
            <el-button
              style="float: right; padding: 0;"
              type="text"
              @click="$router.push(`/user/${user.login}`)"
            >
              View Details
            </el-button>
          </el-card>
        </el-col>
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
    ...mapGetters("users", ["users", "error", "loading"]),
  },
  methods: {
    ...mapActions({
      getUsers: "users/fetchUsers",
    }),
  },
  created() {
    this.getUsers();
  },
};
</script>
