<template>
  <div id="ana3" style="width: 100%;height: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-liquidfill'
export default {
  name: 'CircleInfo',
  data() {
    return {
      data: 0.92
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      let that = this
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('ana3'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: `${that.data * 100}%`,
            textStyle: {

              fontWeight: 'normal',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 30
            },
            x: 'center',
            y: '45%'
          },

          series: [{
            type: 'liquidFill',
            data: [that.data, that.data, that.data, that.data],
            radius: '70%', // 水球半径，可以是数值或百分比
            amplitude: 10, // 振幅，影响水波的高度
            color: [{
              type: 'linear',
              x: 0,
              y: 1,
              x2: 0,
              y2: 0,
              colorStops: [{
                offset: 1,
                color: '#f77062', // 0% 处的颜色
              }, {
                offset: 0,
                color: '#fe5196', // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }],
            outline: {
              show: false
            }, // 是否显示边框
            backgroundStyle: {
              color: '#e5e5e5'
            }, // 背景颜色
            label: {
              show: false,
            }
          }]
        }
      )
      window.addEventListener('resize', function () {
        myChart.resize()
      })
    }
  }
}

</script>
