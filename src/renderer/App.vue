<template>
  <div id="app">
    <div id="header-section">
      <div id="center-content">
        <el-col :span="12"><div class="grid-content bg-purple" style="font-size: 18px;padding: 10px;">Daniel 代码仓库</div></el-col>
        <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </div>
    </div>
    <el-row class="daniel-container">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <Menu />
        </div>
      </el-col>
      <el-col :span="20" >
        <div class="grid-content bg-purple-light right-section" ref="right" style="width: 90%;margin: 0 auto;">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Menu from './components/Menu/menu.vue'
  import Bus from './assets/bus'
  export default {
      name: 'code_warehouse',
      components:{
          'Menu':Menu
      },
      mounted(){
          //下一页 轮滚条置顶
          Bus.$on('next' , () => {
              this.$refs.right.scrollTop = 0;
          })
      }
  }
</script>

<style>
  /* CSS */
  #header-section{
    background-color: #FFFFFF;
    box-shadow: 0 1px 4px 0 rgba(238, 238, 238, 0.5);
  }
  #center-content{
    width: 90%;
    margin: 0 auto;
    height: 45px;
  }
  .daniel-container{
    margin-top: 20px;
    padding: 20px;
  }

  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width:8px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    -webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
    border-radius:10px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius:10px;
    background:rgba(0,0,0,0.1);
    -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(255,0,0,0.1);
  }
  .right-section{
    overflow: auto;
  }

  @media (max-width: 1200px) {
    .right-section{
      width: 90%;
      margin: 0 auto;
      max-height: 550px;
    }
  }
</style>
