### XmlHttpRequest

#### Ajax









```javascript

class Axios{
    constructor(){
 
    }
    request(config){
        return new Promise((resolve) => {
            const {url='',data={},method='get'} = config; //解构传参
            const xhr = new XMLHttpRequest;     //创建请求对象
            xhr.open(method,url,true); 
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200){
                    resolve(xhr.responseText);
                    //异步请求返回后将Promise转为成功态并将结果导出
                }
            }
            xhr.send(JSON.stringfy(data));
        })
    }
}
 
function CreateAxiosFn(){
    let axios = new Axios;
    let req = axios.request.bind(axios);
    return req;
}
 
let axios = CreateAxiosFn();

```

