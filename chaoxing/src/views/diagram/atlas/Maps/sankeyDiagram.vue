
<template>
  <div id="main1" style="width: 100%;height:100%;background-color: #fff;">

    <el-row :gutter="20">
      <el-col :span="4">
        <div>
          <div>
            <p style="color: #fff;">1</p>
          </div>
          <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            style="position: fixed;width: 15vw;">
            <el-menu-item>
              <span slot="title"><a href="#1">1.图表简介</a></span>
            </el-menu-item>
            <el-menu-item>
              <span slot="title"><a href="#2">2.图表属性</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#3">3.图表详解</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#4">4.相似图表</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#5">5.设计案例</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#6">6.使用场景</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#7">7.制作教程</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#8">8.专项工具</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#9">9.学习资源</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#10">10.参考文献</a></span>
            </el-menu-item> <el-menu-item>
              <span slot="title"><a href="#11">11.贡献者</a></span>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="20">
        <div>

          <h1 class="title1" id="1">桑基图 - Sankey Diagram</h1>
          <img class="img1" src="../pic/3.png">
          <p class="text">
            桑基图 (Sankey Diagram)，是一种表现流程的示意图，用于描述一组值到另一组值的流向。分支的宽度对应了数据流量的大小。

            1869年，查尔斯米纳德（Charles Minard）绘制了1812年拿破仑征俄图（Map of Napolean's Russian Campaign of
            1812，见设计案例1），描绘了拿破仑大军在东进时，兵力是如何一步步削弱的。这也是目前公认较早的桑基图。

            如今，也出现了更加现代意义上的桑基图，有时也被称为“冲积图”（Alluvial
            diagram）。这种图包含流入、流出的节点，以及曲线型的边，往往呈现出彩带一般的效果。其一大特点在于“能量守恒”，即起始流量和结束流量相同。不能在中间过程中创造出流量，流失的流量也不应莫名消失（可以流向表示损耗的节点）。也因为流出等于流入，桑基图的每条边，宽度应是保持不变的。

            使用桑基图时，应注意变量的归类和颜色的选择，避免太过花哨、影响阅读。必要时建议加入交互功能。
          </p>

          <div class="property" id="2">
            <h2>图表属性</h2>
            <ul class="ul1">
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">形状:</strong><span>其他</span></li>
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">图类:</strong><span>示意图</span></li>
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">功能:</strong><span>比较 • 趋势</span></li>
            </ul>
          </div>

          <div class="detail" id="3">
            <h2>图表详解</h2>
            <div class="detail1">
              <h3>元素构成
              </h3>
              <p>
                <img class="img2" src="../pic/4.jpeg">
              </p>
              <h3 style="margin-top: 40px;">
                适用场景
              </h3>
              <p class="text">适合表现分配情况、归类情况，以及变化和流动情况。</p>
              <h3 style="margin-top: 40px;">
                不适用场景
              </h3>
              <p style="margin-left: 5px;margin-top: 10px;" class="text">
                （1）桑基图遵循能量守恒原则，因此，每条边的宽度是保持不变的（即起始与结束时的宽度相同）。如果边的宽度不等（即数据结构是矩阵式的），推荐使用和弦图。</p>
              <p style="margin-left: 5px;margin-top: 10px;" class="text">
                （2）另外，在没有交互的情况下，变量如果太多，或者使用过多或过于相似的颜色，会导致“一团乱麻”的状态，使人难以聚焦，参考下图（Hirst,
                2013）。这种情况下，建议先将变量进行必要的归类，并赋予具有辨识度、反差感的颜色。有进一步需求的话，加入交互功能，在鼠标点击时，仅突出显示一个支流。</p>
              <img class="img3" src="../pic/5.png">
            </div>
          </div>

          <div class="similarChart" id="4">
            <h2>相似图表</h2>
          </div>

          <div class="case" id="5">
            <h2>设计案例</h2>
            <div class="caseIndex">
              <div class="leftcase">
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/拿破仑_c9c6ad121acb15d0f2ba792118958082.png">
                  </div>
                  <div class="case-text">1869年，查尔斯米纳德（Charles Minard）绘制的1812年拿破仑征俄图（Map of Napolean's Russian Campaign of
                    1812），该图形象的表现出，在深入俄国腹地时，拿破仑大军是如何迅速削减的。</div><a class="view-origin"
                    href="https://en.wikipedia.org/wiki/Charles_Joseph_Minard" target="_blank"
                    rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/特朗普_c030fa33abf851a4d1d28e176244d16e.png">
                  </div>
                  <div class="case-text">装饰性变形：川普攻击最多的人是谁？结果显示，并不是民主党，而是新闻媒体。严格来说，这个图并没有两个时间点的比较。主要是借鉴了桑基图的形态，实现了类似饼图的功能。
                  </div><a class="view-origin"
                    href="https://www.axios.com/who-trump-attacks-the-most-on-twitter-1513305449-f084c32e-fcdf-43a3-8c55-2da84d45db34.html"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/印度_7bd026fa1e7dd04bfa42968b76ff7d8c.png">
                  </div>
                  <div class="case-text">用点阵实现运动的桑基图。作者统计了近年来印度发生的强奸事件，以及它们的处理结果。作品用一个个运动的点来代表每一桩强奸案，大部分流向了无疾而终，令人震撼。
                  </div><a class="view-origin" href="https://adityajain15.github.io/Rape_In_India/" target="_blank"
                    rel="noopener noreferrer">查看出处</a>
                </div>
              </div>

              <div class="rightcase">
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/isis_da2cff26101be7fcb1016317c25afe0d.png">
                  </div>
                  <div class="case-text">
                    2017信息之美时政类金奖作品《在他们的路上：外国战斗士之旅》，描画ISIS斗士出征的情况。致敬了拿破仑征俄图。主干使用黑色，代表出征，支干使用黄色，代表归来。菱形代表出征国家，该国穆斯林人口越多，面积越大。斗士人数占穆斯林人数越大，颜色越深。通过这个图，读者可以清楚的追看ISIS的全部行动。
                  </div><a class="view-origin"
                    href="https://www.informationisbeautifulawards.com/showcase/2323-on-their-way-the-journey-of-foreign-fighters"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/难民_ef98b4019e1b3965a12750f06d7156c2.png">
                  </div>
                  <div class="case-text">合理用色，并保持类别间的区分度：《经济学人》在统计难民流向时，用蓝色表示难民来源国家，黄色表示迁移目的地，绿色表示成功入境，红色表示拒绝入境。</div><a
                    class="view-origin" href="https://www.economist.com/graphic-detail/2015/05/12/seeking-safety"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
              </div>
            </div>
          </div>

          <div class="scene" style="margin-top: 60px;" id="6">
            <h2>使用场景</h2>
            <div>
              <p class="text">（1）追踪用户状态。下图（<span
                  style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">王小美吖,
                  2017</span>）对某平台一周内的用户转化情况进行了描画，包括有多少用户加入购物车，又在这之后进行了付款，多少注册用户转换为了活跃用户等等。例如，2017年1月1日“加入购物车”的用户中，有较大一部分在次日下单，较小一部分在次日付款。<a
                  href="https://me.bdp.cn/share/index.html?shareId=sdo_667cd39c7baa7ee3e8e6ca97109ec6b0" target="_blank"
                  style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
              <p class="text"><span style="background-color: rgb(255, 255, 255);"><img
                    src="http://139.224.62.3:3001/upload/images/network/1543652290450-5212ca77-1309-42d7-9dc4-04e9754686e1.png"
                    width="626" style=""></span></p>
              <p class="text">（2）追踪跑票、变动、迁移等。《经济学人》（<span
                  style="background-color: rgb(255, 255, 255); color: rgb(38, 38, 38);">The
                  Economist,
                  2016</span>）分析了历年美国报纸对于总统候选人的提及率，制作了如下桑基图。最左为1988年，最右为2016年，每一个节点吧代表当年的一位总统候选人。节点的宽度由其在报纸上的提及率决定，蓝色表示民主党候选人、红色表示共和党候选人。从中我们可以发现许多有趣的现象，首先是舆论在党派之间的切换。例如1988年，报纸对共和党候选人老布什的提及率远超过对手，但到1992年，其中相当一部分流量流向了民主党候选人克林顿，这种流量的变化展现了党派在舆论场上的交锋。其次，舆论与最终的胜选也显示出相关性。在桑基图上方，作者用小圆点标出了当年最终胜出的党派，例如1988年共和党胜利、1992年民主党胜利，这与桑基图呈现的流量信息是可以对应的。按此规律，我们看到，截止作者发稿时，2016年似乎是希拉里必胜的一年。但事实证明，数据也是可能被逆转的。<a
                  href="https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump"
                  target="_blank" style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
              <p class="text"><span style="background-color: rgb(255, 255, 255);"><img
                    src="http://139.224.62.3:3001/upload/images/network/1543671973722-377ca211-f9b7-4ff4-afce-06e37be84cfe.png"
                    width="635" style=""></span></p>
            </div>
          </div>

          <div class="tutorial" style="margin-top: 60px;" id="7">
            <h2>制作教程</h2>
            <table class="text">
              <tbody>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="4" class="sc-198wj70-1 WJiEN">BI工具</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Power BI</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sankey-diagram/"
                      target="view_window" style="text-decoration: underline;">视频教程 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://www.theinformationlab.co.uk/2018/03/09/build-sankey-diagram-tableau-without-data-prep-beforehand/"
                      target="view_window" style="text-decoration: underline;">Tableau制作桑基图分步详解 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">QlikView</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://github.com/brianwmunz/d3sankey-QV11" target="view_window"
                      style="text-decoration: underline;">可参考的扩展 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="8" class="sc-198wj70-1 WJiEN">代码库</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="http://echarts.baidu.com/examples/#chart-type-sankey" target="view_window"
                      style="text-decoration: underline;">官方实例 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">AntV</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/sankey-layouts.html" target="view_window"
                      style="text-decoration: underline;">G2官方实例 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://antv.alipay.com/zh-cn/g6/2.x/demo/flow/table-sankey.html" target="view_window"
                      style="text-decoration: underline;">G6官方实例 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://beta.observablehq.com/@mbostock/d3-sankey-diagram" target="view_window"
                      style="text-decoration: underline;">基本图形的实现 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://bost.ocks.org/mike/sankey/" target="view_window"
                      style="text-decoration: underline;">使用D3的sankey plugin </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">matplotlib</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://matplotlib.org/api/sankey_api.html" target="view_window"
                      style="text-decoration: underline;">matplotlib.sankey官方文档 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="http://pyecharts.org/#/zh-cn/charts_base?id=sankey%EF%BC%88%E6%A1%91%E5%9F%BA%E5%9B%BE%EF%BC%89"
                      target="view_window" style="text-decoration: underline;">pyecharts </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ggplot2</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html"
                      target="view_window" style="text-decoration: underline;">使用ggalluvial包 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AI</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">
                    建议用专项工具生成桑基图后，下载svg文件，再在AI中进行编辑</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://www.zcool.com.cn/work/ZMzI2MjQ4NTY=.html" target="view_window"
                      style="text-decoration: underline;">分步详细教程 </a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="tool" style="margin-top: 60px;" id="8">
            <h2 style="border-bottom: 1px solid rgb(230, 230, 230);">
              专项工具</h2>
            <div>
              <p class="text">（1）<a href="http://app.rawgraphs.io/" target="_blank"
                  style="color: rgb(0, 102, 204);">Rawgraphs</a></p>
              <p class="text">（2）<a href="http://sankeymatic.com/build/" target="_blank"
                  style="color: rgb(0, 102, 204);">Sankeymatic</a>
              </p>
              <p class="text">（3）<a href="https://dydata.io/chart" target="_blank" style="color: rgb(0, 102, 204);">镝数</a>
              </p>
            </div>
          </div>

          <div class="learningresource" style="margin-top: 60px;" id="9">
            <h2 style="border-bottom: 1px solid rgb(230, 230, 230);">学习资源</h2>
            <div>
              <p class="text">（1）<a href="https://www.zhihu.com/question/45502919" target="_blank"
                  style="color: rgb(0, 102, 204);">桑基图有何作用，桑基图又是怎么做出来的？</a></p>
              <p class="text">（2）<a href="http://ecowest.org/2013/05/06/sankey-energy/" target="_blank"
                  style="color: rgb(0, 102, 204);">桑基图历史：在能源业上的应用。</a></p>
              <p class="text">（3）<a href="https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/" target="_blank"
                  style="color: rgb(0, 102, 204);">如何制作桑基图？6种工具推荐。</a></p>
            </div>
          </div>

          <div class="referce" style="margin-top: 60px;" id="10">
            <h2>参考文献</h2>
            <div class="reference" style="height: auto;">
              <div>
                <p class="text"><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">1.Wikipedia</span><span
                    style="color: rgb(187, 187, 187);">. (n.d.). </span><em style="color: rgb(187, 187, 187);">Sankey
                    diagram</em><span style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://en.wikipedia.org/wiki/Sankey_diagram" target="_blank"
                    style="color: rgb(187, 187, 187);">https://en.wikipedia.org/wiki/Sankey_diagram</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">2.DensityDesign Lab. (2017). </span><em
                    style="color: rgb(187, 187, 187);">On Their Way: the Journey of Foreign Fighters</em><span
                    style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://www.informationisbeautifulawards.com/showcase/2323-on-their-way-the-journey-of-foreign-fighters"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.informationisbeautifulawards.com/showcase/2323-on-their-way-the-journey-of-foreign-fighters</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">3.The Economist. (2015). </span><em
                    style="color: rgb(187, 187, 187);">Seeking safety</em><span style="color: rgb(187, 187, 187);">.
                    [online].
                    Available at: </span><a href="https://www.economist.com/graphic-detail/2015/05/12/seeking-safety"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.economist.com/graphic-detail/2015/05/12/seeking-safety</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">4.Kight, S.W. (2017). </span><em
                    style="color: rgb(187, 187, 187);">Who Trump attacks the most on Twitter</em><span
                    style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://www.axios.com/who-trump-attacks-the-most-on-twitter-1513305449-f084c32e-fcdf-43a3-8c55-2da84d45db34.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.axios.com/who-trump-attacks-the-most-on-twitter-1513305449-f084c32e-fcdf-43a3-8c55-2da84d45db34.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">5.Jain, A. (2018). </span><em
                    style="color: rgb(187, 187, 187);">RAPE IN INDIA A visual exploration of systemic rape
                    culture</em><span style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://adityajain15.github.io/Rape_In_India/" target="_blank"
                    style="color: rgb(187, 187, 187);">https://adityajain15.github.io/Rape_In_India/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">6.王小美吖. (2017). </span><em
                    style="color: rgb(187, 187, 187);">桑基图</em><span style="color: rgb(187, 187, 187);">. [online].
                    Available
                    at: </span><a href="https://me.bdp.cn/share/index.html?shareId=sdo_667cd39c7baa7ee3e8e6ca97109ec6b0"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://me.bdp.cn/share/index.html?shareId=sdo_667cd39c7baa7ee3e8e6ca97109ec6b0</a><span
                    style="color: rgb(187, 187, 187);">&nbsp;</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">7.The Economist. (2016). </span><em
                    style="color: rgb(187, 187, 187);">American newspapers resoundingly reject Donald Trump</em><span
                    style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.economist.com/graphic-detail/2016/11/03/american-newspapers-resoundingly-reject-donald-trump</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">8.Netz, A. (2015). </span><em
                    style="color: rgb(187, 187, 187);">Visual Awesomeness Unlocked – Sankey diagram</em><span
                    style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sankey-diagram/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://powerbi.microsoft.com/en-us/blog/visual-awesomeness-unlocked-sankey-diagram/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">9.Baldwin, I. (2018). </span><em
                    style="color: rgb(187, 187, 187);">How to build a Sankey diagram in Tableau without any data prep
                    beforehand</em><span style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://www.theinformationlab.co.uk/2018/03/09/build-sankey-diagram-tableau-without-data-prep-beforehand/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.theinformationlab.co.uk/2018/03/09/build-sankey-diagram-tableau-without-data-prep-beforehand/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">10.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Echarts team.
                    (n.d.).</span><em style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">
                    桑基图</em><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online].
                    Available
                    at:&nbsp;</span><a href="https://echarts.baidu.com/examples/#chart-type-sankey" target="_blank"
                    style="color: rgb(187, 187, 187);">https://echarts.baidu.com/examples/#chart-type-sankey</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">11.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">AntV team. (n.d.). </span><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">桑基图</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/sankey-layouts.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/sankey-layouts.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">12.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">AntV team. (n.d.). </span><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">表格桑基图</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://antv.alipay.com/zh-cn/g6/2.x/demo/flow/table-sankey.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://antv.alipay.com/zh-cn/g6/2.x/demo/flow/table-sankey.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">13.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Bostock, M. (2018).
                  </span><em style="color: rgb(187, 187, 187);">D3 Sankey Diagram</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://beta.observablehq.com/@mbostock/d3-sankey-diagram" target="_blank"
                    style="color: rgb(187, 187, 187);">https://beta.observablehq.com/@mbostock/d3-sankey-diagram</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">14.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Bostock, M. (2012).
                  </span><em style="color: rgb(187, 187, 187);">Sankey Diagram</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://bost.ocks.org/mike/sankey/" target="_blank"
                    style="color: rgb(187, 187, 187);">https://bost.ocks.org/mike/sankey/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">15.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Matplotlib team. (n.d.).
                  </span><em style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">sankey</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://matplotlib.org/api/sankey_api.html" target="_blank"
                    style="color: rgb(187, 187, 187);">https://matplotlib.org/api/sankey_api.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">16.Brunson, J.C</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. (n.d.). </span><em
                    style="color: rgb(187, 187, 187);">Alluvial Diagrams in ggplot2</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://cran.r-project.org/web/packages/ggalluvial/vignettes/ggalluvial.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">17.Gaia_pang. (2019). </span><em
                    style="color: rgb(187, 187, 187); background-color: rgb(255, 255, 255);">【sketch教程】一分钟搞定桑基图</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://www.zcool.com.cn/work/ZMzI2MjQ4NTY=.html" target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.zcool.com.cn/work/ZMzI2MjQ4NTY=.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 January
                    2019].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">18.Cindy etc. (2017). </span><em
                    style="color: rgb(187, 187, 187);">桑基图有何作用，桑基图又是怎么做出来的？</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://www.zhihu.com/question/45502919" target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.zhihu.com/question/45502919</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 January
                    2019].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">19.Tobin, M. (2013). </span><em
                    style="color: rgb(187, 187, 187);">GO WITH THE FLOW: SANKEY DIAGRAMS ILLUSTRATE ENERGY
                    ECONOMY</em><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online].
                    Available
                    at:&nbsp;</span><a href="http://ecowest.org/2013/05/06/sankey-energy/" target="_blank"
                    style="color: rgb(187, 187, 187);">http://ecowest.org/2013/05/06/sankey-energy/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 January
                    2019].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">20.Heslin, J. (2017). </span><em
                    style="color: rgb(187, 187, 187);">Sankey Diagrams: Six Tools for Visualizing Flow Data</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/" target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.azavea.com/blog/2017/08/09/six-sankey-diagram-tool/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 10 January
                    2019].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">21.Hirst, T. (2013). </span><em
                    style="color: rgb(187, 187, 187);">Reshaping Horse Import/Export Data to Fit a
                    Sankey&nbsp;Diagram</em><span style="color: rgb(187, 187, 187);">. [online]. Available at:
                    https://blog.ouseful.info/2013/02/18/reshaping-horse-importexport-data-to-fit-a-sankey-diagram/&nbsp;[Accessed
                    19 February 2019].</span></p>
              </div>
            </div>
          </div>

          <div class="member" style="margin-top: 60px;padding-bottom: 20px;" id="11">

            <h2>贡献者</h2>
            <div style="margin-bottom: 18px;"><span>xym</span> • <span>zym</span></div>
          </div>

        </div>
      </el-col>

    </el-row>



  </div>
</template>

<script>

export default {
  name: 'Aosa',
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {}
}

</script>

<style  scoped>
/* .doc-inner p {
  font-size: 30px;
  line-height: 1.8;
  color: #666;
  max-width: 920px;
  margin: 16px 0;
}

.doc-inner img {
  max-width: 920px;
  width: auto;
}

.doc-inner h1 {
  font-size: 32px;
  margin-bottom: 25px;
  font-weight: normal;
} */
.title1 {
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-bottom: 6px;
  font-size: 2.6em;
}

.text {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  line-height: 30px;
  word-wrap: break-word;
  max-width: 75%;
}

.img1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  float: right;
  width: 320px;
  clear: both;
  margin: 0px 0px 40px 40px;
  box-shadow: rgba(211, 211, 211, 0.5) 0px 0px 4px 2px;
  max-width: 100%;

}

.property {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin-top: 100px;
}

h2 {
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  border-bottom: 1px solid rgb(230, 230, 230);
  padding-bottom: 6px;
}

.ul1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  padding: 0px;
}

.detail {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  margin-top: 60px;
}

.detail1 {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  padding-bottom: 20px;
}

.img2 {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 30px;
  word-wrap: break-word;
  width: 581px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  cursor: nesw-resize;
}

.img3 {
  font-size: 14px;
  color: #4a4a4a;
  line-height: 30px;
  word-wrap: break-word;
  width: 486px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  cursor: nesw-resize;
  margin-top: 20px;
}

.caseIndex {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
}

.leftcase {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 436px;
  margin-left: 6.25%;
}

.item {
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: rgba(211, 211, 211, 0.5) 0px 0px 4px 2px;
}

.caseimg {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  max-width: 100%;
  width: 100%;
}

.rightcase {
  font-size: 14px;
  color: #4a4a4a;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  max-width: 436px;
  margin-left: 3%;
  margin-right: 6.25%;
}

.view-origin {
  border: 1px solid rgb(208, 208, 208);
  float: right;
  font-size: 14px;
  border-radius: 2px;
  text-align: center;
  padding: 8px 12px;
  cursor: pointer;
  color: rgb(74, 74, 74);
  text-decoration: none;
}

.case-text {
  padding: 10px 20px;
  color: rgb(74, 74, 74);
  font-size: 14px;
  text-align: justify;
  line-height: 30px;
}

table {
  display: table;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: gray;
}
</style>

