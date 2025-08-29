import mockData from '../../../../data/mock-products.json';

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage(props: ProductPageProps) {
  const params = await props.params;
  const { id } = params;

  let product;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: 'no-store',
    });
    if (!res.ok) throw new Error();
    product = await res.json();
  } catch {
    product = mockData.find((p: any) => p.id === parseInt(id));
  }

  if (!product) {
    return <p style={{ padding: '2rem', textAlign: 'center' }}>Product not found.</p>;
  }

  return (
    <main>
      <div className="product-detail" style={{ maxWidth: '600px', margin: 'auto' }}>
        <img src={product.image} alt={product.title} className="product-image" />
        
        <h1 className="product-title"><strong>Name:</strong> {product.title}</h1>
        <p className="price"><strong>Cost:</strong> ${product.price.toFixed(2)}</p>
        <p className="description"><strong>Description:</strong> {product.description}</p>
        <p className="category"><strong>Category:</strong> {product.category}</p>

        {product.rating && (
          <p className="rating">
            <strong>Rating:</strong> ⭐ {product.rating.rate} out of 5 ({product.rating.count} reviews)
          </p>
        )}
      </div>
    </main>
  );
}
