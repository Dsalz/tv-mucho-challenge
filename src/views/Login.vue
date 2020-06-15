<template>
  <div>
    <Navbar activeIndex="2" />
    <el-row>
      <el-col :span="18" :offset="3">
        <el-form :model="form" status-icon :rules="validations" ref="form">
          <el-form-item label="Email" prop="email">
            <el-input
              type="email"
              required
              v-model.trim="form.email"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              required
              v-model="form.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="warning" @click="submitForm">Submit</el-button>
          </el-form-item>
        </el-form>
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
  data() {
    var validateEmail = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Email is required"));
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        callback(new Error("Invalid Email"));
      } else {
        callback();
      }
    };
    return {
      form: {
        email: "",
        password: "",
      },
      validations: {
        email: [{ validator: validateEmail, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          return false;
        }
      });
    },
  },
};
</script>
