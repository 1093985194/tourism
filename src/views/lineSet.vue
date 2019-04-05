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
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>旅游设置
        </div>

        <div class="row">
          <div style="float: left;" class="col-md-6">
              <div class="table-bordered" style="background-color: white">
                <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style='table-layout: fixed'>
                  <thead>
                    <tr >
                      <th align="left">名称</th>
                      <th align="left">日程</th>
                      <th align="left">价格</th>
                      <th align="left">余票</th>
                      <th align="left">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in lines.tripItems">
                      <td>{{item.business.id}}</td>
                      <td>{{item.business.name}}</td>
                      <td>{{item.business.address}}</td>
                      <td>{{item.business.phone}}</td>
                      <td><a @click="del(index)">删除</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>


          <div class="col-md-6" style="float: left">


            <div>
              <div class="input-group">
                <div class="input-group-btn">
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">{{type}}</button>
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" style="height: 34px">
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li @click="jingdian"><a href="#">景点</a></li>
                    <li role="separator" class="divider"></li>
                    <li @click="jiudian"><a href="#">酒店</a></li>
                  </ul>
                </div>
                <input type="text" class="form-control" v-model="key" placeholder="搜索">
              </div>
            </div>
            <br>
            <div style="float: left;" v-if="this.resList.length!==0">
              <div class="table-bordered" style="background-color: white">
                <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0' style='table-layout: fixed'>
                  <thead>
                  <tr>
                    <th align="left">类型</th>
                    <th align="left">名称</th>
                    <th align="left">价格</th>
                    <th align="left">余票</th>
                    <th align="left">操作</th>
                  </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in resList">
                      <th>{{item.type}}</th>
                      <th>{{item.name}}</th>
                      <th>{{item.moneyMin}}</th>
                      <th>{{item.lever}}</th>
                      <th><a  data-toggle="modal" data-target="#myModal">添加</a></th>
                    </tr>
                  </tbody>
                </table>
              </div>
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
      <button class="btn btn-default btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">确认<span class="caret"></span></button>
    </div>




    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>







  </div>
</template>

<script>
  export default {
    name: 'lineSet',
    data () {
      return{
        key:'',
        type:'酒店',
        lines:{
          id: 0,
          name: '',
          tripItems: [
            {
              id: 0,
              tripId: 0,
              businessType: '',
              businessId: 0,
              dealId: 0,
              useTime: '',
              recommendCause:'' ,
              business: {
                id: 0,
                type: '',
                name: null,
                briefIntroduce: null,
                phone: null,
                imgUrl: null,
                address: null,
                score: null,
                close: false
              }
            }
        ]
        },
        resList:[],
      }
    },
    created () {
      if (this.$route.params.line === undefined) {
        return
      }
      this.lines= this.$route.params.line;
      for(let i = 0;i<this.lines.tripItems.length;i++){
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/'+this.lines.tripItems[i].businessType+"/"+this.lines.tripItems[i].businessId)
          .then(response => this.$set(this.lines.tripItems[i],"business",response.data));
      }
    },
    mounted(){
      this.search()
    },
    methods: {
      jiudian(){
        this.type = '酒店';
      },
      jingdian(){
        this.type = '景点';
      },
      search(){
        if(this.type === "景点"){
          this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic', {
            params:{
              fuzzyKey: this.key
            }
          }).then(response => this.resList = response.data)
        }else if (this.type === "酒店"){
          this.$axios.get(this.GLOBAL.BASE_URL+'/api/hotel', {
            params:{
              fuzzyKey: this.key
            }
          }).then(response => this.resList = response.data)
        }
      },
      del(index){
        // this.$axios.delete(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room/'+this.rooms[i].id)
        this.lines.tripItems.splice(index,1);
      }
    },
    watch:{
      type(val) {
        this.search()
      },
      key(val){
        this.search()
      }
    }
  }
</script>

<style scoped>
  .table{
    margin-bottom: 0px;
  }
</style>
