<template>
  <div>
    <div>
      <a><img src="../assets/img/logo.png" /></a>
    </div>

    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <div align="right">
          <el-input placeholder="搜索站内资讯或用户" style="width: 240px;"></el-input>
          <el-button type="primary" @click="shousuo">搜索</el-button>
          <el-button type="warning" @click="denglu">登录</el-button>
          <el-button type="danger" @click="zhuce">注册</el-button>
          <el-button type="success" @click="gerenzhongxin">个人中心</el-button>
          <el-dropdown>
            <el-button type="info">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户名：zs</el-dropdown-item>
              <el-dropdown-item>身份：普通用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <div id="slider">
          <div class="window" @mouseover="stop" @mouseleave="play">
            <ul class="container" :style="containerStyle">
              <li>
                <img :style="{width:imgWidth+'px'}" :src="sliders[sliders.length - 1].img" alt="">
              </li>
              <li v-for="(item, index) in sliders" :key="index">
                <img :style="{width:imgWidth+'px'}" :src="item.img" alt="">
              </li>
              <li>
                <img :style="{width:imgWidth+'px'}" :src="sliders[0].img" alt="">
              </li>
            </ul>
            <ul class="direction">
              <li class="left" @click="move(600, 1, speed)">
                <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ffffff" d="M481.233 904c8.189 0 16.379-3.124 22.628-9.372 12.496-12.497 12.496-32.759 0-45.256L166.488 512l337.373-337.373c12.496-12.497 12.496-32.758 0-45.255-12.498-12.497-32.758-12.497-45.256 0l-360 360c-12.496 12.497-12.496 32.758 0 45.255l360 360c6.249 6.249 14.439 9.373 22.628 9.373z" /></svg>
              </li>
              <li class="right" @click="move(600, -1, speed)">
                <svg class="icon" width="30px" height="30.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#ffffff" d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z" /></svg>
              </li>
            </ul>
            <ul class="dots">
              <li v-for="(dot, i) in sliders" :key="i" :class="{dotted: i === (currentIndex-1)}" @click="jump(i+1)"></li>
            </ul>
          </div>
        </div>

        <el-tab-pane label="首页" name="first">
          <div class="boxleft">
            <div class="left-container">
              <div class="left-img">
                <a><img src="../assets/img/111aaa.jpg"></a>
              </div>
              <span class="lxw-title">
                美舰穿航台湾海峡 解放军东部战区回应中这句新提法耐人寻味
              </span>
              <span class="lxw-pinglun">
                <div align="left">
                  <h4>阿拉丁~小明</h4>
                </div>
                美国海军已经决定，重建第一舰队，负责印度洋和西太平洋的战略威慑。这个举动明显是直冲中国而来。很多学者认为新加坡是舰队司令部驻地首选，但新加坡官方和民间都不热情。反而是澳大利亚热情很高，在达尔文方案出现之间，已经出现了帕斯方案。
              </span>
            </div>
            <div class="left-xw">
              <div class="left-img">
                <a><img src="../assets/img/tt1.jpeg"></a>
              </div>
              <div class="lxw-title">
                <a href="#/Newshiwei">世卫:北美一些国家从未走出第一波疫情</a>
              </div>
              <span class="lxw-pinglun">
                <div align="left">
                  <h4>阿拉丁~小明</h4>
                </div>
                央视网消息：当地时间18日，世界卫生组织举行新冠肺炎例行发布会，世卫组织卫生紧急项目负责人迈克尔·瑞安表示，过去几天，一些美洲国家上报的病例数量有所增加，令人担忧，美洲区域....
              </span>
            </div>
            <div class="left-xw">
              <div class="left-img">
                <a><img src="../assets/img/2cc.jpeg"></a>
              </div>
              <span class="lxw-title">京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱</span>
              <span class="lxw-pinglun">
                <div align="left">
                  <h4>阿拉丁~小明</h4>
                </div>
                评论：京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱，京东致歉的启示：互联网巨头不能老想着从穷人的口袋里套钱
              </span>
            </div>
          </div>

          <div class="boxright">
            <div class="gongaolan">
              <div class="gongaolan_title">
                ~~公告栏~~
              </div>
              <div class="gongaolan_body">
                太阳能光伏，太阳能光伏，太阳能光伏，太阳能光伏，太阳能光伏
              </div>
            </div>
            <div align="right">
              <el-input type="textarea" placeholder="刷个存在感叭......"></el-input>
              <el-button type="primary" @click="fasong">发送</el-button>
            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="科技" name="second">科技</el-tab-pane>
        <el-tab-pane label="军事" name="third">军事</el-tab-pane>
        <el-tab-pane label="社会" name="fourth">社会</el-tab-pane>
        <el-tab-pane label="财经" name="fifth">财经</el-tab-pane>
        <el-tab-pane label="国际" name="sixth">国际</el-tab-pane>
        <el-tab-pane label="国内" name="seventh">国内</el-tab-pane>
      </el-tabs>

    </div>

    <div>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[5,10,15,1000]" :page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  export default {
    props: {
      initialSpeed: {
        type: Number,
        default: 30
      },
      initialInterval: {
        type: Number,
        default: 3
      }
    },
    data() {
      return {
        activeName: 'first',
        total: '',
        page: '1',
        rows: '5',
        sliders: [{
            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1454591439,1189113536&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1062441701,4278788533&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2662054854,2653677456&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2373040604,1349962665&fm=26&gp=0.jpg'
          },
          {
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608459251646&di=25c27301df8d1d7c4cc4ffa1bbb89bb0&imgtype=0&src=http%3A%2F%2Fp2.itc.cn%2Fimages01%2F20200608%2F7f3abea0b8634752a487ecc7ac0c01bb.jpeg'
          },
        ],
        imgWidth: 1200,
        currentIndex: 1,
        distance: -1200,
        transitionEnd: true,
        speed: this.initialSpeed
      }
    },
    computed: {
      containerStyle() {
        return {
          transform: `translate3d(${this.distance}px, 0, 0)`
        }
      },
      interval() {
        return this.initialInterval * 1000
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      denglu: function() {
        this.$router.push("/Login");
      },
      zhuce: function() {
        this.$router.push("/Register");
      },
      gerenzhongxin:function(){
        this.$router.push("/personal");
      },
      init() {
        this.play()
        window.onblur = function() {
          this.stop()
        }.bind(this)
        window.onfocus = function() {
          this.play()
        }.bind(this)
      },
      move(offset, direction, speed) {
        console.log(speed)
        if (!this.transitionEnd) return
        this.transitionEnd = false
        direction === -1 ? this.currentIndex += offset / 600 : this.currentIndex -= offset / 600
        if (this.currentIndex > 5) this.currentIndex = 1
        if (this.currentIndex < 1) this.currentIndex = 5

        const destination = this.distance + offset * direction
        this.animate(destination, direction, speed)
      },
      animate(des, direc, speed) {
        if (this.temp) {
          window.clearInterval(this.temp);
          this.temp = null;
        }
        this.temp = window.setInterval(() => {
          if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
            this.distance += speed * direc
          } else {
            this.transitionEnd = true
            window.clearInterval(this.temp)
            this.distance = des
            if (des < -3000) this.distance = -600
            if (des > -600) this.distance = -3000
          }
        }, 20)
      },
      jump(index) {
        const direction = index - this.currentIndex >= 0 ? -1 : 1;
        const offset = Math.abs(index - this.currentIndex) * 600;
        const jumpSpeed = Math.abs(index - this.currentIndex) === 0 ? this.speed : Math.abs(index - this.currentIndex) *
          this.speed;
        this.move(offset, direction, jumpSpeed)
      },
      play() {
        if (this.timer) {
          window.clearInterval(this.timer)
          this.timer = null
        }
        this.timer = window.setInterval(() => {
          this.move(600, -1, this.speed)
        }, this.interval)
      },
      stop() {
        window.clearInterval(this.timer)
        this.timer = null
      }
    }
  }
</script>


<style scoped>
  .boxleft {
    width: 1200px;
    height: 117px;
    border-top: 1px dashed #eee;
    cursor: pointer;
    margin-top: 0px;
    float: left;
    padding-top: 15px;
    border-left: 70px;
  }

  .left-container {
    width: 1500px;
    float: left;
    min-height: 100px;
    padding-top: 20px;
  }

  .left-xw {
    width: 1500px;
    float: left;
    min-height: 100px;
    padding-top: 100px;
  }

  .left-img {
    width: 400px;
    height: 100px;
    float: left;
  }

  .lxw-title {
    width: 530px;
    color: black;
    padding-top: 5px;
    font-size: 19px;
    font-weight: 700;
    float: left;
    background-color: #FFFFFF;
  }

  .lxw-pinglun {
    width: 700px;
    color: #2C3E50;
    font-size: 16px;
    font-weight: 700;
    float: left;
  }

  .boxright {
    width: 300px;
    height: 800px;
    border-top: 1px dashed #eee;
    cursor: pointer;
    margin-top: 0px;
    float: right;
    background-color: floralwhite;
    padding-top: 30px;
  }

  .gongaolan {
    width: 300px;
    height: 300px;
    color: violet;
    padding-top: 10px;
    font-size: 18px;
    font-weight: 700;
    float: right;
  }

  .gongaolan_title {
    position: relative;
    width: 100px;
    height: 38px;
    line-height: 38px;
    float: left;
  }

  .gongaolan_body {
    width: 300px;
    height: 200px;
    color: #2C3E50;
    padding-top: 20px;
    font-size: 16px;
    font-weight: 700;
    float: right;
  }

  *{
          box-sizing: border-box;
          margin:0;
          padding:0;
        }
        ol,ul{
          list-style: none;
        }
        #slider{
          text-align: center;
          padding-top: 20px;
        }
        .window{
          position:relative;
          width:1200px;
          height:400px;
          margin:0 auto;
          overflow:hidden;
        }
        .container{
          display:flex;
          position:absolute;
        }
        .left, .right{
          position:absolute;
          top:50%;
          transform:translateY(-50%);
          width:50px;
          height:50px;
          background-color:rgba(0,0,0,.3);
          border-radius:50%;
          cursor:pointer;
        }
        .left{
          left:3%;
          padding-left:12px;
          padding-top:10px;
        }
        .right{
          right:3%;
          padding-right:12px;
          padding-top:10px;
        }
        img{
          user-select: none;
        }
        .dots{
            position:absolute;
            bottom:10px;
            left:50%;
            transform:translateX(-50%);
          }
        .dots li{
          display:inline-block;
          width:15px;
          height:15px;
          margin:0 3px;
          border:1px solid white;
          border-radius:50%;
          background-color:#333;
          cursor:pointer;
        }
        .dots .dotted{
          background-color:orange;
        }
</style>
