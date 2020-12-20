<template>
  <div>
      <div align="left">
        <a><img src="../assets/img/logo.png" /></a>
      </div>

    <div>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="white" text-color="black" active-text-color="violet">
        <el-menu-item index="1"><el-link href="#/Home">首页</el-link></el-menu-item>
        <el-menu-item index="2"><el-link href="#/guoji">国际</el-link></el-menu-item>
        <el-menu-item index="3"><el-link href="#/guonei">国内</el-link></el-menu-item>
        <el-menu-item index="4"><el-link href="#/shehui">社会</el-link></el-menu-item>
        <el-menu-item index="5"><el-link href="#/yule">娱乐</el-link></el-menu-item>
        <el-menu-item index="6"><el-link href="#/caijing">财经</el-link></el-menu-item>
        <el-menu-item index="7"><el-link href="#/tiyu">体育</el-link></el-menu-item>
        <el-menu-item index="8"><el-link href="#/juehsi">军事</el-link></el-menu-item>
        <el-menu-item index="9"><el-link href="#/keji">科技</el-link></el-menu-item>
      </el-menu>
    </div>

    <div style="padding-left: 200px;margin-top: 20px;">
      <el-input placeholder="搜索站内资讯或用户" style="width: 240px;"></el-input>
      <el-button type="primary" @click="shousuo">搜索</el-button>
    </div>

    <div class="boxleft">
      <div class="left-container">
        <div class="left-img">
          <a><img src="../assets/img/tt.jpg"></a>
        </div>
        <span class="lxw-title">
          京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱
        </span>
        <span class="lxw-pinglun">
          <div align="left">
            <h4>阿拉丁~小明</h4>
          </div>
          评论：京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱
        </span>
      </div>
      <div class="left-xw">
        <div class="left-img">
          <a><img src="../assets/img/tt1.jpeg"></a>
        </div>
        <div class="lxw-title">
          <a href="#/Newshiwei">世卫:北美一些国家从未走出第一波疫情</a>
        </div>
        <span class="lxw-pinglun">
          <div align="left">
            <h4>阿拉丁~小明</h4>
          </div>
          央视网消息：当地时间18日，世界卫生组织举行新冠肺炎例行发布会，世卫组织卫生紧急项目负责人迈克尔·瑞安表示，过去几天，一些美洲国家上报的病例数量有所增加，令人担忧，美洲区域....
        </span>
      </div>
      <div class="left-xw">
        <div class="left-img">
          <a><img src="../assets/img/2cc.jpeg"></a>
        </div>
        <span class="lxw-title">京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱</span>
        <span class="lxw-pinglun">
          <div align="left">
            <h4>阿拉丁~小明</h4>
          </div>
          评论：京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱
        </span>
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

  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {

    }
  }
</script>


<style scoped>


  .new-shousuo {
    width: 400px;
    float: right;
    min-height: 60px;
  }

  .boxleft {
    width: 1200px;
    height: 117px;
    border-top: 1px dashed #eee;
    cursor: pointer;
    margin-top: 0px;
    float: left;
    padding-top: 15px;
    border-left: 70px;
  }

  .left-container {
    width: 1500px;
    float: left;
    min-height: 100px;
    padding-top: 20px;
  }

  .left-xw{
    width: 1500px;
    float: left;
    min-height: 100px;
    padding-top: 80px;
  }

  .left-img {
    width: 400px;
    height: 100px;
    float: left;
  }

  .lxw-title {
    width: 530px;
    color: black;
    padding-top: 5px;
    font-size: 19px;
    font-weight: 700;
    float: left;
    background-color: #FFFFFF;
  }

  .lxw-pinglun {
    width: 700px;
    color: #2C3E50;
    font-size: 16px;
    font-weight: 700;
    float: left;
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
