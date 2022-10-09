var nameInput = document.getElementById("username");
var pwdInput = document.getElementById("pwd");
var loginBtn = document.getElementById("login");
var hb1 = document.getElementById("helpBlock1");
var hb2 = document.getElementById("helpBlock2");
var hb3 = document.getElementById("helpBlock3");
var xmlHttp = new XMLHttpRequest();
var jsonObj = null;
xmlHttp.onload = function(){
    if(xmlHttp.readyState == 4){ //表示响应完成
        if(xmlHttp.status == 200){ //响应码为200  表示服务器正确响应
            //获取响应内容
            txt = xmlHttp.responseText ;
            //把json字符串解析成json对象
            jsonObj = JSON.parse(txt);
            console.info(jsonObj)
            
        }else{
            console.info('数据返回失败！状态代码：'+xmlHttp.status+'状态信息：'+xmlHttp.statusText);
        }
    }
}
xmlHttp.open('GET','/data.json',true);
xmlHttp.send();

loginBtn.onclick = function(){

    //获取用户名和密码
    var uname = nameInput.value;
    var pwd = pwdInput.value;
    //判断是否为空
    if(!uname){
        hb1.style.display = 'block';
    }else if(!pwd){
        hb2.style.display = 'block';
    }else{ //登录成功
        for(var i=0;i<jsonObj.length;i++){
           if( uname==jsonObj[i]['name'] && pwd==jsonObj[i]['psw'])
                window.location.href='/code/'+uname+'.html?name=';
            else{

               hb3.style.display = 'block';
            }
        }
    }


}