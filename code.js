var nhi_id = window.location.search
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

/*test*/
document.write(nhi_id)

