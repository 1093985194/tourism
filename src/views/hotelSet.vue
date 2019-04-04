<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left" v-if="this.infos.id !== 0">
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
          <span class="glyphicon glyphicon-cog" style="padding-right: 10px"></span>酒店设置
        </div>
        <div class="panel-body">

          <div style="margin-bottom: 20px;float: left">
            <div style="margin-bottom: 10px">
              <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>名称设置
            </div>
            <div style="float:left;width: 40%;margin-right: 40px">
              <div class="input-group">
                <span class="input-group-addon">XXX</span>
                <input type="text" class="form-control" placeholder="请输入酒店名称" aria-describedby="basic-addon1"
                       v-model="infos.name">
              </div>
            </div>
            <div style="float:left;width: 40%;margin-right: 40px">
              <div class="input-group">
                <span class="input-group-addon">XXX</span>
                <input type="text" class="form-control" placeholder="请输入酒店地址" aria-describedby="basic-addon1"
                       v-model="infos.address">
              </div>
            </div>

          </div>

          <div style="float: left;margin-bottom: 20px">
            <div style="float:left;margin-right: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>类型设置
              </div>
              <div style="padding: 5px">
                <div v-for="(v,i) in rooms" style="float: left;margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="rooms[i].id" placeholder="请输入ID">
                    <input class="form-control" v-model="rooms[i].name" placeholder="请输入套房名称">
                    <input class="form-control" v-model="rooms[i].price" placeholder="请输入价格">
                    <input class="form-control" v-model="rooms[i].balance" placeholder="请输入余量">
                    <button class="btn btn-default" @click="del(i)">删除</button>
                  </form>
                </div>
                <button class="btn btn-default" style="margin-left: 20px" v-on:click="AddList">添加新样式</button>
              </div>
            </div>
          </div>

          <div>
            <div style="float:left;width: 40%;">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>备注
                <textarea class="form-control" placeholder="Username" rows="4"
                          v-model="infos.briefIntroduce"></textarea>
                <div class="input-group" style="margin-top: 20px">
                  <span class="input-group-addon">X</span>
                  <input type="text" class="form-control" placeholder="请输入酒店号码" aria-describedby="basic-addon1"
                         v-model="infos.phone">
                </div>
              </div>
            </div>
            <div class="form-group file" style="float:left;margin-top: 30px;margin-left: 30px">
              <label for="exampleInputFile">酒店图片上传</label>
              <input type="file" id="exampleInputFile">
              <!--<p class="help-block">Example block-level help text here.</p>-->
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
    name: 'hotelSet',
    data () {
      return {
        type: 'place',
        set: 'adult',
        local: 'one',
        infos: {
          address: '',
          brand: '',
          briefIntroduce: '',
          id: 0,
          imgUrl: '',
          lever: 0,
          moneyMin: 0,
          name: '',
          phone: '',
          score: 0
        },
        rooms: [{
          balance: 0,
          createTime: '',
          hotelId: 0,
          id: 0,
          imgUrl: '',
          name: '',
          price: 0,
          updateTime: ''
        }]
      }
    },
    created () {
      if (this.$route.params.info === undefined) {
        return
      }
      this.infos = this.$route.params.info
    },
    mounted () {
      this.del
      if (this.infos.id !== 0) {
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room')
          .then(response => {
            this.rooms = response.data
          })
      }
      // this.update()
    },
    methods: {
      AddList () {
        this.rooms.push({id: '', name: '', price: '', balance: ''})
      },
      del (i) {
        this.rooms.splice(i, 1)
      },
      update () {
        console.log(this.infos.id)
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/hotel/', this.infos)
          .then(response => {
            this.infos = response.data
          })
        console.log(this.infos.id)
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
