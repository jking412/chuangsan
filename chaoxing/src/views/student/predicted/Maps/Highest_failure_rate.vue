
<template>
  <div id="exa4" style="width: 100%;height: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-liquidfill'
export default {
  name: 'CircleInfo',
  data() {
    return {
      data: 49
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('exa4'))
      // 绘制图表
      myChart.setOption(
        {
          title: {
            text: this.data + '%',
            textStyle: {
              color: '#f86a04',
              fontSize: 40
            },
            left: 'center',
            top: 'center'
          },
          angleAxis: {
            max: 100, // 满分
            clockwise: false, // 逆时针
            // 隐藏刻度线
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          radiusAxis: {
            type: 'category',
            // 隐藏刻度线
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitLine: {
              show: false
            }
          },
          polar: {
            center: ['50%', '50%'],
            radius: '140%' //图形大小
          },
          series: [
            {
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: '#e2e2e2'
              },
              data: [
                {
                  name: '挂科率',
                  value: this.data,
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                      {
                        offset: 0,
                        color: '#f83600'
                      },
                      {
                        offset: 1,
                        color: '#f9d423'
                      }
                    ])
                  }
                }
              ],
              coordinateSystem: 'polar',
              roundCap: true,
              barWidth: 25
            }
          ]
        }
      )
    }
  }
}

</script>
