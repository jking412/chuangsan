<template>
  <div id="map5" style="width: 100%;height: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'CircleInfo',
  data() {
    return {
      data: [
        { value: 20, name: '签到' },
        { value: 16, name: '投票' },
        { value: 10, name: '问卷' },
        { value: 15, name: '测验' },
        { value: 25, name: '选人' },
        { value: 34, name: '抢答' },
        { value: 33, name: '评分' },
        { value: 43, name: '分组任务活动' },
        { value: 20, name: '课堂直播' },
        { value: 25, name: '课程通知' },
        { value: 27, name: '群聊' },
        { value: 22, name: '同步课堂' },
        { value: 35, name: '课程讨论' },
        { value: 54, name: '计时器活动' },
        { value: 36, name: '资源型活动' },
        { value: 24, name: '在线课堂' },
        { value: 20, name: '其他活动' }
      ],
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      let that = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('map5'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: '课堂活动参与度',

            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            axisPointer: { //去掉移动的指示线
              type: 'none'
            },
            formatter: '{b}:<br/>{c}人次，占总人次的{d}%'
            // return arg.name + `<br>` + arg.value[0] + '/' + arg.value[1] + `<br>` + (arg.value[0] / arg.value[1] * 100).toFixed(2) + '%'

          },
          legend: {
            x: "center",
            y: "bottom",
          },

          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: that.data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              selectedMode: 'multiple',
              selectedOffset: 15
            }
          ]
        }
      )
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>
