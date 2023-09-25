
<template>
  <div style="width: 100%;height: 100%; position: relative">
    <div id="main8" style="width: 100%;height: 100%;"></div>
    <div class="InOut" @click="InOut">
      <svg-icon icon-class="unfold" style="width:100%;height:100%"
        :class="{ 'arrowTransform': unfold, 'arrowTransformReturn': !unfold }" />
    </div>
    <div class="show-board" ref="dom">
      <div v-show="initVisible">
        <div class="title"><span style="font-weight: 700">{{ show[0].title }}:</span>{{ show[0].name }}</div>
        <div style="width: 100%; display:flex;align-items: center;margin-top: 20px">
          班级平均分<el-progress :percentage="show[0].score" :stroke-width="14" :format="format"></el-progress>
        </div>
        <div style="width:100%;height: 260px">
          <chart1 :WOE="WOE"></chart1>
        </div>
        <div style="font-size: 18px; font-weight: 600; color: #979797;margin-bottom: 20px">相关知识点掌握情况</div>
        <div class="process">
          <el-table :data="knowledge" stripe style="width: 100%" height="100%">
            <el-table-column prop="name" label="知识点名称" min-width="70%">
            </el-table-column>
            <el-table-column prop="status" label="掌握度" min-width="30%">
            </el-table-column>
          </el-table>
        </div>
        <div style="font-size: 18px; font-weight: 600; color: #979797;margin: 20px 0px">难点分析</div>
        <div class="process" style="height: 20vh">
          <el-table :data="difficulty" stripe style="width: 100%" height="100%">
            <el-table-column prop="name" label="易错知识点" min-width="70%">
            </el-table-column>
            <el-table-column prop="status" label="难度系数" min-width="30%">
            </el-table-column>
          </el-table>
        </div>
      </div>
      <!-- <div v-show="initVisible">123</div> -->
    </div>
    <div class="show-change">
      <el-radio-group v-model="change" @input="select()">
        <el-radio-button label="作业"></el-radio-button>
        <el-radio-button label="考试"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="select">
      <el-select v-model="clazzIndex" placeholder="请选择分析学科">
        <el-option v-for="(item, index) in clazzes" :key="item.id" :label="item.name" :value="index"
          @click.native="changeSubject(index)">
        </el-option>
      </el-select>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      width="60%">
      <div style="height: 60vh;overflow: auto"><masked></masked></div>
    </el-dialog>
  </div>
</template>

<script>
import chart1 from './Circle1.vue'
import store from '../../../../store'
import * as echarts from 'echarts'
import masked from './mask.vue'
// import { examApi, workApi, graphWorkApi, graphExamApi } from '../api'

export default {
  name: 'CircleInfo',
  data() {
    return {
      dialogVisible: false,
      initVisible: true,
      unfold: false,
      change: '作业',
      myChart: '',
      Info: store.getters.Info,
      clazzIndex: 0,
      Wstatement: [
        [
          { title: '作业名', name: '作业1', score: 76 },
          [
            { name: '液体的主要物理性质', status: '85%' },
            { name: '水力学的定义及应用', status: '76%' },
            { name: '连续介质、理想液体及作用力', status: '74%' }
          ],
          [
            { name: '连续介质、理想液体及作用力', status: '0.35' },
            { name: '液体的主要物理性质', status: '0.78' },
          ],
          {
            name: '个人作业得分',
            score: 78,
            map: [0.78, 0.78, 0.78, 0.78]
          }
        ],
        [
          { title: '作业名', name: '作业2', score: 84 },
          [
            { name: '静水压强及其特性', status: '78%' },
            { name: '液体的平衡微分方程式', status: '82%' },
            { name: '等压面', status: '83%' },
            { name: '压强的测量及表示方法', status: '98%' },
            { name: '静水压强分布图', status: '83%' },
            { name: '矩形平面静水总压力', status: '86%' },
            { name: '任意平面静水总压力', status: '71%' },
            { name: '曲面静水总压力', status: '93%' },
          ],
          [
            { name: '静水压强分布图', status: '0.64' },
            { name: '矩形平面静水总压力', status: '0.57' },
            { name: '任意平面静水总压力', status: '0.36' },
            { name: '曲面静水总压力', status: '0.21' },
          ],
          {
            name: '个人作业得分',
            score: 81,
            map: [0.81, 0.81, 0.81, 0.81]
          }
        ],
        [
          { title: '作业名', name: '作业3', score: 83 },
          [
            { name: '水动力学研究任务、液体运动流束理论', status: '90%' },
            { name: '液体运动的基本概念', status: '87%' },
            { name: '恒定总流的连续性方程', status: '68%' },
            { name: '微小流束的能量方程', status: '81%' },
            { name: '恒定总流的能量方程', status: '79%' },
            { name: '恒定总流能量方程应用', status: '86%' },
            { name: '恒定总流动量方程', status: '87%' },
            { name: '恒定总流动量方程应用', status: '83%' },
          ],
          [
            { name: '恒定总流能量方程应用', status: '0.45' },
            { name: '恒定总流动量方程应用', status: '0.53' },
          ],
          {
            name: '个人作业得分',
            score: 85,
            map: [0.85, 0.85, 0.85, 0.85]
          }
        ],
        [
          { title: '作业名', name: '作业4', score: 93 },
          [
            { name: '水头损失的物理概念及分类', status: '90%' },
            { name: '液流边界几何条件对水头损失的影响', status: '87%' },
            { name: '均匀流沿程水头损失与切应力的关系', status: '68%' },
            { name: '液体运动的两种型态', status: '81%' },
            { name: '紊流形成过程的分析', status: '79%' },
            { name: '圆管中的层流运动及其沿程水头损失的计算', status: '86%' },
          ],
          [
            { name: '液流边界几何条件对水头损失的影响', status: '0.67' },
            { name: '均匀流沿程水头损失与切应力的关系', status: '0.54' },
            { name: '圆管中的层流运动及其沿程水头损失的计算', status: '0.43' },
          ],
          {
            name: '个人作业得分',
            score: 90,
            map: [0.90, 0.90, 0.90, 0.90]
          }
        ],
        [
          { title: '作业名', name: '作业5', score: 79 },
          [
            { name: '管道水流的类型', status: '83%' },
            { name: '简单管道的水力计算', status: '81%' },
            { name: '长管水力计算及水头线的绘制', status: '78%' },
            { name: '简单管道水力计算的基本类型', status: '94%' },
            { name: '虹吸管水力计算', status: '85%' },
            { name: '水泵装置的水力计算', status: '87%' },
          ],
          [
            { name: '虹吸管水力计算', status: '0.67' },
            { name: '水泵装置的水力计算', status: '0.64' },
            { name: '简单管道的水力计算', status: '0.59' },
          ],
          {
            name: '个人作业得分',
            score: 85,
            map: [0.85, 0.85, 0.85, 0.85]
          }
        ],
        [
          { title: '作业名', name: '作业6', score: 90 },
          [
            { name: '明渠的恒定均匀流', status: '78%' },
            { name: '明渠均匀流的特性及产生条件', status: '82%' },
            { name: '水力最佳断面及允许流速', status: '76%' },
            { name: '明渠均匀流水力计算', status: '89%' },
            { name: '复式断面明渠均匀流水力计算', status: '95%' },
          ],
          [
            { name: '复式断面明渠均匀流水力计算', status: '0.65' },
            { name: '明渠均匀流水力计算', status: '0.58' },
          ],
          {
            name: '个人作业得分',
            score: 93,
            map: [0.93, 0.93, 0.93, 0.93]
          }
        ],
        [
          { title: '作业名', name: '作业7', score: 85 },
          [
            { name: '明渠水流流态的判别', status: '88%' },
            { name: '断面必能与临界水深的问题', status: '83%' },
            { name: '明渠非均匀流特性及产生条件', status: '79%' },
            { name: '明渠的底坡', status: '90%' },
            { name: '水跌与水跃', status: '97%' },
            { name: '棱柱体水平明渠中的水跃', status: '87%' },
            { name: '明渠恒定非均匀渐变流水面曲线的计算', status: '83%' },
          ],
          [
            { name: '断面必能与临界水深的问题', status: '0.73' },
            { name: '明渠非均匀流特性及产生条件', status: '0.72' },
            { name: '明渠恒定非均匀渐变流水面曲线的计算', status: '0.43' },
          ],
          {
            name: '个人作业得分',
            score: 86,
            map: [0.86, 0.86, 0.86, 0.86]
          }
        ],
        [
          { title: '作业名', name: '作业8', score: 87 },
          [
            { name: '堰流及闸孔出流的概念', status: '87%' },
            { name: '堰流的类型及计算公式', status: '78%' },
            { name: '堰流的水力计算', status: '81%' },
          ],
          [
            { name: '堰流的类型及计算公式', status: '0.67' },
            { name: '堰流的水力计算', status: '0.38' },
          ],
          {
            name: '个人作业得分',
            score: 86,
            map: [0.86, 0.86, 0.86, 0.86]
          }
        ],
        [
          { title: '作业名', name: '作业9', score: 93 },
          [
            { name: '闸孔出流的水力计算', status: '93%' },
            { name: '水流的衔接与消能类型', status: '83%' },
          ],
          [
            { name: '闸孔出流的水力计算', status: '0.46' },
          ],
          {
            name: '个人作业得分',
            score: 91,
            map: [0.91, 0.91, 0.91, 0.91]
          }
        ],
        [
          { title: '作业名', name: '作业10', score: 90 },
          [
            { name: '底流型衔接消能的水力计算', status: '88%' },
            { name: '挑流型衔接消能的水力计算', status: '84%' },
          ],
          [
            { name: '底流型衔接消能的水力计算', status: '0.46' },
            { name: '挑流型衔接消能的水力计算', status: '0.39' },
          ],
          {
            name: '个人作业得分',
            score: 94,
            map: [0.94, 0.94, 0.94, 0.94]
          }
        ],
      ],
      Estatement: [
        [
          { title: '考试名', name: '水力学试卷(1)', score: 79 },
          [
            { name: '水力学的定义及应用', status: '37%' },
            { name: '液体的主要物理性质', status: '89%' },
            { name: '连续介质、理想液体及作用力', status: '22%' },
          ],
          [
            { name: '连续介质、理想液体及作用力', status: '0.65' },
          ],
          {
            name: '个人考试得分',
            score: 90,
            map: [0.9, 0.9, 0.9, 0.9]
          }
        ],
        [
          { title: '考试名', name: '水力学试卷(2)', score: 83 },
          [
            { name: '静水压强及其特性', status: '67%' },
            { name: '液体的平衡微分方程式', status: '80%' },
            { name: '等压面', status: '82%' },
            { name: '压强的测量及表示方法', status: '73%' },
          ],
          [
            { name: '液体的平衡微分方程式', status: '0.46' },
            { name: '等压面', status: '0.63' },
          ],
          {
            name: '个人考试得分',
            score: 85,
            map: [0.85, 0.85, 0.85, 0.85]
          }
        ],
        [
          { title: '考试名', name: '水力学试卷(3)', score: 85 },
          [
            { name: '静水压强分布图', status: '73%' },
            { name: '矩形平面静水总压力', status: '85%' },
            { name: '任意平面静水总压力', status: '87%' },
            { name: '曲面静水总压力', status: '79%' },
            { name: '水动力学研究任务、液体运动流束理论', status: '90%' },
            { name: '液体运动的基本概念', status: '86%' },
          ],
          [
            { name: '矩形平面静水总压力', status: '0.64' },
            { name: '任意平面静水总压力', status: '0.58' },
            { name: '曲面静水总压力', status: '0.49' },
          ],
          {
            name: '个人考试得分',
            score: 85,
            map: [0.85, 0.85, 0.85, 0.85]
          }
        ],
        [
          { title: '考试名', name: '水力学题库(1)', score: 90 },
          [
            { name: '恒定总流的连续性方程', status: '97%' },
            { name: '微小流束的能量方程', status: '86%' },
            { name: '恒定总流的能量方程', status: '88%' },
            { name: '恒定总流能量方程应用', status: '91%' },
            { name: '恒定总流动量方程', status: '90%' },
            { name: '恒定总流动量方程应用', status: '76%' },
          ],
          [
            { name: '恒定总流能量方程应用', status: '0.53' },
            { name: '恒定总流动量方程应用', status: '0.48' },
            { name: '恒定总流的连续性方程', status: '0.41' },
          ],
          {
            name: '个人考试得分',
            score: 93,
            map: [0.93, 0.93, 0.93, 0.93]
          }
        ],
        [
          { title: '考试名', name: '水力学题库(2)', score: 91 },
          [
            { name: '水头损失的物理概念及分类', status: '83%' },
            { name: '液流边界几何条件对水头损失的影响', status: '87%' },
            { name: '均匀流沿程水头损失与切应力的关系', status: '86%' },
            { name: '液体运动的两种型态', status: '91%' },
            { name: '紊流形成过程的分析', status: '94%' },
            { name: '圆管中的层流运动及其沿程水头损失的计算', status: '86%' },
          ],
          [
            { name: '均匀流沿程水头损失与切应力的关系', status: '0.54' },
            { name: '液体运动的两种型态', status: '0.43' },
            { name: '紊流形成过程的分析', status: '0.38' },
            { name: '圆管中的层流运动及其沿程水头损失的计算', status: '0.36' },
          ],
          {
            name: '个人考试得分',
            score: 93,
            map: [0.93, 0.93, 0.93, 0.93]
          }
        ],
        [
          { title: '考试名', name: '水力学与桥涵水文期中考试', score: 78 },
          [
            { name: '管道水流的类型', status: '83%' },
            { name: '简单管道的水力计算', status: '78%' },
            { name: '长管水力计算及水头线的绘制', status: '65%' },
            { name: '简单管道水力计算的基本类型', status: '91%' },
            { name: '虹吸管水力计算', status: '84%' },
            { name: '水泵装置的水力计算', status: '84%' },
            { name: '明渠的恒定均匀流', status: '94%' },
            { name: '明渠均匀流的特性及产生条件', status: '79%' },
            { name: '水力最佳断面及允许流速', status: '82%' },
            { name: '明渠均匀流水力计算', status: '79%' },
            { name: '复式断面明渠均匀流水力计算', status: '90%' },
          ],
          [
            { name: '长管水力计算及水头线的绘制', status: '0.31' },
            { name: '简单管道的水力计算', status: '0.65' },
            { name: '明渠均匀流的特性及产生条件', status: '0.78' },
            { name: '明渠均匀流水力计算', status: '0.54' },
          ],
          {
            name: '个人考试得分',
            score: 89,
            map: [0.89,0.89,0.89,0.89]
          }
        ],
        [
          { title: '考试名', name: '水力学与桥涵水文期末考试', score: 81 },
          [
            { name: '明渠非均匀流特性及产生条件', status: '62%' },
            { name: '明渠水流流态的判别', status: '79%' },
            { name: '断面必能与临界水深的问题', status: '90%' },
            { name: '明渠的底坡', status: '89%' },
            { name: '水跌与水跃', status: '84%' },
            { name: '棱柱体水平明渠中的水跃', status: '90%' },
            { name: '明渠恒定非均匀渐变流水面曲线的计算', status: '56%' },
            { name: '堰流及闸孔出流的概念', status: '63%' },
            { name: '堰流的类型及计算公式', status: '79%' },
            { name: '堰流的水力计算', status: '90%' },
            { name: '闸孔出流的水力计算', status: '92%' },
            { name: '水流的衔接与消能类型', status: '82%' },
            { name: '底流型衔接消能的水力计算', status: '86%' },
            { name: '挑流型衔接消能的水力计算', status: '91%' },
          ],
          [
            { name: '明渠恒定非均匀渐变流水面曲线的计算', status: '0.38' },
            { name: '堰流及闸孔出流的概念', status: '0.56' },
            { name: '明渠非均匀流特性及产生条件', status: '0.52' },
          ],
          {
            name: '个人考试得分',
            score: 76,
            map: [0.76,0.76,0.76,0.76]
          }
        ],
      ],
      WOE: {
        name: '个人作业得分',
        score: 78,
        map: [0.78, 0.78, 0.78, 0.78]
      },
      clazzes: [
        { name: '水力学', id: '0' }
      ],
      show: [
        { title: '作业名', name: '作业1', score: 76 },
      ],
      Wdata: [
        [
          {
            name: '王倩',
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            symbolSize: 90,
            itemStyle: {
              color: '#52cbe0' // 关系图节点标记的颜色
            },
            category: '学生', // 数据项所在类目的 index。
            unfold: true,
            hasChildren: true,
          },
          {
            name: '作业1',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业2',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业3',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业4',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业5',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业6',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业7',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业8',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业9',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '作业10',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#88d090'
            },
            category: '作业',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学的定义及应用',
            draggable: true,
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '堰流的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '闸孔出流的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '水流的衔接与消能类型',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '底流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '挑流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
        ],
        [{
          target: '作业1',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        },
        {
          target: '作业2',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业3',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业4',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业5',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业6',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业7',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业8',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '提交'
        }, {
          target: '作业9',
          source: '王倩',
          category: '提交'
        },
        {
          target: '作业10',
          source: '王倩',
          category: '提交'
        },
        {
          target: '水力学的定义及应用',
          source: '作业1',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体的主要物理性质',
          source: '作业1',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '连续介质、理想液体及作用力',
          source: '作业1',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '静水压强及其特性',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体的平衡微分方程式',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '等压面',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '压强的测量及表示方法',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '静水压强分布图',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '矩形平面静水总压力',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '任意平面静水总压力',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '曲面静水总压力',
          source: '作业2',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水动力学研究任务、液体运动流束理论',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体运动的基本概念',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流的连续性方程',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '微小流束的能量方程',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流的能量方程',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流能量方程应用',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流动量方程',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流动量方程应用',
          source: '作业3',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水头损失的物理概念及分类',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液流边界几何条件对水头损失的影响',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '均匀流沿程水头损失与切应力的关系',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体运动的两种型态',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '紊流形成过程的分析',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '圆管中的层流运动及其沿程水头损失的计算',
          source: '作业4',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '管道水流的类型',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '简单管道的水力计算',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '长管水力计算及水头线的绘制',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '简单管道水力计算的基本类型',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '虹吸管水力计算',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水泵装置的水力计算',
          source: '作业5',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠的恒定均匀流',
          source: '作业6',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠均匀流的特性及产生条件',
          source: '作业6',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水力最佳断面及允许流速',
          source: '作业6',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠均匀流水力计算',
          source: '作业6',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '复式断面明渠均匀流水力计算',
          source: '作业6',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠非均匀流特性及产生条件',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠水流流态的判别',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '断面必能与临界水深的问题',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠的底坡',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水跌与水跃',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '棱柱体水平明渠中的水跃',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠恒定非均匀渐变流水面曲线的计算',
          source: '作业7',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流及闸孔出流的概念',
          source: '作业8',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流的类型及计算公式',
          source: '作业8',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流的水力计算',
          source: '作业8',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '闸孔出流的水力计算',
          source: '作业9',
          // 关系对象连线上的标签内容
          category: '包含'
        },
        {
          target: '水流的衔接与消能类型',
          source: '作业9',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '底流型衔接消能的水力计算',
          source: '作业10',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '挑流型衔接消能的水力计算',
          source: '作业10',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        ]],
      Edata: [
        [
          {
            name: '王倩',
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            symbolSize: 90, // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
            itemStyle: {
              color: '#52cbe0' // 关系图节点标记的颜色
            },
            category: '学生', // 数据项所在类目的 index。
            unfold: true,
            hasChildren: true,
          },
          {
            name: '水力学试卷(1)',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学试卷(2)',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学试卷(3)',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学题库(1)',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学题库(2)',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学与桥涵水文期中考试',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },
          {
            name: '水力学与桥涵水文期末考试',
            draggable: true,
            symbolSize: 90,
            itemStyle: {
              color: '#d3c6a6'
            },
            category: '考试',
            unfold: false,
            hasChildren: true,
          },

          {
            name: '水力学的定义及应用',
            draggable: true,
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
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
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '堰流的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '闸孔出流的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '水流的衔接与消能类型',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '底流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          }, {
            name: '挑流型衔接消能的水力计算',
            draggable: true,
            symbolSize: 40,
            itemStyle: {
              color: '#f86a69'
            },
            category: '-知识点',
            unfold: false,
            hasChildren: false,
          },
        ],
        [{
          target: '水力学试卷(1)',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        },
        {
          target: '水力学试卷(2)',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        }, {
          target: '水力学试卷(3)',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        }, {
          target: '水力学题库(1)',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        }, {
          target: '水力学题库(2)',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        }, {
          target: '水力学与桥涵水文期中考试',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        }, {
          target: '水力学与桥涵水文期末考试',
          source: '王倩',
          // 关系对象连接线上的标签内容
          category: '参加'
        },
        {
          target: '水力学的定义及应用',
          source: '水力学试卷(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体的主要物理性质',
          source: '水力学试卷(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '连续介质、理想液体及作用力',
          source: '水力学试卷(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '静水压强及其特性',
          source: ' 水力学试卷(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体的平衡微分方程式',
          source: ' 水力学试卷(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '等压面',
          source: ' 水力学试卷(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '压强的测量及表示方法',
          source: ' 水力学试卷(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '静水压强分布图',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '矩形平面静水总压力',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '任意平面静水总压力',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '曲面静水总压力',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水动力学研究任务、液体运动流束理论',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体运动的基本概念',
          source: '水力学试卷(3)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流的连续性方程',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '微小流束的能量方程',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流的能量方程',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流能量方程应用',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流动量方程',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '恒定总流动量方程应用',
          source: '水力学题库(1)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水头损失的物理概念及分类',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液流边界几何条件对水头损失的影响',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '均匀流沿程水头损失与切应力的关系',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '液体运动的两种型态',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '紊流形成过程的分析',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '圆管中的层流运动及其沿程水头损失的计算',
          source: '水力学题库(2)',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '管道水流的类型',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '简单管道的水力计算',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '长管水力计算及水头线的绘制',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '简单管道水力计算的基本类型',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '虹吸管水力计算',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水泵装置的水力计算',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠的恒定均匀流',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠均匀流的特性及产生条件',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水力最佳断面及允许流速',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠均匀流水力计算',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '复式断面明渠均匀流水力计算',
          source: '水力学与桥涵水文期中考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠非均匀流特性及产生条件',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠水流流态的判别',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '断面必能与临界水深的问题',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠的底坡',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '水跌与水跃',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '棱柱体水平明渠中的水跃',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '明渠恒定非均匀渐变流水面曲线的计算',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流及闸孔出流的概念',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流的类型及计算公式',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '堰流的水力计算',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '闸孔出流的水力计算',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连线上的标签内容
          category: '包含'
        },
        {
          target: '水流的衔接与消能类型',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '底流型衔接消能的水力计算',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        {
          target: '挑流型衔接消能的水力计算',
          source: '水力学与桥涵水文期末考试',
          // 关系对象连接线上的标签内容
          category: '包含'
        },
        ]],
      knowledge: [
        { name: '液体的主要物理性质', status: '35%' },
        { name: '水力学的定义及应用', status: '76%' },
        { name: '连续介质、理想液体及作用力', status: '54%' },
      ],
      difficulty: [
        { name: '连续介质、理想液体及作用力', status: '0.35' },
        { name: '液体的主要物理性质', status: '0.78' },
      ],
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    format(percentage) {
      return percentage
    },
    select() {
      this.$refs.dom.style.right = -310 + 'px';
      this.unfold = false;
      if (this.change === '作业') {
        // this.data = [[
        //   {
        //     name: store.getters.Info.userName,
        //     draggable: true,
        //     symbolSize: 90,
        //     itemStyle: {
        //       color: '#409eff'
        //     },
        //     category: '学生',
        //     paperLibId: 0,
        //     unfold: true,
        //     hasChildren: true,
        //   },],
        // []];
        // workApi(this.clazzes[this.clazzIndex].clazzid).then(res => {
        //   if (res.code === 1) {
        //     console.log(res.data.data);
        //     for (let i = 0; i < res.data.data.length; i++) {
        //       this.data[0].push({
        //         name: '第' + (i + 1) + '次作业',
        //         draggable: true,
        //         symbolSize: 90,
        //         category: '作业',
        //         paperLibId: res.data.data[i].paperLibId,
        //         unfold: false,
        //         hasChildren: false,
        //       });
        //       this.data[1].push({
        //         target: '第' + (i + 1) + '次作业',
        //         source: store.getters.Info.userName,
        //         category: '参加'
        //       })
        //     }
        //     this.myChart.setOption({
        //       series: [{
        //         data: this.data[0],
        //         links: this.data[1],
        //       }]
        //     })
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
        this.WOE = {
          name: '个人作业得分',
          score: 78,
          map: [0.78, 0.78, 0.78, 0.78]
        };
        this.knowledge = [
          { name: '液体的主要物理性质', status: '35%' },
          { name: '水力学的定义及应用', status: '76%' },
          { name: '连续介质、理想液体及作用力', status: '54%' },
        ];
        this.difficulty = [
          { name: '连续介质、理想液体及作用力', status: '0.35' },
          { name: '液体的主要物理性质', status: '0.78' },
        ];
        this.show[0] = { title: '作业名', name: '作业1', score: 79 };
        this.myChart.setOption({
          series: [{
            data: this.Wdata[0],
            links: this.Wdata[1],
          }]
        })
      }
      else {
        // this.data = [[
        //   {
        //     name: store.getters.Info.userName,
        //     draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
        //     symbolSize: 90, // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
        //     itemStyle: {
        //       color: '#409eff' // 关系图节点标记的颜色
        //     },
        //     category: '学生', // 数据项所在类目的 index。
        //     unfold: true,
        //     hasChildren: true,
        //     paperLibId: 0,
        //   },],
        // []];
        // examApi(this.clazzes[this.clazzIndex].clazzid).then(res => {
        //   if (res.code === 1) {
        //     console.log(res.data);
        //     for (let i = 0; i < res.data.length; i++) {
        //       this.data[0].push({
        //         name: res.data[i].title,
        //         draggable: true,
        //         symbolSize: 90,
        //         category: '考试',
        //         paperLibId: res.data[i].paperLibId,
        //         unfold: false,
        //         hasChildren: false,
        //       });
        //       this.data[1].push({
        //         target: res.data[i].title,
        //         source: store.getters.Info.userName,
        //         category: '完成'
        //       })
        //     }
        //     this.myChart.setOption({
        //       series: [{
        //         data: this.data[0],
        //         links: this.data[1],
        //       }]
        //     })
        //   }
        // }).catch(err => {
        //   console.log(err);
        // })
        this.WOE = {
          name: '个人考试得分',
          score: 90,
          map: [0.9, 0.9, 0.9, 0.9]
        };
        this.knowledge = [
            { name: '水力学的定义及应用', status: '37%' },
            { name: '液体的主要物理性质', status: '89%' },
            { name: '连续介质、理想液体及作用力', status: '22%' },
          ];
        this.difficulty = [
            { name: '连续介质、理想液体及作用力', status: '0.65' },
          ];
        this.show[0] = { title: '考试名', name: '水力学试卷(1)', score: 79 };
        this.myChart.setOption({
          series: [{
            data: this.Edata[0],
            links: this.Edata[1],
          }]
        })
      }
    },
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
    // job(data, index) {
    //   console.log(data);
    //   console.log(index);
    //   if (data.category === '作业') {
    //     graphWorkApi(data.paperLibId).then(res => {
    //       console.log(res);
    //       if (res.code === 1 && res.data.length != 0) {
    //         for (let i = 0; i < res.data.length; i++) {
    //           this.data[0].push({
    //             name: res.data[i].name,
    //             draggable: true,
    //             symbolSize: 90,
    //             category: '任务点',
    //             paperLibId: 0,
    //             unfold: false,
    //             hasChildren: false,
    //           });
    //           this.data[1].push({
    //             target: res.data[i].name,
    //             source: data.name,
    //             category: '组成'
    //           })
    //         }
    //         this.data[0][index].unfold = true;
    //         this.data[0][index].hasChildren = true;
    //         this.myChart.setOption({
    //           series: [{
    //             data: this.data[0],
    //             links: this.data[1],
    //           }]
    //         })
    //       }
    //     }).catch(err => {
    //       console.log(err);
    //     })
    //   } else {
    //     graphExamApi(data.paperLibId).then(res => {
    //       console.log(res);
    //       if (res.code === 1 && res.data.length != 0) {
    //         for (let i = 0; i < res.data.length - 1; i++) {
    //           this.data[0].push({
    //             name: res.data[i].name,
    //             draggable: true,
    //             symbolSize: 90,
    //             category: '任务点',
    //             paperLibId: 0,
    //             unfold: false,
    //             hasChildren: false,
    //           });
    //           this.data[1].push({
    //             target: res.data[i].name,
    //             source: data.name,
    //             category: '组成'
    //           })
    //         }
    //         this.data[0][index].unfold = true;
    //         this.data[0][index].hasChildren = true;
    //         this.myChart.setOption({
    //           series: [{
    //             data: this.data[0],
    //             links: this.data[1],
    //           }]
    //         })
    //       }
    //     }).catch(err => {
    //       console.log(err);
    //     })
    //   }
    // },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('main8'))
      // 绘制图表
      let that = this
      let option = {
        color: ['#52cbe0', '#88d090', '#d3c6a6', '#f86a69','#d5d5d5', '#d5d5d5'],
        title: {
          text: '人课关系图'
        },
        tooltip: {
          show: true,
        },
        legend: {
          show: true,
          left: 'auto',
          orient: 'vertical',
          top: 'center'
        },
        xAxis: {
          show: false
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
            repulsion: 2000,
            // [ default: 30 ]边的两个节点之间的距离(关系对象连接线两端对象的距离,会根据关系对象值得大小来判断距离的大小)，
            edgeLength: [250, 150]
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
            color: 'white',
            formatter: function (value) {
              if (value.name.length > 4) {
                return `${value.name.slice(0, 4)}...`;
              }
              return value.name
            }
          },
          // 连接两个关系对象的线上的标签
          edgeLabel: {
            show: true,
            // 标签内容
            formatter: function (param) {
              return param.data.category
            }
          },
          data: this.Wdata[0],
          // 节点分类的类目，可选。如果节点有分类的话可以通过 data[i].category 指定每个节点的类目，类目的样式会被应用到节点样式上。图例也可以基于categories名字展现和筛选。
          categories: [{
            // 类目名称，用于和 legend 对应以及格式化 tooltip 的内容。
            name: '学生'
          }, {
            name: '作业'
          }, {
            name: '考试'
          }, {
            name: '知识点'
          }, {
            name: '提交'
          }, {
            name: '参加'
          }, {
            name: '提交'
          },],
          // 节点间的关系数据
          links: this.Wdata[1],
          edgeSymbol: ['circle', 'arrow'],
        }]
      }
      this.myChart.setOption(option)
      this.myChart.on("click", function (param) {
        if (param.dataType === "node" && (param.data.category === '学生' || param.data.category === '作业' || param.data.category === '考试')) {
          if (param.data.unfold === false) {
            if (param.data.hasChildren === false) {
              param.data.hasChildren = true;
            }
            else {
              let children = [];
              if (that.change === '作业') {
                that.findChildren(children, param.name, that.Wdata[1], false);
                if (children.length) {
                  that.Wdata[0].forEach((data) => {
                    if (children.includes(data.name) && data.category.charAt(0) === '-') {
                      data.category = data.category.slice(1);
                    }
                  })
                }
                that.Wdata[0][that.Wdata[0].findIndex(item => item.name === param.data.name)].unfold = true;
              }
              else {
                that.findChildren(children, param.name, that.Edata[1], false);
                if (children.length) {
                  that.Edata[0].forEach((data) => {
                    if (children.includes(data.name) && data.category.charAt(0) === '-') {
                      data.category = data.category.slice(1);
                    }
                  })
                }
                that.Edata[0][that.Edata[0].findIndex(item => item.name === param.data.name)].unfold = true;
              }
            }
          }
          else {
            if (param.data.hasChildren === true) {
              let children = [];
              if (that.change === '作业') {
                that.findChildren(children, param.name, that.Wdata[1], true);
                if (children.length) {
                  that.Wdata[0].forEach((data) => {
                    if (children.includes(data.name) && data.category.charAt(0) !== '-') {
                      data.category = '-' + data.category;
                      data.unfold = false;
                    }
                  })
                }
                that.Wdata[0][that.Wdata[0].findIndex(item => item.name === param.data.name)].unfold = false;
              }
              else {
                that.findChildren(children, param.name, that.Edata[1], true);
                if (children.length) {
                  that.Edata[0].forEach((data) => {
                    if (children.includes(data.name) && data.category.charAt(0) !== '-') {
                      data.category = '-' + data.category;
                      data.unfold = false;
                    }
                  })
                }
                that.Edata[0][that.Edata[0].findIndex(item => item.name === param.data.name)].unfold = false;
              }
            }
          }
          if (that.change === '作业') {
            that.myChart.setOption({
              series: [{
                data: that.Wdata[0],
                links: that.Wdata[1],
              }]
            })
          }
          else {
            that.myChart.setOption({
              series: [{
                data: that.Edata[0],
                links: that.Edata[1],
              }]
            })
          }

        }
        else if (param.dataType === 'node' && (param.data.name === '紊流形成过程的分析')) {
          that.dialogVisible = true;
        }
      })
      this.myChart.on("mouseover", function (param) {
        if (param.data.category === '作业') {
          that.$refs.dom.style.right = 30 + 'px';
          that.unfold = true;
          that.show = [that.Wstatement[param.dataIndex-1][0]];
          that.WOE = that.Wstatement[param.dataIndex-1][3];
          that.knowledge = that.Wstatement[param.dataIndex-1][1];
          that.difficulty = that.Wstatement[param.dataIndex-1][2];
        }
        else if (param.data.category === '考试') {
          that.$refs.dom.style.right = 30 + 'px';
          that.unfold = true;
          that.show = [that.Estatement[param.dataIndex-1][0]];
          that.WOE = that.Estatement[param.dataIndex-1][3];
          that.knowledge = that.Estatement[param.dataIndex-1][1];
          that.difficulty = that.Estatement[param.dataIndex-1][2];
        }
      })
      window.addEventListener('resize', function () {
        that.myChart.resize()
      })
    },
    changeSubject(index) {
      // if (this.clazzIndex != index) {
      //   this.data = [[
      //     {
      //       name: store.getters.Info.userName,
      //       draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
      //       symbolSize: 90, // 关系图节点标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
      //       itemStyle: {
      //         color: '#409eff' // 关系图节点标记的颜色
      //       },
      //       category: '学生', // 数据项所在类目的 index。
      //       unfold: true,
      //       hasChildren: true,
      //     },],
      //   []]
      // }
    }
  },
  components: {
    chart1,
    masked,
  }
}

</script>

<style lang="scss" scoped>
:deep(.el-progress-bar__inner) {
  background-image: linear-gradient(to right,
      rgba(0, 141, 0, 1),
      rgba(190, 217, 0, 1));
}

::-webkit-scrollbar {
  display: none;
}

.el-progress {
  width: 178px;
  margin-left: 2px;
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

.show-board {
  position: absolute;
  top: 0;
  bottom: 0;
  right: -400px;
  width: 310px;
  height: 700px;
  margin: auto;
  background-color: #DCDCDC;
  border-radius: 20px;
  transition: all 0.5s;
  padding: 20px;
  opacity: 0.9;
  overflow-y: scroll;
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
  color: #409EFF;
}

.show-change {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 20px;
}

.direction {
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: space-between;
  padding-top: 8px;
  font-size: 24px;
}

.Info {
  padding: 10px 30px;
}

.direction .d-left:hover {
  cursor: pointer;
  color: #409EFF;
}

.direction .d-right:hover {
  cursor: pointer;
  color: #409EFF;
}

.select {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
