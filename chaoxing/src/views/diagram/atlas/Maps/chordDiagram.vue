
<template>
  <div id="main2" style="width: 100%;height:100%;background-color: #fff;">

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

          <h1 class="title1" id="1">弦图 - Chord Diagram</h1>
          <img class="img1"
            src="http://www.tuzhidian.com:3001/upload/images/2019/%E5%BC%A6%E5%9B%BE_bfe60ee122e9aeee86fc7b67374c765d.png">
          <p class="text">
            弦图，是一种表示实体之间相互关系的图形方法。直观的看，弦图由节点分段和弧形的边构成。节点分段沿圆周排列，节点之间的关系通过使用弧线或贝塞尔曲线相互连接。值得注意的是，这些弧线是有宽度的，且起止宽度可以不一样。这本质上是因为，弧线的宽度反映了一种矩阵关系（例如A[1,2]=3，A[2,1]=4），因此取值是双向的。

            弦图所应用的这种表达方法，称为“分层的边缘捆绑”（hierarchical edge
            bundling），它可以在“多类别+复杂关系”的情况下，有效降低视觉复杂度。就场景而言，弦图最常被用来表现复杂的关系、以及数据的流动情况等。

            对于弦图来说，交互往往是必要的。加入高亮、数据标签等功能，可以让读者更容易的阅读图表、进行自由探索。有时候，由于图表确实比较复杂，制图者也会选择制作故事线，一步步带领读者领会。

            设计上，建议使用不同的颜色，将数据分组到不同的类别，有助于比较和区分。同时，注意用色的区分度，避免画面杂乱。对于弦的着色，可以自行设定标准，如采用颜色渐变，或者根据数值较大的那一方来着色。

            在弦图布局上，一般建议使用符合最少重叠原则的布局。 </p>

          <div class="property" id="2">
            <h2>图表属性</h2>
            <ul class="ul1">
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">形状:</strong><span>圆形</span></li>
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">图类:</strong><span>示意图</span></li>
              <li style="margin-top: 10px;"><strong style="margin-right: 20px;">功能:</strong><span>关系 • 比较</span></li>
            </ul>
          </div>

          <div class="detail" id="3">
            <h2>图表详解</h2>
            <div class="detail1">
              <h3>元素构成
              </h3>
              <p>
                <img class="img2"
                  src="http://www.tuzhidian.com:3001/upload/images/2019/%E5%92%8C%E5%BC%A6%E5%9B%BE_c378c637bd1d5025dc020019ea529e71.jpeg">
              </p>
              <h3 style="margin-top: 40px;">
                适用场景
              </h3>
              <p class="text">适合数据的类别很多、关系很复杂时，特别是双向关系（数据是矩阵形态的）。弦图最常用来表现复杂的关系（例如人与其他物种之间基因的联系）、以及数据的流动情况（如手机市场份额流动）等。</p>
              <h3 style="margin-top: 40px;">
                不适用场景
              </h3>
              <p style="margin-left: 5px;margin-top: 10px;" class="text">
                当数据量较大，特别是没有交互功能时，要慎用弦图，否则会非常影响阅读。下图的案例（Crimi, 2016）用和弦图表现了人大脑中各个区域的联系。由于数据量很大、关系很复杂，尽管有交互，也很难辨识。</p>
              <img class="img3"
                src="http://www.tuzhidian.com:3001/upload/images/2019/%E5%8F%8D%E4%BE%8B2_86965402736ee15b4b5998f1cf687fe6.png">
              <p style="margin-left: 5px;margin-top: 10px;" class="text">
                或者，如果希望描摹数据间的关系网、找出其中的关键节点等，可以使用力导向图。</p>
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
                      src="http://www.tuzhidian.com:3001/upload/images/2019/%E5%9F%BA%E5%9B%A0_b70a2e3bc7afe88c14ac0cf7b2c6ebad.png">
                  </div>
                  <div class="case-text">
                    早在2007年，纽约时报就用和弦图展示人与其他物种之间基因的联系。着色的类别从左到右分别是老鼠、恒河猴、黑猩猩、鸡。相似的基因，被连接到了下方的“人类”部分。颜色的选择上，区分度很大，一目了然。在排版上也加入了小图和适当的介绍，方便阅读。
                  </div><a class="view-origin"
                    href="https://archive.nytimes.com/www.nytimes.com/imagepages/2007/01/22/science/20070123_SCI_ILLO.html"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/pai_8160479e1388ad5d0f50e6ad71b637a9.jpeg">
                  </div>
                  <div class="case-text">作者用弦图画出的π的小数位置关系，展现出数学的天然之美，用色缤纷但并不杂乱。
                  </div><a class="view-origin"
                    href="https://fineartamerica.com/featured/three-friends-2-cristian-vasile.html" target="_blank"
                    rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/%E7%BB%93%E5%90%88%E5%9C%B0%E5%9B%BE_035fc3c67c5e1675acb30bfbb26765c7.jpeg">
                  </div>
                  <div class="case-text">此作品将弦图与地图相结合，构思新颖、布局颇具设计感。
                  </div><a class="view-origin" href="https://www.behance.net/gallery/236395/Digital-Nostalgia"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
              </div>

              <div class="rightcase">
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/%E6%A0%91%E6%9E%9D_c44a95b1dca775c5bda209214d84038c.png">
                  </div>
                  <div class="case-text">
                    这是一个交互弦图。点击的时候，只显示与点击对象相关的线条，因此看上去很干净。同时，作者对连线的弧度做了柔化，因此看上去像温柔的树枝。在这个案例中，“和弦”的宽度没有数量上的意义，因此是按渐变色着色的。
                  </div><a class="view-origin" href="http://well-formed.eigenfactor.org/radial.html" target="_blank"
                    rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/%E9%A9%AC%E8%B5%9B%E5%85%8B_bfc3092a3fe2f455e3b03125f172c76a.png">
                  </div>
                  <div class="case-text">实物弦图，创意马赛克。</div><a class="view-origin"
                    href="https://sperlingmosaics.com/2012/05/wip-wednesday-chord-diagram-9-may-2012/" target="_blank"
                    rel="noopener noreferrer">查看出处</a>
                </div>
                <div class="item">
                  <div><img class="caseimg"
                      src="http://www.tuzhidian.com:3001/upload/images/2019/%E9%9A%BE%E6%B0%91_008a59f38be1f6dad38d6c32486d58be.png">
                  </div>
                  <div class="case-text">以讲故事方法推进的大型交互项目，讲述了世界难民流动情况。</div><a class="view-origin"
                    href="https://csaladenes.wordpress.com/2015/06/21/a-visual-exploratory-of-refugee-flows-over-the-world-using-dynamic-chord-diagrams/"
                    target="_blank" rel="noopener noreferrer">查看出处</a>
                </div>
              </div>
            </div>
          </div>

          <div class="scene" style="margin-top: 60px;" id="6">
            <h2>使用场景</h2>
            <div>
              <p class="text">(1)d3创始人Mike
                Bostock（2012）用Uber数据做的旧金山周边的打车情况，可交互。“弦”的宽度表示两地之间打车的相对频率，越宽代表越频繁的乘坐。“和弦”的颜色由数值大的那一方决定，比如，有2.2％的人从南部市场（蓝色）打车到市中心（粉色），但只有1.2％的人从市中心打车到南部市场，因此它们之间的和弦为蓝色。<a
                  href="https://bost.ocks.org/mike/uberdata/" target="_blank"
                  style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a></p>
              <p class="text"><span style="background-color: rgb(255, 255, 255);"><img
                    src="http://www.tuzhidian.com:3001/upload/images/2019/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202018-12-22%20%E4%B8%8B%E5%8D%887.09.32_705943f71ecd5f55f7de19d1c65c4440.png"
                    width="626" style=""></span></p>
              <p class="text">（2）这一案例（Bremer,
                2014）很好的展示了各大手机品牌的竞争情况。着色上，同样按“量多者”着色。例如，左图意在表示，许多使用诺基亚的用户，转而使用了三星。但原本使用三星的用户，换成诺基亚的却很少。因此，该和弦使用了三星的颜色，即紫色。这个案例的特别之处还在于，并不一开始就把复杂的弦图摆在你面前，而是用讲故事的方法一步步展开。
                <a href="https://www.visualcinnamon.com/2014/12/using-data-storytelling-with-chord.html" target="_blank"
                  style="color: rgb(0, 102, 204);">[点击访问原作品网页]</a>
              </p>
              <p class="text"><span style="background-color: rgb(255, 255, 255);"><img
                    src="http://www.tuzhidian.com:3001/upload/images/2019/%E6%89%8B%E6%9C%BA_378d7f6314df083ca4e836b7eb236088.png"
                    width="635" style=""></span></p>
            </div>
          </div>

          <div class="tutorial" style="margin-top: 60px;" id="7">
            <h2>制作教程</h2>
            <table class="text" style="width: 80%;">
              <tbody style="display: table-row-group;
    vertical-align: middle;
    border-color: inherit;">
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="6" class="sc-198wj70-1 WJiEN">BI工具</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Excel</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">Power BI</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://appsource.microsoft.com/en-us/product/power-bi-visuals/WA104380761?tab=Overview"
                      target="view_window" style="text-decoration: underline;">使用Chord插件 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="http://dy.163.com/v2/article/detail/CQ7Q589A0524HOUN.html" target="view_window"
                      style="text-decoration: underline;">基本操作教程 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Tableau</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://public.tableau.com/profile/datainsight2610#!/vizhome/PhoneChord_0/ChordDiagramBarChart"
                      target="view_window" style="text-decoration: underline;">tableau public实例 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">QlikView</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://biexperience.wordpress.com/2014/05/07/chord-diagram-extension-object/"
                      target="view_window" style="text-decoration: underline;">使用extension功能 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://github.com/VizMatt/QlikSense_ChordDiagram" target="view_window"
                      style="text-decoration: underline;">使用extension功能2 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="8" class="sc-198wj70-1 WJiEN">代码库</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">ECharts</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://echarts.baidu.com/echarts2/doc/example.html" target="view_window"
                      style="text-decoration: underline;">官方实例:echarts2版本 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AntV</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/chord.html" target="view_window"
                      style="text-decoration: underline;">G2官方实例 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">D3</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://d3-wiki.readthedocs.io/zh_CN/master/Chord-Layout/" target="view_window"
                      style="text-decoration: underline;">官方API说明 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://beta.observablehq.com/@mbostock/d3-chord-diagram" target="view_window"
                      style="text-decoration: underline;">基础实例 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">matplotlib</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://plot.ly/python/filled-chord-diagram/" target="view_window"
                      style="text-decoration: underline;">Plotly：实现基本和弦图教程 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="https://python-graph-gallery.com/231-chord-diagram-with-bokeh/" target="view_window"
                      style="text-decoration: underline;">Bokeh：基本和弦图实例 </a></td>
                </tr>
                <tr>
                  <td width="25%" rowspan="2" class="sc-198wj70-1 WJiEN">ggplot2</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="http://www.r-graph-gallery.com/123-circular-plot-circlize-package-2/" target="view_window"
                      style="text-decoration: underline;">Circlize package: 基本和弦图实例 </a></td>
                </tr>
                <tr>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;"><a
                      href="http://www.r-graph-gallery.com/122-a-circular-plot-with-the-circlize-package/"
                      target="view_window" style="text-decoration: underline;">Circlize package: 双层和弦图实例 </a></td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="3" class="sc-198wj70-1 WJiEN">设计工具</td>
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">PS</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">AI</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
                <tr style="background: rgb(246, 246, 246);">
                  <td width="25%" rowspan="1" class="sc-198wj70-1 WJiEN">Sketch</td>
                  <td width="50%" class="sc-198wj70-1 WJiEN" style="text-align: left; padding-left: 15px;">--</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="tool" style="margin-top: 60px;" id="8">
            <h2 style="border-bottom: 1px solid rgb(230, 230, 230);">
              专项工具</h2>
            <div>
              <p class="text">（1）<a href="https://app.flourish.studio/@flourish/chord-diagram" target="_blank"
                  style="color: rgb(0, 102, 204);">Flourish</a></p>
              <p class="text">（2）<a href="http://circos.ca/" target="_blank" style="color: rgb(0, 102, 204);">Circos</a>
              </p>
            </div>
          </div>

          <div class="learningresource" style="margin-top: 60px;" id="9">
            <h2 style="border-bottom: 1px solid rgb(230, 230, 230);">学习资源</h2>
            <div>
              <p class="text">（1）<a href="https://ieeexplore.ieee.org/abstract/document/4015425" target="_blank"
                  style="color: rgb(0, 102, 204);">“分层的边缘捆绑”概念的提出，参见论文。</a></p>
              <p class="text">（2）<a href="https://www.visualcinnamon.com/2015/08/stretched-chord.html" target="_blank"
                  style="color: rgb(0, 102, 204);">由场景案例2作者撰写，复盘如何用d3玩转和弦图，做出类似桑基图的效果。</a></p>
              <p class="text">（3）<a href="https://github.com/jokergoo/circlize" target="_blank"
                  style="color: rgb(0, 102, 204);">基于R语言的Circlize库，支持各种圆形图表／图案的绘制。</a></p>
            </div>
          </div>

          <div class="referce" style="margin-top: 60px;" id="10">
            <h2>参考文献</h2>
            <div class="reference" style="height: auto;">
              <div id="reference-graph-detail-content">
                <p class="text"><span style="color: rgb(187, 187, 187); background-color: rgb(255, 255, 255);">1.Holten,
                    D. (2006).
                    Hierarchical edge bundles: Visualization of adjacency relations in hierarchical data.&nbsp;</span><em
                    style="color: rgb(187, 187, 187);">IEEE Transactions on visualization and computer graphics</em><span
                    style="color: rgb(187, 187, 187); background-color: rgb(255, 255, 255);">,&nbsp;</span><em
                    style="color: rgb(187, 187, 187);">12</em><span
                    style="color: rgb(187, 187, 187); background-color: rgb(255, 255, 255);">(5), pp.741-748.</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">2.AntV墨者学院.
                    (n.d.).&nbsp;</span><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">和弦图</em><span
                    style="color: rgb(187, 187, 187);">. [online]. Available at: </span><a
                    href="https://antv.alipay.com/zh-cn/vis/chart/chord.html" target="_blank"
                    style="color: rgb(187, 187, 187);">https://antv.alipay.com/zh-cn/vis/chart/chord.html</a><span
                    style="color: rgb(187, 187, 187);">&nbsp;</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">[Accessed 3 December
                    2018].</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">3.The New
                    York Times.
                    (2007). </span><em style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Close-ups
                    of the Genome, Species by Species by Species</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a
                    href="https://archive.nytimes.com/www.nytimes.com/imagepages/2007/01/22/science/20070123_SCI_ILLO.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://archive.nytimes.com/www.nytimes.com/imagepages/2007/01/22/science/20070123_SCI_ILLO.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">4.Eigenfactor</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. (n.d.). </span><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">Citation Patterns</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="http://well-formed.eigenfactor.org/radial.html" target="_blank"
                    style="color: rgb(187, 187, 187);">http://well-formed.eigenfactor.org/radial.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">5.Vasile, C. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2014). </span><em
                    style="color: rgb(187, 187, 187);">Three Friends #2</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://fineartamerica.com/featured/three-friends-2-cristian-vasile.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://fineartamerica.com/featured/three-friends-2-cristian-vasile.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">6.Sperling, J. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2012). </span><em
                    style="color: rgb(187, 187, 187);">WIP Wednesday: “Chord Diagram” (9 May 2012)</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://sperlingmosaics.com/2012/05/wip-wednesday-chord-diagram-9-may-2012/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://sperlingmosaics.com/2012/05/wip-wednesday-chord-diagram-9-may-2012/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">7.Button, P. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2009). </span><em
                    style="color: rgb(187, 187, 187);">Digital Nostalgia</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://www.behance.net/gallery/236395/Digital-Nostalgia" target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.behance.net/gallery/236395/Digital-Nostalgia</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 1 February
                    2019].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">8.Bostock, M. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2012). </span><em
                    style="color: rgb(187, 187, 187);">Uber Rides by Neighborhood</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://bost.ocks.org/mike/uberdata/" target="_blank"
                    style="color: rgb(187, 187, 187);">https://bost.ocks.org/mike/uberdata/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">9.Bremer, N. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2014). </span><em
                    style="color: rgb(187, 187, 187);">Using “Data Storytelling” with a chord diagram</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://www.visualcinnamon.com/2014/12/using-data-storytelling-with-chord.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.visualcinnamon.com/2014/12/using-data-storytelling-with-chord.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">10.Csala, D. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2015). </span><em
                    style="color: rgb(187, 187, 187);">A visual exploratorium of refugee flows over the world using
                    dynamic chord&nbsp;diagrams</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a
                    href="https://csaladenes.wordpress.com/2015/06/21/a-visual-exploratory-of-refugee-flows-over-the-world-using-dynamic-chord-diagrams/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://csaladenes.wordpress.com/2015/06/21/a-visual-exploratory-of-refugee-flows-over-the-world-using-dynamic-chord-diagrams/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">11.Excel数据分析. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2017). </span><em
                    style="color: rgb(187, 187, 187);">Excel&amp;Power BI双剑合璧：和弦图（Chord）</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="http://dy.163.com/v2/article/detail/CQ7Q589A0524HOUN.html" target="_blank"
                    style="color: rgb(187, 187, 187);">http://dy.163.com/v2/article/detail/CQ7Q589A0524HOUN.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">12.DataInsight. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2015). </span><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">PhoneChord</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a
                    href="https://public.tableau.com/profile/datainsight2610#!/vizhome/PhoneChord_0/ChordDiagramBarChart"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://public.tableau.com/profile/datainsight2610#!/vizhome/PhoneChord_0/ChordDiagramBarChart</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">13.Vitantonio, J.I. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2014). </span><em
                    style="color: rgb(187, 187, 187);">Chord diagram extension object</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://biexperience.wordpress.com/2014/05/07/chord-diagram-extension-object/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://biexperience.wordpress.com/2014/05/07/chord-diagram-extension-object/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">14.Echarts
                    team.
                    (n.d.).</span><em style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">
                    和弦图</em><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online].
                    Available at:&nbsp;</span><a href="https://echarts.baidu.com/echarts2/doc/example.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://echarts.baidu.com/echarts2/doc/example.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">15.AntV
                    team.
                    (n.d.).</span><em style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">
                    和弦图</em><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online].
                    Available at:&nbsp;</span><a href="https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/chord.html"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://antv.alipay.com/zh-cn/g2/3.x/demo/relation/chord.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">16.Bostock,
                    M. (2018).
                  </span><em style="color: rgb(187, 187, 187);">D3 Chord Diagram</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://beta.observablehq.com/@mbostock/d3-chord-diagram" target="_blank"
                    style="color: rgb(187, 187, 187);">https://beta.observablehq.com/@mbostock/d3-chord-diagram</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">17.Plotly.
                    (n.d.).
                  </span><em style="color: rgb(187, 187, 187);">Filled Chord Diagram in Python</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://plot.ly/python/filled-chord-diagram/" target="_blank"
                    style="color: rgb(187, 187, 187);">https://plot.ly/python/filled-chord-diagram/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">18.Holtz, Y.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> (n.d.). </span><em
                    style="color: rgb(187, 187, 187);">#231 Chord diagram with Bokeh</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a href="https://python-graph-gallery.com/231-chord-diagram-with-bokeh/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">https://python-graph-gallery.com/231-chord-diagram-with-bokeh/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">19.The R Graph Gallery.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> (n.d.). </span><em
                    style="color: rgb(187, 187, 187);">#122 A CIRCULAR PLOT WITH THE CIRCLIZE PACKAGE</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available
                    at:&nbsp;</span><a
                    href="http://www.r-graph-gallery.com/122-a-circular-plot-with-the-circlize-package/" target="_blank"
                    style="color: rgb(187, 187, 187);">http://www.r-graph-gallery.com/122-a-circular-plot-with-the-circlize-package/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">20.The R Graph Gallery.</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> (n.d.). </span><em
                    style="color: rgb(187, 187, 187);">#123 CIRCULAR PLOT – CIRCLIZE PACKAGE (2)</em><em
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">.</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [online]. Available
                    at:&nbsp;</span><a href="http://www.r-graph-gallery.com/123-circular-plot-circlize-package-2/"
                    target="_blank"
                    style="color: rgb(187, 187, 187);">http://www.r-graph-gallery.com/123-circular-plot-circlize-package-2/</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">&nbsp;[Accessed 26 December
                    2018].</span></p>
                <p class="text"><span style="color: rgb(187, 187, 187);">21.Bremer, N. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2015). </span><em
                    style="color: rgb(187, 187, 187);">Hacking a chord diagram to visualize a flow</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><a href="https://www.visualcinnamon.com/2015/08/stretched-chord.html" target="_blank"
                    style="color: rgb(187, 187, 187);">https://www.visualcinnamon.com/2015/08/stretched-chord.html</a><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 26 December
                    2018].</span></p>
                <p class="text"><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">22.</span><span
                    style="color: rgb(187, 187, 187);">Crimi, A. </span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">(2016). </span><em
                    style="color: rgb(187, 187, 187);">Chord diagrams with&nbsp;d3js</em><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);">. [online]. Available at:
                  </span><span
                    style="color: rgb(187, 187, 187);">http://www.alessandrocrimi.com/chords/test_chord.html</span><span
                    style="background-color: rgb(255, 255, 255); color: rgb(187, 187, 187);"> [Accessed 19 February
                    2019].</span></p>
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

td {
  display: table-cell;
  vertical-align: inherit;
}

tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}</style>

