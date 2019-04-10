<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left" v-if="this.scenic.id !== 0">
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
          <div style="float: left;width: 50%">
            <div style="margin-bottom: 20px;float: left">
              <div style="float:left;margin-right: 40px">
                <div style="margin-bottom: 10px">
                  <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>名称设置
                </div>
                <div class="input-group" style="float:left;margin-right: 40px">
                  <span class="input-group-addon">名称</span>
                  <input type="text" class="form-control" placeholder="请输入产品名称" aria-describedby="basic-addon1" v-model="scenic.name">
                </div>
                <div class="input-group" style="float:left;margin-right: 40px;margin-top: 10px">
                  <span class="input-group-addon">地址</span>
                  <input type="text" class="form-control" placeholder="请输入地址" aria-describedby="basic-addon1" v-model="scenic.address">
                </div>
              </div>
            </div>

            <div style="float:left;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>票种设置
                <button class="btn btn-default" style="margin-left: 20px" v-on:click="AddList">添加新票种</button>
              </div>
              <!--<div >-->
                <!--<table width='100%' style='table-layout: fixed'>-->
                  <!--<thead style="padding-bottom: 20px">-->
                    <!--<tr v-if="tickets.length!=0">-->
                      <!--<td style="padding: 5px">名称</td>-->
                      <!--<td style="padding-left: 10px">价格</td>-->
                      <!--<td style="padding-left: 20px">操作</td>-->
                    <!--</tr>-->
                  <!--</thead>-->
                  <!--<tbody>-->
                  <!--<tr class="form-inline" v-for="(v,i) in tickets" style="float: left;margin-bottom: 5px">-->
                      <!--<td><input class="form-control" v-model="tickets[i].name" placeholder="请输入名称"></td>-->
                      <!--<td><input class="form-control" v-model="tickets[i].price" placeholder="请输入价格"></td>-->
                      <!--<td><button class="btn btn-default" @click="del(i)">删除</button></td>-->
                  <!--</tr>-->
                  <!--</tbody>-->
                <!--</table>-->
              <!--</div>-->
              <div style="padding: 5px">
                <tr>
                  <td style="padding: 5px">名称</td>
                  <td style="padding-left: 170px">价格</td>
                  <td style="padding-left: 170px">操作</td>
                </tr>
                <div v-for="(v,i) in tickets" style="float: left;margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="tickets[i].name" placeholder="请输入景点名称">
                    <input class="form-control" v-model="tickets[i].price" placeholder="请输入价格">
                    <button class="btn btn-default" @click="del(i)">删除</button>
                    <br>
                  </form>
                </div>
              </div>

            </div>
          </div>
          <div style="float:left;width: 40%;">
            <div>
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>简介
              </div>
              <textarea class="form-control" placeholder="Username" rows="5" v-model="scenic.briefIntroduce"></textarea>
            </div>

            <div style="margin-top: 20px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>添加景点图片
              </div>
              <div>
                <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="updateImg"/>
              </div>
            </div>

            <div style="margin-top: 20px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>服务设施
              </div>
              <div>
                <label class="checkbox-inline">
                  <input type="checkbox" v-model="scenic.hasWifi"> 是否有WIFI
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" v-model="scenic.hasWc"> 是否有卫生间
                </label>
                <label class="checkbox-inline">
                  <input type="checkbox" v-model="scenic.hasP"> 是否有停车场
                </label>
              </div>
            </div>
            <div style="margin-top: 20px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>管理号码
              </div>
              <div class="input-group" style="margin-top: 20px">
                <span class="input-group-addon">号码</span>
                <input type="text" class="form-control" placeholder="请输入酒店号码" aria-describedby="basic-addon1"
                       v-model="scenic.phone">
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>日期票种设置
        </div>
        <div class="panel-body">
          <div style="float: left;width: 50%">

            <div style="float:left;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>票种设置
              </div>
              <div style="padding: 5px">
                <tr>
                  <td style="padding: 5px">名称</td>
                  <td style="padding-left: 170px">价格</td>
                  <td style="padding-left: 170px">操作</td>
                </tr>
                <div v-for="(item,i) in tickets" style="float: left;margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="tickets[i].name" placeholder="请输入名称">
                    <input class="form-control" v-model="item.times[item.timeIndex].price" placeholder="请输入价格">
                    <button class="btn btn-default" @click="del(i)">删除</button>
                    <br>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div style="float:left;width: 40%;">
            <div>

              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>时间设置
              </div>
              <div class="form-group">
                <div class="input-group date" >
                  <input type="text" class="form-control" v-model="ticketTime" id="dateTimePicker"/>
                  <span class="input-group-addon">
                        <span class="glyphicon glyphicon-calendar"></span>
                    </span>
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
      <button class="btn btn-default btn-success" v-on:click="update">确认</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ticketSet',
    data () {
      return {
        type: 'place',
        set: 'adult',
        local: 'one',
        scenic: {
          id: 0,
          name: '',
          briefIntroduce: '',
          phone:0,
          address: '',
          score: 0,
          moneyMin: 0,
          lever: 0,
          hasP:false,
          hasWifi: false,
          hasWc: false,
          close: false
        },
        tickets: [{
          id: 0,
          createTime: "",
          updateTime: "",
          name: "",
          imgUrl: "",
          price: 0,
          balance: 0,
          scenicId: 0,
          timeIndex: 0,
          times:[
            {
              balance:0,
              price:0,
              useTime:''
            }
          ]
        }],
        emptyTicket:{
          id: 0,
          createTime: "",
          updateTime: "",
          name: "",
          imgUrl: "",
          price: 0,
          balance: 0,
          scenicId: 0,
          timeIndex: 0,
          times:[
            {
              balance:0,
              price:0,
              useTime:''
            }
          ]
        },
        ticketTime:"",
      }
    },
    watch:{
      ticketTime(val) {
        for(let tindex = 0; tindex<this.tickets.length; tindex++){
          this.tickets[tindex].timeIndex = -1;
          for (let index = 0; index<this.tickets[tindex].times.length; index++){
            if (this.ticketTime===this.tickets[tindex].times[index].useTime){
              this.tickets[tindex].timeIndex=index;
              console.log(this.tickets[tindex].timeIndex)
            }
          }
          console.log(this.ticketTime);
          if(this.tickets[tindex].timeIndex === -1){
            this.tickets[tindex].times.push({
              price: this.tickets[tindex].price,
              balance:this.tickets[tindex].balance,
              useTime:this.ticketTime
            });
            console.log(this.tickets[tindex].times);
            this.tickets[tindex].timeIndex = this.tickets[tindex].times.length -1;
          }
        }
      }
    },
    created () {
      if (this.$route.params.scenic === undefined) {
        return
      }
      this.scenic = this.$route.params.scenic
      if (this.scenic.id !== 0) {
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket')
          .then(response => {
            this.tickets = response.data;
            for(let i = 0;i<response.data.length;i++){
              this.tickets[i].timeIndex = 0;
            }
            this.ticketTime="2019-04-04";
          })
      }
    },
    mounted () {
      this.del
      const dateTimePicker = $('#dateTimePicker')
      const that = this
      dateTimePicker.datetimepicker({
        minView: 'month',
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
      })
      dateTimePicker.datetimepicker()
        .on('hide', function (ev) {
          var value = dateTimePicker.val();
          that.ticketTime = value;
        });
    },
    methods: {
      adultConfig () {
        this.set = 'adult'
      },
      childConfig () {
        this.set = 'child'
      },
      update () {
        console.log(this.tickets)
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/scenic/', this.scenic)
          .then(response => {
             Object.assign(this.scenic,response.data);
            this.$axios.post(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket', this.tickets)
              .then(response => {
                Object.assign(this.tickets,response.data);
              })
          })
      },
      AddList () {
        console.log(JSON.stringify(this.tickets))
        this.tickets.push({
          id: 0,
          createTime: "",
          updateTime: "",
          name: "",
          imgUrl: "",
          price: 0,
          balance: 0,
          scenicId: 0,
          timeIndex: 0,
          times:[
            {
              balance:0,
              price:0,
              useTime:''
            }
          ]
        })
        console.log("fasd")
        console.log(this.tickets)
      },
      del (i) {
        this.$axios.delete(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket/'+this.tickets[i].id).then(res =>console.log(res.data))
        this.tickets.splice(i, 1)
      },
      updateImg(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('img',file,file.name);//通过append向form对象添加数据
        // param.append('chunk','0');//添加form表单中其他数据
        console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        };  //添加请求头
        this.$axios.post(this.GLOBAL.BASE_IMG_URL+'/scenic/'+this.scenic.id,param,config)
          .then(response=>{
            console.log(response.data);
          })
      }
    }
  }
</script>

<style scoped>

  .btnS {
    width: 150px;
    margin-right: 10px;
  }

  .igS {
    margin-bottom: 10px;
  }
</style>
