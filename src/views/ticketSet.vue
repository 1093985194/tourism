<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left">
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
                  <span class="input-group-addon">XXX</span>
                  <input type="text" class="form-control" placeholder="请输入产品名称" aria-describedby="basic-addon1" v-model="scenic.name">
                </div>
                <div class="input-group" style="float:left;margin-right: 40px;margin-top: 10px">
                  <span class="input-group-addon">XXX</span>
                  <input type="text" class="form-control" placeholder="请输入地址" aria-describedby="basic-addon1" v-model="scenic.address">
                </div>
              </div>
            </div>

            <div style="float:left;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>类型设置
                <button class="btn btn-default" style="margin-left: 20px" v-on:click="AddList">添加新样式</button>
              </div>
              <div style="padding: 5px">
                <div v-for="(v,i) in tickets" style="float: left;margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="tickets[i].name" placeholder="请输入名称">
                    <input class="form-control" v-model="tickets[i].price" placeholder="请输入价格">
                    <button class="btn btn-default" @click="del(i)">删除</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div style="float:left;width: 40%;">
            <div style="margin-top: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>备注
              </div>
              <textarea class="form-control" placeholder="Username" rows="5" v-model="scenic.briefIntroduce"></textarea>
            </div>

            <div class="form-group file" style="float:left;margin-top: 30px;margin-left: 30px">
              <label for="exampleInputFile">景点图片上传</label>
              <input type="file" id="exampleInputFile">
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="panel panel-default" style="margin-top: 5px">
      <div class="panel-body">
        <div style="margin-bottom: 20px">
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>特殊设置
        </div>
        <div class="panel-body">
          <div style="float: left;width: 50%">

            <div style="float:left;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>类型设置
                <button class="btn btn-default" style="margin-left: 20px" v-on:click="AddList">添加新样式</button>
              </div>
              <div style="padding: 5px">
                <div v-for="(item,i) in tickets" style="float: left;margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="tickets[i].name" placeholder="请输入名称">
                    <input class="form-control" v-model="item.times[item.timeIndex].price" placeholder="请输入价格">
                    <button class="btn btn-default" @click="del(i)">删除</button>
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
                <span class="input-group-addon">X</span>
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
              // balance:0,
              // price:0,
              // useTime:''
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
        ticketTime:"2019-04-04",
        // ticketTimeIndex: [],
      }
    },
    watch:{
      ticketTime(val) {
        // console.log(this.tickets[0].times)
        // console.log("0000")
        for(let tindex = 0; tindex<this.tickets.length; tindex++){
          this.tickets[tindex].timeIndex = -1;
          // console.log("1111")
          for (let index = 0; index<this.tickets[tindex].times.length; index++){
            console.log(this.ticketTime);
            console.log(this.tickets[tindex].times[index].useTime);
            console.log(this.ticketTime===this.tickets[tindex].times[index].useTime)
            if (this.ticketTime===this.tickets[tindex].times[index].useTime){
              this.tickets[tindex].timeIndex=index;
              console.log(this.tickets[tindex].timeIndex)
            }
          }
          if(this.tickets[tindex].timeIndex === -1){
            // console.log("3333")
            this.tickets[tindex].times.push({
              price: this.tickets[tindex].price,
              balance:this.tickets[tindex].balance,
              useTime:this.ticketTime
            });
            this.tickets[tindex].timeIndex = this.tickets[tindex].times.length -1;
            // console.log(this.tickets[tindex].timeIndex)
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
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket', this.tickets)
          .then(response => {
            this.tickets = response.data;
            for(let i = 0;i<response.data.length;i++){
              this.tickets[i].timeIndex = 0;
            }
          })
      }

      this.ticketTime="2019-04-04";
    },
    mounted () {
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
          })
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/scenic/'+this.scenic.id+'/ticket', this.tickets)
          .then(response => {
            Object.assign(this.tickets,response.data);
          })
      },
      AddList () {
        this.tickets.push(this.emptyTicket)
      },
      del (i) {
        this.tickets.splice(i, 1)
      },
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
