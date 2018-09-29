layui.use(['table','form'], function(){
    var table = layui.table;
    table.render({
        elem: '#instiShow'
        ,url:'http://'+changeUrl.address+'/manager/assignment/query_student_assignment.do'
        ,page:true
         ,height:'full'
        ,request: { pageName: 'pageNum' ,limitName: 'pageSize'}
        ,limit:10
        ,id: 'renderReload'
        ,cols: [[
             {field:'courseId', width:'100', title: '课程ID',align:'center',fixed: 'left',}
            ,{field:'usermail', width:'250', title: '用户', align:'center'} //minWidth：局部定义当前单元格的最小宽度，layui 2.2.1 新增
            ,{field:'assignmentContent', width:'700', title: '内容', align:'left',templet:'<span><span style="color:#409eff">点击查看详情:</span>{{d.assignmentContent}}</span>'}
            ,{fixed: 'right',title:'操作', width:'100', align:'center', toolbar: '#barInsti'} //这里的toolbar值是模板元素的选择器
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
        	layer.confirm('通过审核?',{icon: 3, title:'系统提示'}, function(index){
                    $.ajax({
                        type: "get",
                        async: true,
                        data: {
                            "assignmentId":data.id
                        },//提交的参数
                        url: 'http://' + changeUrl.address + '/manager/assignment/set_assignment_status.do',
                        contentType: 'application/json;charset=UTF-8',
                        dataType: "json",//数据类型为json  
                        success: function (msg) {
                            console.log(msg)
                            if(msg.msg == '修改状态成功'){
                                layer.msg('审核通过')
                                window.location.reload()
                            }
                        },
                        error: function () {
                            alert('网络繁忙，请稍后再试！');
                        }
                    });
                });
            //layer.msg('ID：'+ data.id + ' 的查看操作');
            // layer.open({
            //     type: 2,
            //     title: '机构库-修改',
            //     shadeClose: false,
            //     maxmin: true, //开启最大化最小化按钮
            //     area: [$(window).width()*0.7+'px', $(window).height()*0.7+'px'],
            //     content: './data-insti-revise.html',
            //     success: function(layero, index){
            //         layer.full(index)
            //         var body = layer.getChildFrame('body', index);
            //         var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
            //         // console.log(body.html()) //得到iframe页的body内容
            //         body.find('#parent_PeopleId').val(data.id)
            //         iframeWin.getInitData();
            //     }
            // });
        } else if(obj.event === 'del'){
                layer.confirm('真的删除本条数据吗',{icon: 3, title:'系统提示'}, function(index){
                    $.ajax({
                        type: "get",
                        async: true,
                        data: {
                            "institutionId":data.id
                        },//提交的参数
                        url: 'http://' + changeUrl.address + '/manager/institution/delete.do',
                        contentType: 'application/json;charset=UTF-8',
                        dataType: "json",//数据类型为json  
                        success: function (msg) {
                            console.log(msg)
                            if(msg.msg == '删除成功'){
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
            url: 'http://'+changeUrl.address+'/manager/assignment/query_student_assignment.do',
            page: {
                curr: 1 //重新从第 1 页开始
            }
            ,where: {
                searchKey: instiReload.val(),
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
                url: 'http://'+changeUrl.address+'/manager/assignment/query_student_assignment.do',
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    searchKey: instiReload.val(),
                }//需要传递的参数

            });
        }
    })

});


