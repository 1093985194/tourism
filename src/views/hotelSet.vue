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
                <span class="input-group-addon">名称</span>
                <input type="text" class="form-control" placeholder="请输入酒店名称" aria-describedby="basic-addon1"
                       v-model="infos.name">
              </div>
            </div>
            <div style="float:left;width: 40%;margin-right: 40px">
              <div class="input-group">
                <span class="input-group-addon">地址</span>
                <input type="text" class="form-control" placeholder="请输入酒店地址" aria-describedby="basic-addon1"
                       v-model="infos.address">
              </div>
            </div>

          </div>
          <div class="row">
            <div style="margin-right: 40px;margin-bottom: 20px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-bullhorn" style="padding-right: 10px"></span>类型设置
              </div>
              <div style="padding: 5px">
                <tr>
                  <td style="padding: 5px">名称</td>
                  <td style="padding-left: 170px">价格</td>
                  <td style="padding-left: 170px">余量</td>
                </tr>
                <div v-for="(v,i) in rooms" style="margin-bottom: 5px">
                  <form class="form-inline">
                    <input class="form-control" v-model="rooms[i].name" placeholder="请输入套房名称">
                    <input class="form-control" v-model="rooms[i].price" placeholder="请输入价格">
                    <input class="form-control" v-model="rooms[i].balance" placeholder="请输入余量">
                    <button class="btn btn-default" @click="del(i)">删除</button>
                    <button class="btn btn-default" style="margin-left: 20px" v-if="i===0" v-on:click="AddList">添加新样式</button>
                    <br>
                  </form>
                </div>
                </div>
            </div>
          </div>

          <div class="row">
            <div style="float:left;width: 40%;">
              <div >
                <div style="margin-bottom: 10px">
                  <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>简介
                  <textarea class="form-control" placeholder="简介" rows="4"
                            v-model="infos.briefIntroduce"></textarea>
                </div>
              </div>
            </div>
            <div style="float:left;width: 40%;margin-left: 40px">
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>添加酒店图片
              </div>
              <div>
                <input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="updateImg"/>
              </div>

              <div style="margin-top: 20px">
                <div style="margin-bottom: 10px">
                  <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>管理号码
                </div>
                <div class="input-group" >
                  <span class="input-group-addon">号码</span>
                  <input type="text" class="form-control" placeholder="请输入酒店号码" aria-describedby="basic-addon1"
                         v-model="infos.phone">
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
      console.log("fasdfas")
      if (this.$route.params.info === undefined) {
        return
      }
      this.infos = this.$route.params.info
    },
    mounted () {
      this.del
      if (this.infos.id !== 0) {
        console.log(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room')
        this.$axios.get(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room')
          .then(response => {
            this.rooms = response.data
            console.log(this.rooms)
          })
      }
      // this.update()
    },
    methods: {
      AddList () {
        this.rooms.push({name: '', price: '', balance: ''})
      },
      del (i) {
        this.$axios.delete(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room/'+this.rooms[i].id)
        this.rooms.splice(i,1);
      },
      update () {
        console.log(this.rooms)
        console.log(this.infos)
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/hotel/', this.infos)
          .then(response => {
            this.infos = response.data
            console.log(JSON.stringify(this.infos))
            this.$axios.post(this.GLOBAL.BASE_URL+'/api/hotel/' + this.infos.id + '/room/', this.rooms)
              .then(response => {
                this.rooms = response.data
                console.log(JSON.stringify(this.rooms))
              })
          })
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
        this.$axios.post(this.GLOBAL.BASE_IMG_URL+'/hotel/'+this.infos.id,param,config)
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
