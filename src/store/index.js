import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // TopNav 的数据
        chooses:[
            { value: '默认', label: '默认'},
            { value: '上下', label: '上下'},
            { value: '左右', label: '左右'},
            { value: '左-上下', label: '左-上下'},
            { value: '右-上下', label: '右-上下'},
        ],
        options: [
            { value: '主源节点数', label: '主源节点数' },
            { value: '次源节点数', label: '次源节点数' },
            { value: '已建立映射数', label: '已建立映射数' },
            { value: '创建时间', label: '创建时间' },
        ],

        // DataPanel 的数据
        defaultTable:{
            series: [{
                type: 'bar',
                colorBy: "data",
                label: {
                    show: true,
                    position: 'right'
                },
            }],
            option: {
                color: ['#7180c2', '#e7d10c', '#86ace3', '#f7891d', '#01cb94', '#007aff'],
                grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
                xAxis: [
                    { type: 'value', show: false },
                    {
                        //右边百分比部分
                        type: 'value',
                        position: 'bottom',
                        min: 0,
                        max: 35, //100
                        splitNumber: 7,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}%'
                        },
                        show: true
                    }
                ],
                yAxis: { type: 'category' }
            },
            dataset:  {
                dimensions: ["范围", "用户"],
                source: [
                    { 范围: "[其他]", 用户: 77960},
                    { 范围: "40~50", 用户: 15394 },
                    { 范围: "190~200", 用户: 23695},
                    { 范围: "20~30", 用户: 23932},
                    { 范围: "30~40", 用户: 31222},
                    { 范围: "250~260", 用户: 47241},
                ]
            },
        },
        leftAndRight:{
            series: [{
                type: 'bar',
                colorBy: "data",
                label: {
                    show: true,
                    position: 'top'
                },
            }],
            option: {
                color: ['#7180c2', '#e7d10c', '#86ace3', '#f7891d', '#01cb94', '#007aff'],
                grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
                yAxis: [
                    { type: 'value', show: false },
                    {
                        //右边百分比部分
                        type: 'value',
                        position: 'bottom',
                        min: 0,
                        max: 35, //100
                        splitNumber: 7,
                        axisLabel: {
                            show: true,
                            interval: 'auto',
                            formatter: '{value}%'
                        },
                        show: true
                    }
                ],
                xAxis: { type: 'category' }
            },
            dataset:  {
                dimensions: ["范围", "用户"],
                source: [
                    { 范围: "[其他]", 用户: 77960},
                    { 范围: "40~50", 用户: 15394 },
                    { 范围: "190~200", 用户: 23695},
                    { 范围: "20~30", 用户: 23932},
                    { 范围: "30~40", 用户: 31222},
                    { 范围: "250~260", 用户: 47241},
                ]
            },
        },
        up:{
            series: [{
                type: 'line',
                areaStyle: {
                    color:{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(0,180,100,0.2)'
                        }, {
                            offset: 0.6, color: 'rgba(255,255,255,0)'
                        }],
                        global: false
                    }
                }
            }],
            option: {
                grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
                yAxis: {
                    type: 'value'
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                },
            },
            dataset:  {
                dimensions: ["日期", "用户"],
                source: [
                    { 日期: "Mon", 用户: 820 },
                    { 日期: "Tue", 用户: 932 },
                    { 日期: "Wed", 用户: 901 },
                    { 日期: "Thu", 用户: 934 },
                    { 日期: "Fri", 用户: 1290 },
                    { 日期: "Sat", 用户: 1330 },
                    { 日期: "Sun", 用户: 1320 }
                ]
            },
        },
        down:{
            series: [{
                name: 'Access From',
                type: 'pie',
                radius: ['55%', '70%'],
                itemStyle: {
                    borderRadius: 100,
                    borderColor: 'rgba(157,195,230)',
                    borderWidth: 20
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '40',
                        fontWeight: 'bold'
                    }
                },
            }],
            option: {
                grid: {left: '15%',top: '10%',bottom: '10%'}, // 位置
                tooltip: {
                    trigger: 'item'
                },
            },
            dataset:  {
                dimensions: ["名字", "数值"],
                source: [
                    { 名字: 'Search Engine', 数值: 1048 },
                    { 名字: 'Direct', 数值: 735},
                    { 名字: 'Email', 数值: 580},
                    { 名字: 'Union Ads', 数值: 484},
                    { 名字: 'Video Ads', 数值: 300}

                ]
            },
        },
        tableData:{
            tableData: [{
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-08',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-06',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-07',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }],
        },
        tableData1:{
            tableData1: [
                {
                    time: '07',
                    number: '896835'
                },
                {
                    time: '08',
                    number: '2151934'
                },
                {
                    time: '09',
                    number: '1240759'
                },
                {
                    time: '10',
                    number: '4003273'
                },
                {
                    time: '11',
                    number: '4421532'
                },
                {
                    time: '12',
                    number: '3817391'
                },
                {
                    time: '13',
                    number: '3973673'
                },
                {
                    time: '14',
                    number: '4512445'
                },
                {
                    time: '15',
                    number: '647000'
                },
                {
                    time: '16',
                    number: '1865446'
                },
                {
                    time: '17',
                    number: '3404623'
                },
                {
                    time: '18',
                    number: '2598297'
                },
                {
                    time: '19',
                    number: '4803130'
                },
                {
                    time: '20',
                    number: '2747134'
                },
                {
                    time: '21',
                    number: '509599'
                },
                {
                    time: '22',
                    number: '2518148'
                },
                {
                    time: '23',
                    number: '896835'
                }
            ],
        }
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})


export  default store