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
        ,url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_In_search'
        ,cols: [[ //标题栏
            {type:'checkbox', fixed: 'left',rowspan:2}
            ,{field:'School_name',width:200, align:'center',fixed: true,title:'中文名',rowspan:2}
            ,{field: 'Id',width: 80, sort: true,align:'center',title: 'ID',rowspan:2}
            ,{field:'School_EnglishName', width:200, align:'center',title:'英文名',rowspan:2}
            ,{align:'center',title:'基本信息',colspan:3 }
            ,{align:'center',title:'课程&认证',colspan:3 }
            ,{align:'center',title:'地址',colspan:3 }
            ,{align:'center',title:'时间',colspan:2}
            ,{align:'center',title:'学费',colspan:4}
            ,{align:'center',title:'学生数',colspan:7}
            ,{align:'center',title:'师资（人数）',colspan:5}
            ,{align:'center',title:'国籍',colspan:2}
            ,{align:'center',title:'投入/年',colspan:3}
            ,{align:'center',title:'基建&投资',colspan:5}
            ,{align:'center',title:'联系方式',colspan:2}
            ,{fixed: 'right', width:120, align:'center', title:'操作',toolbar: '#addVerifyBar'}
        ], [
            {field:'School_properties', width:100,sort:true,align:'center',title:'类型'}
            ,{field:'OperationState', width:120,sort:true,align:'center',title:'运营状态'}
            ,{field:'School_system', width:145, sort: true,align:'center',title:'学制'}

            ,{field:'Course', width:140, sort: true,align:'center',title:'国际课程'}
            ,{field:'Course_evaluation', width:160, sort: true,align:'center',title:'外部考试与评估'}
            ,{field:'Authentication', width:120, sort: true,align:'center',title:'认证'}

            ,{field:'Areas', sort: true,width:100,align:'center',title:'省'}
            ,{field:'Areas02', width:100,align:'center',title:'市'}
            ,{field:'Areas03', width:300,align:'center',title:'详细地址'}

            ,{field:'Founded_time', width:120, sort: true,align:'center',title:'建校'}
            ,{field:'Inter_Course_Founded_time', width:140, sort: true,align:'center',title:'国际课程认证'}

            ,{field:'Tuition01', width:100, sort: true, align:'center',title:'幼儿园'}
            ,{field:'Tuition02', width:100, sort: true, align:'center',title:'小学'}
            ,{field:'Tuition03', width:100, sort: true, align:'center',title:'初中'}
            ,{field:'Tuition04', width:100, sort: true, align:'center',title:'高中'}

            ,{field:'Student_Num01', width:100, sort: true, align:'center',title:'幼儿园'}
            ,{field:'Student_Num02', width:100, sort: true, align:'center',title:'小学'}
            ,{field:'Student_Num03', width:100, sort: true, align:'center',title:'初中'}
            ,{field:'Student_Num04', width:100, sort: true, align:'center',title:'高中'}
            ,{field:'Graduated_Stu_Num', width:160, sort: true,align:'center',title:'毕业班（国际部）'}
            ,{field:'Student_Num_All', width:170, sort: true, align:'center',title:'总在校生（国际部）'}
            ,{field:'Student_Capacity', width:160, sort: true, align:'center',title:'总容量（国际部）'}

            ,{field:'Staff_Num', width:100, sort: true,align:'center',title:'总员工'}
            ,{field:'Teacher_Num', width:100, sort: true, align:'center',title:'总教师'}
            ,{field:'Foreign_Teacher_num', width:100, sort: true, align:'center',title:'外籍教师'}
            ,{field:'Teacher_Stu_ratio', width:100, sort: true, align:'center',title:'师生比'}
            ,{field:'Teacher_Retention', width:120, sort: true, align:'center',title:'教师流失率'}
            ,{field:'Stu_Dominant_nationality', width:120, sort: true,align:'center',title:'学生'}
            ,{field:'President_Country', width:140, sort: true,align:'center',title:'校长/国际部主任'}

            ,{field:'Club_Num', width:120, sort: true,align:'center',title:'俱乐部数量'}
            ,{field:'Stu_Year_Investment', width:120, sort: true,align:'center',title:'学生投入'}
            ,{field:'Teacher_Year_Investment', width:120, sort: true,align:'center',title:'教师培训投入'}

            ,{field:'Covered_Area', width:140, sort: true,align:'center',title:'占地面积（亩）'}
            ,{field:'Built_Area', width:166, sort: true,align:'center',title:'建筑面积（平方米）'}
            ,{field:'Hardware', width:140, align:'center',title:'硬件设施'}
            ,{field:'Investment', width:140, align:'center',title:'投资信息'}
            ,{field:'Remark', width:140,align:'center',title:'备注'}

            ,{field:'Website', width:140,align:'center',title:'官网'}
            ,{field:'Telephone', width:140,align:'center',title:'电话'}
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
                    url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_No_insert',
                    data:{
                        School_ID:data.Id
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
                        School_ID:data.Id
                    },
                    url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_insert',
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
        ,url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_al_search'
        ,cols: [[ //标题栏
            {type:'checkbox', fixed: 'left',rowspan:2}
            ,{field:'School_name',width:200, align:'center',fixed: true,title:'中文名',rowspan:2}
            ,{field: 'Id',width: 80, sort: true,align:'center',title: 'ID',rowspan:2}
            ,{field:'School_EnglishName', width:200, align:'center',title:'英文名',rowspan:2}
            ,{align:'center',title:'基本信息',colspan:3 }
            ,{align:'center',title:'课程&认证',colspan:3 }
            ,{align:'center',title:'地址',colspan:3 }
            ,{align:'center',title:'时间',colspan:2}
            ,{align:'center',title:'学费',colspan:4}
            ,{align:'center',title:'学生数',colspan:7}
            ,{align:'center',title:'师资（人数）',colspan:5}
            ,{align:'center',title:'国籍',colspan:2}
            ,{align:'center',title:'投入/年',colspan:3}
            ,{align:'center',title:'基建&投资',colspan:5}
            ,{align:'center',title:'联系方式',colspan:2}
            ,{fixed: 'right', width:120, align:'center', title:'操作',toolbar: '#reviseVerifyBar'}
        ], [
            {field:'School_properties', width:100,sort:true,align:'center',title:'类型'}
            ,{field:'OperationState', width:120,sort:true,align:'center',title:'运营状态'}
            ,{field:'School_system', width:145, sort: true,align:'center',title:'学制'}

            ,{field:'Course', width:140, sort: true,align:'center',title:'国际课程'}
            ,{field:'Course_evaluation', width:160, sort: true,align:'center',title:'外部考试与评估'}
            ,{field:'Authentication', width:120, sort: true,align:'center',title:'认证'}

            ,{field:'Areas', sort: true,width:100,align:'center',title:'省'}
            ,{field:'Areas02', width:100,align:'center',title:'市'}
            ,{field:'Areas03', width:300,align:'center',title:'详细地址'}

            ,{field:'Founded_time', width:120, sort: true,align:'center',title:'建校'}
            ,{field:'Inter_Course_Founded_time', width:140, sort: true,align:'center',title:'国际课程认证'}

            ,{field:'Tuition01', width:100, sort: true, align:'center',title:'幼儿园'}
            ,{field:'Tuition02', width:100, sort: true, align:'center',title:'小学'}
            ,{field:'Tuition03', width:100, sort: true, align:'center',title:'初中'}
            ,{field:'Tuition04', width:100, sort: true, align:'center',title:'高中'}

            ,{field:'Student_Num01', width:100, sort: true, align:'center',title:'幼儿园'}
            ,{field:'Student_Num02', width:100, sort: true, align:'center',title:'小学'}
            ,{field:'Student_Num03', width:100, sort: true, align:'center',title:'初中'}
            ,{field:'Student_Num04', width:100, sort: true, align:'center',title:'高中'}
            ,{field:'Graduated_Stu_Num', width:160, sort: true,align:'center',title:'毕业班（国际部）'}
            ,{field:'Student_Num_All', width:170, sort: true, align:'center',title:'总在校生（国际部）'}
            ,{field:'Student_Capacity', width:160, sort: true, align:'center',title:'总容量（国际部）'}

            ,{field:'Staff_Num', width:100, sort: true,align:'center',title:'总员工'}
            ,{field:'Teacher_Num', width:100, sort: true, align:'center',title:'总教师'}
            ,{field:'Foreign_Teacher_num', width:100, sort: true, align:'center',title:'外籍教师'}
            ,{field:'Teacher_Stu_ratio', width:100, sort: true, align:'center',title:'师生比'}
            ,{field:'Teacher_Retention', width:120, sort: true, align:'center',title:'教师流失率'}
            ,{field:'Stu_Dominant_nationality', width:120, sort: true,align:'center',title:'学生'}
            ,{field:'President_Country', width:140, sort: true,align:'center',title:'校长/国际部主任'}

            ,{field:'Club_Num', width:120, sort: true,align:'center',title:'俱乐部数量'}
            ,{field:'Stu_Year_Investment', width:120, sort: true,align:'center',title:'学生投入'}
            ,{field:'Teacher_Year_Investment', width:120, sort: true,align:'center',title:'教师培训投入'}

            ,{field:'Covered_Area', width:140, sort: true,align:'center',title:'占地面积（亩）'}
            ,{field:'Built_Area', width:166, sort: true,align:'center',title:'建筑面积（平方米）'}
            ,{field:'Hardware', width:140, align:'center',title:'硬件设施'}
            ,{field:'Investment', width:140, align:'center',title:'投资信息'}
            ,{field:'Remark', width:140,align:'center',title:'备注'}

            ,{field:'Website', width:140,align:'center',title:'官网'}
            ,{field:'Telephone', width:140,align:'center',title:'电话'}
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
                    url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_No_alter',
                    data:{
                        School_ID:data.Id
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
                        School_ID:data.Id
                    },
                    url:'http://' + changeUrl.address + '/School_api?whereFrom=verify_alter',
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



