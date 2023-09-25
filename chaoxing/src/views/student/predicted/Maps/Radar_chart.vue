
<template>
  <div id="exa3" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'radar',
  data() {
    return {
      data: [
        [7.8, 8.2, 5.6, 9.2, 6.3],
        ['视觉型', '听觉型', '互动型', '读写型', ' 社交型']
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('exa3'))
      // 绘制图表
      myChart.setOption({

        title: {
          text: '个人学习风格雷达图',
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
        legend: {
          left: 'center',
          top: 'bottom',
          data: ['学习风格倾向']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '视觉型', max: 10 },
            { name: '听觉型', max: 10 },
            { name: '互动型', max: 10 },
            { name: '读写型', max: 10 },
            { name: '社交型', max: 10 },

          ],
          AxisName: { // (圆外的标签)雷达图每个指示器名称的配置项。
            fontSize: 13,
            color: 'black'
          },

        },
        series: [
          {
            name: '学习风格倾向',
            type: 'radar',
            label: {  //显示value中具体的数值
              show: true,
              extStyle: {  //更改数值样式
                color: 'blue'
              }
            },
            data: [
              {
                value: this.data[0],
                name: this.data[1],
                areaStyle: { color: "#a9d4f6" }, //阴影背景颜色
                lineStyle: {
                  color: "#4890ff",
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



