<template>
  <el-menu router default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
    background-color="#334157" text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed" :collapse-transition="bb">
    <!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
    <div class="logobox">
      <img class="logoimg" src="../assets/img/logo.png" alt="">
    </div>
    <el-submenu v-for="n1 in treeList" :index="'key2'+n1.treeNodeId" :key="n1.treeNodeId">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{n1.treeNodeName}}</span>
      </template>
      <el-menu-item :index="n2.url" v-for="n2 in n1.children" :key="'key2'+n2.treeNodeId">{{n2.treeNodeName}}</el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
  export default {
    data: function() {
      return {
        collapsed: false, //折叠
        bb: true, //过渡动画
        treeList: []
      }
    },
    created: function() {
      this.$root.Bus.$on('abcd', (v) => {
        return this.collapsed = v;
      });

      var url = this.axios.urls.SYS_TREENODE;
      this.axios.post(url).then(resp => {
        console.log(resp);
        this.treeList = resp.data.result;
      }).create(resp => {
        console.log(resp);
      });
    }
  }
</script>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
    text-align: left;
  }

  .el-menu-item-group__title {
    padding: 0px;
  }

  .el-menu-bg {
    background-color: #1f2d3d !important;
  }

  .el-menu {
    border: none;
  }

  .logobox {
    height: 40px;
    line-height: 40px;
    color: #9d9d9d;
    font-size: 20px;
    text-align: center;
    padding: 20px 0px;
  }

  .logoimg {
    height: 40px;
  }
</style>
