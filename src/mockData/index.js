import Mock from 'mockjs'
Mock.mock('http://10.90.72.59:8080/hackathon/info','post',{
    "data": [
        {
            "用户ID": [
                "2000"
            ]
        },
        {
            "用户身份": [
                "老学员"
            ]
        },
        {
            "用户昵称": [
                "我不想吃了"
            ]
        },
        {
            "用户年级": [
                "初二"
            ]
        },
        {
            "用户性别": [
                "女"
            ]
        },
        {
            "所在省份": [
                "江苏"
            ]
        },
        {
            "所在城市": [
                "南京"
            ]
        },
        {
            "所在学校": [
                "南京市第一中学"
            ]
        },
        {
            "已购课程ID": [
                "66666",
                '999999999999'
            ]
        },
        {
            "已购课程": [
                "【寒假】初二英语直播启航班——人教版——黑贝老师——2020-01-15 10:00:00"
            ]
        },
        {
            "当前设备类型": [
                "HUAWEI P30 Pro"
            ]
        },
        {
            "当前网络类型": [
                "4G"
            ]
        },
        {
            "用户APP版本": [
                "V7.7.4"
            ]
        },
        {
            "近期活跃度": [
                "0.94"
            ]
        },
        {
            "上一次活跃时间": [
                "2020-01-01 08:00:25"
            ]
        },
        {
            "注册时间": [
                "2017-09-01"
            ]
        },
        {
            "注册渠道": [
                "老带新"
            ]
        }
    ],
    "msg": "success",
    "status": 1000
})
Mock.mock('http://10.90.72.59:8080/hackathon/message','post',{
    data: {
        click_info: [
            {
                "99999": "【寒假】初二英语直播启航班——粤教版——美短老师——2020-01-15 19:00:00"
            },
            {
                "66666": "【寒假】初二英语直播启航班——人教版——黑贝老师——2020-01-15 10:00:00"
            },
            {
                "88888": "【寒假】初二英语直播启航班——苏教版——吉娃娃老师——2020-01-15 16:00:00"
            }
        ],
        reply: "您可以调整为以下课程中的一个哦！（点击即可）"
    },
    msg: "success",
    status: 1000
})