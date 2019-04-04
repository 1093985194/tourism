<template>
  <div style="height: 100%;overflow:hidden">
    <div class="panel">
      <div>
        <h4 style="float: left"><span class="glyphicon glyphicon-glass" style="padding-top: 4px;padding-right: 5px"></span>特产列表</h4>
        <router-link class="btn btn-default" style="float:right;margin-top:10px;margin-right: 10px" to="goodSet">添加特产</router-link>
      </div>
    </div>
    <br>
    <div class="panel-body">
      <div class="found">
        <input type="text" placeholder="输入关键字进行搜索" style="width: 400px;float: left;height: 34px" v-model="keywords" >
      </div>
      <br>
      <br>
      <div class="list">
        <div class="table-bordered" style="background-color: white">
          <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style='table-layout: fixed'>
            <thead>
            <tr>
              <th align="left" style="width: 300px">特产名称</th>
              <th align="left">出产日期</th>
              <th align="left">价格</th>
              <th align="left">余量</th>
              <th align="left">操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in search(keywords).slice(x,y)">
              <td>{{item.ticketplace}}</td>
              <td>{{item.ticketdate | dateFormat(item.ticketdate)}}</td>
              <td>{{item.ticketstyle}}</td>
              <td>{{item.ticketprice}}</td>
              <td>
                <a v-on:click="getIndex(index)"><router-link to="goodSet">修改</router-link></a>/<a href="#" v-on:click="deleteInfo(index)">删除</a>
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

</style>
