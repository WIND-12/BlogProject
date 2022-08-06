<template lang="">
    <div class="box">
        <div class="register">
            <div class="login">
           <div class="avatat_box">
               <img src="public/logo3.jpg" alt="temp">
           </div>
           
        <el-form class="login_form">
            <!-- 用户名 -->
            <el-form-item >
                <el-input :prefix-icon="Search" placeholder="请输入您想使用的用户名" v-model.trim="authors.username"></el-input>
           
             </el-form-item>

             <!-- 密码 -->
             <el-form-item >
             <el-input :suffix-icon="Calendar" placeholder="请输入您想使用的密码" v-model.trim="authors.password"></el-input>
            </el-form-item>
            
            <!-- 按钮 -->
            <el-form-item class="btns">
             <el-button type="primary" @click="onRegisterClick1">注册</el-button>
             
            </el-form-item>
            




        </el-form>

       </div>

           <!-- <form>
              用户:
              <input  type="text"  placeholder="请输入用户名" v-model.trim="authors.username">
               <br></br>
             
              密码：
               <input type="password" v-model.trim="authors.password">
               
               <button type="button" @click="onRegisterClick1">register</button>
           </form> -->

       </div>
    
    </div>
</template>
<script>
export default {
    name:"register",
    data() {
        return {
            authors:{
                username:"",
                password:"",
            }
           
        }
    },
    methods:{
        async onRegisterClick1() {
            const {data:res} = await this.$http.post("https://blogproject-73495-default-rtdb.firebaseio.com/authors.json",this.authors)

            
            
            this.$router.push('/Login.vue')
        

        }
    }
    
}
</script>
<style lang="">
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