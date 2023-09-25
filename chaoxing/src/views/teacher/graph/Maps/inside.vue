
<template>
  <div id="map31" style="width: 100%;height:100%;"></div>
</template>

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
        [30, 80, 60, 70]
      ],
      datax: 0,
      dataxAxis: ['堰流的类型及计算公式', '堰流的水力计算', '堰流及闸孔出流的概念', '闸孔出流的水力计算']
    }
  },
  mounted() {
    this.drawLine()
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },

  methods: {

    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let that = this
      this.myChart = echarts.init(document.getElementById('map31'))
      that.datax = that.seriesData
      let data = that.datax

      // 绘制图表
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        dataZoom: [
          {
            type: "inside",
            xAxisIndex: [0],
            show: true,
            startValue: 0, // 从头开始
            endValue: 1, // 一次性展示几个
          },
        ],

        xAxis: [
          {
            type: 'category',
            data: that.dataxAxis,
            axisPointer: {
              type: 'shadow',
            },

            axisLabel: {
              interval: 0,//代表显示所有x轴标签显示
              formatter: function (value) {
                if (value.length > 6) {
                  return `${value.slice(0, 3)}...`;
                }
                return value
              }
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
            name: '掌握率',
            min: 0,
            max: 90,
            interval: 20,
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
          }
        ],

        series: [

          {
            name: '掌握率',
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
        ]
      };
      this.timer = setInterval(function () {
        // 每次向左滑动一个，最后一个从头开始。
        if (that.datax[0][0] == that.seriesData[0][that.seriesData[0].length]) {
          that.datax = that.seriesData
        } else {

          let tem1 = that.datax[0].shift(0, 1);
          that.datax[0].push(tem1);

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
