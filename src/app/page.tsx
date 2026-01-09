import Image from 'next/image';
import Link from 'next/link';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { products } from '@/data/products';

export default function Home() {
  // Get first 3 products for featured section
  const featuredProducts = products.slice(0, 3);

  return (
    <main>
      <Navbar />
      <Hero />

      {/* Featured Section */}
      <section className="container" style={{ padding: '100px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
          <h2>Curated Drops</h2>
          <Link href="/shop" style={{ textDecoration: 'underline', fontSize: '1rem' }}>View All</Link>
        </div>

        <div className="grid-cols-3">
          {featuredProducts.map(product => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ProductCard
                image={product.image}
                title={product.name}
                price={`$${product.price.toFixed(2)}`}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* AI Teaser */}
      <section style={{ background: '#111', color: '#fff', padding: '100px 24px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '24px' }}>Your AI Stylist Awaits.</h2>
          <p style={{ color: '#aaa', marginBottom: '40px' }}>
            Upload a photo and let our AI curate the perfect outfit for you. No more guessing.
          </p>
          <Link href="/ai-stylist">
            <button className="btn" style={{ background: '#fff', color: '#000' }}>
              Try AI Styling
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function ProductCard({ image, title, price }: { image: string, title: string, price: string }) {
  return (
    <div style={{ cursor: 'pointer', transition: 'transform 0.3s' }}>
      <div style={{
        position: 'relative',
        aspectRatio: '3/4',
        marginBottom: '16px',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        background: '#f5f5f5'
      }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{title}</h3>
      <p style={{ fontSize: '1rem' }}>{price}</p>
    </div>
  );
}
