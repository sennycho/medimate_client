import { config } from '../../config.js';
import Pagination from '../../middleware/pagination.js';

export async function showAll(req, res) {
    const page = req.query.page || 1;
    const P_NAME = req.query.P_NAME;
    const url = P_NAME 
    ? `${config.base}/admin/drugstore?page=${page}&P_NAME=${P_NAME}`
    : `${config.base}/admin/drugstore?page=${page}`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(drugList => {
            let pagination = Pagination(page, drugList.count, 10);
            pagination.list = drugList.rows;
            pagination.P_NAME = P_NAME;
            res.render('../public/ejs/admin/adminDrugstore', pagination)
        });
}

export async function create(req, res) {
    const { P_NUM, P_NAME, P_ADDRESS, P_PHONE, P_MON_S, P_MON_C, P_TUE_S, P_TUE_C, P_WED_S, P_WED_C, P_THU_S, P_THU_C, P_FRI_S, P_FRI_C, P_SAT_S, P_SAT_C, P_SUN_S, P_SUN_C, P_HOLI_S, P_HOLI_C, P_LATI, P_LONGI } = req.body;
    const data = { P_NUM, P_NAME, P_ADDRESS, P_PHONE, P_MON_S, P_MON_C, P_TUE_S, P_TUE_C, P_WED_S, P_WED_C, P_THU_S, P_THU_C, P_FRI_S, P_FRI_C, P_SAT_S, P_SAT_C, P_SUN_S, P_SUN_C, P_HOLI_S, P_HOLI_C, P_LATI, P_LONGI }
    fetch(config.base + '/admin/drugstore/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(() => res.redirect('/admin/drugstore'))
        .catch(error => {
            console.error('Error:', error);
        });
}


export async function modify(req, res) {
    const { P_NUM, P_NAME, P_ADDRESS, P_PHONE, P_MON_S, P_MON_C, P_TUE_S, P_TUE_C, P_WED_S, P_WED_C, P_THU_S, P_THU_C, P_FRI_S, P_FRI_C, P_SAT_S, P_SAT_C, P_SUN_S, P_SUN_C, P_HOLI_S, P_HOLI_C, P_LATI, P_LONGI } = req.body;
    const data = { P_NAME, P_ADDRESS, P_PHONE, P_MON_S, P_MON_C, P_TUE_S, P_TUE_C, P_WED_S, P_WED_C, P_THU_S, P_THU_C, P_FRI_S, P_FRI_C, P_SAT_S, P_SAT_C, P_SUN_S, P_SUN_C, P_HOLI_S, P_HOLI_C, P_LATI, P_LONGI }
    fetch(config.base + '/admin/drugstore/' + P_NUM, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(() => res.redirect('/admin/drugstore'))
        .catch(error => {
            console.error('Error:', error);
        });
}


export async function drop(req, res) {
    const P_NUM = req.params.id;
    fetch(config.base + '/admin/drugstore/' + P_NUM, {
        method: "DELETE"
    }).then(() => res.redirect('/admin/drugstore'))
}