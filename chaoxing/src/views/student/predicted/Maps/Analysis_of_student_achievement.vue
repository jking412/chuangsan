
<template>
  <div id="main1" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Aosa',
  data() {
    return {
      data: [
        ['流体力学基础', '工程力学基础', '水力学实验方法', '工程水力学', '水利工程', '英语精读', '英语听说', '水力学'],
        [85, 62, 87, 74, 54, 65, 78, 72],
        [10, 35, 8, 18, 49, 27, 16, 23]
      ]
    }
  },
  props: ['reply'],
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: '学情预警',
            left: 'center'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              crossStyle: {
                color: '#999'
              }
            }
          },
          legend: {
            data: ['综合成绩预测', '挂科率'],
            left: 'center',
            top: 'bottom',
          },

          xAxis: [
            {
              type: 'category',
              data: this.data[0],
              axisPointer: {
                type: 'shadow',
              },

              axisLabel: {
                interval: 0,//代表显示所有x轴标签显示
              }

            }
          ],
          yAxis: [
            {
              type: 'value',
              name: '综合成绩预测',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                formatter: '{value} '
              }
            },
            {
              type: 'value',
              name: '挂科率',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                formatter: '{value}%'
              }
            }
          ],
          series: [
            {
              name: '综合成绩预测',
              type: 'bar',
              tooltip: {
                valueFormatter: function (value) {
                  return value;
                }
              },
              data: this.data[1],
              barWidth: 40,
              barWidth: 30,
              itemStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: '#4890ff' }, // 设置颜色渐变
                    { offset: 1, color: '#00b6ff' }
                  ]
                },
              },
            },
            {
              name: '挂科率',
              type: 'line',
              color: '#8ff58b',
              yAxisIndex: 1,
              tooltip: {
                valueFormatter: function (value) {
                  return value + ' %';
                }
              },
              data: this.data[2],
              barWidth: 40
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



