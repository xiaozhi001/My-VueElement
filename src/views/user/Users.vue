<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a>用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row :gutter="20">
        <el-col :span='7'>
          <el-input placehold='请输入内容'>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span='4'>
          <el-button type='primary'>添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 用户列表区域 -->
      <el-table :data="userlist" style="width: 100%" border stripe>
        <el-table-column prop="username" label="姓名"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="mobile" label="电话"></el-table-column>
        <el-table-column prop="role_name" label="角色"></el-table-column>
        <el-table-column prop="mg_state" label="状态"></el-table-column>
        <el-table-column label="操作"></el-table-column>
      </el-table> 
    </el-card>
  </div>
</template>

<script>
import {getUsers} from '@/network/users'
export default {
  data() {
    return {
      userlist: [],
      total: 0

    }
  },
  created(){
    this.getUserList()
  },
  methods: {
    // 获取所有用户信息
    async getUserList() {
      const { data: res} = await getUsers();
      if(res.meta.status !== 200) return this.$message.error(res.meta.msg);
      this.userlist = res.data.users;
      this.total = res.data.total;
      console.log(res);
    }
  }
}
</script>
<style scoped>
</style>