<template>
  <div id="map1" style="width: 100%;height: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-liquidfill'
export default {
  name: 'CircleInfo',
  data() {
    return {

    }
  },
  mounted() {
    // this.getArr()
    this.drawLine()
  },
  methods: {

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('map1'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: '97%',
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
                text: '到课率',
                font: '20px'
              }
            }]
          }],

          series: [{
            type: 'liquidFill',
            data: [0.97, 0.97, 0.97, 0.97],
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
                color: '#ff0844', // 0% 处的颜色
              }, {
                offset: 0,
                color: '#ffb199', // 100% 处的颜色
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
