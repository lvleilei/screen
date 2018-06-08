
// 预警数
    var warningNumber_url='/maniPulate/manipulateWarning';
    public_ajax.call_request('get',warningNumber_url,warningNumber);
    function warningNumber(data){
        if(data){
            $('#container .firstScreen .com-1').text(data.weeknum);
            $('#container .firstScreen .com-2').text(data.monthnum);
            $('#container .firstScreen .com-3').text(data.seasonnum);
        }
    }

// 适配分辨率
    var pageData=6;
    if (screen.width <= 1536){
        pageData=6;
    }else {
        pageData=10;
    }

//第一屏   疑似操纵预警
    var loadingHtml = '<center class="loading">正在加载中...</center>';
    $('#recordingTable').append(loadingHtml);

    var earlyWarning_url='/maniPulate/manipulateWarningText';
    public_ajax.call_request('get',earlyWarning_url,earlyWarning);
    function earlyWarning(data) {
        $('#recordingTable').bootstrapTable('load', data);
        $('#recordingTable').bootstrapTable({
            data:data,
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: pageData,//单页记录数
            pageList: [15,20,25],//分页步进值
            sidePagination: "client",//服务端分页
            searchAlign: "left",
            searchOnEnterKey: false,//回车搜索
            showRefresh: false,//刷新按钮
            showColumns: false,//列选择按钮
            buttonsAlign: "right",//按钮对齐方式
            locale: "zh-CN",//中文支持
            detailView: false,
            showToggle:false,
            sortName:'bci',
            sortOrder:"desc",
            // showLoading:true,
            columns: [
                {
                    title: "股票名称",//标题
                    field: "stock_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        // var stock_name = '';

                        // if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                        //     return '未知';
                        // }else if(row.stock_name.length >=5){
                        //     stock_name = row.stock_name.slice(0,5)+'...';
                        //     return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // }else {
                        //     stock_name = row.stock_name;
                        //     return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.stock_name+'\',\''+row.id+'\')" title="'+row.stock_name+'">'+stock_name+'</span>';
                        // };
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
                        };
                    }
                },
                {
                    title: "股票代码",//标题
                    field: "stock_id",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {

                        if (row.stock_id==''||row.stock_id=='null'||row.stock_id=='unknown'||!row.stock_id){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
                        };
                    }
                },
                {
                    title: "开始时间",//标题
                    field: "start_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.start_date==''||row.start_date=='null' || row.start_date==null ||row.start_date=='unknown'||!row.start_date){
                            return '未知';
                        }else {
                            return row.start_date;
                        };
                    }

                },
                {
                    title: "结束时间",//标题
                    field: "end_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.end_date==''||row.end_date=='null' || row.end_date==null ||row.end_date=='unknown'||!row.end_date){
                            return '未知';
                        }else {
                            return row.end_date;
                        };
                    }
                },
                {
                    title: "操纵类型",//标题
                    field: "manipulate_type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_type==''||row.manipulate_type=='null' || row.manipulate_type==null ||row.manipulate_type=='unknown'||!row.manipulate_type){
                            return '未知';
                        }else {
                            return row.manipulate_type;
                        };
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
                    }
                },
                {
                    title: "涨幅",//标题
                    field: "increase_ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
                    }
                },
                {
                    title: "监测详情",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                    }
                },
                {
                    title: "是否证监会判罚",//标题
                    field: "ifpunish",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.ifpunish==''||row.ifpunish=='null' || row.ifpunish==null ||row.ifpunish=='unknown'||!row.ifpunish){
                            return '未知';
                        }else {
                            return row.ifpunish;
                        };
                    }
                },
                {
                    title: "是否操纵",//标题
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
                    }
                },
            ],
            formatNoMatches: function(){
                return "没有相关的匹配结果";  //没 效果
            },
            formatLoadingMessage: function(){
                return "请稍等，正在加载中。。。";
            },
        });
        $('#recordingTable center.loading').hide();
        $('.recordingTable .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };
    // 是否操纵
        $('#recordingTable').on('change','input.chk',function(){
            var _id = $(this).attr('_id');

            console.log('===========================');
            // console.log($(this).is(':checked'));
            var ifmanipulate = '';
            if($(this).is(':checked')){
                ifmanipulate = '1';
            }else {
                ifmanipulate = '0';
            }

            var rumanUser_url = '/maniPulate/manipulateWarningUser?id='+_id+'&ifmanipulate='+ifmanipulate;
            console.log(rumanUser_url);
            public_ajax.call_request('get',rumanUser_url,rumanUser);
        })
        function rumanUser(data){
            if(data.status == 'ok'){
                $('#success .modal-body p').empty().text('修改成功');
                $('#success').modal('show');
                $('.modal-backdrop').css({position:'static'});
            }else {
                $('#success .modal-body p').empty().text('修改失败');
                $('#success').modal('show');
                $('.modal-backdrop').css({position:'static'});
            }
            // 模态框关闭之后重新请求表格
            $('#Success').on('hidden.bs.modal', function () {
                public_ajax.call_request('get',earlyWarning_url,earlyWarning);
            })
        }


    // 跳转详情页
    function jumpFrame_1(stock, id, manipulate_type_num) {
        var html = '';
        stock=escape(stock);
        html='/index/setDetail?stock='+stock+'&id='+id +'&manipulate_type_num='+manipulate_type_num;
        // window.location.href=html;
        window.open(html);
    }

// 二级可疑股票池

    var earlyWarning_second_url='/maniPulate/manipulateWarningText';
    public_ajax.call_request('get',earlyWarning_second_url,earlyWarning_second);
    function earlyWarning_second(data) {
        $('#recordingTable_second').bootstrapTable('load', data);
        $('#recordingTable_second').bootstrapTable({
            data:data.splice(20,data.length),
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: pageData,//单页记录数
            pageList: [15,20,25],//分页步进值
            sidePagination: "client",//服务端分页
            searchAlign: "left",
            searchOnEnterKey: false,//回车搜索
            showRefresh: false,//刷新按钮
            showColumns: false,//列选择按钮
            buttonsAlign: "right",//按钮对齐方式
            locale: "zh-CN",//中文支持
            detailView: false,
            showToggle:false,
            sortName:'bci',
            sortOrder:"desc",
            // showLoading:true,
            columns: [
                {
                    title: "股票名称",//标题
                    field: "stock_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
                        };
                    }
                },
                {
                    title: "股票代码",//标题
                    field: "stock_id",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {

                        if (row.stock_id==''||row.stock_id=='null'||row.stock_id=='unknown'||!row.stock_id){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
                        };
                    }
                },
                {
                    title: "开始时间",//标题
                    field: "start_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.start_date==''||row.start_date=='null' || row.start_date==null ||row.start_date=='unknown'||!row.start_date){
                            return '未知';
                        }else {
                            return row.start_date;
                        };
                    }

                },
                {
                    title: "结束时间",//标题
                    field: "end_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.end_date==''||row.end_date=='null' || row.end_date==null ||row.end_date=='unknown'||!row.end_date){
                            return '未知';
                        }else {
                            return row.end_date;
                        };
                    }
                },
                {
                    title: "操纵类型",//标题
                    field: "manipulate_type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_type==''||row.manipulate_type=='null' || row.manipulate_type==null ||row.manipulate_type=='unknown'||!row.manipulate_type){
                            return '未知';
                        }else {
                            return row.manipulate_type;
                        };
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
                    }
                },
                {
                    title: "涨幅",//标题
                    field: "increase_ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
                    }
                },
                {
                    title: "监测详情",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                    }
                },
                {
                    title: "是否证监会判罚",//标题
                    field: "ifpunish",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.ifpunish==''||row.ifpunish=='null' || row.ifpunish==null ||row.ifpunish=='unknown'||!row.ifpunish){
                            return '未知';
                        }else {
                            return row.ifpunish;
                        };
                    }
                },
                {
                    title: "是否操纵",//标题
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
                    }
                },
            ],
            formatNoMatches: function(){
                return "没有相关的匹配结果";  //没 效果
            },
            formatLoadingMessage: function(){
                return "请稍等，正在加载中。。。";
            },
        });
        $('#recordingTable_second center.loading').hide();
        $('.recordingTable_second .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };

// 三级可疑股票池

    var earlyWarning_third_url='/maniPulate/manipulateWarningText';
    public_ajax.call_request('get',earlyWarning_third_url,earlyWarning_third);
    function earlyWarning_third(data) {
        $('#recordingTable_third').bootstrapTable('load', data);
        $('#recordingTable_third').bootstrapTable({
            data:data.splice(300,data.length),
            search: true,//是否搜索
            pagination: true,//是否分页
            pageSize: pageData,//单页记录数
            pageList: [15,20,25],//分页步进值
            sidePagination: "client",//服务端分页
            searchAlign: "left",
            searchOnEnterKey: false,//回车搜索
            showRefresh: false,//刷新按钮
            showColumns: false,//列选择按钮
            buttonsAlign: "right",//按钮对齐方式
            locale: "zh-CN",//中文支持
            detailView: false,
            showToggle:false,
            sortName:'bci',
            sortOrder:"desc",
            // showLoading:true,
            columns: [
                {
                    title: "股票名称",//标题
                    field: "stock_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.stock_name==''||row.stock_name=='null'||row.stock_name=='unknown'||!row.stock_name){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_name+'">'+row.stock_name+'</span>';
                        };
                    }
                },
                {
                    title: "股票代码",//标题
                    field: "stock_id",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {

                        if (row.stock_id==''||row.stock_id=='null'||row.stock_id=='unknown'||!row.stock_id){
                            return '未知';
                        }else {
                            return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="'+row.stock_id+'">'+row.stock_id+'</span>';
                        };
                    }
                },
                {
                    title: "开始时间",//标题
                    field: "start_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.start_date==''||row.start_date=='null' || row.start_date==null ||row.start_date=='unknown'||!row.start_date){
                            return '未知';
                        }else {
                            return row.start_date;
                        };
                    }

                },
                {
                    title: "结束时间",//标题
                    field: "end_date",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.end_date==''||row.end_date=='null' || row.end_date==null ||row.end_date=='unknown'||!row.end_date){
                            return '未知';
                        }else {
                            return row.end_date;
                        };
                    }
                },
                {
                    title: "操纵类型",//标题
                    field: "manipulate_type",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_type==''||row.manipulate_type=='null' || row.manipulate_type==null ||row.manipulate_type=='unknown'||!row.manipulate_type){
                            return '未知';
                        }else {
                            return row.manipulate_type;
                        };
                    }
                },
                {
                    title: "所属行业",//标题
                    field: "industry_name",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var industryName = '';

                        if (row.industry_name==''||row.industry_name=='null' || row.industry_name==null ||row.industry_name=='unknown'||!row.industry_name){
                            return '未知';
                        }else if(row.industry_name.length >=5){
                            industryName = row.industry_name.slice(0,5)+'...';
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        }else {
                            industryName = row.industry_name;
                            return '<span style="cursor:pointer;color:white;" title="'+row.industry_name+'">'+industryName+'</span>';
                        };
                    }
                },
                {
                    title: "涨幅",//标题
                    field: "increase_ratio",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var increaseRatio;
                        if(row.increase_ratio === 0){
                            return '0%';
                        }else if (row.increase_ratio==''||row.increase_ratio=='null'||row.increase_ratio=='unknown'||!row.increase_ratio){
                            return '未知';
                        }else {
                            increaseRatio = (row.increase_ratio *100).toFixed(2).toString() + '%';
                            return increaseRatio;
                        };
                    }
                },
                {
                    title: "操纵状态",//标题
                    field: "manipulate_state",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.manipulate_state==''||row.manipulate_state=='null' || row.manipulate_state==null ||row.manipulate_state=='unknown'||!row.manipulate_state){
                            return '未知';
                        }else {
                            return row.manipulate_state;
                        };
                    }
                },
                {
                    title: "监测详情",//标题
                    field: "",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        return '<span style="cursor:pointer;color:white;" onclick="jumpFrame_1(\''+row.name+'\',\''+row.id+'\',\''+row.manipulate_type_num+'\')" title="查看详情"><i class="fa fa-file-o"></i></span>';
                    }
                },
                {
                    title: "是否证监会判罚",//标题
                    field: "ifpunish",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        if (row.ifpunish==''||row.ifpunish=='null' || row.ifpunish==null ||row.ifpunish=='unknown'||!row.ifpunish){
                            return '未知';
                        }else {
                            return row.ifpunish;
                        };
                    }
                },
                {
                    title: "是否操纵",//标题
                    field: "ifmanipulate",//键名
                    sortable: true,//是否可排序
                    order: "desc",//默认排序方式
                    align: "center",//水平
                    valign: "middle",//垂直
                    formatter: function (value, row, index) {
                        var str = '';
                        if(row.ifmanipulate == 0){ //不是谣言 checkbox 为不选中
                            str = '<input type="checkbox" id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }else if(row.ifmanipulate == 1){// 是谣言 选中 checkbox
                            str = '<input type="checkbox" checked=checked id="checkbox_d'+(index+1)+'" class="chk" _id="'+row.id+'" /><label for="checkbox_d'+(index+1)+'"></label>';
                        }
                        // return '<input type="checkbox" id="checkbox_d'+index+'" class="chk"/><label for="checkbox_d'+index+'"></label>';
                        return str;
                    }
                },
            ],
            formatNoMatches: function(){
                return "没有相关的匹配结果";  //没 效果
            },
            formatLoadingMessage: function(){
                return "请稍等，正在加载中。。。";
            },
        });
        $('#recordingTable_third center.loading').hide();
        $('.recordingTable_third .fixed-table-toolbar .search input').attr('placeholder','请输入查询内容');
    };
