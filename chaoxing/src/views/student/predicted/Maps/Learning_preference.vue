
<template>
  <div id="exa2" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'Class',
  data() {
    return {
      data: [
        ['流体力学基础', '工程力学基础', '水力学实验方法', '工程水力学', '水利工程', '英语精读', '英语听说', '水力学'],
        [{ value: 154, name: '视频资源' }, { value: 77, name: 'PPT' }, { value: 67, name: '电子教材', selected: true }],
        [
          { value: 104, name: '流体力学基础' },
          { value: 33, name: '工程力学基础' },
          { value: 31, name: '水力学实验方法' },
          { value: 151, name: '工程水力学' },
          { value: 34, name: '水利工程' },
          { value: 147, name: '英语精读' },
          { value: 135, name: '英语听说' },
          { value: 102, name: '水力学' }
        ]
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('exa2'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',

        },
        legend: {
          selectedMode: true,
          data: this.data[0],
          left: 'center',
          top: 'bottom',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 14
            },
            tooltip: {
              trigger: 'item',
              show: true,
              formatter: '{b} </br> 偏好值为{c} '
            },
            data: this.data[1]
          },
          {
            name: 'Access From',
            type: 'pie',
            selectedMode: 'single',
            radius: ['45%', '60%'],

            tooltip: {
              trigger: 'item',
              show: true,
              formatter: '{b} </br> 偏好值为{c} '
            },
            data: this.data[2]
          }
        ]
      })
    }
  }
}

</script>
