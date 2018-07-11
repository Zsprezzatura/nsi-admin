//chrome动态加载JS 代码：
//@ sourceURL=dynamicScript.js
var setPos=function(o){
    if(o.setSelectionRange){//W3C
        setTimeout(function(){
            o.setSelectionRange(o.value.length,o.value.length);
            o.focus();
        },0);
    }else if(o.createTextRange){//IE
        var textRange=o.createTextRange();
        textRange.moveStart("character",o.value.length);
        textRange.moveEnd("character",0);
        textRange.select();
    }
};

//学制点击按钮输入
function Insert(str,objId) {
    var obj = document.getElementById(objId);
    setPos(obj);
    if(document.selection) {
        obj.focus();
        var sel=document.selection.createRange();
        document.selection.empty();
        sel.text = str;
    } else {
        var prefix, main, suffix;
        prefix = obj.value.substring(0, obj.selectionStart);
        main = obj.value.substring(obj.selectionStart, obj.selectionEnd);
        suffix = obj.value.substring(obj.selectionEnd);
        obj.value = prefix + str + suffix;
    }
    obj.focus();
}

function getInitData() {
    $.ajax({
        type:'get',
        url:'http://' + changeUrl.address + '/People_api?whereFrom=findById',
        data:{
            People_id:$('#parent_PeopleId').val()
        },
        success:function (msg) {
            console.log(msg)
            console.log(msg[0].People_member)
            layui.use('form',function () {
                var form = layui.form
                form.render()
                $('#People_name').val(msg[0].People_name)
                $('#People_dueTime').val(msg[0].People_dueTime)
                $('#People_work').val(msg[0].People_work)
                $('#People_member').val(msg[0].People_member)

                $('#People_position').val(msg[0].People_position)
                $('#People_phone').val(msg[0].People_phone)
                $('#People_mail').val(msg[0].People_mail)
                $('#People_telephone').val(msg[0].People_telephone)

                $('#People_wechat').val(msg[0].People_wechat)
                $('#People_address').val(msg[0].People_address)
                $('#People_introduction').val(msg[0].People_introduction)
                $('#People_remark').val(msg[0].People_remark)

                form.render()
            })
        },
        error:function () {
            layer.msg('请求数据出错')
        }
    })

}

layui.use(['form','laydate','layer'],function () {
    var form = layui.form
        ,laydate = layui.laydate
        ,layer = layui.layer
    laydate.render({
        elem:"#People_dueTime"
    })
    form.on('submit(card-submit)',function (data) {
        // layer.msg(JSON.stringify(data.field));
        var insertData = {
            'People_id':$('#parent_PeopleId').val(),

            'People_name': $('#People_name').val(),
            'People_member': $('#People_member').val(),
            'People_dueTime': $('#People_dueTime').val(),
            'People_work': $('#People_work').val(),
            'People_position': $('#People_position').val(),
            'People_phone': $('#People_phone').val(),

            'People_mail': $('#People_mail').val(),
            'People_telephone': $('#People_telephone').val(),
            'People_wechat': $('#People_wechat').val(),

            'People_address': $('#People_address').val(),
            'People_introduction': $('#People_introduction').val(),
            'People_remark': $('#People_remark').val(),
            'People_loadPeople': $.cookie('User_TureName'),   //课程发布人
        }
        $.ajax({
            type:'post',
            url:'http://' + changeUrl.address + '/People_api?whereFrom=alter',
            data:insertData,
            success:function (msg) {
               console.log(msg)
                if(msg.msg ==1){
                    layer.alert('修改成功',{icon:1},function () {
                        var index = parent.layer.getFrameIndex(window.name)
                        parent.layer.close(index)
                    })
                }else {
                    layer.msg('网络繁忙，请稍后再试！')
                }
            },
            error:function () {
                layer.msg('网络繁忙，请稍后再试！')
            }
        })
        return false;
    })
})