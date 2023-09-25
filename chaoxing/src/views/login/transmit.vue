<template>
  <div class="bg">
    <header>
      <span style="font-size: 22px;display: flex;justify-content: space-between;align-items: center;">智拓
        <img src="../../assets/logan.png" alt="智拓" style="width: 22px; height:22px; margin-left: 4px">
      </span>
      <div class="avatar-wrapper" @click="logout">
        <svg-icon icon-class="set" class="svg" />
      </div>
    </header>
    <!-- <div class="title">
      <div class="icon"></div>
      <div class="search"></div>
    </div> -->
    <section>
      <div class="left-card">
        <div class="people">
          <div :class="role === '学生' ? 'imgS': 'imgT'"></div>
          <div style="font-size: 18px; margin-top:4px">{{person.name}}</div>
          <div style="font-size: 14px;color: #a8a8b3;">{{role}}</div>
        </div>
        <div class="select">
          <div class="clazz">
            <svg-icon icon-class="course" style="width: 24px;height: 24px;margin-right: 20px"/>课程
          </div>
        </div>
        <div class="logout" @click="logout">
          <svg-icon icon-class="logout" style="width: 24px;height: 24px;margin-right: 20px" />
          退出
        </div>
      </div>
      <div class="right-card">
        <div class="Tools">
          <el-select v-model="year" placeholder="请选择学期">
            <el-option
              v-for="(item, index) in years"
              :key="item.id"
              :label="item.name"
              :value="index"
              @click.native="change(index)">
            </el-option>
          </el-select>
          <div class="select-card">
            <div class="search-box">
              <a class="search-btn">
                <svg-icon icon-class="search"></svg-icon>
              </a>
              <input type="text" class="search-txt" placeholder="搜索" @keyup.enter="search()" />
            </div>
          </div>
        </div>
        <div class="courses">
          <div class="course" v-for="item in courses" :key="item.index" @click="enter">
            <div class="course-img">
              <img :src="item.img" alt="">
            </div>
            <h4>{{item.name}}</h4>
            <div class="describe">
              <p>中国地质大学</p>
              <p>授课时间: {{item.time}}</p>
              <p>班级: 51498365</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import store from '../../store'
export default {
  name: 'transmit',
  data() {
    return {
      person: {
        name: '',
      },
      role: store.getters.role === 'student' ? '学生' : '老师',
      Scourses: [
        {
          index: 0,
          name: '水力学',
          time: '2022-3-1 ~ 2022-8-30',
          img: require('../../assets/img1.png'),
        },
        {
          index: 1,
          name: '岩溶水文地质学',
          time: '2022-3-2 ~ 2022-8-26',
          img: require('../../assets/img2.png'),
        },
        {
          index: 2,
          name: '理论力学A',
          time: '2022-3-5 ~ 2022-8-30',
          img: require('../../assets/img3.png'),
        },
        {
          index: 3,
          name: '地质信息技术导论',
          time: '2022-3-3 ~ 2022-8-27',
          img: require('../../assets/img4.png'),
        },
        {
          index: 4,
          name: '工程水力学',
          time: '2022-3-4 ~ 2022-8-16',
          img: require('../../assets/img5.png'),
        },
        {
          index: 5,
          name: '材料力学',
          time: '2022-3-3 ~ 2022-8-23',
          img: require('../../assets/img6.png'),
        },
        {
          index: 6,
          name: '高等数学B2',
          time: '2022-3-7 ~ 2022-8-12',
          img: require('../../assets/img7.png'),
        },
        {
          index: 7,
          name: '统计学与数据分析',
          time: '2022-3-9 ~ 2022-8-21',
          img: require('../../assets/img8.png'),
        },
        {
          index: 8,
          name: '智能传感与检测技术',
          time: '2022-3-5 ~ 2022-8-29',
          img: require('../../assets/img9.png'),
        },
        {
          index: 9,
          name: '实用翻译',
          time: '2022-3-6 ~ 2022-8-30',
          img: require('../../assets/img10.png'),
        },
        {
          index: 10,
          name: '线性代数',
          time: '2022-3-2 ~ 2022-8-31',
          img: require('../../assets/img11.png'),
        },
        {
          index: 11,
          name: '大学英语3',
          time: '2022-3-2 ~ 2022-8-30',
          img: require('../../assets/img12.png'),
        },
      ],
      Tcourses: [
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
      courses: [],
      year: '2022-2023-1学期',
      years: [
        {
          id: 'adc1',
          name: '2022-2023-1学期',
        },
        {
          id: 'abc2',
          name: '2022-2023-2学期',
        },
        {
          id: 'abc3',
          name: '2021-2022-1学期',
        },
        {
          id: 'abc4',
          name: '2021-2022-2学期',
        },
      ]
    }
  },
  methods: {
    enter() {
      this.$router.push({ path: "/" });
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
  mounted() {
    this.role === '学生' ? this.person.name = '王倩' : this.person.name = '王涛';
    this.role === '学生' ? this.courses = this.Scourses : this.courses = this.Tcourses;
  }
}
</script>

<style lang="scss" scoped>
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
  height: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
}
header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
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
  width: 1200px;
  display: flex;
  justify-content: space-between;
}
section .left-card {
  position: relative;
  width: 20%;
  height: 100%;
  border-radius: 20px;
  // overflow: hidden;
  background-color: #fff;
}

section .left-card .people {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f5f5f5;
}
section .left-card .people .imgS {
  width: 110px;
  height: 110px;
  background: url(../../assets/default-user.jpg) no-repeat;
  background-size: contain;
  border-radius: 50%;
}
section .left-card .people .imgT {
  width: 110px;
  height: 110px;
  background: url(../../assets/teacher.png) no-repeat;
  background-size: contain;
  border-radius: 50%;
}
section .left-card .select {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section .left-card .select .clazz {
  width: 100%;
  height: 34px;
  line-height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #409EFF;
  font-size: 18px;
}
section .left-card .select .clazz:hover {
  background-color: #ebebeb;
}
section .left-card .logout {
  position: absolute;
  bottom: 6vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
section .left-card .logout:hover {
  color: #409EFF;
  cursor: pointer;
}
section .right-card {
  width: 79%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  background-color: #fff;
  border-radius: 10px;

}
section .right-card .Tools {
  width: 100%;
  height: 8vh;
  line-height: 8vh;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
section .right-card .courses {
  padding: 0px 20px 20px;
  width: 100%;
  height: 82vh;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
  overflow-y: scroll;
}
section .right-card .courses .course {
  width: 30%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
}
section .right-card .courses .course:hover .course-img img{
  scale: 1.2;
}
section .right-card .courses .course:hover h4 {
  color: #409EFF;
}
section .right-card .courses .course .course-img {
  width: 100%;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
}
section .right-card .courses .course .course-img img {
  width: 100%;
  height: 100%;
}
section .right-card .courses .course .describe {
  font-size: 12px;
  color: #a8a8b3;
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
</style>
