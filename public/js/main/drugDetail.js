const P_NUM = document.getElementById('modalPnum')
const P_NAME = document.getElementById('modalPname')
const P_PHONE = document.getElementById('modalPphone')
const P_LATI = document.getElementById('modalPlati')
const P_LONGI = document.getElementById('modalPlongi')
const P_ADDRESS = document.getElementById('modalPaddress')
const P_MON_S = document.getElementById('modalPmons')
const P_MON_C = document.getElementById('modalPmonc')
const P_TUE_S = document.getElementById('modalPtues')
const P_TUE_C = document.getElementById('modalPtuec')
const P_WED_S = document.getElementById('modalPweds')
const P_WED_C = document.getElementById('modalPwedc')
const P_THU_S = document.getElementById('modalPthus')
const P_THU_C = document.getElementById('modalPthuc')
const P_FRI_S = document.getElementById('modalPfris')
const P_FRI_C = document.getElementById('modalPfric')
const P_SAT_S = document.getElementById('modalPsats')
const P_SAT_C = document.getElementById('modalPsatc')
const P_SUN_S = document.getElementById('modalPsuns')
const P_SUN_C = document.getElementById('modalPsunc')
const P_HOLI_S = document.getElementById('modalPholis')
const P_HOLI_C = document.getElementById('modalPholic')

    const infoBtn = document.querySelectorAll(".drug-info");
    const modalInfo = document.getElementById('modal-info');
    const btnCloseModal = document.querySelector(".close_button");
    const modalClose = document.querySelectorAll(".close_button");
    infoBtn.forEach((v) => {
        v.addEventListener('click',() => {
            modalInfo.classList.add('active');
            map.relayout();
            map.setCenter(position)
        });
    });

    // const modal = document.querySelector(".modal");
    
    modalClose.forEach((v) => {
        v.addEventListener('click', () => {
            modalInfo.classList.remove('active');
            modalWrite.classList.remove('active');

        });
    }); 
    


    let map
    let markerPosition
    let mapContainer = document.getElementById('map')
    mapContainer.style.width = '30rem';
    mapContainer.style.height = '21rem'; 
    mapOption = { 
        center: new kakao.maps.LatLng(36, 123),
        level: 3
    };
    map = new kakao.maps.Map(mapContainer, mapOption);
    let marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(0, 0)
    });
    


function modal(data2) {
    const data = JSON.parse(data2);
    
    P_NUM.value = data.P_NUM;
    P_NAME.value = data.P_NAME;
    P_PHONE.value = data.P_PHONE;
    P_ADDRESS.value = data.P_ADDRESS;
    P_MON_S.value = data.P_MON_S;
    P_MON_C.value = data.P_MON_C;
    P_TUE_S.value = data.P_TUE_S;   
    P_TUE_C.value = data.P_TUE_C;
    P_WED_S.value = data.P_WED_S;
    P_WED_C.value = data.P_WED_C;
    P_THU_S.value = data.P_THU_S;
    P_THU_C.value = data.P_THU_C;
    P_FRI_S.value = data.P_FRI_S;
    P_FRI_C.value = data.P_FRI_C;
    P_SAT_S.value = data.P_SAT_S;
    P_SAT_C.value = data.P_SAT_C;
    P_SUN_S.value = data.P_SUN_S;   
    P_SUN_C.value = data.P_SUN_C;
    P_HOLI_S.value = data.P_HOLI_S;
    P_HOLI_C.value = data.P_HOLI_C;
    const P_LATI = parseFloat(data.P_LATI);
    const P_LONGI = parseFloat(data.P_LONGI);

    position  = new kakao.maps.LatLng(P_LONGI, P_LATI); 
    
    marker.setPosition(position);
    map.setCenter(position)
    marker.setMap(map);
    map.setLevel(3)

};


// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
const search = document.getElementById('search');
function page(page){
    pageIpt.value = page;
    search.submit();
}
