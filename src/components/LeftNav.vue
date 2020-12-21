<template>
	<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#334157"
	 text-color="#fff" active-text-color="#ffd04b" :collapse="collapsed" :collapse-transition="bb">
		<!-- <el-menu default-active="2" :collapse="collapsed" collapse-transition router :default-active="$route.path" unique-opened class="el-menu-vertical-demo" background-color="#334157" text-color="#fff" active-text-color="#ffd04b"> -->
		<div class="logobox">
			<!-- <img class="logoimg" src="../assets/img/logo.png" alt=""> -->
		</div>
		<el-submenu index="1">
			<template slot="title">
				<i class="el-icon-location"></i>
				<span>导航一</span>
			</template>
			<el-menu-item-group>
				<template slot="title">分组一</template>
				<el-menu-item index="1-1">选项1</el-menu-item>
			</el-menu-item-group>
			<el-menu-item-group title="分组2">
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-menu-item-group>
			<el-submenu index="1-4">
				<template slot="title">选项4</template>
				<el-menu-item index="1-4-1">选项1</el-menu-item>
			</el-submenu>
		</el-submenu>
		<el-menu-item index="2">
			<i class="el-icon-menu"></i>
			<span slot="title">导航二</span>
		</el-menu-item>
		<el-menu-item index="3">
			<i class="el-icon-document"></i>
			<span slot="title">导航三</span>
		</el-menu-item>
		<el-menu-item index="4">
			<i class="el-icon-setting"></i>
			<span slot="title">导航四</span>
		</el-menu-item>
	</el-menu>
</template>
<script>
	// export default {
	// 	data:function(){
	// 		return {
	// 			collapsed: false, //折叠
	// 			bb: true //过渡动画
	// 		}
	// 	}
	// }

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
