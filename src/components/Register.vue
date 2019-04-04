<template>
    <div>
      <div class="a">
        <div class="row">
          <div class=" c">
            <div class="card">
              <div class="text-center text-uppercase h4 card-header">
                全域旅游管理系统
              </div>
              <div>
              </div>

              <div class="card-body">
                <div class="form-group">
                  <label class="">用户名</label>
                  <input type="name" class="form-control">
                </div>

                <div class="form-group">
                  <label class="">密码</label>
                  <input type="password" class="form-control">
                </div>

                <div v-if="reg">
                  <div class="form-group">
                    <label class="">确认密码</label>
                    <input type="password" class="form-control">
                  </div>

                  <div class="form-group">
                    <label class="">邮件</label>
                    <input type="email" class="form-control">
                  </div>
                </div>
              </div>

              <div class="card-footer">
                <router-link to="Main"><button type="submit" class="btn btn-success" v-on:click="dl" v-if="log">登陆</button></router-link>
                <button type="submit" class="btn btn-success" style="float:right" v-on:click="zc" v-if="log">去注册</button>
                <router-link to="Main"><button type="submit" class="btn btn-success" v-on:click="zc" v-if="reg">注册</button></router-link>
                <button type="submit" class="btn btn-success" style="float:right" v-on:click="dl" v-if="reg">已有账号</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'Register',
    data(){
      log:true;
      reg:false;
      return{
        log:this.log,
        reg:this.reg,
      }
    },
    mounted(){
      this.zc()
      this.dl()
    },
    methods:{
      zc(){
        this.log = false;
        this.reg = true;
      },
      dl(){
        this.log = true;
        this.reg = false;
      },
    }
  }
</script>

<style>

  .a{
    position: absolute;
    width:450px;
    height: 500px;
    top:20%;
    left:40%;
    padding-right: 15px;
    padding-left: 15px;
    margin-left:-50px;
    margin-top:-25px;
  }

  .c{
    background-color: white;
    border-style: inherit;
  }
  .card{
    padding: 25px;
    margin-bottom: 20px;
  }
  .card-header{
    margin: 0px;
    padding: 1rem;
    border-bottom: 1px none;
  }
  .card-body{
    padding: 1rem;
    padding-bottom: 3rem!important;
    padding-top: 3rem!important;
  }
  .form-group{
    margin-bottom: 1rem;
  }
  .card-footer {
    padding: 1rem;
    background-color: #fff;
    border-top: 1px none;
  }

</style>
