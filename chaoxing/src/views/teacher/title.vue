<template>
  <div class="title">
    <div>
      <div class="search-box">
        <a class="search-btn">
          <svg-icon icon-class="clazz" style="width: 24px; height: 24px"></svg-icon>
        </a>
        <input type="text" class="search-txt" placeholder="搜索" />
      </div>
    </div>
    <div class="con-middle">教学数据分析平台</div>
    <div>
      <div class="avatar-wrapper" @click="logout">
        <svg-icon icon-class="set" class="svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titler',
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  }
}
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 60px;
  background-color: #214a82;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.search-box {
  top: 5px;
  left: 10px;
  background-color: white;
  box-shadow: 0 2px 25px 0 rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 5px 5px 5px 5px;
  border-radius: 40px;
  display: flex;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  padding: 0;
  color: #222;
  font-size: 16px;
  line-height: 40px;
  width: 0;
  transition: 0.4s;
}
.search-btn {
  color: #888888;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
}
.search-box:hover .search-txt {
  width: 250px;
  padding: 0 12px;
}
.search-box:hover .search-btn {
  background-color: #fff;
  animation: rotate 0.4s linear;
}
.search-txt:focus {
  width: 250px;
  padding: 0 12px;
}

@keyframes rotate {
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
}
.con-middle {
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.avatar-wrapper {
  color: #8c9db6;
  .svg {
    width: 30px;
    height: 30px;
    &:hover {
      color: #409EFF ;
      animation: rote 2.5s linear infinite;
      cursor: pointer;
    }
    }
  }
@keyframes rote{
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
