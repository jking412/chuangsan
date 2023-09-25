<template>
  <div class="dashboard-container">
    <div class="banner-up">
      <div class="up-left">
        <div class="select">
          <el-select placeholder="水力学">
            <!-- <el-option v-for="(item, index) in subjects" :key="item.id" :label="item.name" :value="item.name"
              @click.native="log(index)">
            </el-option> -->
          </el-select>
        </div>
        <div class="chart-card">
          <chart1></chart1>
        </div>

        <div class="svg-icon1">
          <el-popover placement="top-start" :title="`当前选择的课程为水力学`" trigger="hover" :close-delay="10">
            <svg-icon icon-class="subject" slot="reference" style="font-size: 10px;" class="icon1">
            </svg-icon>
          </el-popover>
          <el-popover placement="top-start" :title="`当前选择的班级为水力学二班`" trigger="hover" :close-delay="10">
            <svg-icon icon-class="teachedclass" slot="reference" style="font-size: 10px;" class="icon2">
            </svg-icon>
          </el-popover>
        </div>
      </div>
      <div class="up-right">
        <chart2></chart2>
      </div>
    </div>

    <div class="downcard1">

      <chart3> </chart3>
    </div>

    <div class="downcard2">
      <div class="downcard2Left">

        <el-dialog title="2022-2023-1学期 考试成绩分析" :visible.sync="centerDialogVisible" width="35%" center
          style="overflow: hidden;" class="dialog">
          <span style="font-size: 20px;">
            <div style="width: 100%;">
              当前课程：水力学<br>班级数量：6个<br>当前考试第次：{{ taskpointName }} <br>
              <div style="width: 100%;height: 300px;">
                <el-table :data="tableData" stripe style="width: 100%;border-radius: 5px;" height="300px"
                  :header-cell-style="{ background: '#636ebe', color: '#b0c4f7' }">
                  <el-table-column prop="index" label="序号" />
                  <el-table-column prop="class" label="班级名" />
                  <el-table-column prop="avg" label="平均分" />
                  <el-table-column prop="max" label="最高分" />
                  <el-table-column prop="min" label="最低分" />
                </el-table>
              </div>
            </div>
          </span>
        </el-dialog>
        <chart4 @callback="callback"></chart4>
      </div>
      <div class="downcard2Right">
        <chart5></chart5>
      </div>
    </div>
  </div>
</template>

<script>
import chart1 from './Maps/arrivalCircle.vue'
import chart2 from './Maps/TaskPointCompletion.vue'
import chart3 from './Maps/Job_completion.vue'
import chart4 from './Maps/Score.vue'
import chart5 from './Maps/Class_activities.vue'
import chart6 from './Maps/passCircle.vue'
import { color } from 'echarts'
// import { arrApi, actApi, examApi, jobApi } from './api'
// import store from '../../../store'
export default {
  data() {
    return {
      tableData: [
        {
          index: '01',
          class: '水力学一班',
          avg: 60,
          max: 90,
          min: 40
        },
        {
          index: '02',
          class: '水力学二班',
          avg: 54,
          max: 84,
          min: 24
        },
        {
          index: '03',
          class: '水力学三班',
          avg: 71,
          max: 92,
          min: 61
        },
        {
          index: '04',
          class: '水力学四班',
          avg: 50,
          max: 78,
          min: 22
        },
        {
          index: '05',
          class: '水力学五班',
          avg: 65,
          max: 88,
          min: 41
        },
        {
          index: '06',
          class: '水力学六班',
          avg: 71,
          max: 98,
          min: 20
        },

      ],
      centerDialogVisible: false,
      taskpointName: '',
      flag: 0,
      taskpointContain: [{
        value1: 10,
        value2: 30,
        value3: 0.9,

      },
      {
        value1: 8,
        value2: 25,
        value3: 0.92,

      }
      ],
      // Ifo: store.getters.Info.clazzes[0],
      // subject: '',
      // class: '',
      // subjects: store.getters.Info.clazzes
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5,
    chart6
  },
  methods: {
    callback(data) {
      this.centerDialogVisible = data[0];
      this.taskpointName = data[1];
      if (this.taskpointName == 4)
        this.flag = 1
      else
        this.flag = 0
    }
  },
  mounted() {


    // this.getIfo()
    // this.getexam()
    // this.getArr()
    // this.getJob()
    // this.getAct()
  },
  // methods: {
  //   getIfo() {
  //     // console.log(this.Ifo);
  //     this.class = this.Ifo.name
  //     this.subject = this.Ifo.course.name
  //   },
  //   getArr() {
  //     console.log(this.Ifo.clazzid);
  //     arrApi(this.Ifo.clazzid).then(res => {
  //       console.log(res);
  //     }).catch(() => {
  //     });
  //   },
  //   getexam() {
  //     examApi(this.Ifo.clazzid).then(res => {
  //       console.log(res);
  //     }).catch(() => {
  //     });
  //   },
  //   getAct() {
  //     actApi(this.Ifo.clazzid).then(res => {
  //       console.log(res);
  //     }).catch(() => {
  //     });
  //   },
  //   getJob() {
  //     jobApi(this.Ifo.clazzid).then(res => {
  //       console.log(res);
  //     }).catch(() => {
  //     });
  //   },
  //   log(index) {
  //     console.log(index);
  //   }
  // }
}
</script>


<style lang="scss" scoped>
.dashboard-container {
  margin: 30px;
}

.banner-up {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.banner-up .up-left {
  width: 30%;
  height: 50vh;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 2vh;
}

.banner-up .up-left .chart-card {
  width: 100%;
  height: 70%;
  background-color: #fff;
}

.banner-up .up-left .svg-icon1 {
  width: 100%;
  height: 25%;
  background-color: #fff;
}

.banner-up .up-right {
  width: 67%;
  height: 50vh;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
}

.banner-down {
  width: 100%;
  height: 53vh;
  margin-top: 30px;

  overflow: hidden;
}

.contain {
  width: 750px;
  height: 450px;
  background-color: #fff;
}

.icon1 {
  color: #979797;
  width: 10vw;
  height: 3vw;

  transform: translate(30%, -10%);

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}

.icon2 {
  color: #979797;
  width: 10vw;
  height: 3.5vw;


  transform: translate(45%, -2%);

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}

.downcard1 {
  display: flex;
  width: 100%;
  height: 60vh;
  justify-content: space-between;
  margin-top: 30px;
  background: #fff;
  border-radius: 20px;
}

.downcard2 {
  display: flex;
  width: 100%;
  height: 50vh;
  justify-content: space-between;
  margin-top: 30px;
}

.downcard2 .downcard2Left {
  display: flex;
  width: 47.5%;
  height: 50vh;
  flex-direction: row;

  background: #fff;
  border-radius: 20px;
}

.downcard2 .downcard2Right {
  display: flex;
  width: 50.5%;
  height: 50vh;
  flex-direction: row;

  background: #fff;
  border-radius: 20px;
}
</style>
