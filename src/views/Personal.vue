<template>
  <div>
    <h1>个人中心</h1>
    <div class="boxL">
      <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
        <el-form-item label="编号">
          <el-input v-model="sizeForm.user_id" readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="sizeForm.user_phone" readonly="true"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div>
      <div align="right">
        <el-button type="primary" plain @click="shouye">返回首页</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的" name="first">
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
        </el-tab-pane>
        <el-tab-pane label="回复" name="secord">回复</el-tab-pane>
        <el-tab-pane label="点赞" name="third">点赞</el-tab-pane>
        <el-tab-pane label="编辑个人资料" name="fourth">
          <h3>编辑个人资料</h3>
          <div style="width: 580px;height: 400px;padding-left: 500px;padding-top: 40px;">
            <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
              <el-form-item label="编号">
                <el-input v-model="sizeForm.user_id" readonly="true"></el-input>
              </el-form-item>
              <el-form-item label="电话">
                <el-input v-model="sizeForm.user_phone"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">确定</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizeForm: {
          user_id:'',
          user_phone:''
        },
        activeName: 'first'
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      shouye:function(){
        this.$router.push("/Home");
      }
    }
  };
</script>

<style>
  .boxL {
    width: 400px;
    height: 500px;
    padding-top: 40px;
    padding-left: 560px;
  }

  .left-xw {
    width: 1500px;
    float: left;
    min-height: 100px;
    padding-top: 100px;
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
</style>
