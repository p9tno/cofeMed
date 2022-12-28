//Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init() {
    // let result = document.getElementById('result'), // для отладки

    destinations = {
        'cheboksary': [56.134049, 47.223958],
    },

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: destinations['cheboksary'],
        zoom: 17
    });


    // let windowWidth = $(this).innerWidth();
    // console.log(windowWidth);





    let placemark = new ymaps.Placemark(destinations[['cheboksary']], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/mark.svg',
        iconImageSize: [92, 130],
        iconImageOffset: [-40, -140]
    });

    myMap.geoObjects.add(placemark);




    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
    //myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    // все ок
    // result.textContent = 'map init:';


}


function changePlacemark () {
    let lg = null;
    let sm = null;
    let mediaQuerySize = 767;


    $(window).on('load resize', function () {

        let windowWidth = $(this).innerWidth();
        console.log(windowWidth);
        console.log(mediaQuerySize);

        if (windowWidth <= mediaQuerySize) {
            console.log('sm');
        } else {
            console.log('lg');
        }
    });

    console.log('test');
}
// changePlacemark();
