export interface Product {
    id: string;
    name: string;
    price: number; // Price in Indian Rupees (₹)
    category: 'Top' | 'Bottom' | 'Outerwear' | 'Accessories' | 'Footwear' | 'Dresses' | 'Activewear';
    demographic: 'Men' | 'Women' | 'Kids' | 'Professional';
    image: string;
    color: string;
}

export const products: Product[] = [
    // MEN'S COLLECTION
    {
        id: '1',
        name: 'Oversized Struct Hoodie',
        price: 2499,
        category: 'Top',
        demographic: 'Men',
        image: '/images/hoodie.png',
        color: 'Light Grey'
    },
    {
        id: '2',
        name: 'Pleated Wide Trousers',
        price: 3299,
        category: 'Bottom',
        demographic: 'Men',
        image: '/images/trousers.png',
        color: 'Off White'
    },
    {
        id: '3',
        name: 'Tailored Wool Coat',
        price: 8999,
        category: 'Outerwear',
        demographic: 'Men',
        image: '/images/coat.png',
        color: 'Charcoal'
    },
    {
        id: '4',
        name: 'Boxy Cotton Tee',
        price: 1299,
        category: 'Top',
        demographic: 'Men',
        image: '/images/tee.png',
        color: 'Black'
    },
    {
        id: '5',
        name: 'Cargo Tech Pants',
        price: 2799,
        category: 'Bottom',
        demographic: 'Men',
        image: '/images/cargos.png',
        color: 'Olive'
    },
    {
        id: '6',
        name: 'Minimalist Sneaker',
        price: 4599,
        category: 'Footwear',
        demographic: 'Men',
        image: '/images/sneaker.png',
        color: 'White'
    },
    {
        id: '7',
        name: 'Classic Denim Jacket',
        price: 3999,
        category: 'Outerwear',
        demographic: 'Men',
        image: '/images/mens-denim-jacket.png',
        color: 'Blue Denim'
    },
    {
        id: '8',
        name: 'Performance Joggers',
        price: 2199,
        category: 'Activewear',
        demographic: 'Men',
        image: '/images/mens-joggers.png',
        color: 'Navy'
    },

    // WOMEN'S COLLECTION
    {
        id: '9',
        name: 'Silk Midi Dress',
        price: 4999,
        category: 'Dresses',
        demographic: 'Women',
        image: '/images/womens-silk-dress.png',
        color: 'Champagne'
    },
    {
        id: '10',
        name: 'Cashmere Sweater',
        price: 5499,
        category: 'Top',
        demographic: 'Women',
        image: '/images/womens-cashmere-sweater.png',
        color: 'Beige'
    },
    {
        id: '11',
        name: 'High-Waist Palazzo',
        price: 2899,
        category: 'Bottom',
        demographic: 'Women',
        image: '/images/womens-palazzo-pants.png',
        color: 'Black'
    },
    {
        id: '12',
        name: 'Trench Coat',
        price: 7999,
        category: 'Outerwear',
        demographic: 'Women',
        image: '/images/womens-trench-coat.png',
        color: 'Camel'
    },
    {
        id: '13',
        name: 'Ankle Boots',
        price: 5299,
        category: 'Footwear',
        demographic: 'Women',
        image: '/images/womens-ankle-boots.png',
        color: 'Brown Leather'
    },
    {
        id: '14',
        name: 'Floral Maxi Dress',
        price: 3799,
        category: 'Dresses',
        demographic: 'Women',
        image: '/images/womens-maxi-dress.png',
        color: 'Floral Print'
    },
    {
        id: '15',
        name: 'Yoga Leggings',
        price: 1899,
        category: 'Activewear',
        demographic: 'Women',
        image: '/images/womens-yoga-leggings.png',
        color: 'Burgundy'
    },
    {
        id: '16',
        name: 'Leather Crossbody Bag',
        price: 3499,
        category: 'Accessories',
        demographic: 'Women',
        image: '/images/womens-crossbody-bag.png',
        color: 'Tan'
    },

    // KIDS' COLLECTION
    {
        id: '17',
        name: 'Kids Graphic Hoodie',
        price: 1499,
        category: 'Top',
        demographic: 'Kids',
        image: '/images/kids-graphic-hoodie.png',
        color: 'Royal Blue'
    },
    {
        id: '18',
        name: 'Kids Denim Shorts',
        price: 999,
        category: 'Bottom',
        demographic: 'Kids',
        image: '/images/kids-denim-shorts.png',
        color: 'Light Wash'
    },
    {
        id: '19',
        name: 'Kids Puffer Jacket',
        price: 2499,
        category: 'Outerwear',
        demographic: 'Kids',
        image: '/images/kids-puffer-jacket.png',
        color: 'Red'
    },
    {
        id: '20',
        name: 'Kids Sneakers',
        price: 1799,
        category: 'Footwear',
        demographic: 'Kids',
        image: '/images/kids-sneakers.png',
        color: 'Multi-Color'
    },
    {
        id: '21',
        name: 'Kids Cotton Dress',
        price: 1299,
        category: 'Dresses',
        demographic: 'Kids',
        image: '/images/kids-cotton-dress.png',
        color: 'Pink'
    },
    {
        id: '22',
        name: 'Kids Sports Set',
        price: 1699,
        category: 'Activewear',
        demographic: 'Kids',
        image: '/images/kids-sports-set.png',
        color: 'Green'
    },

    // PROFESSIONAL COLLECTION
    {
        id: '23',
        name: 'Formal Blazer',
        price: 6999,
        category: 'Outerwear',
        demographic: 'Professional',
        image: '/images/coat.png',
        color: 'Navy Blue'
    },
    {
        id: '24',
        name: 'Formal Shirt',
        price: 2299,
        category: 'Top',
        demographic: 'Professional',
        image: '/images/tee.png',
        color: 'White'
    },
    {
        id: '25',
        name: 'Formal Trousers',
        price: 2999,
        category: 'Bottom',
        demographic: 'Professional',
        image: '/images/trousers.png',
        color: 'Charcoal Grey'
    },
    {
        id: '26',
        name: 'Oxford Shoes',
        price: 4999,
        category: 'Footwear',
        demographic: 'Professional',
        image: '/images/sneaker.png',
        color: 'Black Leather'
    },
    {
        id: '27',
        name: 'Professional Dress',
        price: 4499,
        category: 'Dresses',
        demographic: 'Professional',
        image: '/images/trousers.png',
        color: 'Navy'
    },
    {
        id: '28',
        name: 'Leather Briefcase',
        price: 5999,
        category: 'Accessories',
        demographic: 'Professional',
        image: '/images/sneaker.png',
        color: 'Brown'
    },
];
