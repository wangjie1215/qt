<template>
  <div class=" edit-root">
 <el-col class="add-root">
    <header class="form-header">新增段子</header>
    <el-form label-width="110px" class="demo-formData" :model="ruleForm" :rules="rules" ref="ruleForm">
         <el-form-item label="段子标题" prop="title">
         <el-input v-model="ruleForm.title" placeholder="请输入标题" style='width: 500px' clearable></el-input>
         </el-form-item>
         <el-form-item label="段子种类">
             <el-select v-model="ruleForm.type" placeholder="ruleForm.type">
                 <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                 </el-option>
             </el-select>
         </el-form-item>
         <el-form-item label="上传首页图片">
             <el-input placeholder="请在这里粘贴图片地址" v-model="ruleForm.coverImg" style='width: 500px;margin-bottom: 10px'>
             </el-input>
             <div>
                 <el-image style="width: 120px; height: 120px" class="avatar" v-if="ruleForm.coverImg" :src="ruleForm.coverImg">
                 </el-image>
             </div>
              <!-- <el-upload class="avatar-uploader" :action="baseUrl + '/v1/addimg/shop'" :show-file-list="false" :on-success="handleShopAvatarScucess" :before-upload="beforeAvatarUpload">
                 <el-image style="width: 120px; height: 120px" class="avatar" v-if="ruleForm.coverImg" :src="ruleForm.coverImg"></el-image>
                 <i v-else class="el-icon-plus avatar-uploader-icon"></i>
             </el-upload> -->
         </el-form-item>
         <el-form-item label="选择标签" prop='tags'>
             <el-checkbox-group v-model="ruleForm.tags">
                 <el-checkbox name='tags' label="0" border size="medium">经典</el-checkbox>
                 <el-checkbox name='tags' label="1" border size="medium">荤笑话</el-checkbox>
                 <el-checkbox name='tags' label="2" border size="medium">精分</el-checkbox>
                 <div style="margin-top: 10px">
                     <el-checkbox name='tags' label="3" border size="medium">脑残</el-checkbox>
                     <el-checkbox name='tags' label="4" border size="medium">冷笑话</el-checkbox>
                 </div>
             </el-checkbox-group>
         </el-form-item>
          <div class="hello">
              <quill-editor></quill-editor>
            </div>
             <el-form-item class='edit-btn'>
                 <el-button @click="submitForm('ruleForm')" type="primary">提交</el-button>
                 <el-button @click="resetForm('ruleForm')">重置</el-button>
         </el-form-item>
      </el-form>
    </el-col>

  </div>
</template>

<script>

  export default {
    data() {
             return {
                        info: {},
                        baseUrl:'',
                        input: '',
                        editorContent: '',
                        editorText: '',
                        options: [{
                            value: '0',
                            label: '网络'
                        }, {
                            value: '1',
                            label: '自创'
                        }, {
                            value: '2',
                            label: '听说'
                        }],
                        value: '',
                        ruleForm: {
                            title: '',
                            type: '0',
                            tags: ['0'],
                            coverImg: ''
                        },
                        rules: {
                            title: [
                                { required: true, message: '请输入段子标题', trigger: 'blur' },
                                { min: 1, max: 50, message: '长度在 1 到 50 个字符', trigger: 'blur' }
                            ],
                            tags: [
                                { type: 'array', required: true, message: '请至少选择一个标签', trigger: 'change' }
                            ]
                        }
                    }
                },
    }
</script>

<style>
  .edit-root {
      width: $root_width_value;
      height: 100%;
      margin: 0 auto;
      padding-top: 55px;
  }
  .edit-area {
      text-align: left;
      margin: 0 20px;
  }
  .demo-formData {
      text-align: left;
  }
  .edit-btn {
      text-align: left;
      margin: 20px 0;
  }
  .form-header {
      width: 100%;
      text-align: center;
      margin: 20px auto;
      font-size: 20px;
  }
  .avatar-uploader .el-upload {
      width: 120px;
      height: 120px;
      line-height: 120px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
      border-color: #20a0ff;
  }
  .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 120px;
      height: 120px;
      line-height: 120px;
      text-align: center;
  }
  .add-root {
      background-color: white;
      height: 100%;
  }
</style>
