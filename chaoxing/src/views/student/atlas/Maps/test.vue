
<template>
  <div style="width: 100%;height: 100%; position: relative">
    <div id="main18" style="width: 100%;height: 100%;"></div>
    <div class="InOut" @click="InOut">
      <svg-icon icon-class="unfold" style="width:100%;height:100%"
        :class="{ 'arrowTransform': unfold, 'arrowTransformReturn': !unfold }" />
    </div>
    <div class="show-board" ref="dom">
      <div class="title"><span style="font-weight: 700">知识点名:</span>堰流与闸孔出流</div>
      <div style="width:100%;height: 260px">
        <chart2></chart2>
      </div>
      <div style="font-size: 18px; font-weight: 600; color: #979797;margin-bottom: 20px">知识点完成情况</div>
      <div class="process">
        <el-table :data="knowledge" stripe style="width: 100%" height="100%">
          <el-table-column prop="name" label="知识点名称" min-width="70%">
          </el-table-column>
          <el-table-column prop="status" label="完成度" min-width="30%">
          </el-table-column>
        </el-table>
      </div>
      <div style="font-size: 18px; font-weight: 600; color: #979797;margin: 20px 0px">知识点掌握率</div>
      <div style="width: 100%;height: 40%;background-color: #fff;border-radius: 10px">
        <chart1></chart1>
      </div>
    </div>
    <div class=" select">
      <el-select v-model="clazzIndex" placeholder="请选择分析学科">
        <el-option v-for="(item, index) in clazzes" :key="item.id" :label="item.name" :value="index"
          @click.native="changeSubject(index)">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import chart1 from './inside.vue'
import chart2 from './Circle2.vue'

export default {
  name: 'CircleInfo2',
  data() {
    return {
      unfold: false,
      data: [
        [
          {
            name: '水力学',
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            symbolSize: 90, // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            itemStyle: {
              color: '#f79767' // 关系图节点标记的颜色
            },
            category: '课程', // 数据项所在类目的 index。
            unfold: true,
            hasChildren: true,
          }, {
            name: '绪论',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          }, {
            name: '水静力学',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水动力学基础',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '液流型态及水头损失',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '有压管道中的恒定流',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '明渠恒定均匀流',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '明渠恒定非均匀流',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '堰流与闸孔出流',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '衔接与消能的水力计算',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#5dd9b4'
            },
            category: '知识点',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学的定义及应用',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '液体的主要物理性质',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '连续介质、理想液体及作用力',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '静水压强及其特性',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '液体的平衡微分方程式',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '等压面',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '压强的测量及表示方法',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '静水压强分布图',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '矩形平面静水总压力',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '任意平面静水总压力',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '曲面静水总压力',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '水动力学研究任务、液体运动流束理论',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '液体运动的基本概念',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '恒定总流的连续性方程',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '微小流束的能量方程',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '恒定总流的能量方程',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '恒定总流能量方程应用',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '恒定总流动量方程',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '恒定总流动量方程应用',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '水头损失的物理概念及分类',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '液流边界几何条件对水头损失的影响',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '均匀流沿程水头损失与切应力的关系',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '液体运动的两种型态',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '紊流形成过程的分析',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '圆管中的层流运动及其沿程水头损失的计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '管道水流的类型',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '简单管道的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '长管水力计算及水头线的绘制',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '简单管道水力计算的基本类型',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '虹吸管水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '水泵装置的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠的恒定均匀流',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠均匀流的特性及产生条件',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '水力最佳断面及允许流速',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠均匀流水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '复式断面明渠均匀流水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠非均匀流特性及产生条件',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠水流流态的判别',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '断面必能与临界水深的问题',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠的底坡',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '水跌与水跃',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '棱柱体水平明渠中的水跃',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '明渠恒定非均匀渐变流水面曲线的计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '堰流及闸孔出流的概念',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
          {
            name: '堰流的类型及计算公式',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '堰流的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '闸孔出流的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '水流的衔接与消能类型',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '底流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '挑流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 65,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
        ],
        [{
          target: '绪论',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        },
        {
          target: '水静力学',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '水动力学基础',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '液流型态及水头损失',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '有压管道中的恒定流',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '明渠恒定均匀流',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '明渠恒定非均匀流',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '堰流与闸孔出流',
          source: '水力学',
          // 关系对象连接线上的标签内容
          category: '属于'
        }, {
          target: '衔接与消能的水力计算',
          source: '水力学',
          category: '属于'
        }, {
          target: '水力学的定义及应用',
          source: '绪论',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '液体的主要物理性质',
          source: '绪论',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '连续介质、理想液体及作用力',
          source: '绪论',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '静水压强及其特性',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '液体的平衡微分方程式',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '等压面',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '压强的测量及表示方法',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '静水压强分布图',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '矩形平面静水总压力',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '任意平面静水总压力',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '曲面静水总压力',
          source: '水静力学',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水动力学研究任务、液体运动流束理论',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '液体运动的基本概念',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '恒定总流的连续性方程',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '微小流束的能量方程',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '恒定总流的能量方程',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '恒定总流能量方程应用',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '恒定总流动量方程',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '恒定总流动量方程应用',
          source: '水动力学基础',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水头损失的物理概念及分类',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '液流边界几何条件对水头损失的影响',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '均匀流沿程水头损失与切应力的关系',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '液体运动的两种型态',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '紊流形成过程的分析',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '圆管中的层流运动及其沿程水头损失的计算',
          source: '液流型态及水头损失',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '管道水流的类型',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '简单管道的水力计算',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '长管水力计算及水头线的绘制',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '简单管道水力计算的基本类型',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '虹吸管水力计算',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水泵装置的水力计算',
          source: '有压管道中的恒定流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠的恒定均匀流',
          source: '明渠恒定均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠均匀流的特性及产生条件',
          source: '明渠恒定均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水力最佳断面及允许流速',
          source: '明渠恒定均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠均匀流水力计算',
          source: '明渠恒定均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '复式断面明渠均匀流水力计算',
          source: '明渠恒定均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠非均匀流特性及产生条件',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠水流流态的判别',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '断面必能与临界水深的问题',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠的底坡',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水跌与水跃',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '棱柱体水平明渠中的水跃',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '明渠恒定非均匀渐变流水面曲线的计算',
          source: '明渠恒定非均匀流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '堰流及闸孔出流的概念',
          source: '堰流与闸孔出流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '堰流的类型及计算公式',
          source: '堰流与闸孔出流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '堰流的水力计算',
          source: '堰流与闸孔出流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '闸孔出流的水力计算',
          source: '堰流与闸孔出流',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '水流的衔接与消能类型',
          source: '衔接与消能的水力计算',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '底流型衔接消能的水力计算',
          source: '衔接与消能的水力计算',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        {
          target: '挑流型衔接消能的水力计算',
          source: '衔接与消能的水力计算',
          // 关系对象连接线上的标签内容
          category: '包含于'
        },
        ]],
      clazzIndex: 0,
      clazzes: [
        { name: '水力学', id: '0' }
      ],
      knowledge: [
        { name: '堰流的类型及计算公式', status: '37%' },
        { name: '堰流的水力计算', status: '89%' },
        { name: '堰流及闸孔出流的概念', status: '22%' },
        { name: '闸孔出流的水力计算', status: '22%' },
      ]
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    InOut() {
      this.unfold === true ? this.$refs.dom.style.right = -310 + 'px' : this.$refs.dom.style.right = 30 + 'px';
      this.unfold === true ? this.unfold = false : this.unfold = true;
    },
    findChildren(children, source, target, deep) {
      let targetChildren = [];
      target.filter(link => link.source === source).forEach(link => {
        targetChildren.push(link.target);
        children.push(link.target);
      })
      if (deep) {
        for (let i = 0; i < targetChildren.length; i++) {
          this.findChildren(children, targetChildren[i], target, deep)
        }
      }
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('main18'))
      // 绘制图表
      let that = this
      let option = {
        color: ['#f79767', '#5dd9b4', '#f86a69', '#d5d5d5', '#d5d5d5'],
        tooltip: {
          show: true,
        },
        legend: {
          show: true,
          left: 'auto',
          orient: 'vertical',
          top: '0'
        },
        xAxis: {
          show: false,

        },
        yAxis: {
          show: false
        },
        grid: {
          top: '80px'
        },
        series: [{
          type: 'graph',
          // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
          roam: true,
          // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。[ default: false ]
          focus: 'adjacency',
          // 力引导布局相关的配置项，力引导布局是模拟弹簧电荷模型在每两个节点之间添加一个斥力，每条边的两个节点之间添加一个引力，每次迭代节点会在各个斥力和引力的作用下移动位置，多次迭代后节点会静止在一个受力平衡的位置，达到整个模型的能量最小化。
          force: {
            // 力引导布局的结果有良好的对称性和局部聚合性，也比较美观。
            // [ default: 50 ]节点之间的斥力因子(关系对象之间的距离)。支持设置成数组表达斥力的范围，此时不同大小的值会线性映射到不同的斥力。值越大则斥力越大
            repulsion: 1000,
            // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
            edgeLength: [165, 100]
            // 这个距离也会受 repulsion。支持设置成数组表达边长的范围，此时不同大小的值会线性映射到不同的长度。值越小则长度越长。如下示例:
            // 值最大的边长度会趋向于 10，值最小的边长度会趋向于 50      edgeLength: [10, 50]
          },
          // 图的布局。[ default: 'none' ]
          layout: 'force',
          // 'none' 不采用任何布局，使用节点中提供的 x， y 作为节点的位置。
          // 'circular' 采用环形布局;'force' 采用力引导布局.
          // 标记的图形
          symbol: 'circle',
          // 关系边的公用线条样式。其中 lineStyle.color 支持设置为'source'或者'target'特殊值，此时边会自动取源节点或目标节点的颜色作为自己的颜色。
          normal: {
            lineStyle: {
              // 线的颜色[ default: '#aaa' ]
              color: '#fff',
              // 线宽[ default: 1 ]
              width: 1,
              // 线的类型[ default: solid实线 ]   'dashed'虚线    'dotted'
              type: 'solid',
              // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。[ default: 0.5 ]
              opacity: 0.5,
              // 边的曲度，支持从 0 到 1 的值，值越大曲度越大。[ default: 0 ]
              curveness: 0.5
            }
          },
          // 关系对象上的标签
          label: {
            // 是否显示标签
            show: true,
            // 标签位置:'top''left''right''bottom''inside''insideLeft''insideRight''insideTop''insideBottom''insideTopLeft''insideBottomLeft''insideTopRight''insideBottomRight'
            position: 'inside',
            // 文本样式
            fontSize: 16,
            color: '#fff',
            formatter: function (value) {
              if (value.name.length > 4) {
                return `${value.name.slice(0, 3)}...`;
              }
              return value.name
            }

          },
          // 连接两个关系对象的线上的标签
          edgeLabel: {
            normal: {
              show: true,
              //   textStyle: {

              //   },
              formatter: function (param) {
                return param.data.category
              }
            },
            show: true
          },
          data: this.data[0],
          // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
          categories: [{
            // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
            name: '课程',
          }, {
            name: '知识点'
          }, {
            name: '属于'
          }, {
            name: '包含于'
          }],
          // 节点间的关系数据
          links: this.data[1],
          edgeSymbol: ['circle', 'arrow'],//边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
          edgeSymbolSize: 10,//边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
        }]
      }
      this.myChart.setOption(option)
      this.myChart.on("click", function (param) {
        if (param.dataType === "node") {
          if (param.data.unfold === false) {
            if (param.data.hasChildren === false) {
              param.data.hasChildren = true;
            } else {
              let children = [];
              that.findChildren(children, param.name, that.data[1], false);
              if (children.length) {
                that.data[0].forEach((data) => {
                  if (children.includes(data.name) && data.category.charAt(0) === '-') {
                    data.category = data.category.slice(1);
                  }
                })
              }
            }
            that.data[0][that.data[0].findIndex(item => item.name === param.data.name)].unfold = true;
          } else {
            if (param.data.hasChildren === true) {
              let children = [];
              that.findChildren(children, param.name, that.data[1], true);
              if (children.length) {
                that.data[0].forEach((data) => {
                  if (children.includes(data.name) && data.category.charAt(0) !== '-') {
                    data.category = '-' + data.category;
                    data.unfold = false;
                  }
                })
              }
            }
            that.data[0][that.data[0].findIndex(item => item.name === param.data.name)].unfold = false;
          }
          that.myChart.setOption({
            series: [{
              data: that.data[0],
              links: that.data[1],
            }]
          })
        }
        // else if(param.dataType === 'node' && )
      })
      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    }
  },
  components: {
    chart1,
    chart2,
  }
}

</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.arrowTransform {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(180deg);
}

.arrowTransformReturn {
  transition: 0.2s;
  transform-origin: center;
  transform: rotateZ(0deg);
}

.el-progress {
  width: 170px;
  margin-left: 6px;
}

.show-board {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -650px;
  width: 310px;
  height: 700px;
  margin: auto;
  background-color: #DCDCDC;
  border-radius: 20px;
  transition: all 0.5s;
  padding: 20px;
  overflow-y: scroll;
  opacity: 0.9;
}

.show-board .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 20px;
  width: 100%;
  height: 20px;
}

.show-board .process {
  width: 100%;
  height: 25vh;
  border-radius: 10px;
  overflow: hidden;
}

.InOut {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 30px;
  height: 30px;
}

.InOut:hover {
  cursor: pointer;
  color: #659EFF;
}

.select {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
