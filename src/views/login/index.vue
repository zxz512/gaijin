<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 绘制登录form表单 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
        </el-form-item>
        <el-form-item>
          <!-- 复选框，单个复选框直接设置v-model即可，接收true/false的信息，表示是否选中 -->
          <el-checkbox v-model="loginForm.xieyi"></el-checkbox>
          <span>我已阅读并同意
            <a href="#">用户协议</a>和
            <a href="#">隐私条款</a>
          </span>
        </el-form-item>
        <el-form-item>
          <!-- 登录按钮 -->
          <el-button type="primary" style="width:100%;" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { apilogin } from '@/api/login.js'

export default {

  data () {
    var xieyiTest = function (rule, value, callback) {
    // rule:校验规则，一般不用
    // value:当前被校验的信息
    // callback：回调函数，校验成功或失败都需要执行
    // if (value) {
    //   callback()
    // } else {
    //   return callback(new Error('请无条件遵守规矩'))
    // }

      value ? callback() : callback(new Error('请无条件遵守规矩'))
    }
    return {
      loginForm: {
        mobile: '17732550596', // 手机号码
        code: '246810', // 验证码
        xieyi: true // 协议复选框
      },
      loginFormRules: {
        mobile: [
          { required: true, message: '手机号码必填' },
          { pattern: /^1[35789]\d{9}$/, message: '手机号码格式不对' }
        ],
        code: [
          { required: true, message: '验证码必填' }
        ],
        xieyi: [{ validator: xieyiTest }]
      }
    }
  },
  methods: {
    async login () {
    //   const valid = await this.$refs.loginFormRef.validate()
    //   if (!valid) {
    //     // 校验失败，停止后续代码执行
    //     return false
    //   }

      try {
        const result = await apilogin(this.loginForm)
        console.log(result)

        this.$store.commit('xiugai', result)

        this.$router.push({ name: 'home' })
      } catch (err) {
        this.$message.error('手机号码或验证码错误:' + err)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  height:100%;
  background-color: gray;
  display:flex;
  justify-content: center;
  align-items: center;
  background-image: url('./1.jpg');
  background-size: cover;

  .login-box{
    width:410px;
    height:340px;
    background-color: #fff;
     background: rgba(231, 231, 231, 0.3);/*盒子背景透明*/
    display: flex;
    justify-content: center;
    align-items: center;
    .el-form {
      width: 75%;
    }
  }
}
</style>
