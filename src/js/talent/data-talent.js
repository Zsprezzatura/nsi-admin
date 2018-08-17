layui.use(['table','form'], function(){
    var table = layui.table;
    var form = layui.form;

    table.render({
        elem: '#talentShow'
        ,url:'http://'+changeUrl.address+'/manager/talent/list.do?talent_searchKey='
        ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
        ,page:true
        ,height:'full-150'
        ,request: { pageName: 'pageNum' ,limitName: 'pageSize'}
        ,limit:10
        ,id: 'renderReload'
        ,cols: [[
             {type:'checkbox',fixed:'left'}
            ,{field:'name', width:140, title: '姓名',align:'center',fixed:'left'}
            ,{field:'sex', width:80,title: '性别', sort:true,align:'center'} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            ,{field:'phone',width:180, title: '电话',align:'center'}
            ,{field:'mail',width:180, title: '邮箱',align:'center'}
            ,{field:'education', width:120, title: '最高学历',align:'center'}
            ,{field:'major' ,width:140,title: '专业', align:'center'}
            ,{field:'nowWorkplace', width:180, title: '现工作地点', align:'center'}
            ,{field:'workYear', width:137, title: '工作经验（年）', align:'center'}
            ,{field:'expectWorkPlace', width:150, title: '期望工作地点', align:'center'}
            ,{field:'expectWorkPosition', width:150, title: '期望工作职位', align:'center'}
            ,{field:'expectSalary', width:140, title: '期望年薪', sort: true,align:'center'}
            ,{field:'other', width:150, title: '其他要求',align:'center'}
            ,{field:'workExperience', width:200, title: '工作经历', sort: true,align:'center'}
            ,{field:'educationBackground', width:180, title: '教育背景', align:'center'}
            ,{field:'trainingBackground', width:180, title: '培训经历', align:'center'}
            ,{field:'public', width:120, title: '是否公开简历', sort: true,align:'center'}
            ,{field:'public', width:120, title: '是否上传附件', sort: true,align:'center'}
            ,{field:'userMail', width:180, title: '提交人邮箱', align:'center'}
            ,{field:'load_time', width:160, title: '提交时间', sort: true, align:'center'}
            ,{field:'id', width:80, title: 'ID', sort: true,align:'center'}
            ,{fixed: 'right',title:'操作', width:120, align:'center', toolbar: '#barTalent'} //这里的toolbar值是模板元素的选择器
        ]]
    });
    //监听表格复选框选择
    table.on('checkbox(card)', function(obj){
        console.log(obj)
    });
    //监听工具条
    table.on('tool(talent)', function(obj){
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
        var resumeReload = $('#resumeReload');
        console.log(11)
        //执行重载
        table.reload('renderReload', {
            url: 'http://' + changeUrl.address + '/talent_api?whereFrom=Admin_Search',
            page: {
                curr: 1 //重新从第 1 页开始
            }
            ,where: {
                talent_searchKey: resumeReload.val(),
            }//需要传递的参数

        });
    }
    };

    $('.resumeTable .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    //添加回车事件
    $('#resumeReload').keydown(function (e) {
        var curKey = e.which; //兼容火狐
        var resumeReload = $('#resumeReload');
        if(curKey == 13){
            //执行重载
            table.reload('renderReload', {
                url:  'http://' + changeUrl.address + '/talent_api?whereFrom=Admin_Search',
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    talent_searchKey: resumeReload.val(),
                }//需要传递的参数

            });
        }
    })

});


