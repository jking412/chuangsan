
<template>
  <div id="main1" style="width: 100%;height:100%;">
    <div class="doc-inner">
      <h1>桑基图 - Sankey Diagram</h1>
      <p><img src="../pic/1.png"></p>
      <h2>桑基图的简介</h2>
      <p>桑基图 (Sankey Diagram)，是一种特定类型的流图，用于描述一组值到另一组值的流向。上图为1869年，查尔斯米纳德（Charles Minard）绘制的1812年拿破仑征俄图（Map
        of Napolean's
        Russian Campaign of 1812），这是一个在地图上覆盖桑基图的流程图。1898年爱尔兰人Matthew Henry Phineas Riall Sankey
        在土木工程师学会会报纪要的一篇关于蒸汽机能源效率的文章中首次推出了第一个能量流动图，此后便以其名字命名为 Sankey 图，中文音译为桑基图。</p>
      <p>图中延伸的分支的宽度对应数据流量的大小。桑基图的特点如下：</p>
      <ul>
        <li>起始流量和结束流量相同，所有主支宽度的总和与所有分出去的分支宽度总和相等，保持能量的平衡；</li>
        <li>在内部，不同的线条代表了不同的流量分流情况，它的宽度成比例地显示此分支占有的流量；</li>
        <li>节点不同的宽度代表了特定状态下的流量大小。</li>
      </ul>
      <p>桑基图通常应用于能源、材料成分、金融等数据的可视化分析。</p>
      <h2>桑基图的构成</h2>
      <p><img class="constitute-img" src="../pic/2.png" width="400px" height="240"></p>

      <table class="struct-table">
        <tbody>
          <tr>
            <th>图表类型</th>
            <th>桑基图</th>
          </tr>
          <tr>
            <td>适合的数据</td>
            <td>节点数据集（可选），边数据集</td>
          </tr>
          <tr>
            <td>功能</td>
            <td>观察节点<code>关系</code></td>
          </tr>
          <tr>
            <td>数据与图形的映射</td>
            <td>权重映射到节点和边的宽度</td>
          </tr>
          <tr>
            <td>适合的数据条数</td>
            <td>10 条以上</td>
          </tr>
        </tbody>
      </table>
    </div>

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
.doc-inner p {
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
}
</style>

