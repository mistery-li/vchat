<template>
  <div>
      <el-dialog
  :visible.sync="showDialog"
  :show-close="false"
  width="30%"
  >
  <el-tabs v-model="activeName" @tab-click="handleTabs">
    <el-tab-pane label="登陆" name="login">
        <Login />
    </el-tab-pane>
    <el-tab-pane label="注册" name="register">
        <Register />
    </el-tab-pane>
  </el-tabs>
</el-dialog>
  </div>
</template>

<script>
import Login from './login';
import Register from './register'
export default {
    components: {
        Login,
        Register
    },
    data() {
        return {
            activeName: 'login',
            showDialog: this.$store.getters.getShowDialog
        }
    },
    methods: {
        handleTabs(tab, event) {
            console.log(tab, event, 'e')
        }
    }
}
</script>

<style>

</style>