var jsonData = {
    "toolData": [{
        "name": "Conquer项目",
        "pageList": [{
                "title": "看板-主线任务",
                "desc": "恭喜你,您有新BUG到账,请注意查收!",
                "url": "https://trello.com/b/Qlg2bcGz/conquer",
                "img": "trello"
            },
            {
                "title": "Conquer配置同步",
                "desc": "Jenkins自动构建",
                "url": "http://192.168.189.17:8080/job/conquer-build-inner-%E9%85%8D%E7%BD%AE%E5%90%8C%E6%AD%A5/",
                "img": "excel"
            },
            {
                "title": "Conquer内网更新",
                "desc": "服务器重启",
                "url": "http://192.168.189.17:8080/job/conquer-deploy-inner-%E5%86%85%E7%BD%91%E6%9B%B4%E6%96%B0/",
                "img": "server_restart"
            },
            {
                "title": "Conquer内网清库重启",
                "desc": "清库!!!慎点!!!",
                "url": "http://192.168.189.17:8080/job/conquer-deploy-inner-%E5%86%85%E7%BD%91%E6%9B%B4%E6%96%B0-%E6%B8%85%E5%BA%93/",
                "img": "server_restart_clean"
            },
            {
                "title": "Conquer服务器构建",
                "desc": "构建后需要重启",
                "url": "http://192.168.189.17:8080/job/conquer-build-inner-%E6%9E%84%E5%BB%BA/",
                "img": "jenkins"
            }
        ]
    }, {
        "name": "标题1",
        "pageList": [{
                "title": "百度",
                "desc": "描述",
                "url": "#",
                "img": "dribbble"
            },
            {
                "title": "百度",
                "desc": "描述",
                "url": "#",
                "img": "dribbble"
            },
            {
                "title": "百度",
                "desc": "描述",
                "url": "#",
                "img": "dribbble"
            }
        ]
    }]
}

function GetJsonData() {
    return jsonData
}