<template>
  <div>
    <Navbar activeIndex="1" />
    <el-row>
      <el-col :span="22" :offset="1">
        Welcome to the platform! Use one of the links in the navbar to go to a
        page
      </el-col>
    </el-row>
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
