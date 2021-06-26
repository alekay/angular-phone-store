export interface Product {
  id: number;
  name: string;
  price: number;
  // make image optional with ?
  description?: string;
  imgUrl?: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    imgUrl: "https://i.ibb.co/bR3NTVq/xl-phone.png"
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    imgUrl: 'https://i.ibb.co/5vGr6kF/small-phone.png'
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    imgUrl: 'https://i.ibb.co/wWpxV3W/standard-phone.png'

  },
  {
    id: 4,
    name: 'Watch',
    price: 59,
    description: 'A Smart Watch you can sync with your phone',
    imgUrl: 'https://i.ibb.co/0h4gv7Q/smart-watch.png'
  }
];