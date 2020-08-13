<template>
  <div class="register-Style">
    <el-form :model="Form" ref="Form" :rules='FormRules' label-width="100px" class="demo-dynamic" style="text-align: left;width: 100%" :inline-message="true">
      <el-form-item
        prop="username"
        label="用户名"
      >
        <el-input type="email" size="middle" v-model="Form.username" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item
        prop="email"
        label="邮箱"
        style="margin-bottom: 0"
      >
        <el-input type="email" size="middle" v-model="Form.email" style="width: 250px"></el-input>
        {{statusMsg}}
      </el-form-item>
      <el-button round size="mini" style="margin: 5px 0px 5px 100px;" @click="getCode">获取验证码</el-button>
      <el-form-item
        prop="code"
        label="验证码"
      >
        <el-input  size="middle" v-model="Form.code" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="Form.pass" autocomplete="off" style="width: 250px"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpass">
        <el-input type="password" v-model="Form.checkpass" autocomplete="off" style="width: 250px"></el-input>
      </el-form-item>
      <el-button style="color:#222;background-image: linear-gradient(135deg,#FFD000 0,#FFBD00 100%);font-weight: bolder; margin-left: 100px" @click="sumbitRegister">同意以下协议并注册</el-button>
    </el-form>
    <a class="f1" href="https://rules-center.meituan.com/rules-detail/4" target="_blank">《美团点评用户服务协议》</a>
  </div>
</template>

<script>
  export default {
    layout: 'blank',
    name: "register",
    data() {
      return {
        Form: {
          username: '',
          email: '',
          code: '',
          pass: '',
          checkpass:''
        },
        FormRules: {
          username: [ { required: true, message: '请输入昵称', trigger: 'blur' }],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            {
              validator:  (rule, value, callback) =>{
                if (value === '') {
                  callback(new Error('请输入密码'));
                } else {
                  if (this.Form.checkpass !== '') {
                    this.$refs.Form.validateField('checkpass');
                  }
                  callback();
                }
              },
              trigger: 'blur'
            }
          ],
          checkpass: [
             { required: true, message: '请再次输入密码', trigger: 'blur' },
            {
              validator:(rule, value, callback) => {
                console.log(this)
                //debugger
                if (value === '') {
                  callback(new Error('请再次输入密码'));
                } else if (value !== this.Form.pass) {
                  callback(new Error('两次输入密码不一致!'));
                } else {
                  callback();
                }
              },
              trigger: 'blur'
            }
          ]
        },
        statusMsg: ''
      }
    },
    methods: {
      //获取邮箱验证码
      getCode() {
        const self = this;
        let namePass
        let emailPass
        // 定时器还在走
        if(self.timeid) {
          return false
        }
        //校验是否有用户名
        this.$refs['Form'].validateField('username',(valid) => {//有值表示错误
          namePass = valid
        })
        if(namePass) {
          return false
        }
        //校验是否有邮箱
        this.$refs['Form'].validateField('email',(valid) => {
          emailPass = valid
        })
        if(!namePass &&!emailPass) {
          //获取邮箱验证码
          self.$axios.post('/users/verify',
            {
              username: self.Form.username,
              email: self.Form.email
            }).then(({status,data}) => {
              if(status=== 200 &&data &&data.code === 0) {
                let count = 60;
                self.statusMsg = `验证码已发送, 剩余${count--}秒`
                //定时器走动
                self.timerid = setInterval(function () {
                  self.statusMsg = `验证码已发送, 剩余${count--}秒`
                  if(count === 0) {
                    clearInterval(self.timeid) //清空定时器
                  }
                },1000)
              } else {
                self.statusMsg = data.msg//
              }
          })
        }
        console.log('code')
      },
      //提交注册
      sumbitRegister() {
        let self = this;
        this.$refs.Form.validate( async(valid) =>{
          if(valid) {
            //没加密 发送注册信息
            const {status, data} = await self.$axios.post('/users/signup',{
              username: self.Form.username,
              password: self.Form.pass,
              email: self.Form.email,
              code: self.Form.code
            })
            if(status == 200) {
              if(data &&data.code === 0 ) {
                location.href = '/login'
              } else {
                self.error =data.msg
              }
            }else {
              self.error = `服务器出错，错误码：${status}`
            }
            setTimeout(function () {
              self.error = ''
            },1500)
          } else {
            this.$message.error('请正确输入相关信息')
          }
        })
      }
    }
  }
</script>

<style scoped>
.register-Style {
  width: 100%;
  margin: 0 auto;
  /*text-align: left;*/
}
a {
  color: #FE8C00;
  text-decoration: none;
}
.f1 {
  font-size: 13px;
  margin-left: 100px;
  margin-top: 20px;
}
</style>
