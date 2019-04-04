<template>
  <div class="container-fluid home">
    <div class="col-md-12" style="background-color: white;margin-bottom: 20px">
      <h4 style="padding-bottom: 30px">一周订单统计</h4>
      <div id="myChart" :style="{width: '1200px', height: '300px',paddingTop:'20px'}"></div>
    </div>
    <div class="col-md-12" style="padding: 0px">
      <div class="col-md-3">
        <div class="panel panel-default" style="height: 200px;">
          <div style="padding-top: 60px;padding-left: 30px">
            <div class="text-primary" style="font-size: 40px;float: left;">1200</div>
            <span class="glyphicon glyphicon-list-alt" style="font-size: 50px;padding-left:60px;color: red"></span>
          </div>
          <!--<br>-->
          <div class="listfont" style="padding-top: 6px;padding-left: 35px">今日总订单</div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="panel panel-default" style="height: 200px;">
          <div class="listfont">用户喜爱景点前三</div>
          <div id="like" :style="{width: '550px', height: '200px',paddingTop:'20px'}"></div>
        </div>

      </div>

      <div class="col-md-3">
        <div class="panel panel-default" style="height: 200px;">
          <div class="listfont">用户出行票种分布</div>
          <div id="distribution" :style="{width: '270px', height: '170px',paddingTop:'0px',paddingLeft:'0px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return{}
    },
    mounted () {
      this.drawLine()
      this.fav()
      this.dis()
    },
    methods: {
      drawLine () {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {},
          tooltip: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'blue' // 0% 处的颜色
                }, {
                  offset: 1, color: 'red' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            },
            smooth: true

          }]
        })
      },
      fav () {
        let favorite = this.$echarts.init(document.getElementById('like'))
        favorite.setOption({
          title: {},
          tooltip: {},
          grid: {
            top: '10px',
            left: '50px',
            right: '15px',
            bottom: '50px'
          },
          xAxis: {
            type: 'value',
          },
          yAxis: {
            type: 'category',
            data: ['北京', '杭州', '丽水']
          },
          series: [
            {
              type: 'bar',
              data: [18203, 23489, 29034]
            }
          ]
        })
      },
      dis () {
        let dis = this.$echarts.init(document.getElementById('distribution'))
        dis.setOption({

          title: {},

          tooltip: {},

          grid: {
            top: '0px',
            left: '50px',
            right: '15px',
            bottom: '0px'
          },

          visualMap: {
            show: false,
            min: 100,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series: [
            {
              name: '用户选择',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                {value: 335, name: '单点门票'},
                {value: 310, name: '一日游'},
                {value: 400, name: '团体游'}
              ].sort(function (a, b) {
                return a.value - b.value
              }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: '#337AB6',
                    fontSize: '16',
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: 'red'
                  },
                  smooth: 0.2,
                  length: 10,
                  length2: 20
                }
              },
              itemStyle: {
                normal: {
                  color: 'red',
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200
              }
            }
          ]
        })
      }
    }
  }

</script>

<style>
  .home {
    padding: 30px;
  }

  .listfont {
    font-size: 15px;
    color: gray

  }
</style>
