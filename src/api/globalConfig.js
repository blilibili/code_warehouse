/**
 * Created by Administrator on 2017/5/24.
 */
//移动端适配

export const config = {
    //表单正确状态码
    isTrue:1,
    //正式
    //website:'http://meeting-backend.xlcwnet.com/',
    //测试服务器环境
    //website:'http://meeting-backend.test.xlcw.com/',
    //测试
    website:'http://119.29.224.86:3002/',
    //best 游戏id
    game_id:20,
    //系统id 1:xlcw.gms.com,2:tw.gms.com.3:best.gms.com
    systemId:3,
    //会议状态
    meeting:[
        {status:0 , title:'未进行'},
        {status:1 , title:'正在进行'},
        {status:2 , title:'已结束'}
    ]
    ,
    //上传文件地址
    uploadAddress(){
        let address = this.website + 'game/res_upload/upload';
        return address;
    },
    token(methods , param={}){
        let token = localStorage.getItem('token');
        if(token){
            if(methods == 'post'){
                param.session_id = token;
                return param;
            }
            if(methods == 'get'){
                return '/session_id/'+token
            }
        }else{
            return false;
        }
    },
    //新增成功的回调函数 path 新增成功跳转的路径 data 新增成功返回的数据 context 新增的上下文
    submitCallback(path , data , context){
        if(data.status == 1001){
            Message.error(data.msg);
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('uid');
            context.$router.replace('/best/login');
        }else{
            if(data.status == 1){
                Message.success(data.msg);
                context.$router.replace(path);
            }else{
                Message.error(data.msg);
            }
        }
    },
    //获取列表判断是否有登录状态
    isLogin(data , context){
        if(data.status == 1001){
            Message.error(data.msg);
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('uid');
            context.$router.replace('/best/login');
        }else{
            return true;
        }
    },
    //判断类型
    typeOf(obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]'  : 'boolean',
            '[object Number]'   : 'number',
            '[object String]'   : 'string',
            '[object Function]' : 'function',
            '[object Array]'    : 'array',
            '[object Date]'     : 'date',
            '[object RegExp]'   : 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]'     : 'null',
            '[object Object]'   : 'object'
        };
        return map[toString.call(obj)];
    },
    //时间戳转换 YY-MM-DD methods 设置返回的时间  day 日期  seconds 秒
    formatDateTime(inputTime , methods) {
        let date = new Date(inputTime);
        let y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let minute = date.getMinutes();
        let second = date.getSeconds();
        minute = minute < 10 ? ('0' + minute) : minute;
        second = second < 10 ? ('0' + second) : second;
        switch (methods){
            case 'day':
                return y + '-' + m + '-' + d;
                break;
            case 'seconds':
                return y + '-' + m + '-' + d + ' ' + h + ':' +minute + ':' + second;
                break;
            default:
                return '参数错误请检查';
                break;
        }
    },
    //判断是不是手机端
    whatMeida(){
        return isPC.isPC();
    },
    //判断传入的时间是否大于当前的时间
    isMoreThanNowTime(time){
        let now = Date.parse(new Date());
        let Time = Date.parse(new Date(time));
        return now < Time;
    },
    //获取url上的参数
    GetQueryString(name){
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    },
    //判断数组元素是否存在
    isContains(arr, obj) {
        let i = arr.length;
        while (i--) {
            if (arr[i] === obj) {
                return true;
            }
        }
        return false;
    },
    //数组去重
    removeRepeat(arr){
        //elem当前元素的值  pos 索引值
        return arr.filter(function(elem, pos) {

            return arr.indexOf(elem) == pos;
        });
    },
    unique(arr){
        let unique = {};
        arr.forEach(function(item){
            unique[JSON.stringify(item)]=item;//键名不会重复
        });
        arr = Object.keys(unique).map(function(u){
            //Object.keys()返回对象的所有键值组成的数组，map方法是一个遍历方法，返回遍历结果组成的数组.将unique对象的键名还原成对象数组
            return JSON.parse(u);
        });
        return arr;
    },
    //判断类型
    typeOf(obj) {
        const toString = Object.prototype.toString;
        const map = {
            '[object Boolean]'  : 'boolean',
            '[object Number]'   : 'number',
            '[object String]'   : 'string',
            '[object Function]' : 'function',
            '[object Array]'    : 'array',
            '[object Date]'     : 'date',
            '[object RegExp]'   : 'regExp',
            '[object Undefined]': 'undefined',
            '[object Null]'     : 'null',
            '[object Object]'   : 'object'
        };
        return map[toString.call(obj)];
    },

    //状态返回
    returnResult(context , code , sesMsg , errMsg , src){
        if(code == 0){
            context.$message({
                message: sesMsg,
                type: 'success'
            });
            context.$router.replace(src);
        }else{
            context.$message.error(errMsg);
        }
    }
};