// getShopCarData()
function getShopCarData() {
    var initData = JSON.parse($('#initialData').text())
    layui.use('table', function(){
        var table = layui.table;
        // console.log(initData)
        //展示已知数据
        table.render({
            elem: '#demo'
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
                ,{fixed: 'right', width:80, align:'center', title:'操作',toolbar: '#barDemo'}
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
            ,data:initData
            // ,skin: 'line' //表格风格
            // ,even: true
            ,page: true //是否显示分页
            //,limits: [5, 7, 10]
            //,limit: 5 //每页默认显示的数量
        });

        //监听工具条
        table.on('tool(demo)', function(obj){
            var data = obj.data;
            if(obj.event === 'detail'){
                layer.msg('ID：'+ data.id + ' 的查看操作');
            } else if(obj.event === 'del'){
                layer.confirm('真的删除行么', function(index){
                    obj.del();
                    layer.close(index);
                });
            } else if(obj.event === 'edit'){
                layer.alert('编辑行：<br>'+ JSON.stringify(data))
            }
        });

        var $ = layui.$, active = {
            getCheckData: function(){ //获取选中数据
                var checkStatus = table.checkStatus('demo')
                    ,data = checkStatus.data;
                layer.alert(JSON.stringify(data));
                // layer.alert(JSON.stringify(data));
                //导出数据
                var initData = JSON.stringify(data)
                // console.log(initData)
                if(initData == '[]'){
                    layer.alert('请先选择数据',{icon:5})
                }else{
                    layer.confirm('确定要导出数据吗？',{
                        icon: 3,
                        btn: ['确定','取消'], //按钮
                        title:'系统提示'
                    }, function(){
                        layer.alert('导出成功', {icon: 6 ,title:'系统提示'});
                        var newData =initData.replace(/School_name/g,"学校中文名").replace(/School_EnglishName/g,"学校英文名").replace(/School_properties/g,"类型")
                            .replace(/Areas/g,"省").replace(/省02/g,"市").replace(/省03/g,"详细地址").replace(/Founded_time/g,"成立时间").replace(/OperationState/g,"运营状态")
                            .replace(/School_system/g,"学制").replace(/Tuition01/g,"幼儿园学费").replace(/Tuition02/g,"小学学费").replace(/Tuition03/g,"初中学费").replace(/Tuition04/g,"高中学费")
                            .replace(/Website/g,"官网").replace(/Telephone/g,"电话").replace(/Inter_Course_成立时间/g,"国际课程认证时间")
                            .replace(/Course/g,"国际课程").replace(/Authentication/g,"认证").replace(/Course_evaluation/g,"外部考试与评估").replace(/Student_Num_All/g,"总在校生（国际部）")
                            .replace(/Student_Num01/g,"幼儿园学生数").replace(/Student_Num02/g,"小学学生数").replace(/Student_Num03/g,"初中学生数").replace(/Student_Num04/g,"高中学生数")
                            .replace(/Student_Capacity/g,"总容量（国际部").replace(/Graduated_Stu_Num/g,"毕业班人数（国际部）").replace(/Stu_Dominant_nationality/g,"学生主要国籍")
                            .replace(/Stu_Year_Investment/g,"生均年投入").replace(/Club_Num/g,"俱乐部数量").replace(/Staff_Num/g,"总员工数量").replace(/President_Country/g,"校长/国际部主任国籍").replace(/权限不足总员工数量/g,"校长/国际部主任国籍")
                            .replace(/Teacher_Num/g,"总教师数量").replace(/Foreign_Teacher_num/g,"外籍教师数量").replace(/Teacher_Year_Investment/g,"师均年培训投入").replace(/Teacher_Retention/g,"教师流失率")
                            .replace(/Teacher_Salary/g,"教师薪酬（三年经验）").replace(/Teacher_Stu_ratio/g,"师生比").replace(/Covered_Area/g,"占地面积（亩）").replace(/Built_Area/g,"建筑面积")
                            .replace(/Hardware/g,"硬件设施").replace(/Investment/g,"投资信息").replace(/Remark/g,"备注").replace(/Load_People/g,"提交人").replace(/Load_Time/g,"提交时间")
                        console.log(JSON.parse(newData))
                        downloadExl(JSON.parse(newData))
                    }, function(){
                        layer.msg('您取消了导出', {
                            time:3000, //20s后自动关闭
                            // btn: ['确定']
                        });
                    });
                }
            }
            ,getCheckLength: function(){ //获取选中数目
                var checkStatus = table.checkStatus('demo')
                    ,data = checkStatus.data;
                layer.msg('选中了：'+ data.length + ' 个');
            }
            ,isAll: function(){ //验证是否全选
                var checkStatus = table.checkStatus('demo');
                layer.msg(checkStatus.isAll ? '全选': '未全选')
            }
        };

        $('.demoTable .layui-btn').on('click', function(){
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });


    });
}

function appendZero(n) {
    return n >= 0 && n < 10 ? "0" + n : "" + n
}

// 导出excel表格start
function downloadExl(data, type) {

    var  oDate = new Date()
    var  year = oDate.getFullYear() //获取年份
    var  month = oDate.getMonth()+1 // 获取月份
    var  day = oDate.getDate() //获取日期
    var  hour = oDate.getHours() //获取小时
    var  minute = oDate.getMinutes() // 获取分
    var str = year +'-'+appendZero(month)+'-'+appendZero(day)+' ' +appendZero(hour) + ':' + appendZero(minute)
    console.log(str)

    var keys = Object.keys(data[0]);
    var firstRow = {};
    keys.forEach(function (item) {
        firstRow[item] = item;
    });
    data.unshift(firstRow);
    var content = {};

    // 把json格式的数据转为excel的行列形式
    var sheetsData = data.map(function (item, rowIndex) {
        return keys.map(function (key, columnIndex) {
            return Object.assign({}, {
                value: item[key],
                position: (columnIndex > 25 ? getCharCol(columnIndex) : String.fromCharCode(65 + columnIndex)) + (rowIndex + 1),
            });
        });
    }).reduce(function (prev, next) {
        return prev.concat(next);
    });

    sheetsData.forEach(function (item, index) {
        content[item.position] = { v: item.value };
    });

    //设置区域,比如表格从A1到D10,SheetNames:标题，
    var coordinate = Object.keys(content);
    var workBook = {
        SheetNames: ["helloSheet"],
        Sheets: {
            "helloSheet": Object.assign({}, content, { "!ref": coordinate[0] + ":" + coordinate[coordinate.length - 1] }),
        }
    };
    //这里的数据是用来定义导出的格式类型
    var excelData = XLSX.write(workBook, { bookType: "xlsx", bookSST: false, type: "binary" });
    var blob = new Blob([string2ArrayBuffer(excelData)], { type: "" });
    saveAs(blob, "nsi-school-data-"+ str +".xlsx");
}
//字符串转字符流
function string2ArrayBuffer(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}
// 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
function getCharCol(n) {
    // let temCol = "",
    var temCol = "",
        s = "",
        m = 0
    while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
    }
    return s
}
// 导出excel表格end













