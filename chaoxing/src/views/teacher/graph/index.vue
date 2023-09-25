<template>
  <div class="form-container">
    <div class="neo4j-card">
      <div class="left-card">
        <!-- <div class="select-card">
          <div class="search-box">
            <a class="search-btn">
              <svg-icon icon-class="search"></svg-icon>
            </a>
            <input type="text" class="search-txt" placeholder="搜索" @keyup.enter="search()" />
          </div>
        </div> -->
        <svg-icon icon-class="big" class="big" @click="fullScreen()" />
        <div class="items-card" ref="full">
          <chart1></chart1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chart1 from './Maps/test.vue'
export default {
  data() {
    return {

    }
  },
  methods: {
    fullScreen() {
      let el = this.$refs.full
      let screen = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen
      let wscript = null
      if (typeof screen != "undefined" && screen) {
        screen.call(el);
        return;
      }
      if (typeof window.ActiveXObject != "undefined") {
        wscript = new ActiveXObject("WScript.Shell");
        if (wscript) {
          wscript.SendKeys("{F11}");
        }
      }
    },
  },
  components: {
    chart1,
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  margin: 30px;
}
.form-container .neo4j-card {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}
.form-container .neo4j-card .left-card {
  width: 100%;
  height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.form-container .neo4j-card .left-card .select-card {
  position: relative;
  width: 100%;
  height: 50px;
  background-color: #f2f6ff;
  // background-color: #fff;
  border-radius: 20px;
}
.form-container .neo4j-card .left-card .items-card {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
}
.form-container .neo4j-card .left-card .big {
  position: absolute;
  bottom: 3vh;
  left: 3vh;
  font-size: 32px;
  color: #8a8a8a;
  cursor: pointer;
  z-index: 1;
}
.form-container .neo4j-card .left-card .big:hover {
  color: #3481F5;
}

.search-box {
    position: absolute;
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
    font-size: 24px;
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
</style>

