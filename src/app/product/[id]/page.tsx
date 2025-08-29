import mockData from "../../../../data/mock-products.json";
import { Card } from "../../../../components/ui/Card";
import { Rating } from "../../../../components/ui/Rating";


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
      cache: "no-store",
    });
    if (!res.ok) throw new Error();
    product = await res.json();
  } catch {
    product = mockData.find((p: any) => p.id === parseInt(id));
  }

  if (!product) {
    return <p style={{ padding: "2rem", textAlign: "center" }}>Product not found.</p>;
  }

  return (
    <main>
      <Card className="product-detail" style={{ maxWidth: "600px", margin: "auto" }}>
        <img src={product.image} alt={product.title} className="product-image" />
        <h1><strong>Name:</strong> {product.title}</h1>
        <p className="price"><strong>Cost:</strong> ${product.price}</p>
        <p className="description"><strong>Description:</strong> {product.description}</p>
        <p className="category"><strong>Category:</strong> {product.category}</p>
        {product.rating && <Rating rate={product.rating.rate} count={product.rating.count} />}
      </Card>
    </main>
  );
}