// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('DataChart'));

// 指定图表的配置项和数据
var option = {
        title : {
            text: '年/月',
            textStyle: {
                fontSize: 12,
                color: '#ffffff',
            },
            // subtext: '数据来自网络',
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['毛利率',],
            textStyle: {
                color: '#ffffff',
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
                data : ['巴西','印尼','巴西','印尼','美国','巴西','印尼','美国','印度','中国'],
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
