<template>
  <div>
    <div class="login_wrapper">
      <div class="animate form login_form">
        <section class="login_content">
          <form>
            <h1>管理员登录</h1>
            <div>
              <input type="text"
                     v-model="uname"
                     class="form-control" placeholder="管理员登录名" required />
            </div>
            <div>
              <input type="password"
                     v-model="upwd"
                     class="form-control" placeholder="管理员登录密码" required />
            </div>
            <div>
              <a
                @click="login"
                class="btn btn-default submit" >
                  &nbsp;登&nbsp;录&nbsp;
              </a>
            </div>

            <div class="clearfix"></div>

            <div class="separator">
              <div class="clearfix"></div>
              <br />

              <div>
                <h1><img src="../assets/img/favicon.ico"/>学子商城后台管理系统</h1>
                <p>©2017 版权所有，CODEBOY.COM</p>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
      methods:{
          login(){
              //获取用户名和密码
              console.log(this.uname,this.upwd);
              var args =
                "uname="+this.uname+"&upwd="+this.upwd;
              // 向服务器端发起请求
              this.$http.get('http://localhost/admin/data/login.php?'+args)
                .then((response)=>{
                  console.log(response.data);
                  // 如果请求结果code是200，跳转到index
                  if(response.data.code == 200){
                    this.$router.push('/index');
                  }
                })
          }
      },
      data(){
          return {uname:'',upwd:''}
      }
  }
</script>
