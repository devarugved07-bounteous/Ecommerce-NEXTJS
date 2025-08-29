import ProductCard from '../../components/ProductCard';
import mockData from '../../data/mock-products.json';


export default async function HomePage() {
  let products = [];

  try {
    const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
    if (!res.ok) throw new Error();
    products = await res.json();
  } catch {
    products = mockData;
  }

  return (
    <div className="product-grid">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
