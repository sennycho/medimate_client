import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'

export async function showAll(req, res) {
    const tokenCheck = TokenStorage.getToken() ? true : false;
    fetch(config.base + '/main/login')
        .then(response => response.json())
        .then(console.log('인덱스 페이지 이동'))
        .then(res.render('../public/ejs/main/index',{fail:true,goodbye:true,admin:true,tokenCheck}));
}


function getHeaders() {
    const token = TokenStorage.getToken();
    console.log(token);
    return {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    };
}