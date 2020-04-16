var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('mapKr', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.822646, 37.300386], // Красногорск, ТЦ Пассаж
        zoom: 13
    }, {
        searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        partnerMebelDana = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.8602,37.1785]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Мебельная фабрика "Дана"',
                hintContent: 'Авторская, дизайнерская и стоковая мебель'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        }),
		// ===============================================Ремонт Компьютеров точка
		partnerRemontPC = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.8155,37.3400]
            },
            properties: {
                iconContent: 'Ремонт Компьютеров',
                hintContent: 'Тут можно отремонтировать компьютер и заказать запчасти'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
		// =============================================== Red Finch Pub
		partnerRedFinchPub = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.8205,37.3264]
            },
            properties: {
                iconContent: 'Red Finch Pub',
                balloonContent: '<strong>Сайт: </strong><a target="_blank" href="http://redfinch.ru">http://redfinch.ru</a><br /> <strong>Тип: </strong> Ресторан <br /> <strong>Описание: </strong> Вобрав в себя черты паба, ресторана, бара, клуба, одновременно с тёплой домашней атмосферой, "Red Finch Pub" стал местом встречи и общения для друзей, знакомых, родственников, детей, для всех.'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
		//=============================================== 55.8142413092558,37.34300208399194 Optical		
		partnerOptical = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.8142413092558,37.34300208399194]
            },
            properties: {
                iconContent: 'Красногорская Оптическая компания',
                balloonContent: '<strong>Сайт: </strong><a target="_blank" href="https://optikakrasnogorsk1.ru/">https://optikakrasnogorsk1.ru/</a><br /> <strong>Тип: </strong> Магазин <br /> <strong>Описание: </strong> Оправы, Линзы (разных видов).'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
		// ==================55.834178,37.292751 Arshin
		partnerArshin = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.834178,37.292751]
            },
            properties: {
                iconContent: 'ООО "АршинЪ"',
                balloonContent: '<strong>Сайт: </strong><a target="_blank" href="http://geo-terra.ru/">http://geo-terra.ru/</a><br /> <strong>Тип: </strong> Услуги <br /> <strong>Описание: </strong> Компания АршинЪ уже 11 лет на рынке кадастра и инженерных изысканий в Красногорске. <br />Основная деятельность: <br />- оформление земельных участков и домов;<br />- геодезия, геология, экология для строительства;<br />- технический заказчик и строительный контроль при строительстве различных объектов. <br /><br />Сейчас мы сохранили полный функционал при удаленной работе сотрудников.'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
		//========================55.831448,37.245077 Pryaniki
		partnerPryanya = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.831448,37.245077]
            },
            properties: {
                iconContent: 'Вкусности от Насти',
                balloonContent: '<strong>Сайт: </strong><a target="_blank" href="https://www.instagram.com/vkusnosti_ot_nasti/">https://www.instagram.com/vkusnosti_ot_nasti/</a><br /> <strong>Тип: </strong> Услуги <br /> <strong>Описание: </strong> Пряничная Мастерская "Вкусности от Насти" печет вкуснющие пряники, чтобы вы могли подобрать подарок даже для того, у кого все есть: пряник-трамвай, пряник-швейная машинка, пряники с логотипом вашего партнёра и все, что вы придумаете.'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }),
		//55.835382,37.315119 Пекарь
		partnerPekar = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.835382,37.315119]
            },
            properties: {
                iconContent: 'Красногорский пекарь',
                balloonContent: '<strong>Сайт: </strong><a target="_blank" href="http://красногорскийпекарь.рф">http://красногорскийпекарь.рф</a><br /> <strong>Тип: </strong> Магазин <br /> <strong>Описание: </strong> Мы занимаемся производством хлебобулочных изделий по новейшим технологиям. Мы производим весь перечень европейского хлеба и широкий ассортимент булочек.'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        }), 
// ==================55.834178,37.292751 We-are-Kids
		partnerWeAreKids = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.805090, 37.325250]
            },
            properties: {
                iconContent: 'Детский центр "Мы Умные Дети!',
                balloonContent: '<strong>Сайт:</strong> <a class="telTag" href="https://we-are-kids.ru/">https://we-are-kids.ru/</a><br /><strong>Телефон:</strong> <a class="telTag" href="tel:74951280700">+7 (916) 831-18-36</a><strong><br />Телефон:</strong> <a class="telTag" href="tel:79261070327">+7 (926) 208-87-65</a><br /><strong>Тип: </strong> Детский Центр <br /> <strong>Описание: </strong> Мы создали свой центр с целью дать детям способность развиваться не по шаблону, творить, изобретать, мечтать. <br />Наша цель раскрыть в ребёнке те навыки, которые кажутся ему сложными и невозможными.'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: false
        })	
		
		
		
		
		
		;

    myMap.geoObjects
        .add(partnerMebelDana)
		.add(partnerRedFinchPub)
		.add(partnerOptical)
		.add(partnerArshin)
		.add(partnerPryanya)
		.add(partnerPekar)
		.add(partnerWeAreKids)
		.add(partnerRemontPC)

   

        .add(new ymaps.Placemark([55.8204,37.3192], {
            balloonContent: '<strong>Администрация г.о. Красногорск</strong><br /><strong>Телефон:</strong> +7 (495) 540-54-97'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#ff0000'
        }))
		.add(new ymaps.Placemark([55.80956927177405,37.31596186508116], {
            balloonContent: '<strong>СОЮЗ Красногорская торгово-промышленная палата</strong><br /><strong>Телефон:</strong> +7 (495) 562-47-19'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#ff0000'
        }))
}
