<template>
  <div>

  <div class="fwb" v-html="htmlVal">

  </div>

  <div style="width: 800px;padding-left: 400px;">
    <el-form ref="form" :model="form">
      <el-form-item>
         <el-input type="textarea" placeholder="请输入内容" v-model="form.content"></el-input>
      </el-form-item>
    </el-form>
  </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          content:''
        },
        htmlVal: '<p><strong><em><u>我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾我确认芙蓉区饿哦亲排名第覅䄾<span class="ql-cursor">﻿</span></u></em></strong></p>'
      }
    }
  }
</script>

<style>
</style>
