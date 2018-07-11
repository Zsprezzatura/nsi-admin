//判断是否有新消息
$(function () {
    layui.use('layer',function () {
        var layer = layui.layer
        $.ajax({
            type:'get',
            url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_notification',
            success:function (msg) {
                console.log(msg)
                var storage = window.localStorage
                //没有学校数据需要审核
                if(msg.SchoolData == 0 ){
                   storage.setItem('schoolData',0)
                }
                //没有机构数据需要审核
                if(msg.InstitutionData == 0){
                  storage.setItem('instiData',0)
                }
                //全部通过审核
                if(msg.SchoolData == 0 && msg.InstitutionData == 0){
                  storage.setItem('allData',0)
                }
            },
            error:function () {
                layer.msg('获取系统消息失败！')
            }
        })
    })
})


//数据渲染
layui.use('table', function(){
    var table = layui.table;
    //新增数据
    table.render({
        elem: '#addInfoShow'
        ,url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_In_search'
        ,cols: [[ //标题栏
            {type:'checkbox', fixed: 'left',rowspan:2}
            ,{field:'Name',width:200, align:'center',fixed: true,title:'机构名',rowspan:2}
            ,{field: 'Id',width: 80, sort: true,align:'center',title: 'ID',rowspan:2}
            ,{field:'Label', width:160,sort:true,align:'center',title:'标签',rowspan:2}
            ,{field:'Type', width:140,sort:true,align:'center',title:'类型',rowspan:2}
            ,{field:'Founded_time', width:100,sort:true,align:'center',title:'成立时间',rowspan:2}

            ,{align:'center',title:'地址',colspan:3 }
            ,{field:'Website', width:200,sort:true,align:'center',title:'官网',rowspan:2}
            ,{field:'Service', width:240,align:'center',title:'服务简介',rowspan:2}

            ,{align:'center',title:'联系方式',colspan:4}
            ,{field:'Introduction', width:200,align:'center',title:'详细介绍',rowspan:2}
            ,{field:'Investment', width:200,align:'center',title:'投资信息',rowspan:2}
            ,{field:'ServedSchool', width:200,align:'center',title:'过往服务学校',rowspan:2}
            ,{field:'Remark', width:200,align:'center',title:'备注',rowspan:2}

            ,{align:'center',title:'图片地址',colspan:2}
            ,{field:'load_people', width:160,align:'center',sort:true,title:'提交人',rowspan:2}
            ,{field:'load_time', width:200,align:'center',sort:true,title:'提交时间',rowspan:2}
            ,{fixed: 'right', width:120, align:'center', title:'操作',toolbar: '#addVerifyBar'}
        ], [

            {field:'Areas', sort: true,width:100,align:'center',title:'省'}
            ,{field:'Areas02', width:100,align:'center',title:'市'}
            ,{field:'Areas03', width:300,align:'center',title:'详细地址'}

            ,{field:'ContactName', sort: true,width:160,align:'center',title:'联系人'}
            ,{field:'ContactPhone', width:160,align:'center',title:'联系电话'}
            ,{field:'ContactMail', width:180,align:'center',title:'联系邮箱'}
            ,{field:'ContactPosition', width:250,align:'center',title:'职位'}

            ,{field:'Institution_logo', width:200,align:'center',title:'Logo图片'}
            ,{field:'Institution_Show', width:200,align:'center',title:'展示图片'}

        ]]
    });

    //监听工具条
    table.on('tool(addInfoShow)', function(obj){
        var data = obj.data;
        if(obj.event === 'detail'){
            // layer.msg('ID：'+ data.id + ' 的查看操作');
        } else if(obj.event === 'del'){
            layer.confirm('确定要拒绝吗？',{icon:3,title:'系统消息'}, function(index){
                $.ajax({
                    type:'get',
                    url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_No_insert',
                    data:{
                        institution_Id:data.Id
                    },
                    success:function (msg) {
                        console.log(msg)
                        layer.msg('已拒绝入库')
                        setTimeout(function () {
                            window.location.reload()
                        },1500)
                    },
                    error:function () {
                        layer.msg('服务器繁忙，请稍后再试！')
                    }
                })
            });
        } else if(obj.event === 'edit'){
            //通过
            layer.confirm('确定要通过吗？',{icon:3,title:'系统消息'},function (index) {
                var index =  layer.msg('系统审核中...', {
                    icon: 16
                    ,time: 200000 //2秒关闭（如果不配置，默认是3秒）
                    ,shade: [0.8,'#000']
                });
                $.ajax({
                    type:'get',
                    data:{
                        institution_Id:data.Id
                    },
                    url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_insert',
                    success:function (msg) {
                        // console.log(msg)
                        layer.open({
                            type:1,
                            skin: 'layui-layer-rim', //加上边框
                            title:false,
                            closeBtn:0,
                            area: ['360px', '200px'], //宽高
                            content: $('#addScores')
                        })
                    },
                    error:function () {
                        layer.msg('服务器繁忙，请稍后再试！')
                    }
                })

            })
        }
    });

    //修改数据
    table.render({
        elem: '#reviseInfoShow'
        ,url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_al_search'
        ,cols: [[ //标题栏
            {type:'checkbox', fixed: 'left',rowspan:2}
            ,{field:'Name',width:200, align:'center',fixed: true,title:'机构名',rowspan:2}
            ,{field: 'Id',width: 80, sort: true,align:'center',title: 'ID',rowspan:2}
            ,{field:'Label', width:160,sort:true,align:'center',title:'标签',rowspan:2}
            ,{field:'Type', width:140,sort:true,align:'center',title:'类型',rowspan:2}
            ,{field:'Founded_time', width:100,sort:true,align:'center',title:'成立时间',rowspan:2}

            ,{align:'center',title:'地址',colspan:3 }
            ,{field:'Website', width:200,sort:true,align:'center',title:'官网',rowspan:2}
            ,{field:'Service', width:240,align:'center',title:'服务简介',rowspan:2}

            ,{align:'center',title:'联系方式',colspan:4}
            ,{field:'Introduction', width:200,align:'center',title:'详细介绍',rowspan:2}
            ,{field:'Investment', width:200,align:'center',title:'投资信息',rowspan:2}
            ,{field:'ServedSchool', width:200,align:'center',title:'过往服务学校',rowspan:2}
            ,{field:'Remark', width:200,align:'center',title:'备注',rowspan:2}

            ,{align:'center',title:'图片地址',colspan:2}
            ,{field:'load_people', width:160,align:'center',sort:true,title:'提交人',rowspan:2}
            ,{field:'load_time', width:200,align:'center',sort:true,title:'提交时间',rowspan:2}
            ,{fixed: 'right', width:120, align:'center', title:'操作',toolbar: '#addVerifyBar'}
        ], [

            {field:'Areas', sort: true,width:100,align:'center',title:'省'}
            ,{field:'Areas02', width:100,align:'center',title:'市'}
            ,{field:'Areas03', width:300,align:'center',title:'详细地址'}

            ,{field:'ContactName', sort: true,width:160,align:'center',title:'联系人'}
            ,{field:'ContactPhone', width:160,align:'center',title:'联系电话'}
            ,{field:'ContactMail', width:180,align:'center',title:'联系邮箱'}
            ,{field:'ContactPosition', width:250,align:'center',title:'职位'}

            ,{field:'Institution_logo', width:200,align:'center',title:'Logo图片'}
            ,{field:'Institution_Show', width:200,align:'center',title:'展示图片'}

        ]]
    });

    //监听工具条
    table.on('tool(reviseInfoShow)', function(obj){
        var data = obj.data;
        if(obj.event === 'detail'){
            // layer.msg('ID：'+ data.id + ' 的查看操作');
        } else if(obj.event === 'del'){
            //拒绝
            layer.confirm('确定要拒绝吗？',{icon:3,title:'系统消息'}, function(index){
                $.ajax({
                    type:'get',
                    url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_No_alter',
                    data:{
                        institution_Id:data.Id
                    },
                    success:function (msg) {
                        console.log(msg)
                        layer.msg('已拒绝修改')
                        setTimeout(function () {
                            window.location.reload()
                        },1500)
                    },
                    error:function () {
                        layer.msg('服务器繁忙，请稍后再试！')
                    }
                })
            });
        } else if(obj.event === 'edit'){
            // 通过
            layer.confirm('确定要通过吗',{icon:3,title:'系统消息'},function (index) {
                var index =  layer.msg('系统审核中...', {
                    icon: 16
                    ,time: 200000 //2秒关闭（如果不配置，默认是3秒）
                    ,shade: [0.8,'#000']
                });
                $.ajax({
                    type:'get',
                    data:{
                        institution_Id:data.Id
                    },
                    url:'http://' + changeUrl.address + '/Institution_api?whereFrom=verify_alter',
                    success:function (msg) {
                        console.log(msg)
                        layer.open({
                            type:1,
                            skin: 'layui-layer-rim', //加上边框
                            title:false,
                            closeBtn:0,
                            area: ['360px', '200px'], //宽高
                            content: $('#addScores')
                        })
                    },
                    error:function () {
                        layer.msg('服务器繁忙，请稍后再试！')
                    }
                })

            })
        }
    });
});

// 加分
$('#addScores .layui-btn').on('click',function () {
    var patt = new RegExp(/\d+/)
    var scores = String($(this).text().match(patt))
    $.ajax({
        type:'get',
        url:'http://' + changeUrl.address + '/User_api?whereFrom=Score',
        data:{
            UserMail:$.cookie('username'),
            ScoreNum:scores
        },
        success:function (msg) {
            console.log(msg)
            layer.msg('已添加'+scores+'分',{icon:6})
            setTimeout(function () {
                window.location.reload()
            },1500)
        },
        error:function () {
            layer.msg('网络繁忙，请稍后再试！')
        }
    })
})



