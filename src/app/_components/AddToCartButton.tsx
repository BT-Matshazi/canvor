'use client'

import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { useCart } from '~/hooks/use-cart'

type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[]; // Assuming images are represented as an array of strings (file paths, URLs, etc.)
  tags: string[];
};

const AddToCartButton = ({
  product,
}: {
  product: Product
}) => {
  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  return (
    <Button
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
      size="lg"
      className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-600"
    >
      {isSuccess ? "Added!" : "Add to cart"}
    </Button>
  );
}

export default AddToCartButton
