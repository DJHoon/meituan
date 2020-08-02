<template>
  <div style="width: 30%; margin: 0 auto;">
    <el-form :model="Form" :rules="FormRules" ref="Form"  label-width="100px" class="demo-dynamic" style="text-align: left;display: flex;flex-wrap: wrap" :inline-message="true">
      <el-form-item
        prop="username"
        label="用户名"
      >
        <el-input type="email" size="middle" v-model="Form.username" style="width: 250px" @keyup.enter.native="enterPWD"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="Form.password" autocomplete="off" style="width: 250px" @keyup.enter.native="enterPWD"></el-input>
      </el-form-item>
      <el-button class="btn" @click="signup">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    layout: 'loginLayout',
    name: "login",
    data() {
      return {
        Form: {
          username: '',
          password: '',
        },
        FormRules: {
          username: [{required: true, message:'用户不能为空',trigger:'blur'}],
          password: [{required: true, message:'密码不能为空',trigger:'blur'}]
        }
      }
    },
    methods: {
       signup() {
        this.$refs['Form'].validate(async valid => {
          if(valid) {
            const {data} = await this.$axios.post('/users/signin', {
              username: this.Form.username,
              password: this.Form.password
            })
            if(data.code == 1) {
              this.$router.push('/')
              this.$message.success(data.msg)
            } else {
              this.$message.error(data.msg)
            }
          }
        })
      },
       enterPWD() {
        this.signup()
       }
    }
  }
</script>

<style scoped>
.btn {
  color: #222;
  width: 250px;
  background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);
  border-width: 0;
  box-shadow: 0 2px 1px rgba(191,105,0,.15);
  background-size: 100%;
  margin-left: 100px;
}
</style>
