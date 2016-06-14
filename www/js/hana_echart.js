// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('DataChart'));

// 指定图表的配置项和数据
var option = {
    color: ['#ffffff','#124846'],
    title : {
        text: '年/月',
        textStyle: {
            fontSize: 12,
            color: '#ffffff',
            fontWeight: 'normal',
        },
        // subtext: '数据来自网络',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['毛利率',],
        textStyle: {
            fontSize: 12,
            color: '#ffffff',
            fontWeight: 'normal',
        },
        itemWidth: 55,
        itemHeight: 22,
        backgroundColor: '#1d2338'
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    grid: {
        borderColor: '#000000',
    },
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
            axisLabel:{
                textStyle: {
                    color: '#ffffff',
                }
            },
            axisTick:{
                show: false,
            },
            axisLine:{
                show: false,
            },
            splitLine:{
                show: false,
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['2015/8','2015/9','2015/10','2015/11','2015/12','2016/1','2016/2','2016/3','2016/4','2016/5'],
            axisLabel:{
                textStyle: {
                    color: '#ffffff',
                    fontSize: 12,
                },
                interval: 0,
                margin: 4,
            },
            axisTick:{
                show: false,
            },
            axisLine:{
                show: false,
            },
            splitLine:{
                show: false,
            }
        }
    ],
    series : [
        {
            name:'毛利率',
            type:'bar',
            data:[18203, 23489, 18203, 23489, 29034, 18203, 23489, 29034, 104970, 131744]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
