<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left">
          <span class="glyphicon glyphicon-list-alt" style="padding-top: 4px;padding-right: 5px"></span>
          产品设置
        </h4>
      </div>
    </div>
    <!--<div class="panel panel-default" style="margin-top: 5px">-->
    <!--<div class="panel-body">-->
    <!--<div style="margin-bottom: 20px">-->
    <!--<span class="glyphicon glyphicon-th-list" style="padding-right: 10px"></span>产品类型-->
    <!--</div>-->
    <!--<div>-->
    <!--<div style="float: left;padding-top: 5px;">请选择</div>-->
    <!--<div class="btn-group " role="group" style="margin-left: 50px">-->
    <!--<button class="btn btn-default btnS" v-on:click="placeConfig" v-bind:class="{active:type=='place'}">景点门票</button>-->
    <!--<button class="btn btn-default btnS" v-on:click="carConfig" v-bind:class="{active:type=='car'}">租车</button>-->
    <!--<button class="btn btn-default btnS" v-on:click="hotelConfig" v-bind:class="{active:type=='hotel'}">酒店</button>-->
    <!--<button class="btn btn-default btnS" v-on:click="goodsConfig" v-bind:class="{active:type=='goods'}">旅游特产</button>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>特产设置
        </div>
        <div class="panel-body">

          <div style="margin-bottom: 20px;float: left">
            <div style="float:left;width: 40%;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>名称设置
              </div>
              <div class="input-group">
                <span class="input-group-addon">XXX</span>
                <input type="text" class="form-control" placeholder="请输入产品名称" aria-describedby="basic-addon1">
              </div>
            </div>

            <div style="float:left;width: 40%;">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-yen" style="padding-right: 10px"></span>价格设置
              </div>
              <div class="input-group" style="float: left ;width: 40%;margin-right: 20px">
                <span class="input-group-addon">$</span>
                <input type="text" class="form-control" placeholder="请输入价格" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>

          <div>
            <div style="float:left;width: 40%;margin-right: 20px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>库存设置
              </div>
              <div class="input-group igS">
                <span class="input-group-addon">X</span>
                <input type="text" class="form-control" placeholder="请输入库存" aria-describedby="basic-addon1">
              </div>
            </div>

            <div style="float:left;width: 40%;">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>备注
              </div>
              <textarea class="form-control" placeholder="Username" rows="4"></textarea>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>核销设置
        </div>
        <div class="panel-body">

          <div style="margin-bottom: 20px;float: left">
            <div style="float:left;width: 40%;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>人员设置
              </div>
              <div class="input-group">
                <span class="input-group-addon">X</span>
                <input type="text" class="form-control" placeholder="请输入核销人员工号" aria-describedby="basic-addon1">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="text-align:center">
      <button class="btn btn-default btn-success" style="">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'goodSet',
    data () {
      return {
        type: 'place',
        set: 'adult',
        local: 'one',
        list: [
          {id: '', name: '', price: '', balance: ''}
        ],
        goods:''
      }
    },
    created () {
      if (this.$route.params.good === undefined) {
        return
      }
      this.goods = this.$route.params.good
    },
    mounted () {
      this.hotelConfig()
      this.goodsConfig()
      this.carConfig()
      this.placeConfig()
    },
    methods: {
      placeConfig () {
        this.type = 'place'
      },
      hotelConfig () {
        this.type = 'hotel'
      },
      goodsConfig () {
        this.type = 'goods'
      },
      carConfig () {
        this.type = 'car'
      },
      adultConfig () {
        this.set = 'adult'
      },
      childConfig () {
        this.set = 'child'
      },
      AddList () {
        this.list.push({id: '', name: '', price: '', balance: ''})
      }
    }
  }
</script>

<style scoped>
  .file {
    position: relative;
    display: inline-block;
    background: #D0EEFF;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    padding: 4px 12px;
    overflow: hidden;
    color: #1E88C7;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
  }

  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }

  .file:hover {
    background: #AADFFD;
    border-color: #78C3F3;
    color: #004974;
    text-decoration: none;
  }

  .btnS {
    width: 150px;
    margin-right: 10px;
  }

  .igS {
    margin-bottom: 10px;
  }
</style>
