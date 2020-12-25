<template>
  <div>
    <!-- 标题 -->
    <div>
      <a><img src="../assets/img/logo.png" /></a>
    </div>

    <div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <div align="right">
          <el-input v-model="title" placeholder="搜索站内资讯或用户" style="width: 240px;"></el-input>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="addjoke">新增段子</el-button>
          <el-button type="warning" @click="denglu">登录</el-button>
          <el-button type="danger" @click="zhuce">注册</el-button>
          <el-button type="success" @click="gerenzhongxin">个人中心</el-button>
          <el-dropdown>
            <el-button type="info">
              用户:<template slot="title">{{this.name}}</template>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>用户名：zs</el-dropdown-item>
              <el-dropdown-item>身份：普通用户</el-dropdown-item>
              <el-dropdown-item>
                <el-link type="danger" href="#/Login">退出</el-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!-- 轮播图 -->
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

        <el-tab-pane label="经典" name="first">
          <div class="boxleft">
            <div class="left-container" v-for="joke in jokeList">
              <div class="left-img">
                <a><img :src="joke.coverImg" /></a>
              </div>
              <span class="lxw-title">
                <el-button type="text">
                  <a href="/#/XiangQing"><h2>{{joke.title}}</h2></a>
                </el-button>
              </span>
              <span class="lxw-pinglun">
                <div align="left">
                  <!-- <h4>{{name}}</h4> -->
                </div>
                {{joke.content}}
              </span>
            </div>
          </div>
        </el-tab-pane>

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
            <el-form ref="areaform" :model="areaform">
              <el-form-item>
                 <el-input type="textarea" placeholder="刷个存在感叭......" v-model="areaform.desc"></el-input>
              </el-form-item>
            </el-form>
            <el-button type="primary" @click="fasong">发送</el-button>
          </div>
        </div>
        </el-tab-pane>
        <el-tab-pane label="荤笑话" name="second">荤笑话</el-tab-pane>
        <el-tab-pane label="精分" name="third">精分</el-tab-pane>
        <el-tab-pane label="脑残" name="fourth">脑残</el-tab-pane>
        <el-tab-pane label="冷笑话" name="fifth">冷笑话</el-tab-pane>
      </el-tabs>
    </div>

    <!-- 分页  -->
    <div style="padding-top: 50px;padding-left: 30px;">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4"
        :page-sizes="[5, 10, 20, 40]" :page-size="2" layout="total, sizes, prev, pager, next, jumper" :total="total">
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
        areaform:{
          desc:''
        },
        activeName: 'first',
        content: '',
        coverImg: '',
        src: '',
        title: '',
        jokeList: [],
        total: '',
        page: '1',
        rows: '5',
        sliders: [{
            img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608459251646&di=25c27301df8d1d7c4cc4ffa1bbb89bb0&imgtype=0&src=http%3A%2F%2Fp2.itc.cn%2Fimages01%2F20200608%2F7f3abea0b8634752a487ecc7ac0c01bb.jpeg'
          },
          {
            img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1454591439,1189113536&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1062441701,4278788533&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2148398168,1390081690&fm=26&gp=0.jpg'
          },
          {
            img: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3833961864,2672196146&fm=11&gp=0.jpg'
          }
        ],
        imgWidth: 600,
        currentIndex: 1,
        distance: -600,
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
      /* 修改行大小 */
      handleSizeChange: function(size) {
        this.rows = size;
        this.search();
      },
      /* 修改页大小*/
      handleCurrentChange: function(page) {
        this.page = page;
        this.search();
      },
      /* 查所有模糊查joke */
      search: function() {
        let data = {
          title: this.title,
          rows: this.rows,
          page: this.page
        }
        var url = this.axios.urls.SYS_LISTLIKEJOKE;
        this.axios.post(url, data).then(resp => {
          console.log(resp);
          this.jokeList = resp.data.result;
          this.total = resp.data.total;
        }).catch(resp => {
          console.log(resp);
        })
      },
      /* 查单个段子 */

      addjoke: function() {
        this.$router.push("/AddJoke");
      },
      denglu: function() {
        this.$router.push("/Login");
      },
      zhuce: function() {
        this.$router.push("/Register");
      },
      gerenzhongxin: function() {
        this.$router.push("/personal");
      },
      /* 轮播图 */
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
    },
    created: function() {
      this.search();
    }
  }
</script>


<style scoped>
  .boxleft {
    width: 1200px;
    border-top: 1px dashed #eee;
    cursor: pointer;
    margin-top: 0px;
    float: left;
    padding-top: 15px;
    border-left: 70px;
  }

  .left-container {
    width: 1500px;
    height: 200px;
    float: left;
    padding-top: 20px;
  }

  .left-img {
    width: 350px;
    height: 100px;
    float: left;
  }

  .lxw-title {
    width: 600px;
    padding-top: 20px;
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
    padding-top: 20px;
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

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
  }

  #slider {
    text-align: center;
  }

  .window {
    position: relative;
    width: 600px;
    height: 400px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 30px;
  }

  .container {
    display: flex;
    position: absolute;
  }

  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, .3);
    border-radius: 50%;
    cursor: pointer;
  }

  .left {
    left: 3%;
    padding-left: 12px;
    padding-top: 10px;
  }

  .right {
    right: 3%;
    padding-right: 12px;
    padding-top: 10px;
  }

  img {
    user-select: none;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  .dots li {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 0 3px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: #333;
    cursor: pointer;
  }

  .dots .dotted {
    background-color: orange;
  }
</style>
