<template>
  <div class="body">
    <div class="example-container">
      <!-- <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">挂科预警</div>
          <div class="banner-chart-card">
            <dv-scroll-board :config="config" style="width:98%;height:95%;transform: translate(1%,5%);" />
          </div>
        </div>
      </div> -->

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">挂科预警</div>
          <div style="width: 100%;height:100%;border-radius: 20px;display: flex;justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;overflow:hidden">
              <dv-scroll-board :config="config" style="width:100%;height:100%;color: #000" />
            </div>

            <div style="width:28%;height:105%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:95%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 3em 0 1em 3em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  有{{ failNum }}名学生挂科率较高，可重点关注
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>
                <div>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 3em 2em 3em 2em;text-align: center;">
                    学习态度
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 3em 2em 3em 2em;text-align: center;">
                    章节完成度
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 3em 2em 3em 2em;text-align: center;">
                    学习时长
                  </el-card>
                </div>
                <div style="margin: 3em 0 1em 3em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  您或许可以从上述方面入手，多多关注这些学生，帮助他们迎头赶上！
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">学生偏好度</div>
          <div style="  width: 100%;height: 100%;border-radius: 20px;display: flex;justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;">
              <chart1></chart1>
            </div>


            <div style="width:28%;height:100%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:45%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 1em 0 1em 1em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  有{{ likeNum }}名学生热爱该课程，可能原因如下
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>


                <div>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    授课幽默风趣
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    贴合他们的兴趣
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    课堂氛围良好
                  </el-card>
                </div>

              </div>
              <div style="width:100%;height:45%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 1em 0 1em 1em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  有{{ hateNum }}名学生厌倦该课程，可能原因如下
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>


                <div>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    与他们的兴趣相悖
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    没有掌握正确的学习方法
                  </el-card>
                  <el-card shadow="hover"
                    style="border-radius: 20px;background-image: linear-gradient(-225deg, #ee6666 0%,#fee9ec 80%, #fff 100%);margin: 1em 2em 1em 2em;">
                    不适应授课方式
                  </el-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">教师总评</div>
          <div style="  width: 100%;height: 100%;border-radius: 20px;display: flex;justify-content: space-between;">
            <div style="width:70%;height:100%; background-color: #fff; border-radius: 20px;">
              <chart2></chart2>
            </div>


            <div style="width:28%;height:100%; display:flex; flex-direction: column; justify-content: space-between;">
              <div style="width:100%;height:45%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 1em 0 1em 1em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  您得分最高的分项为：学生{{ highestTerm }}
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>


                <div style="height: 30vh;width: 30vw;transform: translate(-10%,-10%);">
                  <chart3></chart3>
                </div>

              </div>
              <div style="width:100%;height:45%; background-color: #fff; border-radius: 20px;"
                class="threeDshadow jumpicon">
                <div style="margin: 1em 0 1em 1em; color: #ee6666;font-weight: 600;display:flex;align-items: center;">
                  您得分最低的分项为：学生{{ lowestTerm }}
                  <svg-icon icon-class="cause" style="font-size: 28px;margin-left: 4px;" />
                </div>
                <div style="height: 30vh;width: 30vw;transform: translate(-10%,-10%);">
                  <chart4></chart4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="banner">
        <div class="banner-in-card">
          <div style="font-size: 18px; font-weight: 600;color: #979797;margin-bottom: 8px;">学习难点分析</div>
          <div class="banner-chart-card">
            <chart5></chart5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import chart1 from './Maps/Subject_prederence.vue'
import chart2 from './Maps/Radar_chart.vue'
import chart3 from './Maps/Circleone.vue'
import chart4 from './Maps/Circletwo.vue'
import chart5 from './Maps/wordCloud.vue'
export default {
  name: 'Example',
  data() {
    return {
      likeNum: 2,
      hateNum: 4,
      highestTerm: '平均学科偏好值',
      lowestTerm: '平均考试成绩',
      failNum: 10,
      config: {
        header: ['姓名', '挂科率', '学习进度', '学习态度', '学科总评'],
        data: [
          ['蔡亚飞', '58%', '12%', '40', '37'],
          ['秦伟杰', '45%', '20%', '48', '28'],
          ['姜帆', '56%', '10%', '39', '36'],
          ['邬宇航', '47%', '19%', '49', '30'],
          ['孔祥欢', '39%', '16%', '57', '24'],
          ['姜南', '40%', '17%', '56', '25'],
          ['李冰雨', '51%', '9%', '47', '33'],
          ['徐鸣远', '53%', '7%', '46', '34'],
          ['李希元', '47%', '10%', '56', '30'],
        ],
        headerBGC: '#d96c65',
        oddRowBGC: '#fff',
        evenRowBGC: '#fafafa',
        waitTime: 2000,
        align: ["center", "center", "center", "center", "center"],
      }
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
</style>
