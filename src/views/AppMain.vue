<template>
	<el-container class="main-container">
		<el-aside class="main-aside">
			<LeftNav></LeftNav>
		</el-aside>
		<el-container>
			<el-header class="main-header">
				<TopNav></TopNav>
			</el-header>
			<el-main class="main-center">Main</el-main>
		</el-container>
	</el-container>
</template>

<script>
	// 1.导入组件
  import LeftNav from '@/components/LeftNav.vue'
	import TopNav from '@/components/TopNav.vue'



	// 导出模块
	export default {


    components: { //2.注册组件
      LeftNav,
    	TopNav,

    },

    // created:function() {
    //   this.$root.Bus.$on("abcd",(v)){
    //    return this.collapsed = v;
    //   });
    // },
    computed:{
      className:function(){
       return this.collapsed?'main-aside-collapsed':'main-aside'
      }
    },
    


		data: function() {
			return {
				// collapsed: false
			}

		},

	};

</script>
<style scoped>
	.main-container {
		height: 100%;
		width: 100%;
		box-sizing: border-box;
	}

	.main-aside-collapsed {
		/* 在CSS中，通过对某一样式声明! important ，可以更改默认的CSS样式优先级规则，使该条样式属性声明具有最高优先级 */
		width: 64px !important;
		height: 100%;
		background-color: #334157;
		margin: 0px;
	}

	.main-aside {
		width: 240px !important;
		height: 100%;
		background-color: #334157;
		margin: 0px;
	}

	.main-header,
	.main-center {
		padding: 0px;
		border-left: 2px solid #333;
	}
</style>
