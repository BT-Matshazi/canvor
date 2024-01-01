import { useCart } from "~/hooks/use-cart";
import { formatPrice } from "~/lib/utils";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  tags: string[];
};

const CartItem = ({ product }: { product: Product }) => {
  const { removeItem } = useCart();

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {product.images ? (
              <Image
                src={
                  product.images[0] ??
                  "https://canvogh.com/cdn/shop/products/pro-previews454928823_720x720.png?v=1644424323"
                }
                alt={product.name}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="mb-1 line-clamp-1 text-sm font-medium">
              {product.name}
            </span>
            <div className="mt-4 text-xs text-muted-foreground">
              <button
                onClick={() => removeItem(product.id)}
                className="flex items-center gap-0.5"
              >
                <X className="h-4 w-3" />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {formatPrice(product.price, { currency: "ZAR" })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
