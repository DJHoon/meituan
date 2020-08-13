<template>
  <div id="main" style="width: 600px;height:400px;"></div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "EchartsStudy",
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'));
// 绘制图表
      var option = {
        title: {
          text: '采购分析图',
          // subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#283b56'
            }
          }
        },
        legend: {
          data:['采购数量', '采购金额']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {readOnly: false},
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: {
          show: false,
          start: 0,
          end: 100
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: (function (){
              var res = ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',];
              // var len = 10;
              // while (len--) {
              //   res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
              //   now = new Date(now - 2000);
              // }
              return res;
            })()
          },
          {
            type: 'category',
            boundaryGap: true,
            show: false,
            data: (function (){
              var res = [];
              var len = 12;
              while (len--) {
                res.push(13 - len - 1);
              }
              return res;
            })()
          }
        ],
        yAxis: [
          {
            type: 'value',
            scale: true,
            name: '数量',
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: 'value',
            scale: true,
            name: '金额',
            max: 1200,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: '采购金额',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: (function (){
              var res = [100,220,310,140,150,160];
              // var len = 10;
              // while (len--) {
              //   res.push(Math.round(Math.random() * 1000));
              // }
              return res;
            })(),
            itemStyle: {
              normal: {
                //这里是重点
                color: function(params) {
                  //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                  var colorList = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83', '#ca8622'];
                  var index;
                  //给大于颜色数量的柱体添加循环颜色的判断
                  if (params.dataIndex >= colorList.length) {
                    index = params.dataIndex - colorList.length;
                    return colorList[index];
                  }
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: '采购数量',
            type: 'line',
            data: (function (){
              var res = [12,13,15,15,15,13,12];
              // var len = 0;
              // while (len < 10) {
              //   res.push((Math.random()*10 + 5).toFixed(1) - 0);
              //   len++;
              // }
              return res;
            })()
          }
        ]
      };
      myChart.setOption(option)
    }
  }
</script>

<style scoped>

</style>
