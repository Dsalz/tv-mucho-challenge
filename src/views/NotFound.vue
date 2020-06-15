<template>
  <div>
    <Navbar />
    <el-col :span="22" :offset="1">
      <p>
        This Page does not exist, please use one of the links in the navbar to
        go to a page
      </p>
    </el-col>
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>
