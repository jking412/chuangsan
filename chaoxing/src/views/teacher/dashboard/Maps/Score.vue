
<template>
  <div id="map4" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Aosa',
  data() {
    return {
      centerDialogVisible: false,
      option: 0,
      myChart: 0,
      seriesData: [
        [30, 50, 40, 20, 60, 70, 50],
        [40, 80, 60, 50, 90, 95, 100],
        [20, 25, 30, 10, 40, 30, 28]
      ],
      datax: 0,
      dataxAxis: [1, 2, 3, 4, 5, 6, 7],
      datacoords: [
        {
          coords: [],
        }, {
          coords: [],
        }, {
          coords: [],
        },
      ],
    }
  },
  mounted() {
    this.drawLine()
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let that = this
      this.myChart = echarts.init(document.getElementById('map4'))
      // 绘制图表
      for (let j = 0; j < this.seriesData.length; j++) {
        for (let i = 0; i < this.dataxAxis.length; i++) {
          this.datacoords[j].coords.push([this.dataxAxis[i] - 1, this.seriesData[j][i]]);
        }
      }
      that.datax = that.seriesData
      let data = that.datax
      this.option = {
        title: {
          text: '考试成绩分析',
          left: 'center'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['平均分', '最高分', "最低分"],
          textStyle: {
            color: '#5CB1C1',
          }

        },
        xAxis: {
          name: '考试第次',
          type: 'category',
          boundaryGap: false,
          data: that.dataxAxis,
          nameLocation: "middle",
          nameGap: 20,
          axisPointer: {
            type: 'shadow',
          },

          axisLabel: {
            interval: 0,//代表显示所有x轴标签显示
          },
          axisLine: {
            symbol: ['none', 'arrow'],
            symbolSize: [6, 6],
            symbolOffset: [0, 5],
            lineStyle: {
              color: '#979797'
            }
          },

        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          name: '分数',
          min: 0,
          max: 100,
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

        },
        series: [{
          name: '平均分',
          data: data[0],
          type: 'line',
          // smooth: true,
          color: '#0d7ef6',
          areaStyle: {

            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#7db6ef'
            },

            {
              offset: 0.85,
              color: 'rgba(126,171,233,0)'
            }
            ], false),


          },

        },
        {
          name: '最高分',
          data: data[1],
          type: 'line',
          // smooth: true,
          color: '#91cc75',

        },
        {
          name: '最低分',
          data: data[2],
          type: 'line',
          // smooth: true,
          color: '#ee6666',
        },
        {
          polyline: true,
          showSymbol: false,
          name: "流动光线",
          type: "lines",
          coordinateSystem: "cartesian2d",
          effect: {
            trailLength: 0.3,
            show: true,
            period: 6,
            symbolSize: 4,
            loop: true,
          },
          lineStyle: {
            color: "#fff",
            width: 0,
            opacity: 0,
            curveness: 0,
            type: "dashed",
          },
          data: this.datacoords,
        }
        ]
      }
      that.myChart.setOption(this.option)
      that.myChart.getZr().on('click', function (params) {

        let pointInPixel = [params.offsetX, params.offsetY]
        if (that.myChart.containPixel('grid', pointInPixel)) {
          //点击第几个柱子
          let pointInGrid = that.myChart.convertFromPixel({ seriesIndex: 0 }, pointInPixel)
          // 也可以通过params.offsetY 来判断鼠标点击的位置是否是图表展示区里面的位置
          // 也可以通过name[xIndex] != undefined，name是x轴的坐标名称来判断是否还是点击的图表里面的内容
          // x轴数据的索引
          var xIndex = pointInGrid[0]
          console.log('当前点击的索引', xIndex);
        }
        that.$emit('callback', [true, xIndex + 1])
      })

      that.myChart.getZr().on('mousemove', function (params) {
        const { topTarget } = params
        // 给折线的鼠标悬浮 变为 小手
        if (topTarget?.z === 2) {
          myChart.getZr().setCursorStyle('pointer')
        }
      })

      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    }
  }
}

</script>



