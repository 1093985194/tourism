<template>
  <div class="container-fluid home">
    <div class="col-md-12" style="background-color: white;margin-bottom: 20px">
      <!--<h4 style="padding-bottom: 30px">一周订单统计</h4>-->
      <div id="myChart" :style="{width: '1100px', height: '400px',paddingTop:'50px',paddingLeft: '50px'}"></div>
    </div>
    <div class="col-md-12" style="padding: 0px">
      <div class="col-md-3">
        <div class="panel panel-default" style="height: 200px;">
          <div style="padding-top: 60px;padding-left: 30px">
            <div class="text-primary" style="font-size: 40px;float: left;">820</div>
            <span class="glyphicon glyphicon-list-alt" style="font-size: 50px;padding-left:60px;color: red"></span>
          </div>
          <!--<br>-->
          <div class="listfont" style="padding-top: 6px;padding-left: 35px">今日总订单</div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="panel panel-default" style="height: 200px;">
          <div class="listfont">用户喜爱景点前三</div>
          <div id="like" :style="{width: '540px', height: '200px',paddingLeft:'40px'}"></div>
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
          title: {
            text: '一周订单汇总 '
          },
          tooltip : {
            trigger: 'axis',
            axisPointer: {
            }
          },
          legend: {
            data:['景点门票','酒店','路线','餐饮','总订单']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              boundaryGap : false,
              data : ['周一','周二','周三','周四','周五','周六','周日'],
            }
          ],
          yAxis : [
            {
              type : 'value',
              splitLine:{
                show:false
              },
            }
          ],
          series : [
            {
              name:'景点门票',
              type:'line',
              smooth:true,
              data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
              name:'酒店',
              type:'line',
              smooth:true,
              data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
              name:'路线',
              type:'line',
              smooth:true,
              data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
              name:'餐饮',
              type:'line',
              smooth:true,
              data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
              name:'总订单',
              type:'line',
              smooth:true,
              label: {
                normal: {
                  show: true,
                  position: 'top'
                }
              },
              data:[820, 832, 801, 834, 890, 830, 820]
            },
          ]
        })
      },
      fav () {
        let favorite = this.$echarts.init(document.getElementById('like'))
        favorite.setOption({
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              ['product', ''],
              ['西溪国家湿地公园-周村',29034],
              ['杭州烂苹果乐园', 23489],
              ['西湖', 18203],
            ]
          },
          xAxis:{
            type: 'value',
            gridIndex: 0,
            splitLine:{
              show:false
            }
          },
          yAxis:{
            type: 'category',
            gridIndex: 0
          },
          grid: [
            {bottom: '25%'},
            {top: '55%'}
          ],
          series: [
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
            {type: 'bar', seriesLayoutBy: 'row'},
          ]
        })
      },
      dis () {
        let dis = this.$echarts.init(document.getElementById('distribution'))
        dis.setOption({
          title: {},
          tooltip: {},
          grid: {
            left: '30%',
            right: '4%',
            bottom: '3%',
            containLabel: true
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
