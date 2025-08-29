import ProductCard from '../../../components/ProductCard';
import mockData from '../../../data/mock-products.json';

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}

export default async function ProductsPage() {
  let products = [];

  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) throw new Error();
    products = await res.json();
  } catch {
    products = mockData;
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>All Products</h1>
      <div className="product-grid" style={{ marginTop: '1rem' }}>
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
