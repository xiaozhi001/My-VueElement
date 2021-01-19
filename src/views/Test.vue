<template>
  <div>
    <el-container>
        <el-header>
            <button @click="collapseStatus">
                <i class="el-icon-d-arrow-right">xiaozhi</i>
            </button>
        </el-header>
        <el-container>
            <el-aside
                    width="auto"
                    @mouseenter.native="collapseOpen"
                    @mouseleave.native="collapseClose">
                <el-menu :collapse="isCollapse">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">测试</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
            </el-main>
        </el-container>
    </el-container>  
  </div>
</template>

<script>
export default {
  name: 'Test',
  data(){
    return {
      collapseBtnClick: false,
      isCollapse: true,
    }
  },
  methods: {
    collapseStatus() {
      this.collapseBtnClick = this.isCollapse;
      this.isCollapse = !this.isCollapse;
    },
    collapseOpen() {
      if (this.collapseBtnClick) return;
      this.isCollapse = false;
    },
    collapseClose() {
      if (this.collapseBtnClick) return;
      this.isCollapse = true;
    }

  }
  
}
</script>
<style scoped>
</style>