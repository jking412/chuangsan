<template>
  <div class="bg">
    <header>
      <span style="font-size: 30px;display: flex;justify-content: space-between;align-items: center; margin-left: 10px">图拓
        <img src="../../assets/logan.png" alt="智拓" style="width: 30px; height:30px; margin-left: 4px">
      </span>
    </header>
    <section>
      <div class="up-card">

        <div class="bScDLr" v-for="(item, index) in options" :key="index">
          <div class="line-name">{{item.name}}</div>
          <div class="line-content">
            <div class="buttons">
              <button class="box-in box-out"
              v-for="(item, index) in item.children" :key="index"
              :class="item.isSelected ?'Active' : '' "
              @click="TabClick(index,item)"
              tabindex="0" type="button"><span class="jss259">
                {{item.name}}</span>
              </button>
            </div>
          </div>
        </div>

        <!-- <div class="bScDLr">
          <div class="line-name">常用</div>
          <div class="line-content">
            <div class="buttons">

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                折线图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                柱状图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                饼图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                散点图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                关系图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                树图类</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                其他</span>
              </button>

            </div>
          </div>
        </div>

        <div class="bScDLr">
          <div class="line-name">图类</div>
          <div class="line-content">
            <div class="buttons">

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                统计图</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                示意图</span>
              </button>

            </div>
          </div>
        </div>

        <div class="bScDLr">
          <div class="line-name">功能</div>
          <div class="line-content">
            <div class="buttons">

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                比较</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                组成</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                分布</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                关系</span>
              </button>

              <button class="box-in box-out" tabindex="0" type="button"><span class="jss259">
                趋势</span>
              </button>

            </div>
          </div>
        </div> -->
      </div>

      <div class="down-card">
        <div class="courses">
          <div class="course" v-for="item in courses" :key="item.index" @click="enter">
            <div class="course-img">
              <img :src="item.img" alt="">
            </div>
            <div class="describe">中国地质大学</div>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <span>关于我们</span> | <span>隐私声明和Cookie</span> | <span>法律声明</span> | <span>广告</span> | <span>帮助反馈</span>
    </footer>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name: 'home',
  data() {
    return {
      courses: [
        {
          index: 0,
          name: '水力学',
          time: '2022-3-1 ~ 2022-8-30',
          img: require('../../assets/img13.png'),
        },
        {
          index: 1,
          name: '流体力学基础',
          time: '2022-3-3 ~ 2022-8-27',
          img: require('../../assets/img14.png'),
        },
        {
          index: 2,
          name: '工程力学基础',
          time: '2022-3-2 ~ 2022-8-21',
          img: require('../../assets/img15.png'),
        },
        {
          index: 3,
          name: '水力学实验方法',
          time: '2022-3-4 ~ 2022-8-26',
          img: require('../../assets/img16.png'),
        },
        {
          index: 4,
          name: '工程水力学',
          time: '2022-3-2 ~ 2022-8-29',
          img: require('../../assets/img17.png'),
        },
        {
          index: 5,
          name: '水利工程与水利规划',
          time: '2022-3-3 ~ 2022-8-27',
          img: require('../../assets/img18.png'),
        },
      ],
      choose: [],
      options: [
        {
          name: '常用',
          children: [
            { name: '折线图类', isSelected: false },
            { name: '柱状图类', isSelected: false },
            { name: '饼图类', isSelected: false },
            { name: '散点图类', isSelected: false },
            { name: '关系图类', isSelected: false },
            { name: '书图类', isSelected: false },
            { name: '其它', isSelected: false },
          ]
        },
        {
          name: '图类',
          children: [
            { name: '统计图表', isSelected: false },
            { name: '示意图', isSelected: false },
          ]
        },
        {
          name: '功能',
          children: [
            { name: '比较', isSelected: false },
            { name: '组成', isSelected: false },
            { name: '关系', isSelected: false },
            { name: '分布', isSelected: false },
            { name: '趋势', isSelected: false },
          ]
        }
      ]
    }
  },
    beforeDestroy() {
      sessionStorage.setItem('choose', JSON.stringify(this.choose));
      sessionStorage.setItem('options', JSON.stringify(this.options));
    },
    mounted() {
      if (sessionStorage.getItem('choose')) {
        this.choose = JSON.parse(sessionStorage.getItem('choose'));
      }
      if (sessionStorage.getItem('options')) {
        this.options = JSON.parse(sessionStorage.getItem('options'));
      }
    },
  methods: {
    enter() {
      this.$router.push({ path: "/diagram" });
    },
    TabClick(index, item) {
      item.isSelected = !item.isSelected;
      console.log(item.name);
      if(item.isSelected) {
        this.choose.push(item.name);
      } else {
        for (let i = 0; i < this.choose.length; i++) {
          if (this.choose[i] === item.name) {
              this.choose.splice(i, 1);
              break;
          }
        }
      }
      sessionStorage.setItem('choose', JSON.stringify(this.choose));
      sessionStorage.setItem('options', JSON.stringify(this.options));
    }
  },
}
</script>

<style lang="scss" scoped>
.bScDLr{
    display: flex;
    min-height: 60px;
    border-bottom: 1px solid rgb(230, 230, 230);
}

.bScDLr .line-name {
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  background: rgb(246, 246, 246);
  min-width: 140px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  border-right: 1px solid rgb(230, 230, 230);
}

.bScDLr .line-content {
    -webkit-box-flex: 1;
    flex-grow: 1;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 60px;
}

.bScDLr .line-content .buttons {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0px 0px;
}

.bScDLr .line-content .buttons button {
    font-weight: normal;
    width: 140px;
    margin: 0px 8px 8px;
}

.bScDLr .line-content .buttons button:hover {
  background-color: #f8f8f8;
}

.box-out {
    color: rgba(0, 0, 0, 0.87);
    padding: 8px 16px;
    font-size: 0.875rem;
    min-width: 64px;
    box-sizing: border-box;
    min-height: 36px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 500;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    border-radius: 4px;
    text-transform: uppercase;
}

.box-in {
    color: inherit;
    border: 0;
    margin: 0;
    cursor: pointer;
    display: inline-flex;
    outline: none;
    padding: 0;
    position: relative;
    align-items: center;
    user-select: none;
    border-radius: 0;
    vertical-align: middle;
    justify-content: center;
    text-decoration: none;
    background-color: transparent;
    -webkit-tap-highlight-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.23);
}
.Active {
  background-color: #f1f1f1;
}

@keyframes rote {
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
.bg {
  width: 100%;
  background-color: #fff;
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
.avatar-wrapper {
  position: relative;
  padding-top: 8px;
  color: #8c9db6;
  .svg {
    width: 28px;
    height: 28px;
    &:hover {
      animation: rote 2.5s linear infinite;
      cursor: pointer;
      color: #409EFF;
    }
  }
}

.title {
  margin-top: 40px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
.title .icon {
  width: 200px;
  height: 100px;
}
.title .search {
  width: 200px;
  height: 100px;
}
section {
  margin-top: 40px;
  transform: translateX();
  width: 80%;
}

section .up-card {
  width: 100%;
  border: 1px solid rgb(230, 230, 230);
  border-bottom: 0px;
}
section .down-card {
  width: 100%;
  display: flex;
  margin: 40px 0px;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;

}
// section .down-card .Tools {
//   width: 100%;
//   height: 8vh;
//   line-height: 8vh;
//   padding: 0px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// }
section .down-card .courses {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  // overflow-y: scroll;
}
section .down-card .courses .course {
  width: 19%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 8px 0px;
  margin-bottom: 20px;
}
section .down-card .courses .course:hover .course-img img{
  scale: 1.2;
}
section .down-card .courses .course:hover .describe {
  color: #409EFF;
}
section .down-card .courses .course .course-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
}
section .down-card .courses .course .course-img img {
  width: 100%;
  height: 100%;
}
section .down-card .courses .course .describe {
  background: rgb(246, 246, 246);
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  color: rgb(74, 74, 74);
  text-decoration: none;
}

.search-box {
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
    transition: 0.6s;
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
    transition: 0.6s;
    background-color: #fff;
}
.search-box:hover .search-txt {
    width: 200px;
    padding: 0 12px;
}
.search-box:hover .search-btn {
    background-color: #fff;
    animation: rotate 0.4s linear;
}
.search-txt:focus {
    width: 200px;
    padding: 0 12px;
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
