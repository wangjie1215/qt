<template>
  <el-menu class="el-menu-demo" mode="horizontal" background-color="#334157" text-color="#fff" active-text-color="#fff">
    <el-button class="buttonimg">
      <img class="showimg" :src="collapsed?imgshow:imgsq" @click="doToggle()">
    </el-button>

    <el-submenu index="2" class="submenu">
      用户:<template slot="title">{{this.usrName}}</template>
      <el-menu-item index="2-1">设置</el-menu-item>
      <el-menu-item index="2-2">个人中心</el-menu-item>
      <el-menu-item @click="exit()" index="2-3">退出</el-menu-item>
    </el-submenu>
  </el-menu>

</template>

<script>
  export default {
    data: function() {
      return {
        collapsed: false,
        imgshow: require('../assets/img/show.png'),
        imgsq: require('../assets/img/sq.png')
      }
    },
    methods: {
      exit: function() {
        this.$router.push("/Login");
      },
      doToggle: function() {
        let collapsed = !this.collapsed;
        this.collapsed = collapsed;
        this.$root.Bus.$emit('abcd', collapsed);
      }
    },
    created: function() {
      this.usrName = this.$route.query.usrName;
    }

  }
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    border: none;
  }

  .submenu {
    float: right;
  }

  .buttonimg {
    height: 60px;
    background-color: transparent;
    border: none;
  }

  .showimg {
    width: 26px;
    height: 26px;
    position: absolute;
    top: 17px;
    left: 17px;
  }

  .showimg:active {
    border: none;
  }
</style>
