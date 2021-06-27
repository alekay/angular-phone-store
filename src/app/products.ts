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
    name: 'Phone Standard',
    price: 399,
    description: 'Base model',
    imgUrl: 'https://i.ibb.co/wWpxV3W/standard-phone.png'

  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 599,
    description: 'Smaller phone, best camera',
    imgUrl: 'https://i.ibb.co/5vGr6kF/small-phone.png'
  },
  {
    id: 3,
    name: 'Phone XL',
    price: 899,
    description: 'Larger phone, larger screen',
    imgUrl: "https://i.ibb.co/bR3NTVq/xl-phone.png"
  },
  {
    id: 4,
    name: 'Watch',
    price: 99,
    description: 'Smart Watch, can be synced with smart phone',
    imgUrl: 'https://i.ibb.co/7khB9Q1/smart-watch-2.png'
  }
];