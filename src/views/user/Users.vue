<template>
  <div>
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片试图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->
      <el-row>
        <el-col :span='7'>
          <el-input placehold='请输入内容'>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-row :span='4'>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  components:{}
}
</script>
<style scoped>
</style>