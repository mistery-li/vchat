<template>
  <div class="head-wrap">
     <span class="chat-name">vchat</span>
     <div class="right-button">
         <el-button type="text">
             <i class="el-icon-share share"></i>
         </el-button>
         <el-button type="text">
             <i class="el-icon-user user-info"></i>
         </el-button>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.head-wrap {
    border-bottom: 1px solid #f3f3f3;
    height: 40px;
    width: 450px;
    position: fixed;
    z-index: 9999;
    background: #fff;
}
.chat-name {
    margin-left: 30px;
}
.right-button {
    margin-top: -10px;
    float: right;
    padding: 0;
}
.user-info{
    font-size: 25px;
}
.share {
    font-size: 25px;
}
</style>