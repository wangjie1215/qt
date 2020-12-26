<template>

  <div>
    <!-- <h1>哈哈哈哈哈哈哈哈哈</h1> -->

 <!-- 1.面包屑导航 -->
    <div style="padding-top: 30px; padding-left: 30px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'list2'}" style="font-size: 16px;">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

      <!-- 数据表格 -->
     <div style="padding-top:30px;">
        <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550">
          <el-table-column prop="id" label="id" min-width="25" align="center"> </el-table-column>
          <el-table-column prop="jokeId" label="Id" min-width="20"></el-table-column>
          <el-table-column prop="title" label="昵称" min-width="20"></el-table-column>
          <el-table-column prop="postTime" label="评论时间" min-width="20"></el-table-column>
          <el-table-column prop="content" label="内容" min-width="20"></el-table-column>
         <!-- <el-table-column label="操作" min-width="30">
            <template slot-scope="scope">
              <el-button @click="" type="danger" size="small">评论</el-button>
              <el-button @click="handleDel(scope.row)" type="danger" size="small">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>
      </div>


  </div>





</template>

<script>
  export default { //默认导出
    name: 'list2',
    data() { //放属性
      return {
        tableList: [],
        title: '',
        total: '',
        page: '1',
        rows: '5',
        dialogFormVisible: false,
        mergeFrom: {
          id: '',
          jokeId: '',
          title: '',
          postTime: '',
          content:''
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
            }).catch(resp => {
            });
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
</script>

<style>
</style>
