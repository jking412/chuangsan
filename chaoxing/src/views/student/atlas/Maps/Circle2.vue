
<template>
  <div id="app3" style="width: 100%;height: 100%;"></div>
</template>

<script>
import 'echarts-liquidfill'
import * as echarts from 'echarts'

export default {
  name: 'CircleInfo',
  data() {
    return {
      data: {
        score: '49%',
        name: '知识点掌握率'
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('app3'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: this.data.score,
            textStyle: {

              fontWeight: 'normal',
              color: '#fff',
              fontWeight: 'bold',
            },
            x: 'center',
            y: '35%'
          },
          graphic: [{
            type: 'group',
            left: 'center',
            top: '50%',
            children: [{
              type: 'text',
              z: 100,
              left: '6',
              top: 'middle',
              style: {
                fill: '#fff',
                text: this.data.name,
                font: '20px'
              }
            }]
          }],

          series: [{
            type: 'liquidFill',
            data: [0.49, 0.49, 0.49, 0.49],
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
                color: ['#fa709a'], // 0% 处的颜色
              }, {
                offset: 0,
                color: ['#fee140'], // 100% 处的颜色
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
              fontSize: 30,
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
