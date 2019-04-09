<template>
  <div class="container-fluid" style=" padding: 3px;">
    <div class=" ">
      <div class="panel-body">
        <h4 style="float: left" v-if="this.rests.id !== 0">
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
                       v-model="rests.name">
              </div>
            </div>
            <div style="float:left;width: 40%;margin-right: 40px">
              <div class="input-group">
                <span class="input-group-addon">地址</span>
                <input type="text" class="form-control" placeholder="请输入酒店地址" aria-describedby="basic-addon1"
                       v-model="rests.address">
              </div>
            </div>
          </div>

          <div style="float:left;width: 40%;">
            <div >
              <div style="margin-bottom: 10px">
                <span class="glyphicon glyphicon-th" style="padding-right: 10px"></span>简介
                <textarea class="form-control" placeholder="简介" rows="4"
                          v-model="rests.briefIntroduce"></textarea>
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
                       v-model="rests.phone">
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
    name: 'restaurantSet',
    data () {
      return {
        type: 'place',
        set: 'adult',
        local: 'one',
        rests: {
          address:'',
          briefIntroduce: '',
          close: false,
          id: 0,
          imgUrl: '',
          name: '',
          nightEndTime: '',
          nightStartTime: '',
          noonEndTime: '',
          noonStartTime: '',
          phone: 0,
          score: 0,
          type: ''
        },
      }
    },
    created () {
      if (this.$route.params.rest === undefined) {
        return
      }
      this.rests = this.$route.params.rest
    },
    mounted () {
      this.del
      // if (this.rests.id !== 0) {
      //   this.$axios.get(this.GLOBAL.BASE_URL+'/api/hotel/' + this.rests.id + '/room')
      //     .then(response => {
      //       this.rooms = response.data
      //     })
      // }
      // this.update()
    },
    methods: {
      update () {
        // console.log(this.rooms)
        console.log(this.rests)
        this.$axios.post(this.GLOBAL.BASE_URL+'/api/restaurant/', this.rests)
          .then(response => {
            this.rests = response.data
          })
      },
      updateImg(e){
        let file = e.target.files[0];
        let param = new FormData(); //创建form对象
        param.append('img',file,file.name);//通过append向form对象添加数据
        // param.append('chunk','0');//添加form表单中其他数据
        // console.log(param.get('file')); //FormData私有类对象，访问不到，可以通过get判断值是否传进去
        let config = {
          headers:{'Content-Type':'multipart/form-data'}
        };  //添加请求头
        this.$axios.post(this.GLOBAL.BASE_IMG_URL+'/restaurant/'+this.rests.id,param,config)
          .then(response=>{
            this.rests.imgUrl = response.data
            console.log(response.data);
          })
      }
    }
  }
</script>

<style scoped>

</style>
