import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function show(req, res) {
    fetch(config.base + '/main/mypage/info',{headers: getHeaders()})
    .then(response => response.json())
    .then(userlist => {
        const tokenCheck = TokenStorage.getToken() ? true : false;
        if(userlist.message){
            res.render('../public/ejs/main/index',{userlist,fail:false,goodbye:true,tokenCheck})
        }else{
            res.render('../public/ejs/main/mypageInfo',{userlist,fail:true,goodbye:true,admin:true,tokenCheck})
        }
    })
}


export async function changeInfo(req, res) {
    const { U_NUM, U_EMAIL, U_ZIP_CODE, U_ADDRESS1, U_ADDRESS2, U_HP  } = req.body
    fetch(`${config.base}/main/mypage/info`, {
        method: 'PUT',
        headers:getHeaders(),
        body: JSON.stringify({
            U_NUM:U_NUM,
            U_EMAIL: U_EMAIL,
            U_ZIP_CODE: U_ZIP_CODE,
            U_ADDRESS1: U_ADDRESS1,
            U_ADDRESS2: U_ADDRESS2,
            U_HP: U_HP
        })
    })
        .then(response => response.json())
        .then(()=> res.redirect('/main/mypage/Info'))
        .catch(error => {
            // 에러 처리를 수행합니다.
            console.error(error);
        });
};

function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}