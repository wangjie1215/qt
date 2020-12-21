<template>
  <div>
    <!-- 1.面包屑导航 -->
    <div style="padding-top: 30px; padding-left: 30px;">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:''}" style="font-size: 16px;">首页</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 16px;">段子管理</el-breadcrumb-item>
        <el-breadcrumb-item style="font-size: 16px;">段子列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="text-align: center;">
      <el-form :inline="true" class="user-search">
        <el-form-item label="搜索">
          <el-input size="small" v-model="title" placeholder="请输入您想要查询的关键字"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" type="primary" icon="el-icon-search" @click="search">搜索</el-button>
          <el-button size="small" type="primary" icon="el-icon-plus" @click="doMerge">添加</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!-- 3.数据表格 -->
    <div style="padding-top:30px;">
      <el-table :data="tableList" style="width: 100%;" :border="true" max-height="550">
        <el-table-column prop="id" label="id" min-width="25" align="center"> </el-table-column>
        <el-table-column prop="commentId" label="评论id" min-width="20"></el-table-column>
        <el-table-column prop="jokeId" label="点赞id" min-width="20"></el-table-column>
        <el-table-column prop="commentUserId" label="评论用户id" min-width="20"></el-table-column>
        <el-table-column prop="commentDetails" label="评论详细" min-width="20"></el-table-column>
        <el-table-column prop="commentDate" label="评论时间" min-width="20"></el-table-column>
        <el-table-column label="操作" min-width="30">
          <template slot-scope="scope">
            <el-button @click="handleDel(scope.row)" type="danger" size="small">删除</el-button>
            <el-button @click="handleEdit(scope.row)" type="danger" size="small">编辑</el-button>
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

    <!--增加-->
    <el-dialog title="增加" :visible.sync="dialogFormVisible" label-width="80px" @close="handleCole">
      <el-form :model="mergeFrom" :rules="rules" ref="mergeFrom">
        <el-form-item label="评论id" prop="commentId">
          <el-input v-model="mergeFrom.commentId"></el-input>
        </el-form-item>
        <el-form-item label="点赞Id" prop="commentuserId">
          <el-input v-model="mergeFrom.commentuserId"></el-input>
        </el-form-item>
        <el-form-item label="评论用户id" prop="commentuserId">
          <el-input v-model="mergeFrom.commentuserId"></el-input>
        </el-form-item>
        <el-form-item label="评论时间" prop="commentDate">
          <el-date-picker value-format="yyyy-MM-dd hh:mm:ss" v-model="mergeFrom.commentDate" type="datetime"
            placeholder="选择日期时间" style="width: 50%;right: 100px;">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="评论详细" prop="commentDetails">
          <el-input v-model="mergeFrom.commentDetails"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="doMerge">确 定</el-button>
      </div>
    </el-dialog>

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
        mergeFrom: {
          id: '',
          commentId: '',
          jokeId: '',
          commentUserId: '',
          commentDetails: '',
          commentDate: ''
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
            }).create(resp => {

            });
          } else {
            alert('请填写标题和内容!');
            return false;
          }
        });

      },
      //修改按钮
      handleEdit: function(row) {
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.mergeFrom.Id = row.Id;
          this.mergeFrom.commentId = row.commentId;
          this.mergeFrom.jokeId = row.jokeId;
          this.mergeFrom.commentuserId = row.commentuserId;
          this.mergeFrom.commentDate = row.commentDate;
          this.mergeFrom.commentDetails = row.commentDetails
        });
      },
      //修改页大小
      handleSizeChange: function(size) {
        this.rows = size;
        this.search();
      },
      handleCurrentChange: function(page) {
        this.page = page;
        this.search();
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
          commentId: this.commentId,
          // chcCustName: this.chcCustName,
          title: this.title,
          rows: this.rows,
          page: this.page
        }
        var url = this.axios.urls.SYS_LISTAll;
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.tableList = resp.data.result;
          this.total = resp.data.total;
        }).create(resp => {
          console.log(resp);

        });
      },
      /* 上一页 */
      goAdvance: function() {
        this.$router.push('/list2');
      }
    },
    created: function() {
      this.search();
    }
  }
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
