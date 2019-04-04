<template>
  <div style="height: 100%;">
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
            <div class="biao col-md-4 bor-right">
              <span>一日游</span>
              <br>
              <span class="text-warning" style="font-size: 40px;">30</span>
            </div>

          </div>
        </div>
      </div>

      <div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>


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


    <div class="panel-body">
      <div>
        <h4 style="float: left"><span class="glyphicon glyphicon-glass"
                                      style="padding-top: 4px;padding-right: 5px"></span>订单查询</h4>

      <div style="float: right;padding-top: 10px">
        <input type="text" placeholder="输入关键字进行搜索" style="width: 400px;float: left;height: 34px" v-model="keywords">
      </div>
        <br>
        <br>
      <div class="list">
        <div class="table-bordered" style="background-color: white">
          <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style="table-layout: fixed">
            <thead >
            <tr>
              <th align="left" style="width: 100px">订单类型</th>
              <th align="left" style="width: 100px">客户名</th>
              <th align="left" style="width: 100px">手机号</th>
              <th align="left" style="width: 200px">酒店名称</th>
              <th align="left" style="width: 100px">景点名称</th>
              <th align="left" style="width: 100px">特产</th>
              <th align="left" style="width: 100px">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in search(keywords).slice(x,y)">
              <td>{{item.ticketplace}}</td>
              <td>{{item.ticketdate | dateFormat(item.ticketdate)}}</td>
              <td>{{item.ticketstyle}}</td>
              <td>{{item.ticketprice}}</td>
              <td>{{item.ticketleave}}</td>
              <td>{{item.ticketleave}}</td>
              <td>
                <a v-on:click="getIndex(index)">修改</a>/<a href="#" v-on:click="deleteInfo(index)">删除</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>

        <nav aria-label="...">
          <ul class="pager">
            <li class="previous" v-on:click="shang" v-if="page!=1"><a href="#"><span aria-hidden="true">&larr;</span> 上一页</a></li>
            <li class="previous disabled" v-on:click="shang" v-if="page==1"><a href="#"><span aria-hidden="true">&larr;</span> 上一页</a></li>
            <li class="next" v-on:click="xia"  v-if="page*10<num"><a href="#">下一页<span aria-hidden="true">&rarr;</span></a></li>
            <li class="next disabled" v-on:click="xia"  v-if="page*10>=num"><a href="#">下一页<span aria-hidden="true">&rarr;</span></a></li>
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
        list:[
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'chengren',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'eee',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'ccc',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'ddd',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'bbb',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
          {id:'1',ticketplace:'aaa',ticketdate:new Date(),ticketstyle:'ertong',ticketprice:123,ticketleave:123},
        ],
        keywords:'',
        page:'1',
        num:'0',
        x:'0',
        y:'10',
        dataIndex:'',
      }
    },
    methods:{
      deleteInfo(index){
        this.list.splice(index,1)
      },
      shang(){
        if (this.page!=1){
          this.page--;
          this.x=(this.page-1)*10;
          this.y=this.page*10;
        }
      },
      xia(){
        if (this.page*10<this.num) {
          this.page++;;
          this.x=(this.page-1)*10;
          this.y=this.page*10;}
      },
      getIndex(index){
        this.dataIndex=index;
      },
      search(keywords) {
        this.num='0'
        return this.list.filter(item => {
          if (item.ticketplace.includes(keywords)) {
            if (item.ticketplace!=null) {
              this.num++
            }
            return item
          }
        })
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
  .list{
    width: fit-content;
    padding-top: 30px;
  }
</style>
