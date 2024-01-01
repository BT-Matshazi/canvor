import { type ClassValue, clsx } from "clsx";
import { type Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "USD" | "EUR" | "GBP" | "BDT" | "ZAR"; 
    notation?: Intl.NumberFormatOptions["notation"];
  } = {},
) {
  const { currency = "ZAR"} = options;

  const numericPrice = typeof price === "string" ? parseFloat(price) : price;

  return new Intl.NumberFormat("en-ZA", {

    style: "currency",
    currency,
    minimumFractionDigits: 2, 
    maximumFractionDigits: 2,
  }).format(numericPrice);
}


export function constructMetadata({
  title = "Canvor - the marketplace for quality artwork",
  description = "Canvor is a marketplace for high-quality digital artwork.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },

    icons,
    metadataBase: new URL("https://canvor.co.za"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
