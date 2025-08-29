import ProductCard from '../../components/ProductCard';
import mockData from '../../data/mock-products.json';
import Link from 'next/link';

export default async function HomePage() {
  let products = [];

  try {
    const res = await fetch('https://fakestoreapi.com/products?limit=4', { cache: 'no-store' });
    if (!res.ok) throw new Error();
    products = await res.json();
  } catch {
    products = mockData.slice(0, 4);
  }

  return (
    <main>
      <div className="banner">
        Welcome to Neon Malicious Store - Where Style Meets Danger!
      </div>

      <div className="product-grid">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link href="/product" className="neon-button">
          View All Products
        </Link>
      </div>
    </main>
  );
}
