
<template>
  <div id="ana5" style="width: 100%;height:100%;"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'wordCloud',
  data() {
    return {
      data: {
        value: [{
          "name": "堰流",
          "value": 1446
        },
        {
          "name": '静压强及其特性',
          "value": 928
        },
        {
          "name": "液体运动的描述方法",
          "value": 906
        },
        {
          "name": "液流阻力和水头损失分类及计算公式",
          "value": 825
        },
        {
          "name": "量纲和谐原理",
          "value": 514
        },
        {
          "name": "水力学的发展简史",
          "value": 486
        },
        {
          "name": "液体的平衡微分方程",
          "value": 53
        },
        {
          "name": "液体流动的类型",
          "value": 163
        },
        {
          "name": "短管恒定岀流",
          "value": 86
        },
        {
          "name": "重力场中静压强分布规律",
          "value": 17
        },
        {
          "name": "描述液体运动的基本概念",
          "value": 6
        },
        {
          "name": "流动相似原理",
          "value": 1
        },
        {
          "name": "液体的力学模型",
          "value": 1437
        },
        {
          "name": "静水压强的量测及分布图",
          "value": 422
        },
        {
          "name": "液体的连续性方程",
          "value": 353
        },
        {
          "name": "作用在液体上的力",
          "value": 331
        },
        {
          "name": "作用在平面上的静水总压力",
          "value": 313
        },
        {
          "name": "理想液体运动的微分方程",
          "value": 307
        },
        {
          "name": "恒定总流动量方程",
          "value": 43
        },
        {
          "name": "简单长管水力计算",
          "value": 15
        },

        ],
        image: "data:image/png;base64,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"
      }
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let that = this
      console.log(that.data);
      var myChart = echarts.init(document.getElementById('ana5'));
      var maskImage = new Image();
      maskImage.src = that.data.image;
      // 绘制图表
      maskImage.onload = function () {
        myChart.setOption(
          {
            series: [{
              type: 'wordCloud',
              layoutAnimation: true,
              maskImage: maskImage,
              sizeRange: [30, 100],
              rotationRange: [0, 0],
              rotationStep: 45,
              gridSize: 8,
              shape: 'pentagon',
              width: '100%',
              height: '100%',
              textStyle: {
                color: function () {
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')';
                },
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
                emphasis: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              data: that.data.value,

            }]
          }
        );
        window.addEventListener('resize', function () {
          myChart.resize()
        });
      }
    }
  }
}
</script>



