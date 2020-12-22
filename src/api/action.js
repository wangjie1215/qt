/**
 * 对后台请求的地址的封装，URL格式如下：
 * 模块名_实体名_操作
 */
export default {
  // 'SERVER': 'http://www.zking.com/api/ssh2', //服务器
  'SERVER': 'http://localhost:8080/ssmht/', //服务器
  'SYS_USER_LOGIN':'/userlogin',//登录
  'SYS_USER_LOGINP':'/userloginP',//验证码登录
  'SYS_USER_ZC':'/userinsert',//新增and修改
  'SYS_USER_PHONEYZ':'/phoneYz',//短信验证
  'SYS_ADDJOKE':'/AddJoke',//新增joke
  'SYS_LISTBYIDJOKE':'/ListByIdJoke',//查单个joke

  'SYS_LISTLIKEJOKE':'/ListLikeJoke',//查所有joke

  'SYS_LISTAll':'/listAllComment',//comment查询全部AddComment
  'SYS_AddComment':'/AddComment',
  'SYS_DeleteComment':'/DeleteComment',

  'getFullPath': k => { //获得请求的完整地址，用于mockjs测试时使用
    return this.SERVER + this[k];
  }
}
