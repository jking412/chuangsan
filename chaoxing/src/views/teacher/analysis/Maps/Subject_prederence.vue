
<template>
  <div id="ana1" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Class',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('ana1'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: '学生对该课程偏好度',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter(e) {
            return `${e.name}的学生人数为 : ${e.data.values}`//将他动态设置 name就是名字 values是我给他新添加的真实数据
          }
        },
        legend: {
          data: ['厌倦这门课', '疲于接受这门课', '能接受这门课', '喜欢这门课', '热爱这门课',],
          left: 'center',
          top: 'bottom',
        },
        series: [
          {
            name: 'prefer',
            type: 'funnel',
            left: '10%',
            top: 60,
            bottom: 60,
            width: '80%',
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
              show: true,
              position: 'inside',
              formatter(e) {
                return `${e.data.values}`
              },
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: 'solid'
              }
            },
            itemStyle: {
              borderColor: '#fff',
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 20, name: '厌倦这门课', values: 2 },
              { value: 40, name: '疲于接受这门课', values: 2 },
              { value: 60, name: '能接受这门课', values: 20 },
              { value: 80, name: '喜欢这门课', values: 1 },
              { value: 100, name: '热爱这门课', values: 4 }
            ]
          }
        ]
      })
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>
