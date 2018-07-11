layui.use(['table','form'], function(){
    var table = layui.table;
    var form = layui.form;

    table.render({
        elem: '#instiShow'
        ,url:'http://'+changeUrl.address+'/Institution_api?whereFrom=Admin_search&Institution_searchKey='
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,page:true
        ,height:'full-150'
        ,request: { pageName: 'pageNum' ,limitName: 'OnePageNum'}
        ,limit:30
        ,id: 'renderReload'
        ,cols:[[ //标题栏
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
            ,{field:'Load_people', width:160,align:'center',sort:true,title:'提交人',rowspan:2}
            ,{field:'Load_time', width:200,align:'center',sort:true,title:'提交时间',rowspan:2}
            // ,{fixed: 'right', width:120, align:'center', title:'操作',toolbar: '#barInsti'}
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
    //监听表格复选框选择
    table.on('checkbox(card)', function(obj){
        console.log(obj)
    });
    //监听工具条
    table.on('tool(insti)', function(obj){
        var data = obj.data;
        if(obj.event === 'detail'){
            layer.msg('ID：'+ data.id + ' 的查看操作');
        } else if(obj.event === 'del'){
                layer.confirm('真的删除本条数据吗',{icon: 3, title:'系统提示'}, function(index){
                    $.ajax({
                        type: "get",
                        async: true,
                        data: {
                            "People_id":data.People_id
                        },//提交的参数
                        url: 'http://' + changeUrl.address + '/People_api?whereFrom=delete',
                        contentType: 'application/json;charset=UTF-8',
                        dataType: "json",//数据类型为json  
                        success: function (msg) {
                            console.log(msg)
                            if(msg.msg == 1){
                                layer.msg('删除成功')
                                obj.del();
                                layer.close(index);
                            }
                        },
                        error: function () {
                            alert('网络繁忙，请稍后再试！');
                        }
                    });
                });
        } else if(obj.event === 'edit'){
            // layer.alert('编辑行：<br>'+ JSON.stringify(data))
            if(data.HavaTalent == 0){
                layer.msg('用户没有上传附件')
            }else {
               var href = 'http://data.xinxueshuo.cn/upFile/talent/'+data.UserMail+data.Name+'.'+data.HavaTalent
               $('#resumeHref').attr("href",href)
                document.getElementById("resumeHref").click()
            }
        }
    });

    var $ = layui.$, active = {
        getCheckData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('idTest')
                ,data = checkStatus.data;
            layer.alert(JSON.stringify(data));
        }
        ,getCheckLength: function(){ //获取选中数目
            var checkStatus = table.checkStatus('idTest')
                ,data = checkStatus.data;
            layer.msg('选中了：'+ data.length + ' 个');
        }
        ,isAll: function(){ //验证是否全选
            var checkStatus = table.checkStatus('idTest');
            layer.msg(checkStatus.isAll ? '全选': '未全选')
        }
        //（执行搜索）数据重载
        ,reload: function(){
        var instiReload = $('#instiReload');
        //执行重载
        table.reload('renderReload', {
            url: 'http://'+changeUrl.address+'/Institution_api?whereFrom=Admin_search',
            page: {
                curr: 1 //重新从第 1 页开始
            }
            ,where: {
                Institution_searchKey: instiReload.val(),
            }//需要传递的参数

        });
    }
    };

    $('.instiTable .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    //添加回车事件
    $('#instiReload').keydown(function (e) {
        var curKey = e.which; //兼容火狐
        var instiReload = $('#instiReload');
        if(curKey == 13){
            //执行重载
            table.reload('renderReload', {
                url: 'http://'+changeUrl.address+'/Institution_api?whereFrom=Admin_search',
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    Institution_searchKey: instiReload.val(),
                }//需要传递的参数

            });
        }
    })

});


