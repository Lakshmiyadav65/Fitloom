import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    // Format price in Indian Rupees with comma separators
    const formatPrice = (price: number) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };

    return (
        <Link href={`/product/${product.id}`} className={styles.card}>
            <div className={styles.imagePlaceholder}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.info}>
                <span className={styles.category}>{product.category}</span>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>{formatPrice(product.price)}</p>
            </div>
        </Link>
    );
}
