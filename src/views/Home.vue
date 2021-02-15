<template>
  <el-container class="home_container">
    <!-- 头部区域 -->
  <el-header>
    <div class="first">
      <img src="../assets/logo.png" alt="" class="home_logo">
      <span>DataView</span>
    </div>
    <div class="end">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="#373d41"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title"><span class="iconfont icon-yonghumingmima"></span></template>
          <el-menu-item index="1-1" @click="logout">退出</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </el-header>
  <!-- 页面主体区域 -->
  <el-container>
    <!-- 侧边栏 -->
    <el-aside 
            width="auto"
            @mouseenter.native="collapseOpen"
            @mouseleave.native="collapseClose">
      <!-- 侧边栏菜单 -->
      <el-menu
        :collapse="isCollapse"
        background-color="#333744"
        text-color="#fff"
        active-text-color="#ffd04b">
        <div></div>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item index="1-1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
          </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右侧内容主体 -->
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
import {getMenus} from '@/network/menus'
export default {
  name: 'Home',
  data() {
    return {
      isCollapse: true,
      // 左侧菜单数据
      menulist: []
    }
  },
  created() {
   this.getMenuList()
  }, 

  methods: {
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    },
    collapseStatus() {
      // this.collapseBtnClick = this.isCollapse;
      this.isCollapse = !this.isCollapse;
    },
    collapseOpen() {
      // if (this.collapseBtnClick) return;
      this.isCollapse = false;
    },
    collapseClose() {
      // if (this.collapseBtnClick) return;
      this.isCollapse = true;
    },
    // 获取所有菜单
    async getMenuList() {
      const { data: res} = await getMenus();
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      console.log(this.menulist);
    }
  }
}
</script>
<style scoped>
  .home_container {
    height: 100%;
  }
  .el-header {
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 5px;
    align-items: center;
    color: white;
    font-size: 20px;

  }
  .el-header .first {
    display: flex;
    align-items: center;
  }
  .el-aside {
    background-color: #333744;
  }
  .el-menu {
    border-right: none;
  }
  .el-main {
    background-color: #eaedf1;
  }
  .home_logo {
    height: 50px;
    width: 55px;
    margin-right: 20px;
  }
</style>