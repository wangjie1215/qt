<template>
  <div>
    <!-- 1.面包屑导航 -->
    <div style="padding-top: 30px; padding-left: 30px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:''}" style="font-size: 16px;">首页</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 16px;">段子管理</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:''}" style="font-size: 16px;">段子列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="text-align: center;">
      <el-form :inline="true" class="user-search">
        <el-form-item label="搜索">
          <el-input size="small" v-model="title" placeholder="请输入您想要查询的关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 3.数据表格 -->
    <div style="padding-top:20px;">
      <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550">
        <el-table-column prop="id" label="id" min-width="25" align="center"> </el-table-column>
        <el-table-column prop="jokeId" label="点赞id" min-width="20"></el-table-column>
        <el-table-column prop="jokeUserId" label="用户id" min-width="20"></el-table-column>
        <el-table-column prop="title" label="标题" min-width="20"></el-table-column>
        <el-table-column prop="content" label="内容" min-width="30"></el-table-column>
        <el-table-column prop="postTime" label="发布时间" min-width="20"></el-table-column>
        <el-table-column label="操作" min-width="30">
          <template slot-scope="scope">
            <el-button @click="comments" type="danger" size="small">评论</el-button>
            <el-button @click="handleDel(scope.row)" type="danger" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 4.分页空间 -->
    <div>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[2,5,10,15]" :page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  export default { //默认导出
    name: 'JokeList',
    data() { //放属性
      return {
        tableList: [],
        title: '',
        total: '',
        page: '1',
        rows: '5',
        dialogFormVisible: false,
        mergeFrom: {
          id: '', //id
          jokeId: '', //jokeid
          jokeUserId: '', //用户id
          title: '', //标题
          content: '', //内容
          contenthtml: '',
          coverImg: '', //图片
          postTime: '' //时间
        },
        rules: {
          title: [{
              required: true,
              message: '请输入标题',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 10,
              message: '长度在 1 到 10 个字符',
              trigger: 'blur'
            }
          ],
          body: [{
            required: true,
            message: '请输入内容',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      //关闭模态框
      handleCole: function() {
        this.resetFrom();
        // this.resetFrom();
      },
      //清空表单
      resetFrom: function() {
        this.$refs["mergeFrom"].resetFields();
      },
      //新增按钮
      handleAdd: function() {
        this.dialogFormVisible = true;
      },
      //新增方法
      doMerge: function() {
        this.$refs["mergeFrom"].validate((valid) => {
          if (valid) {
            alert('操作成功!');
            var url = this.axios.urls.SYS_AddComment;
            this.axios.post(url, this.mergeFrom).then(resp => {
              if (resp.data.code == 0) {
                this.dialogFormVisible = false;
              }
              this.search();
            }).catch(resp => {});
          } else {
            alert('请填写标题和内容!');
            return false;
          }
        });

      },

      //删除
      handleDel: function(row) {
        var data = {
          id: row.id
        }
        var url = this.axios.urls.SYS_DeleteComment;
        this.axios.post(url, data).then(resp => {
          this.$message({
            message: '删除成功',
            type: 'success'
          });
          this.search();
        }).create(resp => {

        });
      },

      search: function() {
        let data = {
          // commentId: this.commentId,
          // chcCustName: this.chcCustName,
          title: this.title,
          rows: this.rows,
          page: this.page
        }
        var url = this.axios.urls.SYS_LikeJokeList;
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.tableList = resp.data.result;
          this.total = resp.data.total;
        }).create(resp => {
          console.log(resp);

        });
      },
      /* 上一页 */
      // goAdvance: function() {
      //   this.$router.push('/list2');
      // }

      comments: function() {
        this.$router.push("/Comment");
      },
    },

    created: function() {
      this.search();
    },
  }
  // }
</script>

<style>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
