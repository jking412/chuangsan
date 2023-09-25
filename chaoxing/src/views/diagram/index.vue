<template>
  <div class="bg">
    <div class="main">
      <div class="title">
        <!-- <svg-icon icon-class="title" style="margin:0 0 0 2vw;" /> -->
        <!-- <span style="font-size: 18px; margin-left: 12px;color: #000; font-weight: 700; display: flex;justify-content: space-between;align-items: center;">智拓
          <img src="../../assets/logan.png" alt="智拓" style="width: 22px; height:22px; margin-left: 4px">
        </span> -->
      </div>
      <div style="display: flex">
        <div class="left" />
        <div class="right">
          <h1>欢迎!</h1>
          <p>与我们保持联系, 请使用用户名和密码登录
            <svg-icon icon-class="bell" class="bell" />
          </p>
          <div class="login-container">
            <el-form
              ref="loginForm"
              :model="loginForm"
              :rules="loginRules"
              class="login-form"
              auto-complete="on"
              label-position="left"
            >
              <el-form-item prop="uid">
                <span class="svg-container">
                  <svg-icon icon-class="user" />
                </span>
                <el-input
                  ref="uid"
                  v-model="loginForm.uid"
                  class="input"
                  placeholder="用户名"
                  name="uid"
                  type="text"
                  tabindex="1"
                  auto-complete="on"
                  style="inline"
                />
              </el-form-item>

              <el-form-item prop="password">
                <span class="svg-container">
                  <svg-icon icon-class="password" />
                </span>
                <el-input
                  :key="passwordType"
                  ref="password"
                  v-model="loginForm.password"
                  :type="passwordType"
                  placeholder="密码"
                  name="password"
                  tabindex="2"
                  auto-complete="on"
                  @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" style="font-size: 20px;cursor: pointer;" @click="showPwd">
                  <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
              </el-form-item>
                <el-form-item label="身份">
                  <el-radio-group v-model="loginForm.role">
                    <el-radio label="学生"></el-radio>
                    <el-radio label="老师"></el-radio>
                  </el-radio-group>
                </el-form-item>
              <el-button
                :loading="loading"
                type="primary"
                style="width:80%;margin-top:3vh; font-size: 18px"
                @click.native.prevent="handleLogin"
              >
                Login Now</el-button>
            </el-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    const validateUid = (rule, value, callback) => {
      if (value.length < 2) {
        callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 2) {
        callback(new Error('密码格式错误'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        uid: '',
        password: '',
        role: '学生'
      },
      loginRules: {
        uid: [{ required: true, trigger: 'blur', validator: validateUid }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store.dispatch("user/login", this.loginForm)
            .then(() => {
              this.$router.push({ path: "/transmit" });
              this.loading = false;
            })
            .catch(() => {
              this.loading = false;
            });
        } else {
            console.log("error submit!!");
            return false;
          }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes upAnimation
    {
        0% {
            transform: rotate(0deg);
            transition-timing-function: cubic-bezier(0.215,.61,.355,1);
        }
        10% {
            transform: rotate(-12deg);
            transition-timing-function: cubic-bezier(0.215,.61,.355,1);
        }
        20% {
            transform: rotate(12deg);
            transition-timing-function: cubic-bezier(0.215,.61,.355,1);
        }
        28% {
            transform: rotate(-10deg);
            transition-timing-function: cubic-bezier(0.215,.61,.355,1);
        }
        36% {
            transform: rotate(10deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
        42% {
            transform: rotate(-8deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
        48% {
            transform: rotate(8deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
        52% {
            transform: rotate(-4deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
        56% {
            transform: rotate(4deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
        60% {
            transform: rotate(0deg);
            transition-timing-function: cubic-bezier(0.755,.5,.855,.06);
        }
    100% {
            transform: rotate(0deg);
            transition-timing-function: cubic-bezier(0.215,.61,.355,1);
        }
    }
  .bg {
    width: 100%;
    height: 100%;
    background: url(../../assets/bg.jpg) no-repeat;
    background-size: cover;
    overflow: hidden;
  }
  .main {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 80vw;
    height: 85vh;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.5em;
    overflow: hidden;
    background-color: #fff;

    .title {
      width: 100%;
      height: 6vh;
      line-height: 6vh;
      display: flex;
      align-items: center;
      font-size: 36px;
      color: #208dec;
    }
  }
  .main .left{
    margin-left: 5%;
    width: 50%;
    height: 65vh;
    background: url(../../assets/logo.png) no-repeat;
    background-size: contain;
    overflow: hidden;
  }
  .main .right {
    width: 30%;
    height: 65vh;
    margin-left: 5%;
    margin-top: 10vh;
  }
  .main .right h1 {
    font-weight: 400;
  }
  .main .right p {
    margin-top: 2vh;
    font-weight: 400;
    font-size: 18px;
    color: #b1b1b1;
  }
  .main .right p .bell {
    width: 2em;
    height: 2em;
    animation-name: upAnimation;
    transform-origin: center top;
    animation-duration: 2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-delay: .5s;
  }
.main .right .login-container {
  margin-top: 8vh;
  .el-input {
    display: inline-block;
    height: 40px;
    width: 18vw;
    line-height: 40px;
    font-size: 18px;
  }

  .svg-container {
    font-size: 36px;
  }
}
</style>

<style lang="scss">
.login-container .el-input input{
  border: 0px;
  border-bottom: 1px solid #b1b1b1;
  border-radius: 0;
}
</style>
