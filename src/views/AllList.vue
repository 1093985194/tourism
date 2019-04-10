<template>
  <div style="overflow-x:hidden;height: 100%">
    <div class="panel">
      <div>
        <h4 style="float: left"><span class="glyphicon glyphicon-glass"
                                      style="padding-top: 4px;padding-right: 5px"></span>近期订单</h4>
      </div>
    </div>

    <div>
      <br>
      <br>
    </div>

    <div class="row" style="padding-left: 15px">
      <div class="col-md-12">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading" style="text-align:center; border-bottom: 0px">总订单</div>
          <div style="height: 80px; padding: 5px 0">
            <div class="biao col-md-3 bor-right" >
              <span>总数量</span>
              <br>
              <span class="text-primary" style="font-size: 40px;">100</span>
            </div>
            <div class="biao col-md-3 bor-right">
              <span>已完成</span>
              <br>
              <span class="text-success" style="font-size: 40px;">80</span>
            </div>
            <div class="biao col-md-3 bor-right">
              <span>未完成</span>
              <br>
              <span class="text-warning" style="font-size: 40px;">15</span>
            </div>
            <div class="biao col-md-3">
              <span>故障订单</span>
              <br>
              <span class="text-danger" style="font-size: 40px;">5</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="panel panel-default">
          <!-- Default panel contents -->
          <div class="panel-heading" style="text-align:center; border-bottom: 0px">出游类型</div>
          <!-- Table -->
          <div style="height: 80px; padding: 5px 0">
            <div class="biao col-md-4 bor-right" >
              <span>自由行</span>
              <br>
              <span class="text-primary" style="font-size: 40px;">40</span>
            </div>
            <div class="biao col-md-4 bor-right">
              <span>跟团游</span>
              <br>
              <span class="text-success" style="font-size: 40px;">30</span>
            </div>
            <div class="biao col-md-4">
              <span>一日游</span>
              <br>
              <span class="text-warning" style="font-size: 40px;">30</span>
            </div>

          </div>
        </div>
      </div>
      </div>

      <div class="col-md-12">
        <div class="col-md-3">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading" style="text-align:center; border-bottom: 0px">消费额度</div>
            <!-- Table -->
            <div style="height: 80px; padding: 5px 0">
              <div class="biao col-md-4 bor-right" >
                <span>>1000</span>
                <br>
                <span class="text-primary" style="font-size: 40px;">40</span>
              </div>
              <div class="biao col-md-4 bor-right">
                <span>>500</span>
                <br>
                <span class="text-success" style="font-size: 40px;">50</span>
              </div>
              <div class="biao col-md-4">
                <span> <500 </span>
                <br>
                <span class="text-warning" style="font-size: 40px;">10</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="panel panel-default">
            <!-- Default panel contents -->
            <div class="panel-heading" style="text-align:center; border-bottom: 0px">用户满意度</div>
            <!-- Table -->
            <div style="height: 80px; padding: 5px 0">
              <div class="biao col-md-3 bor-right" >
                <span>☆☆☆☆</span>
                <br>
                <span class="text-primary" style="font-size: 40px;">86</span>
              </div>
              <div class="biao col-md-3 bor-right">
                <span>☆☆☆</span>
                <br>
                <span class="text-success" style="font-size: 40px;">7</span>
              </div>
              <div class="biao col-md-3 bor-right">
                <span>☆☆</span>
                <br>
                <span class="text-warning" style="font-size: 40px;">5</span>
              </div>
              <div class="biao col-md-3">
                <span>☆</span>
                <br>
                <span class="text-danger" style="font-size: 40px;">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


    <div class="panel-body">
      <div>
        <h4 style="float: left"><span class="glyphicon glyphicon-glass"
                                      style="padding-top: 4px;padding-right: 5px"></span>订单查询</h4>

        <div class="col-md-4" style="float: right;padding-top: 10px">
          <div class="input-group">
            <div class="input-group-btn">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{types}}</button>
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                      style="height: 34px">
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li @click="zhonglei"><a>种类</a></li>
                <li role="separator" class="divider"></li>
                <li @click="jingdian"><a>景点</a></li>
                <li role="separator" class="divider"></li>
                <li @click="jiudian"><a >酒店</a></li>
                <li role="separator" class="divider"></li>
                <li @click="canyin"><a>餐饮</a></li>
                <li role="separator" class="divider"></li>
                <li @click="zuche"><a>租车</a></li>
              </ul>
            </div>
            <input type="text" class="form-control" v-model="keywords" placeholder="输入关键字进行搜索">
          </div>
        </div>
        <br>
        <br>
      <div class="lists">
        <div class="table-bordered" style="background-color: white">
          <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style="table-layout: fixed">
            <thead >
            <tr>
              <th align="left" style="width: 100px">订单类型</th>
              <th align="left" style="width: 100px">客户名</th>
              <th align="left" style="width: 100px">手机号</th>
              <th align="left" style="width: 200px">产品名称</th>
              <th align="left" style="width: 100px">特产</th>
              <th align="left" style="width: 100px">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-if="list.length!==0" v-for="(item,index) in list">
              <td>{{item.business.type}}</td>
              <td>{{item.user.nickName}}</td>
              <td>{{item.user.phone}}</td>
              <td>{{item.business.name}}</td>
              <td>{{item.deliverState}}</td>
              <td>
                <a href="#" v-on:click="deleteInfo(index)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

        <nav aria-label="...">
          <ul class="pager">
            <li class="previous" v-on:click="shang" v-if="page!=1"><a href="#"><span aria-hidden="true">&larr;</span> 上一页</a></li>
            <li class="previous disabled" v-if="page==1"><a href="#"><span aria-hidden="true">&larr;</span> 上一页</a></li>
            <li class="next" v-on:click="xia"><a href="#">下一页<span aria-hidden="true">&rarr;</span></a></li>
          </ul>
        </nav>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:null,
        keywords:'',
        page:'1',
        num:0,
        x:'0',
        y:'10',
        dataIndex:'',
        types:'种类',
        type:'',
        dealType:''
      }
    },
    mounted () {
      this.$axios.get(this.GLOBAL.BASE_URL+'/api/order')
        .then(response => {
          this.list = response.data;
        })

    },
    methods:{
      jiudian () {
        this.types = '酒店'
        this.dealType= 'hotel'
      },
      jingdian () {
        this.types = '景点'
        this.dealType= 'scenic'
      },
      zhonglei(){
        this.types = '种类'
        this.dealType= ''
      },
      canyin(){
        this.types = '餐饮'
        this.dealType= 'restaurant'
      },
      zuche(){
        this.types = '租车'
        this.dealType= 'carShop'
      },
      deleteInfo(index){
        this.$axios.delete(this.GLOBAL.BASE_URL+'/api/order/'+this.list[index].id)
        this.list.splice(index,1)
      },
      shang(){
        this.page--;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/order',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page++;
              return;
            }
            this.list = response.data;
          })
      },
      xia(){
        this.page++;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/order',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page--;
              return;
            }
            this.list = response.data;
          })
      },
      search() {
        console.log(this.keywords)
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/order', {
          params:{
            userName: this.keywords,
            page: this.page,
            dealType:this.dealType
          }
        }).then(response => this.list = response.data)
      }
    },
    filters:{
      dateFormat:function(time) {
        var date=new Date(time);
        var year=date.getFullYear();
        var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        // 拼接
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      }
    },
    watch:{
      keywords(key){
        this.search()
        console.log(key)
      },
      dealType(key){
        this.search()
      }
    }
  }
</script>

<style>
  .bor-right{
    border-right: darkgray 1px solid;
  }
  .biao {
    text-align: center;
    height: 70px;
    float: left;
  }
  .lists{
    width: fit-content;
    padding-top: 30px;
  }
  .table {
    margin-bottom: 0px;
  }
</style>
