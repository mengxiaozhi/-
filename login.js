var idInput = document.getElementById("nhi_id");
var pwdInput = document.getElementById("pwd");
var loginBtn = document.getElementById("login");
var hb1 = document.getElementById("helpBlock1");
var hb2 = document.getElementById("helpBlock2");
var hb3 = document.getElementById("helpBlock3");
var xmlHttp = new XMLHttpRequest();
var jsonObj = null; //將物件設定為空
xmlHttp.onload = function(){
    if(xmlHttp.readyState == 4){ //表示响应完成
        if(xmlHttp.status == 200){ //响应码为200  表示服务器正确响应
            //获取响应内容
            var txt = xmlHttp.responseText ;
            //把json字符串解析成json对象
            jsonObj = JSON.parse(txt);
            console.info(jsonObj)//把json字符串显示在console中
        }else{
            console.info('数据返回失败！状态代码：'+xmlHttp.status+'状态信息：'+xmlHttp.statusText);
        }
    }
}

xmlHttp.open('GET','/data.json',true);
xmlHttp.send();

loginBtn.onclick = function(){
    //获取用户名和密码
    var nhi_id = idInput.value;
    var pwd = pwdInput.value;
    //判断是否为空
    if(!nhi_id){
        hb1.style.display = 'block';
    }
    else if(!pwd){
        hb2.style.display = 'block';
    }
    //對比console中的json數據，登录成功
    else{
        for(var i=0;i<jsonObj.length;i++){
           if( nhi_id==jsonObj[i]['name'] && pwd==jsonObj[i]['psw'])
                window.location.href='/code/'+nhi_id+'.html';
            else{
               hb3.style.display = 'block';//未在console中找到json數據
            }
        }
    }


}