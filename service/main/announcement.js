import { response } from 'express';
import { config } from '../../config.js';
import * as TokenStorage from '../../token.js'


export async function showAll(req, res){
    const page = req.query.page || 1
    const A_TITLE = req.query.A_TITLE
    const url = A_TITLE
        ? `${config.base}/main/announcement?page=${page}&A_TITLE=${A_TITLE}`
        : `${config.base}/main/announcement?page=${page}`

    fetch(url)
    .then(response => response.json())
    .then(datas => {
        const tokenCheck = TokenStorage.getToken() ? true : false;
        res.render('../public/ejs/main/announcement', { datas, tokenCheck });
    });
}

export async function showOne(req, res){
    const A_NUM = req.params.id;
    const url = `${config.base}/main/announcement/${A_NUM}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tokenCheck = TokenStorage.getToken() ? true : false;
            data.tokenCheck = tokenCheck
            res.render('../public/ejs/main/announcement-content', data );
        });
}
