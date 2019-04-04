<template>
  <div class="app">
    <nav class="navbar navbar-default navbar-fixed-top top-nav" style="background-color: white">
      <div class="navbar-header">
        <a class="navbar-brand" >
          <img src="../../static/images/logo.png" alt="logo">
        </a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <button class="btn btn-default dropdown-toggle" style="margin-top: 7px;margin-right: 2px">
              <span class="glyphicon glyphicon-envelope"></span>
            </button>
          </li>
          <li class="active dropdown">
            <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="margin-top: 7px">
              <span class="glyphicon glyphicon-user"></span>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
              <!--<li><a href="#">Action</a></li>-->
              <!--<li><a href="#">Another action</a></li>-->
              <!--<li><a href="#">Something else here</a></li>-->
              <!--<li role="separator" class="divider"></li>-->
              <li><router-link to="register">登出</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container main">
      <left/>
      <middle/>
    </div>
  </div>
</template>

<script>
  import left from './LeftNav'
  import middle from './Middle'
  export default {
    name: 'Main',
    components:{
      left,
      middle,
    }
  }
</script>

<style>
  html, body{
    margin:0px;
    height:100%;
  }
  .app{
    margin:0px;
    width: 100%;
    height:100%;
  }
  .container{
    padding: 0px;
    margin: 0px;
    height: 100%;
  }

  .top-nav{
    padding-right: 20px;
  }
  .navbar-brand {
    padding-top: .3359375rem;
  }
  .main{
    padding-top: 50px;
    height: 100%;
    width: 100%;
  }
</style>
