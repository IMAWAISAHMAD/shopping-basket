import {Product} from '../global';
const products:Product[]=[
    {
        id: '123',
        title: 'Blue t-shirt',
        description: 'No fancy sizing charts here, one t-shirt size to rule them all',
        imageUrl: '/blue-tshirt.png',
        qty:1,
        price: 399
      },
      {
        id: '456',
        title: 'Yellow t-shirt',
        description:
          'This unique t-shirt is guaranteed to fit nobody, not even new born babies',
        imageUrl: '/red-tshirt.png',
        qty:1,
        price: 499
      },
      {
        id: '789',
        title: 'Red t-shirt',
        description: 'The only product on our site that might actually be worth buying',
        imageUrl: '/yellow-tshirt.png',
        qty:1,
        price: 799
      }
];

export {products};