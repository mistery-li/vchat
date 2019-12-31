<template>
  <div class="search">
      <el-input placeholder="搜索用户/群" size="mini" style="width: 170px;height: 20px;"/>
     <el-button class="addGroup" type="text" @click="openAddGroupModal">
         <i class="el-icon-plus icon"></i>
     </el-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            showAddGroup: false
        }
    },
    methods: {
        openAddGroupModal() {
            this.showAddGroup = true
        }
    }
}
</script>

<style>
.search {
    border-right: 1px solid #f3f3f3;
    padding: 5px 10px 20px 20px;

}
.addGroup {
    float: right;
}
.icon {
    margin-top: -15px;
    font-size: 20px;
}
</style>