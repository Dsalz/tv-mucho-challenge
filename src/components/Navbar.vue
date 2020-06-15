<template>
  <el-menu
    style="margin: 0 0 50px"
    :default-active="activeIndex"
    mode="horizontal"
  >
    <el-menu-item index="1">
      <el-button type="text" @click="() => $router.push('/')">Home</el-button>
    </el-menu-item>
    <el-menu-item index="2">
      <el-button type="text" @click="() => $router.push('/login')"
        >Login</el-button
      ></el-menu-item
    >
    <el-menu-item index="3">
      <el-button type="text" @click="() => $router.push('/users/list')"
        >Users</el-button
      ></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  props: {
    activeIndex: {
      type: String,
      default: "0",
    },
  },
};
</script>
