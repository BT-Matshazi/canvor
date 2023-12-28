"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreateProduct() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const createProduct = api.product.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
      setDescription("");
      setPrice(0);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createProduct.mutate({ name, description, price });
      }}
      className="flex flex-col gap-2"
    >
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="float"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value))}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <input
        type="text"
        placeholder="des"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full rounded-full px-4 py-2 text-black"
      />
      <button
        type="submit"
        className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
        disabled={createProduct.isLoading}
      >
        {createProduct.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
