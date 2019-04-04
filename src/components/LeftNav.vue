<template>
  <div class="left-nav container">
    <div class="col-md-2 left-nav-main">
      <div class="panel left-nav-panel">
        <div class="left-nav-top">
          <span class="glyphicon glyphicon-screenshot"
                style="float: left;padding: 12px 20px;color: white;margin-left: 20px">
              <router-link to="/home"
                           style="color: white;font-size: larger;padding-left: 20px;text-decoration:none">全域管理</router-link>
          </span>
        </div>
        <ul class="nav" id="accordion">
          <li class="nav-dropdown ">
            <a href="#layouts" class="dropdown-toggle panel-title " data-toggle="collapse"
               data-parent="#accordion">
              <span class="glyphicon glyphicon-shopping-cart"
                    style="float: left;padding: 2px 15px"></span>产品管理
              <span class="caret"></span>
            </a>
            <ul class="collapse left-nav-ul" id="layouts">
              <router-link to="ticket" style="color: gray;text-decoration:none">
                  <li class="list-group-item left-nav-item">
                    <span class="glyphicon glyphicon-shopping-cart"
                          style="padding-right: 20px"></span>
                    景点门票
                  </li>
              </router-link>

                  <router-link to="hotel" style="color: gray;text-decoration:none">
                  <li class="list-group-item left-nav-item">
                    <span class="glyphicon glyphicon-shopping-cart"
                          style="padding-right: 20px"></span>
                    酒店
                  </li>
                  </router-link>

              <router-link to="Line" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-shopping-cart"
                        style="padding-right: 20px"></span>路线
                </li>
              </router-link>

              <router-link to="group" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-shopping-cart"
                        style="padding-right: 20px"></span>周边跟团
                </li>
              </router-link>

              <router-link to="goods" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-shopping-cart"
                        style="padding-right: 20px"></span>旅游特产
                </li>
              </router-link>

              <router-link to="car" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-shopping-cart"
                        style="padding-right: 20px"></span>租车
                </li>
              </router-link>
            </ul>
          </li>

          <li class="nav-dropdown">
            <a href="#UI" class="dropdown-toggle panel-title" data-toggle="collapse"
               data-parent="#accordion">
              <span class="glyphicon glyphicon-list-alt" style="float: left;padding: 2px 15px"></span>订单管理
              <span class="caret"></span>
            </a>
            <ul class="collapse left-nav-ul" id="UI">

              <router-link to="alllist" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-list-alt" style="padding-right: 20px"></span>订单汇总与查询
                </li>
              </router-link>

              <router-link to="listdelet" style="color: gray;text-decoration:none">
                <li class="list-group-item left-nav-item">
                  <span class="glyphicon glyphicon-list-alt" style="padding-right: 20px"></span>订单核销
                </li>
              </router-link>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'left'
  }
</script>

<style>
  .container{
    margin: 0px;
    height: 100%;
  }
  .left-nav {
    float: left;
    border: 1px;
    width: 15%;
    height: 100%;
    background-color: #272727;
    color: gray;
    position: fixed;
  }

  .left-nav-main {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    float: left;
  }

  .left-nav-panel {
    border-style: solid;
    border-width: 2px;
    padding-right: 0px;
    background-color: #272727;
    color: gray;
  }

  .left-nav-top {
    height: 60px;
  }

  .caret {
    float: right;
  }

  .left-nav-ul {
    padding-left: 0px;
  }

  .left-nav-item {
    background-color: #1f1f1f;
    border-style: none;
  }

  .left-nav-item:hover {
    color: white;
  }
</style>
