<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left" v-if="this.lines.id !== 0">
          <span class="glyphicon glyphicon-list-alt" style="padding-top: 4px;padding-right: 5px"></span>
          产品设置
        </h4>
        <h4 style="float: left" v-else>
          <span class="glyphicon glyphicon-list-alt" style="padding-top: 4px;padding-right: 5px"></span>
          新建产品
        </h4>
      </div>
    </div>
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>通常设置
        </div>
        <div class="panel-body">
          <div style="float: left">
            <div style="margin-bottom: 20px;float: left">
              <div style="float:left;margin-right: 40px">
                <div style="margin-bottom: 10px">
                  <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>名称设置
                </div>
                <div>
                  <div class="input-group" style="float:left;margin-right: 40px;width: 40%">
                    <span class="input-group-addon">名称</span>
                    <input type="text" class="form-control" placeholder="请输入产品名称" aria-describedby="basic-addon1" v-model="lines.name">
                  </div>
                  <div class="input-group" style="float:left;margin-right: 40px;width: 40%">
                    <span class="input-group-addon">价格</span>
                    <input type="text" class="form-control" placeholder="请输入产品价格" aria-describedby="basic-addon1">
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
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
              <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0'
                     style='table-layout: fixed'>
                <thead>
                <tr v-if="lines.tripItems.length!=0">
                  <th align="left">名称</th>
                  <th align="left">日程</th>
                  <th align="left">地址</th>
                  <th align="left">余票</th>
                  <th align="left">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr  v-for="(item,index) in lines.tripItems">
                  <td>{{item.business.name}}</td>
                  <td>{{item.useTime}}</td>
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
                  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                          style="height: 34px">
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li @click="jingdian"><a>景点</a></li>
                    <li role="separator" class="divider"></li>
                    <li @click="jiudian"><a>酒店</a></li>
                  </ul>
                </div>
                <input type="text" class="form-control" v-model="key" placeholder="搜索">
              </div>
            </div>
            <br>
            <div style="float: left;" v-if="this.resList.length!==0">
              <div class="table-bordered" style="background-color: white">
                <table class="table table-hover table-striped" width='100%' border='0' cellspacing='0' cellpadding='0'
                       style='table-layout: fixed'>
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
                    <th><a data-toggle="modal" data-target="#myModal" @click="addItem(item)">添加</a></th>
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
                <span class="input-group-addon">工号</span>
                <input type="text" class="form-control" placeholder="请输入核销人员工号" aria-describedby="basic-addon1">
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
    <div style="text-align:center">
      <button class="btn btn-default btn-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="update">
        确认</button>
    </div>


    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
              aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">添加行程</h4>
          </div>
          <div class="modal-body">

            <div>
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>类型设置
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="input-group">
                    <span class="input-group-addon">
                      <input type="radio" aria-label="...">
                    </span>
                    <input type="text" class="form-control" disabled="disabled" value="">
                  </div><!-- /input-group -->
                </div>
              </div>
            </div>

            <div>
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>时间设置
              </div>
              <div class="form-group">
                <div class="input-group date">
                  <input type="text" class="form-control" v-model="newItems.useTime" id="dateTimePicker"/>
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
              </div>
            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click="addLine">添加</button>
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
      return {
        key: '',
        type: '酒店',
        newItems: {
          id: 0,
          tripId: 0,
          businessType: '',
          businessId: 0,
          dealId: 0,
          useTime: '',
          recommendCause: '',
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
        },
        lines: {
          id: 0,
          name: '',
          tripItems: [],
        },
        resList: [],
      }
    },
    created () {
      if (this.$route.params.line === undefined) {
        return
      }
      this.lines = this.$route.params.line
      for (let i = 0; i < this.lines.tripItems.length; i++) {
        this.$axios.get(this.GLOBAL.BASE_URL + '/api/' + this.lines.tripItems[i].businessType + '/' + this.lines.tripItems[i].businessId)
          .then(response => this.$set(this.lines.tripItems[i], 'business', response.data))
      }
      // this.addTime="2019-04-04";
    },
    mounted () {
      this.search()
      const dateTimePicker = $('#dateTimePicker')
      const that = this
      dateTimePicker.datetimepicker({
        // minView: 'month',
        language: 'zh-CN',
        // format: 'yyyy-mm-dd hh:mm:ss',
      })
      dateTimePicker.datetimepicker()
        .on('hide', function (ev) {
          var value = dateTimePicker.val()
          that.newItems.useTime = value
        })
    },
    methods: {
      jiudian () {
        this.type = '酒店'
      },
      jingdian () {
        this.type = '景点'
      },
      search () {
        if (this.type === '景点') {
          this.$axios.get(this.GLOBAL.BASE_URL + '/api/scenic', {
            params: {
              fuzzyKey: this.key
            }
          }).then(response => this.resList = response.data)
        } else if (this.type === '酒店') {
          this.$axios.get(this.GLOBAL.BASE_URL + '/api/hotel', {
            params: {
              fuzzyKey: this.key
            }
          }).then(response => this.resList = response.data)
        }
      },
      del (index) {
        // this.$axios.delete(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room/'+this.rooms[i].id)
        this.lines.tripItems.splice(index, 1)
      },
      addLine:function(){
        this.lines.tripItems.push(this.clone(this.newItems))
        console.log("fdsa")
        this.lines.tripItems.sort((a,b)=> new Date(a.useTime).getTime() - new Date(b.useTime).getTime())
      },
      addItem(item){
        this.newItems.business = item;
      },
      clone(obj){
        return JSON.parse(JSON.stringify(obj));
      },
      update () {
        console.log(this.lines)
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/trip/', this.lines)
          .then(response => {
            Object.assign(this.lines,response.data);
            // this.$axios.post(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket', this.tickets)
            //   .then(response => {
            //     Object.assign(this.tickets,response.data);
            //   })
          })
      },
    },
    watch: {
      type (val) {
        this.search()
      },
      key (val) {
        this.search()
      },
    }
  }
</script>

<style scoped>
  .table {
    margin-bottom: 0px;
  }
</style>
