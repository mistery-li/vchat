<template>
  <div class="sidebar">
    <div class="sidebar-item">
      <div>
        <el-button type="text"><i class="el-icon-document icon"></i></el-button>
      </div>
      <div>
        <el-button type="text"><i class="el-icon-setting icon"></i></el-button>
      </div>
      <div>
        <el-button type="text"><i class="el-icon-info icon"></i></el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar {
  height: 100%;
  border-radius: 1%;
  background: #53c68c;
  border: 1px solid #53c68c;
  width: 10%;
  text-align: center;
}
.sidebar-item {
    width: 10%;
  text-align: center;
  position: fixed;
  bottom: 10px;
}
.icon {
    font-size: 25px;
}
</style>
