export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  img: string[];
  link: string;
  show: boolean;
}

export const products = [
  {
    id: 1,
    name: 'Skin1004 Madagascar Centella Light гидрофильное масло 200 мл',
    price: 1314,
    description:
      'объем: 200.0 мл,  тип кожи: для всех типов кожи ,страна производства: Корея',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h32/h27/82994195300382.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha1/he3/82994195333150.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h40/h19/85160494071838.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/skin1004-madagascar-centella-light-gidrofil-noe-maslo-200-ml-103907513/?c=750000000',
    show: true,
  },

  {
    id: 2,
    name: ' Органайзер пластик',
    price: 4499,
    description: 'материал: пластик, страна производитель: Китай',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h86/84858293288990.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb6/h1f/84858293321758.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1d/heb/84858293354526.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/organaizer-plastik-108714201/?c=750000000',
    show: true,
  },

  {
    id: 3,
    name: 'Dr.Ceuracle Vegan Kombucha Tea Beginning Set mini набор уходовой косметики для женщин',
    price: 7322,
    description: 'крем для лица, эссенция',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hd3/h8a/69400693014558.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/heb/h9a/69400693276702.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/dr-ceuracle-vegan-kombucha-tea-beginning-set-mini-nabor-uhodovoi-kosmetiki-dlja-zhenschin-108527127/?c=750000000',
    show: true,
  },

  {
    id: 4,
    name: 'Apple MacBook Air 15',
    price: 602999,
    description: 'Lol Macbook',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd3/81547557371934.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000',
    show: true,
  },

  {
    id: 5,
    name: 'BAZE Professional набор по уходу за волосами',
    price: 7781,
    description: 'шампунь ,спрей для волос, ,бальзам для волос',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hae/hb6/84744408399902.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/baze-professional-nabor-po-uhodu-za-volosami-uniseks-115443304/?c=750000000',
    show: true,
  },

  {
    id: 6,
    name: 'Jigott Snail Moisture Skin Care 3 Set набор уходовой косметики для женщин',
    price: 6484,
    description: 'тип: набор уходовой косметики',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h12/64233420685342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfb/h07/64233423765534.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/jigott-snail-moisture-skin-care-3-set-nabor-uhodovoi-kosmetiki-dlja-zhenschin-101493956/?c=750000000',
    show: true,
  },

  {
    id: 7,
    name: 'Клавиатура Ajazz AK820 Pro',
    price: 80000,
    description: 'Keyboard for VIPs',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdf/hfa/84696373461022.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hfe/h6b/84696373526558.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/hbb/84696373592094.png?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000',
    show: true,
  },

  {
    id: 8,
    name: 'POCKET BOOK PB970-M-CIS',
    price: 156191,
    description: 'Why need we paper version if we have electronic',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hdd/h54/64111136440350.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h3e/h4a/64111139389470.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h51/h0b/64111142338590.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/pocket-book-pb970-m-cis-seryi-103076602/?c=750000000',
    show: true,
  },

  {
    id: 9,
    name: 'Apple iPad 2021',
    price: 154391,
    description: 'Best gadget of Apple?',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/he4/hdd/64320699203614.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h45/ha8/64320705036318.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hef/h65/64320710737950.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/apple-ipad-2021-wi-fi-10-2-djuim-3-gb-64-gb-seryi-102301598/?c=750000000',
    show: true,
  },

  {
    id: 10,
    name: 'Samsung Galaxy A54',
    price: 144983,
    description: 'Samsung',
    rating: 5,
    img: [
      'https://resources.cdn-kaspi.kz/img/m/p/hc4/h8b/80435552223262.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h07/h37/80435552747550.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8f/80435915292702.jpg?format=gallery-medium',
    ],
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-6-gb-128-gb-chernyi-110044409/?c=750000000',
    show: true,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
