
<template>
  <div id="ana2" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'radar',
  data() {
    return {
      data: [
        [7.8, 8.2, 4.6, 9.2, 6.3],
        ['平均学习效果', '平均及格率', '平均考试成绩', '平均学科偏好值', ' 平均学习互动度']
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('ana2'))
      // 绘制图表
      myChart.setOption({

        title: {
          text: '教师总评雷达图',
          left: 'center'
        },
        tooltip: {
          confine: true,
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var showHtm = "";
            for (var i = 0; i < params.value.length; i++) {
              //名称
              var name = params.data.name[i];
              //值
              var value = params.value[i];
              showHtm += name + ' 得分：' + value + '<br>'
            }
            return showHtm;
          }
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '平均学习效果', max: 10 },
            { name: '平均及格率', max: 10 },
            { name: '平均考试成绩', max: 10 },
            { name: '平均学科偏好值', max: 10 },
            { name: '平均学习互动度', max: 10 },

          ],
          axisName: { // (圆外的标签)雷达图每个指示器名称的配置项。


              fontSize: 13,
              color: 'black'

          },

        },
        series: [
          {
            name: '教师总评分项',
            type: 'radar',
            label: {  //显示value中具体的数值
                show: true,
                extStyle: {  //更改数值样式
                  color: '#ee6666'
                }
            },
            data: [
              {
                value: this.data[0],
                name: this.data[1],
                areaStyle: { color: "#ee6666" }, //阴影背景颜色
                lineStyle: {
                  color: "##ee6666",
                  // 阴影折线宽度
                  width: 1
                },

              }
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



