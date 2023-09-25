<template>
  <div class="bg">
    <header>
      <span style="font-size: 30px;display: flex;justify-content: space-between;align-items: center; margin-left: 10px">图拓
        <img src="../../assets/logan.png" alt="智拓" style="width: 30px; height:30px; margin-left: 4px">
      </span>
      <!-- <div class="avatar-wrapper" @click="logout">
        <svg-icon icon-class="set" class="svg" />
      </div> -->
    </header>
    <chart1 v-if="index"></chart1>
    <chart2 v-if="index"></chart2>
    <footer>
      <span>关于我们</span> | <span>隐私声明和Cookie</span> | <span>法律声明</span> | <span>广告</span> | <span>帮助反馈</span>
    </footer>
  </div>
</template>
<script>


import chart1 from './atlas/Maps/sankeyDiagram.vue'
import chart2 from './atlas/Maps/chordDiagram.vue'
export default {
  name: 'Dashboard',
  data() {
    return {

    }
  },
  methods: {

  },

  components: {
    chart1,
    chart2
  }
}
</script>



<style lang="scss" scoped>
.bg {
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #f5f5f5;
  padding: 0px 20px;
  color: #2f313d;
  display: flex;
  justify-content: space-between;
}

footer {
  width: 100%;
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  color: #888888;
  border-top: 2px solid #f3f3f3;
}
footer span:hover {
  cursor: pointer;
  color: #409EFF;
}
</style>
