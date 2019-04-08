<template>
  <div style="height: 100%;">
    <div class="panel">
      <div>
        <h4 style="float: left"><span class="glyphicon glyphicon-list-alt" style="padding-top: 4px;padding-right: 5px"></span>景点门票列表</h4>
        <router-link class="btn btn-default" style="float:right;margin-top:10px;margin-right: 10px" to="ticketSet">添加新产品</router-link>
      </div>
    </div>
    <br>
    <div class="panel-body" style="height: 100%">
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
              <th align="left" style="width: 300px">景点名称</th>
              <th align="left">日程</th>
              <th align="left">票种</th>
              <th align="left">地点s</th>
              <th align="left">余票</th>
              <th align="left">操作</th>
            </tr>
            </thead>
            <tbody>
            <!--<tr v-for="(item,index) in search(keywords).slice(x,y)">-->
            <tr v-for="(item,index) in scenic">
              <td>{{item.name}}</td>
              <td>{{item.startTime }}</td>
              <td>{{item.phone}}</td>
              <td>{{item.id}}</td>
              <td>{{item.address}}</td>
              <td>
                <router-link to="ticketSet"><a v-on:click="getIndex(scenic[index])">修改</a></router-link>/<a href="#" v-on:click="deleteInfo(index)">删除</a>
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
</template>

<script>
  export default {
    data(){
      return{
        scenic:null,
        ticket:null,
        keywords:'',
        page:'1',
        num:'0',
        x:'0',
        y:'10',
        dataIndex:'',
      }
    },
    mounted () {
      this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic')
        .then(response => {
          this.scenic = response.data;
        })
      console.log(this.GLOBAL.BASE_URL+'/api/scenic')
    },
    methods:{
      deleteInfo(index){
        this.$axios.delete(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic[index].id)
        this.scenic.splice(index,1);
      },
      shang(){
        this.page--;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page++;
              return;
            }
            this.scenic = response.data;
          })
      },
      xia(){
        this.page++;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page--;
              return;
            }
            this.scenic = response.data;
          })

      },
      getIndex(scenic){
        this.$router.push({
          name:'ticketset',
          params:{
            scenic : scenic
          }
        })
      },
      search() {
        this.num='0';
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic', {
          params:{
            fuzzyKey: this.keywords,
            page: this.page
          }
        }).then(response => this.scenic = response.data)
      },
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
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      }
    },
    watch:{
      keywords(key){
        this.search()
      }
    }

  }
</script>

<style>
  .list{
    width: fit-content;
  }
  .table{
    margin-bottom: 0px;
  }
</style>
