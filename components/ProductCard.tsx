import Link from "next/link";
import { Card } from "./ui/Card";
import { Rating } from "./ui/Rating";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="product-card">
      <Card>
        <img src={product.image} alt={product.title} className="product-image" />

        <div className="product-info">
          <p className="product-title">
            <strong>Name:</strong> {product.title}
          </p>
          <p className="product-price">
            <strong>Cost:</strong> ${product.price.toFixed(2)}
          </p>

          {product.rating && (
            <Rating rate={product.rating.rate} count={product.rating.count} />
          )}
        </div>
      </Card>
    </Link>
  );
}
