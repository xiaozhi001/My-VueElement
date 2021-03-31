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
        active-text-color="#409EFF"
        unique-opened
        :collapse-transition="false"
        router
        :default-active="activePath">
        <!-- 一级菜单 -->
        <el-submenu :index="item.id + ''" v-for="item in menulist" :key='item.id'>
          <template slot="title">
            <!-- 图标 -->
            <i :class="iconsObj[item.id]"></i>
            <!-- 内容 -->
            <span>{{item.authName}}</span>
          </template>
          <!-- 二级菜单 -->
          <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"
          @click="saveNavState('/' + subItem.path)">
            <template slot="title">
              <!-- 图标 -->
              <i class="el-icon-menu"></i>
              <!-- 内容 -->
              <span>{{subItem.authName}}</span>
          </template>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右侧内容主体 -->
    <el-main>
      <router-view></router-view>
    </el-main>
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
      menulist: [],
      iconsObj: {
        '125': 'iconfont icon-yonghu',
        '103': 'iconfont icon-quanxian',
        '101': 'iconfont icon-shangpin',
        '102': 'iconfont icon-dingdan',
        '145': 'iconfont icon-shuju'
      },
      // 被激活的链接地址
      activePath: ''
    }
  },
  created() {
   this.getMenuList()
   this.activePath = window.sessionStorage.getItem('activePath')
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
    },
    // 保存链接的激活状态
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
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
  .iconfont {
    margin-right: 10px;
  }
</style>