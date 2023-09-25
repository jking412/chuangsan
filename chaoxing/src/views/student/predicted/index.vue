<template>
  <div class="body">
    <div class="example-container">
      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600; color: #979797; margin-bottom: 8px;">学情预警</div>
          <div style="width: 100%;height:100%; display: flex; justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;">
              <chart1 :reply="data"></chart1>
            </div>
            <div style="width:28%;height:100%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:42%; background-color: #fff; border-radius: 20px;" class="threeDshadow">
                <div style="text-align: center;color: #f87c0f;font-size: large;"><br />当前挂科率最高的科目为：水利工程<br /></div>
                <chart4 style="width: 100%;height: 90%;"></chart4>
              </div>
              <div style="width:100%;height:54%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 1em 0 1em 1em; color: #4791fc;font-weight: 600;display:flex;align-items: center;">
                  该科目挂科率最高,可能有如下原因
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>
                <div style="position: relative; width:92%;height:81%; background-color: #fff;
                                border-radius: 20px; left: 50%; transform: translate(-50%, 0); padding: 1em">
                  <div v-for="(item, index) in reason" v-bind:key="index">
                    <el-card shadow="hover"
                      style="border-radius: 20px;background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);">{{
                        item }} </el-card>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">学习偏好</div>
          <div style="  width: 100%;height: 100%;border-radius: 20px;display: flex;justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;">
              <chart2></chart2>
            </div>
            <el-popover placement="top-start" title="你当前的偏好学科为：工程水力学、英语精读、英语听说" width="200" trigger="hover"
              :close-delay="10">
              <svg-icon icon-class="prefer" slot="reference" style="font-size: 38px;" class="icon1">
              </svg-icon>
            </el-popover>
            <el-popover placement="top-start" title="你当前的偏好学习资源为：视频、PPT" width="200" trigger="hover" :close-delay="10">
              <svg-icon icon-class="toolbag" slot="reference" style="font-size: 38px;" class="icon2">
              </svg-icon>
            </el-popover>

            <div style="width:28%;height:100%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:42%; background-color: #fff; border-radius: 20px;padding: 2em;"
                class="threeDshadow">
                <div style="margin: 1em 0 1em 1em; color: #4791fc;font-weight: 600;display:flex;align-items: center;">
                  <br />
                  你当前的偏好资源为：<br />
                </div>
                <div v-for="(item, index) in resource" v-bind:key="index">
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);">
                    {{
                      item }} </el-card>
                  <br />
                  <br />
                </div>
              </div>
              <div style="width:100%;height:54%; background-color: #fff; border-radius: 20px;padding: 2em;"
                class="threeDshadow">
                <div style="margin: 1em 0 1em 1em; color: #4791fc;font-weight: 600;display:flex;align-items: center;">
                  <br />
                  你当前的偏好科目为：<br />
                </div>
                <div v-for="(item, index) in subject" v-bind:key="index">
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);">
                    {{
                      item }} </el-card>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">学习风格</div>
          <div style="  width: 100%;height: 100%;border-radius: 20px;display: flex;justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;">
              <chart3></chart3>
            </div>
            <el-popover placement="top-start" title="你当前最为突出的学习风格是：读写型" width="200" trigger="hover" :close-delay="10">
              <svg-icon icon-class="style" slot="reference" style="font-size: 38px;" class="icon3">
              </svg-icon>
            </el-popover>

            <div style="width:28%;height:100%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:48%; background-color: #fff; border-radius: 20px;padding: 2em;"
                class="threeDshadow">
                <div style="margin: 1em 0 1em 1em; color: #4791fc;font-weight: 600;display:flex;align-items: center;">
                  <br />
                  你当前最为突出的学习风格是:{{ studyType[3] }}<br />
                </div>
                <el-card shadow="hover"
                  style="border-radius: 20px;background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%); text-align:justify">
                  {{ explain[3] }}<br />
                  你在上述方面做的很好，继续发扬。
                </el-card>
              </div>
              <div style="width:100%;height:48%; background-color: #fff; border-radius: 20px;padding: 2em;"
                class="threeDshadow">
                <div style="margin: 1em 0 1em 1em; color: #4791fc;font-weight: 600;display:flex;align-items: center;">
                  <br />
                  你当前最不突出的学习风格是:{{ studyType[2] }}<br />
                </div>
                <el-card shadow="hover"
                  style="border-radius: 20px;background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);text-align:justify">
                  {{ explain[2] }}<br />
                  你在上述方面存在一些问题，继续努力。
                </el-card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">讨论流水</div>
          <div class="banner-chart-card">
            <chart5></chart5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chart1 from './Maps/Analysis_of_student_achievement.vue'
import chart2 from './Maps/Learning_preference.vue'
import chart3 from './Maps/Radar_chart.vue'
import chart4 from './Maps/Highest_failure_rate.vue'
import chart5 from './Maps/Discussion.vue'

export default {
  name: 'Predicted',
  data() {
    return {
      reason: ['作业完成度低', '任务点完成度低', '学习时长短'],
      subject: ['工程水力学', '英语精读', '英语听说'],
      resource: ['视频资源', 'PPT'],
      studyType: ['视觉型', '听觉型', '互动型', '读写型', '社交型'],
      explain: ['视觉型学习者偏向于通过看和观察来学习，表格、地图、流程图等都是他们喜欢的学习工具。当学习中有很多可视化的元素，特别是图表时，他们学得最好。他们善于用图表归纳总结学习内容，使用视觉符号记笔记；',
        '听觉型学习者倾向于通过听和说来学习，当学习内容有声音的元素，比如老师讲授、音乐、课堂讨论等，他们会学得更好。他们善于大声朗读学习要点并用自己的语言复述学习内容。',
        '互动型学习者乐于接受在教学过程中注重互动，包括师生互动、生生互动等方式，在教学时不是老师一个人在讲，由师生来共同参与完成课堂任务的教学方式。他们能够主动参与问题探究，更能深入理解学习内容',
        '读写型学习者通过阅读和写作学得最好，他们喜欢用文字展示的信息。比起看视频，听讲座，读写型学习者在阅读和写作中能获得更多乐趣。他们善于将知识要点自己写出来，把图像信息用文字解释说明。',
        '社交型学习者注意从他人那儿获取信息，喜欢公开表露自己的情感，擅长理解他人和与他人打交道；在学习中注重整体的学习，会着重从整体上来把握学习材料，比如一篇文章或一个句子，他们擅长抓住事物的重点和整体结构； 适合自然的，非正式的语言学习环境； 具有较熟练的社交技能，善于创造和把握学习语言和使用的机会。'],
      data: [
        ['高数', '线代', '大学物理', '计算机组成原理', '数据结构', '英语精读', '英语听说', '工程经济学'],
        [85, 62, 95, 74, 85, 65, 78, 72],
        [10, 20, 10, 40, 50, 10, 30, 60]
      ]
    }
  },
  components: {
    chart1,
    chart2,
    chart3,
    chart4,
    chart5

  }
}

</script>

<style lang="scss" scoped>
@keyframes jump {
  0% {
    transform: translate(0px, 0px);
  }

  50% {
    transform: translate(0px, -10px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

.jumpicon:hover .svg-icon {
  animation: jump 0.5s;
}

.threeDshadow {
  transition-duration: 0.3s;
}

.threeDshadow:hover {
  cursor: pointer;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
}

.example-container {
  margin: 30px;
}


.example-container .banner {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.example-container .banner .banner-in-card {
  width: 100%;
  height: 74vh;
}

.example-container .banner .banner-in-card .banner-chart-card {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
}

.icon1 {
  position: absolute;
  top: 95vh;
  left: 6vw;
  color: #979797;

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}

.icon2 {
  position: absolute;
  top: 95vh;
  left: 10vw;
  color: #979797;

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}

.icon3 {
  position: absolute;
  top: 176vh;
  left: 6vw;
  color: #979797;

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}

.example-container .banner .banner-in-card .banner-chart-card .icon4 {
  position: absolute;
  top: 257vh;
  left: 6vw;
  color: #979797;

  &:hover {
    color: #409EFF;
    cursor: pointer;
  }
}
</style>
