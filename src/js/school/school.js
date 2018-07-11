<!-- 省市联动 -->
//定义数组，存储省份信息
var province = ["","北京", "上海", "天津", "重庆", "浙江", "江苏", "广东", "福建", "湖南", "湖北", "辽宁",
    "吉林", "黑龙江", "河北", "河南", "山东", "陕西", "甘肃", "新疆", "青海", "山西", "四川",
    "贵州", "安徽", "江西", "云南", "内蒙古", "西藏", "广西", "宁夏", "海南", "香港", "澳门", "台湾","其他"];

//定义数组,存储城市信息
var empty = []
var beijing = ["","东城区", "西城区", "海淀区", "朝阳区", "丰台区", "石景山区", "通州区", "顺义区", "房山区", "大兴区", "昌平区", "怀柔区", "平谷区", "门头沟区", "延庆县", "密云县"];
var shanghai = ["","浦东新区", "徐汇区", "长宁区", "普陀区", "闸北区", "虹口区", "杨浦区", "黄浦区", "卢湾区", "静安区", "宝山区", "闵行区", "嘉定区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"];
var tianjing = ["","河东", "南开", "河西", "河北", "和平", "红桥", "东丽", "津南", "西青", "北辰", "塘沽", "汉沽", "大港", "蓟县", "宝坻", "宁河", "静海","武清","滨海新区"];
var chongqing = ["","渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "万州区", "涪陵区", "黔江区", "长寿区", "江津区", "合川区", "永川区", "南川区","铜梁区"];
var jiangsu = ["","南京", "无锡", "常州", "徐州", "苏州", "南通", "连云港", "淮安", "扬州", "盐城", "镇江", "泰州", "宿迁"];
var zhejiang = ["","杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "利水","诸暨"];
var guangdong = ["","广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳"];
var fujiang = ["","福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"];
var hunan = ["","长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西土家苗族自治区"];
var hubei = ["","武汉", "襄阳", "黄石", "十堰", "宜昌", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施土家族苗族自治州","潜江市","天门市","仙桃市"];
var liaoning = ["","沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"];
var jilin = ["","长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜族自治区"];
var heilongjiang = ["","哈尔滨", "齐齐哈尔", "鸡西", "牡丹江", "佳木斯", "大庆", "伊春", "黑河", "大兴安岭"];
var hebei = ["","石家庄", "保定", "唐山", "邯郸", "承德", "廊坊", "衡水", "秦皇岛", "张家口"];
var henan = ["","郑州", "洛阳", "商丘", "安阳", "南阳", "开封", "平顶山", "焦作", "新乡", "鹤壁", "许昌", "漯河", "三门峡", "信阳", "周口", "驻马店", "济源"];
var shandong = ["","济南", "青岛", "菏泽", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照", "滨州", "德州", "聊城", "临沂"];
var shangxi = ["","西安", "宝鸡", "咸阳", "渭南", "铜川", "延安", "榆林", "汉中", "安康", "商洛"];
var gansu = ["","兰州", "嘉峪关", "金昌", "金川", "白银", "天水", "武威", "张掖", "酒泉", "平凉", "庆阳", "定西", "陇南", "临夏", "合作"];
var qinghai = ["","西宁", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"];
var xinjiang = ["","乌鲁木齐", "奎屯", "石河子", "昌吉", "吐鲁番", "库尔勒", "阿克苏", "喀什", "伊宁", "克拉玛依", "塔城", "哈密", "和田", "阿勒泰", "阿图什", "博乐"];
var shanxi = ["","太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁"];
var sichuan = ["","成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"];
var guizhou = ["","贵阳", "六盘水", "遵义", "安顺", "黔南布依族苗族自治州", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "铜仁", "毕节"];
var anhui = ["","合肥", "芜湖", "安庆", "马鞍山", "阜阳", "六安", "滁州", "宿州", "蚌埠", "巢湖", "淮南", "宣城", "亳州", "淮北", "铜陵", "黄山", "池州"];
var jiangxi = ["","南昌", "九江", "景德镇", "萍乡", "新余", "鹰潭", "赣州", "宜春", "上饶", "吉安", "抚州"];
var yunnan = ["","昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "楚雄彝族自治州", "大理白族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"];
var neimenggu = ["","呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔", "巴彦淖尔", "乌兰察布","兴安","阿拉善","锡林郭勒","满洲里","二连浩特"];
var guangxi = ["","南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池", "崇左"];
var xizang = ["","拉萨", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区"];
var ningxia = ["","银川", "石嘴山", "吴忠", "固原", "中卫"];
var hainan = ["","海口", "三亚"];
var xianggang = ["","中西区", "湾仔区", "东区", "南区", "九龙城区", "油尖旺区", "观塘区", "黄大仙区", "深水埗区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区"];
var taiwan = ["","台北", "高雄", "基隆", "台中", "台南", "新竹", "嘉义"];
var aomeng = ["","澳门半岛", "氹仔岛", "路环岛"];
var qita = ["","其他"]

//页面加载方法
$(function () {
    //设置省份数据
    setProvince();
    //设置背景颜色
    setBgColor();
});
//设置省份数据
function setProvince() {
    //给省份下拉列表赋值
    var option, modelVal;
    var $sel = $("#selProvince");
    //获取对应省份城市
    for (var i = 0, len = province.length; i < len; i++) {
        modelVal = province[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";
        //添加到 select 元素中
        $sel.append(option);
    }
    //调用change事件，初始城市信息
    provinceChange();
}

//根据选中的省份获取对应的城市
function setCity(provinec) {
    var $city = $("#selCity");
    var proCity, option, modelVal;
    //通过省份名称，获取省份对应城市的数组名
    switch (provinec) {
        case "":
            proCity = empty;
            break;
        case "北京":
            proCity = beijing;
            break;
        case "上海":
            proCity = shanghai;
            break;
        case "天津":
            proCity = tianjing;
            break;
        case "重庆":
            proCity = chongqing;
            break;
        case "浙江":
            proCity = zhejiang;
            break;
        case "江苏":
            proCity = jiangsu;
            break;
        case "广东":
            proCity = guangdong;
            break;
        case "福建":
            proCity = fujiang;
            break;
        case "湖南":
            proCity = hunan;
            break;
        case "湖北":
            proCity = hubei;
            break;
        case "辽宁":
            proCity = liaoning;
            break;
        case "吉林":
            proCity = jilin;
            break;
        case "黑龙江":
            proCity = heilongjiang;
            break;
        case "河北":
            proCity = hebei;
            break;
        case "河南":
            proCity = henan;
            break;
        case "山东":
            proCity = shandong;
            break;
        case "陕西":
            proCity = shangxi;
            break;
        case "甘肃":
            proCity = gansu;
            break;
        case "新疆":
            proCity = xinjiang;
            break;
        case "青海":
            proCity = qinghai;
            break;
        case "山西":
            proCity = shanxi;
            break;
        case "四川":
            proCity = sichuan;
            break;
        case "贵州":
            proCity = guizhou;
            break;
        case "安徽":
            proCity = anhui;
            break;
        case "江西":
            proCity = jiangxi;
            break;
        case "云南":
            proCity = yunnan;
            break;
        case "内蒙古":
            proCity = neimenggu;
            break;
        case "西藏":
            proCity = xizang;
            break;
        case "广西":
            proCity = guangxi;
            break;
        case "宁夏":
            proCity = ningxia;
            break;
        case "海南":
            proCity = hainan;
            break;
        case "香港":
            proCity = xianggang;
            break;
        case "澳门":
            proCity = aomeng;
            break;
        case "台湾":
            proCity = taiwan;
            break;
        case "其他":
            proCity = qita;
            break;
    }

    //先清空之前绑定的值
    $city.empty();
    //设置对应省份的城市
    for (var i = 0, len = proCity.length; i < len; i++) {
        modelVal = proCity[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";
        //添加
        $city.append(option);
    }

    //设置背景
    setBgColor();
}

//设置下拉列表间隔背景样色
function setBgColor() {
    var $option = $("select option:odd");
    $option.css({ "background-color": "#DEDEDE" });
}

//省份选中事件
function provinceChange() {
    var $pro = $("#selProvince");
    console.log($pro.val())
    setCity($pro.val());
}

////////////////////////////////////////////////////////

// 地点修改
//设置省份数据
function setProvinceEdit() {
    //给省份下拉列表赋值
    var option, modelVal;
    var $sel = $("#selProvince-edit");
    //获取对应省份城市
    for (var i = 0, len = province.length; i < len; i++) {
        modelVal = province[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";
        //添加到 select 元素中
        $sel.append(option);
    }
    //调用change事件，初始城市信息
    provinceChangeEdit();
}

//根据选中的省份获取对应的城市
function setCityEdit(provinec) {
    var $city = $("#selCity-edit");
    var proCity, option, modelVal;
    //通过省份名称，获取省份对应城市的数组名
    switch (provinec) {
        case "":
            proCity = empty;
            break;
        case "北京":
            proCity = beijing;
            break;
        case "上海":
            proCity = shanghai;
            break;
        case "天津":
            proCity = tianjing;
            break;
        case "重庆":
            proCity = chongqing;
            break;
        case "浙江":
            proCity = zhejiang;
            break;
        case "江苏":
            proCity = jiangsu;
            break;
        case "广东":
            proCity = guangdong;
            break;
        case "福建":
            proCity = fujiang;
            break;
        case "湖南":
            proCity = hunan;
            break;
        case "湖北":
            proCity = hubei;
            break;
        case "辽宁":
            proCity = liaoning;
            break;
        case "吉林":
            proCity = jilin;
            break;
        case "黑龙江":
            proCity = heilongjiang;
            break;
        case "河北":
            proCity = hebei;
            break;
        case "河南":
            proCity = henan;
            break;
        case "山东":
            proCity = shandong;
            break;
        case "陕西":
            proCity = shangxi;
            break;
        case "甘肃":
            proCity = gansu;
            break;
        case "新疆":
            proCity = xinjiang;
            break;
        case "青海":
            proCity = qinghai;
            break;
        case "山西":
            proCity = shanxi;
            break;
        case "四川":
            proCity = sichuan;
            break;
        case "贵州":
            proCity = guizhou;
            break;
        case "安徽":
            proCity = anhui;
            break;
        case "江西":
            proCity = jiangxi;
            break;
        case "云南":
            proCity = yunnan;
            break;
        case "内蒙古":
            proCity = neimenggu;
            break;
        case "西藏":
            proCity = xizang;
            break;
        case "广西":
            proCity = guangxi;
            break;
        case "宁夏":
            proCity = ningxia;
            break;
        case "海南":
            proCity = hainan;
            break;
        case "香港":
            proCity = xianggang;
            break;
        case "澳门":
            proCity = aomeng;
            break;
        case "台湾":
            proCity = taiwan;
            break;
        case "其他":
            proCity = qita;
            break;
    }

    //先清空之前绑定的值
    $city.empty();
    //设置对应省份的城市
    for (var i = 0, len = proCity.length; i < len; i++) {
        modelVal = proCity[i];
        option = "<option value='" + modelVal + "'>" + modelVal + "</option>";
        //添加
        $city.append(option);
    }

    //设置背景
    setBgColor();
}

//省份选中事件
function provinceChangeEdit() {
    var $pro = $("#selProvince-edit");
    console.log($pro.val())
    setCityEdit($pro.val());
}

//过滤函数（如果为空，自动补零）
function autoAddZero( str ) {
    var strFilter = null;
    return strFilter = (str == '')? 0 : str;
}
//过滤函数（如果为零，变为空）
function autoDeleteZero( str ) {
    var strFilter = null;
    return strFilter = (str == 0)? '' : str;
}

// 购物车
var shopData = '';
var shopNum = 0;
$('#shopCar').on('click',function () {
    // console.log(shopData)
    var shopData02 = '['+shopData.slice(0,shopData.length-1)+']'
    // console.log(shopData02)
    if(shopNum == 0){
        layer.alert('购物车为空',{icon:5})
    }else {
        layer.open({
            type: 2,
            title: '我的购物车',
            shadeClose: false,
            // shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['900px', '700px'],
            content: 'class-shopCar.html',
            success: function(layero, index){
                layer.full(index)
                // console.log(layero, index);
                var body = layer.getChildFrame('body', index);
                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                // console.log(body.html()) //得到iframe页的body内容
                body.find('#initialData').text(shopData02)    //传输得到购物数据
                iframeWin.getShopCarData() //调用数据
            }
        });
    }
})

//数据导出等
layui.use('table', function(){
    var table = layui.table;
    //监听表格复选框选择
    table.on('checkbox(demo)', function(obj){
        console.log(obj)
    });

    //监听工具条
    table.on('tool(demo)', function(obj){
        // console.log(obj)
        var data = obj.data;
        if(obj.event === 'detail'){
            // layer.alert('编辑行：<br>'+ JSON.stringify(data))
            shopData = shopData+JSON.stringify(data)+','
            // console.log(shopData)
            shopNum++;
            $('#shopNum').text(shopNum)
            // console.log(shopNum)
            layer.msg('添加成功', {icon: 6,shade: [0.3, '#000'],time:1000});

        } else if(obj.event === 'del'){
            layer.confirm('真的删除本条数据吗',{icon: 3, title:'系统提示'}, function(index){
                $.ajax({
                    type: "get",
                    async: false,
                    data: {
                        "Id":data.Id
                    },//提交的参数
                    url: 'http://' + changeUrl.address + '/School_api?whereFrom=AdminDelete',
                    contentType: 'application/json;charset=UTF-8',
                    dataType: "json",//数据类型为jsonp  
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
            //数据修改
            // layer.alert('编辑行：<br>'+ JSON.stringify(data))
             var msg = obj.data
                layer.open({
                    type: 1,
                    title: msg.School_name+'-信息修改',
                    shadeClose: false,
//                        shade: true,
                    maxmin: true, //开启最大化最小化按钮
                    area:  [$(window).width()*0.7+'px', $(window).height()*0.7+'px'],
                    content: $('#formEdit')
                    ,success:function (layereo,index) {
                        layer.full(index)
                    }
                    ,btn: ['上传学校logo图片', '上传学校展示图片']
                    ,yes: function(index, layero){
                        //按钮【按钮一】的回调
                        layer.open({
                            type: 2,
                            title: msg.School_name+'-logo上传',
                            shadeClose: false,
//                        shade: true,
                            maxmin: true, //开启最大化最小化按钮
                            area: ['900px', '600px'],
                            content: ['./up-school.html','no'],
                            success: function(layero, index){
                                // console.log(layero, index);
                                var body = layer.getChildFrame('body', index);
                                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                                iframeWin.autoClick()
                                // console.log(body.html()) //得到iframe页的body内容
                                body.find('#alter_old_School_id').val(msg.Id)    //传输得到学校Id
                            }
                        });
                    }
                    ,btn2: function(index, layero){
                        //按钮【按钮二】的回调
                        layer.open({
                            type: 2,
                            title:  msg.School_name+'-展示图片上传',
                            shadeClose: true,
//                        shade: true,
                            maxmin: true, //开启最大化最小化按钮
                            area: ['900px','600px'],
                            content: ['./up-school.html','no'],
                            success: function(layero, index){
                                // console.log(layero, index);
                                var body = layer.getChildFrame('body', index);
                                var iframeWin = window[layero.find('iframe')[0]['name']]; //得到iframe页的窗口对象，执行iframe页的方法：iframeWin.method();
                                iframeWin.autoShowClick()
                                // console.log(body.html()) //得到iframe页的body内容
                                body.find('#alter_old_School_id').val(msg.Id)    //传输得到学校Id
                            }

                        });
                        return false  //开启该代码可禁止点击该按钮关闭
                    }
                });

                 // 数据渲染
                 layui.use('form',function () {
                        var form=layui.form
                         form.render();
                         //数据赋值
                          setProvinceEdit()  //先设置省份数据
                         // console.log(msg.Areas)
                          setCityEdit(autoDeleteZero(msg.Areas)) //设置地区数据
                         $('#School_name-edit').val(autoDeleteZero(msg.School_name)),
                         $('#School_EnglishName-edit').val(autoDeleteZero(msg.School_EnglishName)),
                         $('#School_properties-edit').val(autoDeleteZero(msg.School_properties)),
                         $("#selProvince-edit option[value='" + autoDeleteZero(msg.Areas) + "']").attr("selected", true),
                         $("#selCity-edit option[value='" + autoDeleteZero(msg.Areas02) + "']").attr("selected", true),
                         $('#Areas03-edit').val(autoDeleteZero(msg.Areas03)),
                         $('#Founded_time-edit').val(autoDeleteZero(msg.Founded_time)),
                         $('#OperationState-edit').val(autoDeleteZero(msg.OperationState)),
                         $('#School_system-edit').val(autoDeleteZero(msg.School_system)),

                         $('#Tuition01-edit').val(autoDeleteZero(msg.Tuition01)),
                         $('#Tuition02-edit').val(autoDeleteZero(msg.Tuition02)),
                         $('#Tuition03-edit').val(autoDeleteZero(msg.Tuition03)),
                         $('#Tuition04-edit').val(autoDeleteZero(msg.Tuition04)),

                         $('#TuitionHigh-edit').val(autoDeleteZero(msg.TuitionHigh)),
                         $('#Website-edit').val(autoDeleteZero(msg.Website)),
                         $('#Telephone-edit').val(autoDeleteZero(msg.Telephone)),
                         $('#Inter_Course_Founded_time-edit').val(autoDeleteZero(msg.Inter_Course_Founded_time)),
                         $('#Course-edit').val(autoDeleteZero(msg.Course)),
                         $('#Authentication-edit').val(autoDeleteZero(msg.Authentication)),
                         $('#Course_evaluation-edit').val(autoDeleteZero(msg.Course_evaluation)),

                         $('#Student_Num01-edit').val(autoDeleteZero(msg.Student_Num01)),
                         $('#Student_Num02-edit').val(autoDeleteZero(msg.Student_Num02)),
                         $('#Student_Num03-edit').val(autoDeleteZero(msg.Student_Num03)),
                         $('#Student_Num04-edit').val(autoDeleteZero(msg.Student_Num04)),

                         $('#Student_Num_All-edit').val(autoDeleteZero(msg.Student_Num_All)),
                         $('#Student_Capacity-edit').val(autoDeleteZero(msg.Student_Capacity)),
                         $('#Graduated_Stu_Num-edit').val(autoDeleteZero(msg.Graduated_Stu_Num)),
                         $('#Stu_Dominant_nationality-edit').val(autoDeleteZero(msg.Stu_Dominant_nationality)),
                         $('#Stu_Year_Investment-edit').val(autoDeleteZero(msg.Stu_Year_Investment)),
                         $('#Club_Num-edit').val(autoDeleteZero(msg.Club_Num)),
                         $('#President_Country-edit').val(autoDeleteZero(msg.President_Country)),
                         $('#Staff_Num-edit').val(autoDeleteZero(msg.Staff_Num)),
                         $('#Teacher_Num-edit').val(autoDeleteZero(msg.Teacher_Num)),
                         $('#Foreign_Teacher_num-edit').val(autoDeleteZero(msg.Foreign_Teacher_num)),
                         $('#Teacher_Year_Investment-edit').val(autoDeleteZero(msg.Teacher_Year_Investment)),
                         $('#Teacher_Retention-edit').val(autoDeleteZero(msg.Teacher_Retention)),
                         $('#Teacher_Salary-edit').val(autoDeleteZero(msg.Teacher_Salary)),
                         $('#Teacher_Stu_ratio-edit').val(autoDeleteZero(msg.Teacher_Stu_ratio)),
                         $('#Covered_Area-edit').val(autoDeleteZero(msg.Covered_Area)),
                         $('#Built_Area-edit').val(autoDeleteZero(msg.Built_Area)),
                         $('#Hardware-edit').val(autoDeleteZero(msg.Hardware)),
                         $('#Investment-edit').val(autoDeleteZero(msg.Investment)),
                         $('#Remark-edit').val(autoDeleteZero(msg.Remark)),
                         $('#Recent_Modifier-edit').val(autoDeleteZero(msg.Recent_Modifier)),
                         $('#Load_People-edit').val(autoDeleteZero(msg.Load_People)),
                         $('#Load_Time-edit').val(autoDeleteZero(msg.Load_Time)),
                         $('#VerifySign-edit').val(autoDeleteZero(msg.VerifySign)),

                         $('#alter_old_School_id-edit').val(msg.Id)

                         form.render();
                         //监听一级菜单选中
                         form.on('select(myselect-edit)', function(data){
                             console.log(data);
                             provinceChangeEdit()
                             //重要！重新渲染一次，否则二级菜单出不来
                             form.render();
                         });

                         form.on('submit(school-revise)', function(res) {
                             var insertData = {
                                 'School_name': autoAddZero($('#School_name-edit').val()),
                                 'School_EnglishName': autoAddZero($('#School_EnglishName-edit').val()),
                                 'School_properties': autoAddZero($('#School_properties-edit').val()),
                                 'Areas': autoAddZero($('#selProvince-edit').val()),
                                 'Areas02': autoAddZero($('#selCity-edit').val()),
                                 'Areas03': autoAddZero($('#Areas03-edit').val()),
                                 'Founded_time': autoAddZero($('#Founded_time-edit').val()),
                                 'OperationState': autoAddZero($('#OperationState-edit').val()),
                                 'School_system': autoAddZero($('#School_system-edit').val()),
                                 'TuitionHigh': autoAddZero($('#TuitionHigh-edit').val()),

                                 'Tuition01': autoAddZero($('#Tuition01-edit').val()),
                                 'Tuition02': autoAddZero($('#Tuition02-edit').val()),
                                 'Tuition03': autoAddZero($('#Tuition03-edit').val()),
                                 'Tuition04': autoAddZero($('#Tuition04-edit').val()),


                                 'Website': autoAddZero($('#Website-edit').val()),
                                 'Telephone': autoAddZero($('#Telephone-edit').val()),
                                 'Inter_Course_Founded_time': autoAddZero($('#Inter_Course_Founded_time-edit').val()),
                                 'Course': autoAddZero($('#Course-edit').val()),
                                 'Authentication': autoAddZero($('#Authentication-edit').val()),
                                 'Course_evaluation': autoAddZero($('#Course_evaluation-edit').val()),
                                 'Student_Num_All': autoAddZero($('#Student_Num_All-edit').val()),

                                 'Student_Num01': autoAddZero($('#Student_Num01-edit').val()),
                                 'Student_Num02': autoAddZero($('#Student_Num02-edit').val()),
                                 'Student_Num03': autoAddZero($('#Student_Num03-edit').val()),
                                 'Student_Num04': autoAddZero($('#Student_Num04-edit').val()),

                                 'Student_Capacity': autoAddZero($('#Student_Capacity-edit').val()),
                                 'Graduated_Stu_Num': autoAddZero($('#Graduated_Stu_Num-edit').val()),
                                 'Stu_Dominant_nationality': autoAddZero($('#Stu_Dominant_nationality-edit').val()),
                                 'Stu_Year_Investment': autoAddZero($('#Stu_Year_Investment-edit').val()),
                                 'Club_Num': autoAddZero($('#Club_Num-edit').val()),
                                 'President_Country': autoAddZero($('#President_Country-edit').val()),
                                 'Staff_Num': autoAddZero($('#Staff_Num-edit').val()),
                                 'Teacher_Num': autoAddZero($('#Teacher_Num-edit').val()),
                                 'Foreign_Teacher_num': autoAddZero($('#Foreign_Teacher_num-edit').val()),
                                 'Teacher_Year_Investment': autoAddZero($('#Teacher_Year_Investment-edit').val()),
                                 'Teacher_Retention': autoAddZero($('#Teacher_Retention-edit').val()),
                                 'Teacher_Salary': autoAddZero($('#Teacher_Salary-edit').val()),
                                 'Teacher_Stu_ratio': autoAddZero($('#Teacher_Stu_ratio-edit').val()),
                                 'Covered_Area': autoAddZero($('#Covered_Area-edit').val()),
                                 'Built_Area': autoAddZero($('#Built_Area-edit').val()),
                                 'Hardware': autoAddZero($('#Hardware-edit').val()),
                                 'Investment': autoAddZero($('#Investment-edit').val()),
                                 'Remark': autoAddZero($('#Remark-edit').val()),

                                 "Load_People": $.cookie('username'),
                                 "member_sign": $.cookie('usertitle'),

                                 "alter_old_School_id": msg.Id

                             }
                             $.ajax({
                                 type: "get",
                                 async: false,
                                 traditional: true,
                                 data: insertData, //提交的参数
                                 url: 'http://' + changeUrl.address + '/School_api?whereFrom=alter',
                                 dataType: "jsonp", //数据类型为jsonp  
                                 jsonp: "Callback", //服务端用于接收callback调用的function名的参数  
                                 success: function(msg) {
                                     console.log(msg)
                                     if (msg.msg == 1) {
                                         layer.alert('修改成功',function () {
                                             window.location.reload()
                                         })
                                     }
                                 },
                                 error: function() {
                                     layer.alert('网络繁忙，请稍后再试！');
                                 }
                             });
                             return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
                         })
                    })


        }
    });

    var $ = layui.$, active = {
        getCheckData: function(){ //获取选中数据
            var checkStatus = table.checkStatus('idTest')
                ,data = checkStatus.data;
            // layer.alert(JSON.stringify(data));
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
            var schoolSearchType = $('#schoolSearch');
            var schoolSearchValue = $('#schoolSearchValue')
            console.log(schoolSearchType.val())
            //执行重载
            table.reload('idTest', {
                url: 'http://' + changeUrl.address + '/School_api?whereFrom=AdminSearch',
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    type:schoolSearchType.val(),
                    School_searchKey: schoolSearchValue.val(),
                }//需要传递的参数

            });
        }
    };

    $('.demoTable .layui-btn').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    //搜素添加回车事件
    $('#schoolSearchValue').keydown(function (e) {
        var curKey = e.which
        var schoolSearchType = $('#schoolSearch');
        var schoolSearchValue = $('#schoolSearchValue');
        if(curKey == 13){
            //执行重载
            table.reload('idTest', {
                url: 'http://' + changeUrl.address + '/School_api?whereFrom=AdminSearch',
                page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,where: {
                    type:schoolSearchType.val(),
                    School_searchKey: schoolSearchValue.val(),
                }//需要传递的参数
            });
        }
    })

    //////////////////////////////////////////////////////////

});

//新增学校信息
layui.use('form',function () {
    var form = layui.form
    //自定义验证规则
    form.verify({
        foundTime:[/^$|^\d{4}$/,'必须为四位整数']
        ,checkFloat:[/^$|^(-?\d+)(\.\d+)?$/,'必须为数字']
        ,checkInt:[/^$|^[1-9]\d*$/,'必须为整数']
    });

    //监听一级菜单选中
    form.on('select(myselect01)', function(data){
        console.log(data);
        provinceChange()
        //重要！重新渲染一次，否则二级菜单出不来
        form.render();
    });

        //监听提交
      form.on('submit(demo1)', function(res){
            // layer.alert(JSON.stringify(res.field), {
            //     title: '最终的提交信息'
            // })
          var insertData = {
              'School_name': autoAddZero($('#School_name').val()),
              'School_EnglishName': autoAddZero($('#School_EnglishName').val()),
              'School_properties': autoAddZero($('#School_properties').val()),
              'Areas': autoAddZero($('#selProvince').val()),
              'Areas02': autoAddZero($('#selCity').val()),
              'Areas03': autoAddZero($('#Areas03').val()),
              'Founded_time': autoAddZero($('#Founded_time').val()),
              'OperationState': autoAddZero($('#OperationState').val()),
              'School_system': autoAddZero($('#School_system').val()),

              'Tuition01': autoAddZero($('#Tuition01').val()),
              'Tuition02': autoAddZero($('#Tuition02').val()),
              'Tuition03': autoAddZero($('#Tuition03').val()),
              'Tuition04': autoAddZero($('#Tuition04').val()),

              'TuitionHigh': autoAddZero($('#TuitionHigh').val()),
              'Website': autoAddZero($('#Website').val()),
              'Telephone': autoAddZero($('#Telephone').val()),
              'Inter_Course_Founded_time': autoAddZero($('#Inter_Course_Founded_time').val()),
              'Course': autoAddZero($('#Course').val()),
              'Authentication': autoAddZero($('#Authentication').val()),
              'Course_evaluation': autoAddZero($('#Course_evaluation').val()),

              'Student_Num01': autoAddZero($('#Student_Num01').val()),
              'Student_Num02': autoAddZero($('#Student_Num02').val()),
              'Student_Num03': autoAddZero($('#Student_Num03').val()),
              'Student_Num04': autoAddZero($('#Student_Num04').val()),

              'Student_Num_All': autoAddZero($('#Student_Num_All').val()),
              'Student_Capacity': autoAddZero($('#Student_Capacity').val()),
              'Graduated_Stu_Num': autoAddZero($('#Graduated_Stu_Num').val()),
              'Stu_Dominant_nationality': autoAddZero($('#Stu_Dominant_nationality').val()),
              'Stu_Year_Investment': autoAddZero($('#Stu_Year_Investment').val()),
              'Club_Num': autoAddZero($('#Club_Num').val()),
              'President_Country': autoAddZero($('#President_Country').val()),
              'Staff_Num': autoAddZero($('#Staff_Num').val()),
              'Teacher_Num': autoAddZero($('#Teacher_Num').val()),
              'Foreign_Teacher_num': autoAddZero($('#Foreign_Teacher_num').val()),
              'Teacher_Year_Investment': autoAddZero($('#Teacher_Year_Investment').val()),
              'Teacher_Retention': autoAddZero($('#Teacher_Retention').val()),
              'Teacher_Salary': autoAddZero($('#Teacher_Salary').val()),
              'Teacher_Stu_ratio': autoAddZero($('#Teacher_Stu_ratio').val()),
              'Covered_Area': autoAddZero($('#Covered_Area').val()),
              'Built_Area': autoAddZero($('#Built_Area').val()),
              'Hardware': autoAddZero($('#Hardware').val()),
              'Investment': autoAddZero($('#Investment').val()),
              'Remark': autoAddZero($('#Remark').val()),

              "Load_People":$.cookie('username'),
              "member_sign":$.cookie('usertitle')
          }
          $.ajax({
              type: "get",
              async: false,
              traditional: true,
              data: insertData,//提交的参数
              url: 'http://' + changeUrl.address + '/School_api?whereFrom=insert',
              dataType: "jsonp",//数据类型为jsonp  
              jsonp: "Callback",//服务端用于接收callback调用的function名的参数  
              success: function (msg) {
                  console.log(msg)
                  if(msg.msg ==1){
                      layer.alert('提交成功',function () {
                          window.location.reload()
                      })
                  }
              },
              error: function () {
                  alert('网络繁忙，请稍后再试！');
              }
          });
          return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
      });

    }
)
//新增学校信息（弹窗）
$('#addSchool').on('click',function () {
    layui.use('layer', function(){
        layer.open({
            type: 1,
            title: '学校库-新增',
            shadeClose: false,
            maxmin: true, //开启最大化最小化按钮
            area: [$(window).width()*0.7+'px', $(window).height()*0.7+'px'],
            content: $('#layerForm'),
            success:function (layereo,index) {
                layer.full(index)
            }
        });
    });

})


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

    var prefix = 'nsi-school-'
    if($('#provinceChoose').val() !== ''){
        prefix = 'nsi-school-'+$('#provinceChoose').val()+'-'
    }

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
    saveAs(blob, prefix + str +".xlsx");
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

//导出全部数据
$('#uploadAllData').on("click",function () {

    layer.confirm('确定要导出全部数据吗？',{
        icon: 3,
        btn: ['确定','取消'], //按钮
        title:'系统提示'
    },function () {
        var index =  layer.msg('数据导出中,请稍后...', {
            icon: 16
            ,time: 200000 //2秒关闭（如果不配置，默认是3秒）
            ,shade: [0.8,'#000']
        });

        $.ajax({
            type:'get',
            async:true,
            url:'http://' + changeUrl.address + '/School_api?whereFrom=AdminSearch',
            dataType:"json",
            data:{
                type:0,
                School_searchKey: '',
                pageNum:1,
                OnePageNum:1100
            },
            success:function (res) {
                console.log(res)
                var initData = JSON.stringify(res.data)
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
                layer.alert('导出成功',{icon:6,skin: 'layui-layer-molv',title:'系统提示' ,closeBtn: 0})
            },
            error:function () {
                layer.alert('服务器繁忙，请稍后再试')
            }
        })
    },function () {
        layer.msg('您取消了导出',{time:3000})
    })

})

//省份导出数据弹窗
$('#provinceData').on('click',function () {
    layui.use('layer',function () {
        var layer = layui.layer
        layer.open({
            type:1,
            skin:'layui-layer-rim',
            area:['380px','240px'],
            content:$('#provinceAlertShow')
        })
    })
})
//获取省份真实数据
function getProvinceData() {
    layui.use('layer',function () {
        var layer = layui.layer
        var provinceVal = $('#provinceChoose').val()
        if(provinceVal == ''){
            layer.msg('请输入省份')
        }else {
            $.ajax({
                type:'get',
                url:'http://' + changeUrl.address + '/School_api?whereFrom=AdminSearch',
                data:{
                    type:1,
                    School_searchKey: provinceVal,
                    pageNum:1,
                    OnePageNum:500
                },
                success:function (data) {
                    console.log(data)
                    if(data.count ==0){
                        layer.msg('无数据，请确保输入的省份正确~')
                    }else {
                        layer.confirm('共'+data.count+'条数据，确定导出？',{icon:3},
                            function () {
                                var initData = JSON.stringify(data.data)
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
                                layer.alert('导出成功',{icon:6,skin: 'layui-layer-molv',title:'系统提示' ,closeBtn: 0},function () {
                                    layer.closeAll()
                                })
                            },
                            function () {
                                layer.msg('用户取消')
                            }
                        )
                    }
                },
                error:function () {
                    alert('网络繁忙，请稍后再试~')
                }
            })
        }
    })

}
$('#getProvinceData').on('click',function () {
    getProvinceData()
})
$('#provinceChoose').keydown(function (e) {
    var curKey = e.which;
    if( curKey == 13){
        getProvinceData()
    }
})





