<template>
  <div>
    <div>
      <a><img src="../assets/img/logo.png" /></a>
    </div>

    <div>
      <div style="padding-left: 800px;">
        <el-button type="primary" plain @click="shouye">返回首页</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="经典" name="first">
          <h1>详情页面</h1>
          <div class="shiwei_xq">
            世卫:北美一些国家从未走出第一波疫情
            <div class="shiwei_body">
              央视网消息：当地时间18日，世界卫生组织举行新冠肺炎例行发布会，世卫组织卫生紧急项目负责人迈克尔·瑞安表示，过去几天，一些美洲国家上报的病例数量有所增加，令人担忧，美洲区域目前正处于病毒密集传播的阶段。
            </div>
            <div class="shiwei_img">
              <a><img src="../assets/img/TT.jpeg" /></a>
            </div>
            <div class="shiwei_body">
              世卫组织卫生紧急项目负责人 迈克尔·瑞安：墨西哥和其他北美国家一样，实际上从未走出第一波疫情。虽然疫情得到了一定程度的控制，但病例又再次激增，我们看到相同的情况，也在其他国家出现，比如巴西和美国。
            </div>
            <div class="shiwei_xq">
              世卫：注意到南非研究人员发现病毒变异
            </div>
            <div class="shiwei_body">
              此外，世卫组织卫生紧急项目技术主管玛丽亚·范·科霍夫表示，已注意到南非研究人员发现了一些新冠病毒变异。新冠病毒会随时间发生改变，这些变异是可预料的，工作组已与南非研究人员合作观察这些变异是否会影响病毒严重性，是否会更易传播，以及其对诊断、治疗和疫苗的影响。目前没有迹象表明病毒的行为出现变化。
            </div>
          </div>

          <div class="boxright">
            <div class="gongaolan">
              <div class="gongaolan_title">
                ~~公告栏~~
              </div>
              <div class="gongaolan_body">
                太阳能光伏，太阳能光伏，太阳能光伏，太阳能光伏，太阳能光伏
              </div>
            </div>
            <div align="right">
              <el-input type="textarea" placeholder="刷个存在感叭......"></el-input>
              <el-button type="primary" @click="fasong">发送</el-button>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="荤笑话" name="second">荤笑话</el-tab-pane>
        <el-tab-pane label="精分" name="third">精分</el-tab-pane>
        <el-tab-pane label="脑残" name="fourth">脑残</el-tab-pane>
        <el-tab-pane label="冷笑话" name="fifth">冷笑话</el-tab-pane>
      </el-tabs>
    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName:'first'
      }
    },
    methods: {
      shouye: function() {
        this.$router.push("/Home");
      }
    }
  }
</script>

<style>
  .shiwei_xq {
    font-size: 24px;
    width: 800px;
    height: 50px;
    padding-left: initial;
    float: left;
    padding-top: 20px;
  }

  .shiwei_body {
    font-size: 18px;
    width: 800px;
    height: 100px;
    padding-left: 190px;
    float: left;
    padding-top: 30px;
    padding-bottom: 60px;
  }

  .shiwei_img {
    width: 800px;
    height: 400px;
    padding-left: 190px;
    float: left;
    padding-top: 20px;
  }

  .boxright {
    width: 300px;
    height: 800px;
    border-top: 1px dashed #eee;
    cursor: pointer;
    margin-top: 0px;
    float: right;
    background-color: floralwhite;
    padding-top: 30px;
  }

  .gongaolan {
    width: 300px;
    height: 300px;
    color: violet;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 700;
    float: right;
  }

  .gongaolan_title {
    position: relative;
    width: 100px;
    height: 38px;
    line-height: 38px;
    float: left;
  }

  .gongaolan_body {
    width: 300px;
    height: 200px;
    color: #2C3E50;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 700;
    float: right;
  }
</style>
