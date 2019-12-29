import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public echartsIntance:any;
  public usedChartIntance:any;
  public name;
  options:any;
  options2:any;
  usedChart:any;
  allowChart:any;
  usedChart_2:any;
  allowChart_2:any;
  index:any;
  public rateData;
  public allowData:any;
  constructor(public dataService:DataService) { }
  onChartInit(event){
    this.echartsIntance = event;
  }
  usedChartInit(event) {					//饼图初始化
    this.usedChartIntance = event;
  }
  onChartClick(event) {							//柱状图点击
    this.index = event.dataIndex;
    this.rateData = this.dataService.usedRade[event.dataIndex];
    this.allowData = 100-this.rateData;
    console.log(event)
    // this.name = event.name;
    this.name = event.name;
    this.echartsIntance.setOption(this.options);
    this.usedChartIntance.setOption(this.usedChart)
    this.ngOnInit();
    
    // this.usedChartIntance.setOption(this.usedChart)
  }
  ngOnInit() {
    let name = this.name;
    if(!name) {
      name=''
    }
    if(!this.index) {
      this.index = 0;
    }
    this.rateData = this.dataService.usedRade[this.index];
    this.allowData = 100-this.rateData;
    
    this.usedChart = {		//饼1
      tooltip: {
          show:false,
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color:['#000','#e926bf'],
      series: [
          {
              type:'pie',
              radius: ['70%', '80%'],
              avoidLabelOverlap: false,          
               hoverAnimation: false,
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {
                      value:this.allowData, 
                      selected:false,
                      label: {
                      normal: {
                          show: false,
                          position: 'center',
                          fontSize: 20,
                          formatter:'{b}\n{d}%',
                      }
                 
                  },
                   
                  },
                  {
                      value:this.rateData, 
                      label:{
                          normal:{
                              show:false,
                              
                          }
                      }
                      
                  },
                
              ]
          }
      ]
  };

  this.allowChart = {				//饼2
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#000','#e926bf'],
    series: [
        {
            type:'pie',
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,          
             hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:this.rateData, 
                    selected:false,
                    label: {
                    normal: {
                        show: false,
                        position: 'center',
                        fontSize: 20,
                        formatter:'{b}\n{d}%',
                    }
               
                },
                 
                },
                {
                    value:this.allowData, 
                    label:{
                        normal:{
                            show:false,
                            
                        }
                    }
                    
                  },
                
              ]
          }
      ]
  }

  this.usedChart_2 = {	//饼3
    tooltip: {
        show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    color:['#000','#e926bf'],
    series: [
        {
            type:'pie',
            radius: ['70%', '80%'],
            avoidLabelOverlap: false,          
             hoverAnimation: false,
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {
                    value:33, 
                    selected:false,
                    label: {
                    normal: {
                        show: false,
                        position: 'center',
                        fontSize: 20,
                        formatter:'{b}\n{d}%',
                    }
               
                },
                 
                },
                {
                    value:67, 
                    label:{
                        normal:{
                            show:false,
                            
                        }
                    }
                    
                  },
              
                ]
            }
        ]
    };

    this.allowChart_2 = {			//饼4
      tooltip: {
          show:false,
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      color:['#000','#e926bf'],
      series: [
          {
              type:'pie',
              radius: ['70%', '80%'],
              avoidLabelOverlap: false,          
               hoverAnimation: false,
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data:[
                  {
                      value:67, 
                      selected:false,
                      label: {
                      normal: {
                          show: false,
                          position: 'center',
                          fontSize: 20,
                          formatter:'{b}\n{d}%',
                      }
                 
                  },
                   
                  },
                  {
                      value:33, 
                      label:{
                          normal:{
                              show:false,
                              
                          }
                      }
                      
                    },
                  
                ]
            }
        ]
    }
  
    this.options = {			//柱状图1
      title: {
        text: 'TOP 5 Most Consumed Reagents',
        x:'30px',
        y:'20px',
        textStyle: {
                fontSize: 20,
                color: "#666",
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
    },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false
      },
      axisTick:{
        show:false
      },
      axisLine: {
          lineStyle: {
              color: '#000',
              width:2
          }
      },
      axisLabel: {
          color: '#000'
      }
      //   splitLine: {
      //     show: false,
      //     lineStyle:{
      //       //  color: ['#315070'],
      //       //  width: 10,
      //       //  type: 'solid',
      //       //  shadowOffsetX: 50
             
      //   },
      //   axisLine: {
      //       lineStyle: {
      //           color: '#000',
      //           width:2
      //       }
      //   },
      //   axisLabel:{
      //     textShadowOffsetX:50
      //   },
      // } 
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '25%',
      top:'25%',
      containLabel: true
  },
    yAxis: {
        type: 'value',
        axisTick:{       //y轴刻度线
          "show":false,
          lineStyle:{
            shadowOffsetX:-50
          }
        },
        axisLine:{       //y轴
          "show":false,
          onZero:false,

        },
        splitLine:{show: true,
          lineStyle:{
            color: ['#f6f6f6'],
            width: 2,
            type: 'solid'
       }}
    },
    series: [{
        data: this.dataService.charData_1,
        type: 'bar', 
        barWidth :70,
        itemStyle:{
          emphasis:{barBorderRadius:20},
          normal:{
            barBorderRadius:[5,5,5,5],
            color:function(params) {
              console.log(name+'-----'+params.name)
              if(name==params.name) {
                return '#bf38f1';
              }else {
                return '#fb2eb0';
              }
            }
            // color:'#fb2eb0'
          }
        }
    }]
    }
    this.options2 = {					//柱状图2
      title: {
        text: 'Reagent statistics',
        x:'30px',
        y:'20px',
        textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                fontSize: 20,
                color: "#666",
                fontStyle: 'normal',
                fontWeight: 'bold',
            },
    },
    tooltip : {
        trigger: 'item',
        // trigger: 'item',
        position: 'top',
        // backgroundColor :'#c338f2',
        // color:'#fff',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            let res = '';
            // if (params[1].value != '-') {
            //     tar = params[1];
            // }
            // else {
            //     tar = params[0];
            // }
            res = " <div class='tool'>" + params.value+' ml' +"</div>"
            return res;
        },
        extraCssText:'width:100px;height:40px;background:none;color:#fff'
    },
    grid: {
      left: '5%',
      right: '5%',
      bottom: '20%',
      top:'20%',
      containLabel: true
    },
    xAxis : [
      {
          type : 'category',
          data :  ['RN001','RN002','RN003','RN004','RN005','RN006','RN007','RN008','RN009','RN002','RN002','RN002','RN002','RN002','RN009'],
          splitLine: {
              show: false
          },
          axisTick:{
            show:false
          },
          axisLine: {
              lineStyle: {
                  color: '#000',
                  width:2
              }
          },
          axisLabel: {
              color: '#000',
              interval:0,  
              rotate:40 
          },
      }
  ],
  yAxis : [
      {
          type : 'value',
          show : false,
          splitLine: {
              show: false
          },
          axisLine: {
              lineStyle: {
                  color: 'rgba(55,255,249,1)',
              }
          }
      }
  ],
  series : [
      {
          name:'邮件营销',
          type:'bar',
          barWidth: 10,
          itemStyle: {
             barBorderRadius: 10, 
             color:'#ccc'
          },
          data:[200, 132, 101, 134, 90, 230, 210,180,190,199,105,202,212,132,129]
      },
      {  // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20 
          type:'bar',
          barWidth: 10,
          barGap: '-100%',
          stack: '广告',
          itemStyle: {
            color: '#c338f2' ,
            barBorderRadius: 10,  

          },
          data:[100, 102, 81, 114, 70, 210, 190,102, 81, 114, 70,65,89,95,96]
      },
      {
          name:'联盟广告',
          type:'bar',
          barWidth: 10,
          barGap: '-100%',
          stack: '广告',
          itemStyle: {
            barBorderRadius: 10, 
             color:'#ccc'
          },
          data:[200, 182, 191, 234, 290, 330, 310,182, 191, 234, 290, 330, 310,182, 191]
      	}
      ]
    }
  } 
}
