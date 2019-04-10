<template>
    <div style="height: 100%">
      <div class="panel">
        <div>
          <h4 style="float: left"><span class="glyphicon glyphicon-home" style="padding-top: 4px;padding-right: 5px"></span>餐饮列表</h4>
          <router-link class="btn btn-default" style="float:right;margin-top:10px;margin-right: 10px" to="restaurantSet">添加餐饮店</router-link>
        </div>
      </div>
      <br>
      <hr style="margin: 0px">
      <div class="panel-body">
        <div class="found">
          <input type="text" placeholder="输入关键字进行搜索" style="width: 400px;float: left;height: 34px" v-model="keywords">
        </div>
        <br>
        <br>
        <div class="list">
          <div class="table-bordered" style="background-color: white">
            <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style='table-layout: fixed'>
              <thead>
              <tr>
                <th align="left" style="width: 200px">酒店名称</th>
                <th align="left" style="width: 100px">客户名</th>
                <th align="left" style="width: 100px">手机号</th>
                <th align="left" style="width: 100px">价格</th>
                <th align="left" style="width: 100px">操作</th>
              </tr>
              </thead>
              <tbody>
              <!--<tr v-for="(item,index) in search(keywords).slice(x,y)">-->
              <tr v-for="(item,index) in rest">
                <td>{{item.name}}</td>
                <td>{{item.address}}</td>
                <td>{{item.id}}</td>
                <td>{{item.score}}</td>
                <td>
                  <router-link to="restaurantSet"><a v-on:click="getIndex(rest[index])">修改 </a></router-link>/<a href="#" @click="del(index)">删除</a>
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
      return {
        rest:null,
        keywords:'',
        page:'1',
        num:'0',
        x:'0',
        y:'10',
        dataIndex:'',
      }
    },
    mounted () {
      this.$axios.get(this.GLOBAL.BASE_URL+'/api/restaurant')
        .then(response => {
          this.rest = response.data;
        })
    },
    methods:{
      del(index){
        this.$axios.delete(this.GLOBAL.BASE_URL+'/api/restaurant/'+this.rest[index].id)
        this.rest.splice(index,1);
      },
      shang(){
        this.page--;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/restaurant',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page++;
              return;
            }
            this.rest = response.data;
          })
      },
      xia(){
        this.page++;
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/restaurant',{
          params:{
            page: this.page
          }
        })
          .then(response => {
            if (!(Array.isArray(response.data))||response.data==null||response.data.length===0){
              this.page--;
              return;
            }
            this.rest = response.data;
          })
      },
      getIndex(rest){
        this.$router.push({
          name:'restaurantset',
          params:{
            rest : rest
          }
        })
      },
      search() {
        this.num='0';
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/restaurant', {
          params:{
            fuzzyKey: this.keywords,
            page: this.page
          }
        }).then(response => this.rest = response.data)
      }
    },
    watch:{
      keywords(key){
        this.search()
      }
    }
  }
</script>

<style scoped>
  .list{
    width: fit-content;
  }
  .table{
    margin-bottom: 0px;
  }
</style>
