<template>
  <div id="map3" style="width: 100%;height:100%;"></div>
</template>
<!--
<script src="./theme/westeros"></script> -->
<script>
import * as echarts from 'echarts'
export default {
  name: 'Aosa',
  data() {
    return {

      timer: 0,
      option: 0,
      myChart: 0,
      seriesData: [
        [
          28, 26, 27, 29, 28, 24, 24, 23
        ],
        [
          1, 3, 2, 0, 1, 5, 5, 6
        ],
        [97, 89, 93, 100, 97, 83, 83, 79]
      ],
      datax: 0,
      dataxAxis: [1, 2, 3, 4, 5, 6, 7, 8]
    }
  },
  mounted() {
    this.drawLine()
  },

  methods: {

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let that = this
      this.myChart = echarts.init(document.getElementById('map3'))
      that.datax = that.seriesData
      that.dataxAxis = [1, 2, 3, 4, 5, 6, 7, 8]
      let data = that.datax

      // 绘制图表
      this.option = {
        title: {
          text: '作业完成情况',
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
          data: ['已完成人数', '未完成人数', '完成率'],
          left: 'center',
          top: 'bottom',
          textStyle: {
            color: '#5CB1C1',
          }
        },
        dataZoom: [
          {
            type: "inside",
            xAxisIndex: [0],
            show: true,
            startValue: 0, // 从头开始
            endValue: 3, // 一次性展示几个
          },
        ],

        xAxis: [
          {
            type: 'category',
            name: '作业序号',
            data: that.dataxAxis,
            axisPointer: {
              type: 'shadow',
            },

            axisLabel: {
              interval: 0,//代表显示所有x轴标签显示
            },
            nameLocation: "middle",
            axisLine: {
              symbol: ['none', 'arrow'],
              symbolSize: [6, 6],
              symbolOffset: [0, 5],
              lineStyle: {
                color: '#979797'
              }
            },
          }
        ],
        yAxis: [
          {
            type: 'value',
            boundaryGap: [0, 0.01],
            name: '人数',
            min: 0,
            max: 30,
            interval: 5,
            axisLabel: {
              formatter: '{value} '
            },
            axisLine: {
              show: true,
              symbol: ['none', 'arrow'],
              symbolSize: [6, 6],
              symbolOffset: [0, 5],
              lineStyle: {
                color: '#979797'
              }
            },

          },
          {
            type: 'value',
            name: '完成率',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value}%'
            },
            axisLine: {

              lineStyle: {
                color: '#979797'
              }
            },
            splitLine: { //网格线
              show: false
            }
          }
        ],

        series: [
          {
            name: '已完成人数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
            },

            data: data[0],
            barWidth: 20,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#f83600' // 0% 处的颜色
                },
                {
                  offset: 1, color: '#f9d423' // 100% 处的颜色
                }]
              },
            },
            label: {
              show: false,
              color: "black"
            },
          },
          {
            name: '未完成人数',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
            },

            data: data[1],
            barWidth: 20,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: '#ef3b2c' // 0% 处的颜色
                },
                {
                  offset: 0.5, color: '#fb6a4b' // 40% 处的颜色
                }, {
                  offset: 1, color: '#fc9173' // 100% 处的颜色
                }],
              },
              // color: "#bf232a"
            },
          },
          {
            name: '完成率',
            type: 'line',
            color: '#73deff',
            showSymbol: false,
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value + ' %';
              }
            },
            data: data[2],
            barWidth: 40
          }
        ]
      };
      this.timer = setInterval(function () {
        // 每次向左滑动一个，最后一个从头开始。
        if (that.datax[0][0] == that.seriesData[0][that.seriesData[0].length]) {
          that.datax = that.seriesData
        } else {
          for (let i = 0; i < that.datax.length; i++) {
            let tem1 = that.datax[i].shift(0, 1);
            that.datax[i].push(tem1);
          }
          let tem2 = that.dataxAxis.shift(0, 1);
          that.dataxAxis.push(tem2);
        }
        that.myChart.setOption(that.option);
      }, 1500);
      that.myChart.setOption(this.option)

      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    }
  }
}

</script>
