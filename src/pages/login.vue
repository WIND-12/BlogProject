<template lang="">
    <div class="box">
       <div class="login">
           <div class="avatat_box">
               <img src="public/logo2.jpg" alt="temp">
           </div>
           <!-- <form>
              用户:
              <input  type="text"  placeholder="请输入用户名" v-model.trim="username">
               <br></br>
             
              密码：
               <input type="password" v-model.trim="password">
               <button type="button" @click="onLoginClick">submit</button>
               <button type="button" @click="onRegisterClick">register</button>
           </form> -->
        <el-form class="login_form">
            <!-- 用户名 -->
            <el-form-item >
                <el-input :prefix-icon="Search" placeholder="请输入用户名" v-model.trim="username"></el-input>
           
             </el-form-item>

             <!-- 密码 -->
             <el-form-item >
             <el-input :suffix-icon="Calendar" placeholder="请输入密码" v-model.trim="password"></el-input>
            </el-form-item>
            
            <!-- 按钮 -->
            <el-form-item class="btns">
             <el-button type="primary" @click="onLoginClick">登录</el-button>
             <el-button type="info" @click="onRegisterClick">注册</el-button>
            </el-form-item>
            




        </el-form>

       </div>

    
    </div>
</template>
<script>
export default {
    name: "login",
    data() {
        return {
            username: "",
            password: "",
            registeredAuthors: [],

        }
    },
    methods: {
        onLoginClick() {
            var _this = this;
            this.$http.get("https://blogproject-73495-default-rtdb.firebaseio.com/authors.json").then(function (data1) {
                console.log(data1.data)
                for (let key in data1.data) {

                    _this.registeredAuthors.push(data1.data[key])

                }
                //检查数组中是否存在所对应的账号信息
                let temp = _this.registeredAuthors.some(checked);
                function checked(author) {
                    // if(_this.username === author.username && _this.password === author.password) {
                    //     return true;
                    // }else {
                    //     return false;
                    // }
                    return (_this.username === author.username && _this.password === author.password)

                }


                if (temp) {
                    // _this.$store.state.author = _this.username;
                    // console.log( _this.$store.state.author);
                    _this.$store.commit('saveAuthor', _this.username)
                    console.log(_this.$store.state.author);
                    _this.$router.push("/ShowBlog.vue")
                    localStorage.setItem('token1', 'Bearer xxx')

                } else {
                    alert("请输入正确的账户名和密码")
                }




            })
            // if(this.username === "admin" && this.password === '123456') {
            //     this.$router.push("/ShowBlog.vue")
            //     localStorage.setItem('token1','Bearer xxx')

            // }else {
            //     alert("请输入正确的账户名和密码")

            // }
        },
        onRegisterClick() {
            this.$router.push("/Register.vue")
        },

    }

}
</script>
<style lang="" scoped>
/* html {
    display:block;
    height:100%;
    margin:0;
    padding:0;
}
.box {
    background:#2b4b6b;
    height:1000px;
} */
.avatat_box {
    height:200px;
    width:200px;
    border-radius:50%;
    padding:10px;
    position:absolute;
    left:50%;
    transform:translate(-50%);
    
    
}

.btns {
    position:absolute;
    left:50%;
    transform:translate(-50%);
}

img {
    width:100%;
    height:100%;
    border-radius:50%;
}
.box{
    background:#2b4b6b;
    width:60%;
    height:500px;
    margin:0 auto;
    border-radius:3px;
}

.login_form {
    position:absolute;
    bottom:400px;
    width:60%;
    padding:0 20px;
    box-sizing:border-box;
}

input{
    width:70%;
    height:100px
}
</style>