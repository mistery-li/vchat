<template>
    <!-- 登陆 -->
    <div class="login-wrap">
        <div>
        <el-button type="text" @click="currentType('login')">
            登陆
        </el-button>
        <el-button type="text" @click="currentType('register')">
            注册
        </el-button>
        </div>
        <div>
            <div class="user-avatar"></div>
            <div class="form-item">
            <el-input v-model="loginForm.username" placeholder="用户名" style="width: 150px;"/>
            </div>
            <div class="form-item">
            <el-input v-model="loginForm.password" placeholder="密码" style="width: 150px;"/>
            </div>

            <el-button @click="handleLogin" v-if="buttonType==='login' ? true : false">登陆</el-button>
            <el-button @click="handleRegister" v-else>注册</el-button>

            <div>推荐使用qq授权登陆</div>
            <span>此聊天工具只用于聊天,不做用户信息收集，请放心</span>

            <div>qq登陆</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {
                username: '',
                password: '',
            },
            buttonType: 'login'
        }
    },
    methods: {
        currentType(type_string) {
            this.buttonType = type_string;
        },
        handleLogin() {
            let param = this.loginForm;
            if(!param.username) {
                this.$message('用户名不能为空');
                return;
            }
            if(!param.password) {
                this.$message('密码不能为空');
                return;
            }
            this.$store.dispatch('user/login', this.loginForm)
                .then(() => {
                    console.log(333, 'login');
                    // 跳转到聊天页面
                    // this.$router.push()
                })
            
            
        },

        handleRegister() {
            let param = this.loginForm;
            if(!param.username) {
                this.$message('用户名不能为空');
                return;
            }
            if(!param.password) {
                this.$message('密码不能为空');
                return;
            }
            this.$store.dispatch('user/register', this.loginForm)
                .then(() => {
                    console.log(444, 'register');
                    // 跳转到聊天页面
                    // this.$router.push()
                })
        }
    }
}
</script>

<style scoped>
.login-wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 300px;
    -webkit-transform: translateY(-50%) translateY(-50%);
    text-align: center;
    background: #fff;
    box-shadow: 0 32px 64px 0 #808080;
}
.user-avatar {
    text-align: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    line-height: 100px;
    color: white;
    display: inline-block;
    background-color: rgb(26, 188, 156);
}
.form-item {
    margin: 0.2rem 0;
}
</style>