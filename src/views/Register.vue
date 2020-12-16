<template>
  <div>
    <div class="dcenter">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="账号">
          <el-input v-model="form.account"></el-input>
        </el-form-item>

        <el-form-item label="昵称">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item label="真实姓名">
          <el-input v-model="form.realname"></el-input>
        </el-form-item>

        <el-form-item label="联系电话">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>

        <el-form-item label="地址">
          <el-cascader :options="options" ref="cascaderDay" @change="abc" >
            <template slot-scope="{ node, data }">
              <span>{{ data.label }}</span>
              <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
            </template>
          </el-cascader>
          <!-- <el-cascader :v-model="form.address" :options="options" clearable @change="abc"></el-cascader> -->
        </el-form-item>
        <el-button type="primary" @click="reGister">确定注册</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        form:{
          account: '', //账号
          username: '', //昵称
          password: '', //密码
          realname:'',//真实姓名
          // idcard:'',//身份证号
          phone: '', //联系电话
          email: '', //邮箱
          // status:'',//状态
          address: '' //地址
        },
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
                value: 'yizhi',
                label: '一致'
              },
              {
                value: 'fankui',
                label: '反馈'
              },
              {
                value: 'xiaolv',
                label: '效率'
              },
              {
                value: 'kekong',
                label: '可控'
              }
            ]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
                value: 'cexiangdaohang',
                label: '侧向导航'
              },
              {
                value: 'dingbudaohang',
                label: '顶部导航'
              }
            ]
          }]
        }]
      }
    },
    methods: {
      reGister:function() {
        var url = this.axios.urls.SYS_USER_RS_AD;
        debugger;
        console.log(url);
        this.axios.post(url, this.form).then(resp=>{
          console.log(resp);
          this.$message({
            message: "注册成功",
            type: 'success'
          });
        }).catch(resp=>{
          console.log(resp);
        });
      },
      abc:function(val) {
        debugger;
        var labelList = [];
        var checkLabels = this.$refs['cascaderDay'].getCheckedNodes();
        checkLabels.forEach(function(item) {
            if(!item.hasChildren) {
                labelList.push(item.label);
            }
        })
        
        // this.form.dayWorkerLocation = nowData.join(",");
        // this.form.dayWorker = labelList.join(",");

        console.log(val);
      }
    }

  }
</script>

<style>
  .dcenter {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
