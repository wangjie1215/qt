<template>
  <div>
    <h2>详情页面</h2>

    <div class="fwb" v-html="htmlVal">
      <el-form label-width="80px" :model="xqfrom" ref="addFrom">
        <el-form-item prop="contenthtml">
          <el-input v-model="xqform.contenthtml" style="width: 50%;right: 280px;"></el-input>
        </el-form-item>
      </el-form>
    </div>

    <div style="width: 800px;padding-left: 400px;">
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input type="textarea" placeholder="请输入内容" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发布</el-button>
          <el-button type="primary" plain @click="shouye">返回首页</el-button>
        </el-form-item>
      </el-form>
    </div>



  </div>
</template>

<script>
  export default {
    data() {
      return {
        xqform:{
          contenthtml:''
        },
        form: {
          content: ''
        },
        htmlVal: '<p><strong><em><u>我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾<span class="ql-cursor">﻿</span></u></em></strong></p>'
      }
    },
    methods: {
      shouye: function() {
        this.$router.push("/Home");
      }
    },
    created:function(){
      this.xqform.content=this.$route.query.content;
      this.xqform.contenthtml=this.$route.query.contenthtml;
    }
  }
</script>

<style>
  .fwb {
    width: 800px;
    height: 200px;
    padding-left: 400px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
</style>
