import MaxWidthWrapper from "./_components/MaxWidthWrapper";
import { Button, buttonVariants } from "./_components/ui/button";
import { MessageCircle, CheckCircle, Truck } from "lucide-react";
import Link from "next/link";
import FeaturedProducts from "./_components/FeaturedProducts";

const perks = [
  {
    name: "Fast Delivery",
    Icon: Truck,
    description:
      "Experience the swift delivery of your favorite artworks with our Fast Delivery service. We ensure your cherished pieces reach you promptly.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "All artwork on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day refund guarantee.",
  },
  {
    name: "For Exceptional Service",
    Icon: MessageCircle,
    description:
      "We are dedicated to providing exceptional customer service. As a testament to our commitment we have a team ready to tend to your needs.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        {" "}
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality{" "}
            <span className="text-stroke-3 text-white ">Art Work</span>.
          </h1>
          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to Canvor. All art work on our platform is verified by our
            team to ensure our highest quality standards.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-black px-5 py-2 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Browse Collection
            </Link>
            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: list Products */}
      </MaxWidthWrapper>

      <section >
        <MaxWidthWrapper className="py-10">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex justify-center md:flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-black">
                    {<perk.Icon className="h-1/3 w-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
        <FeaturedProducts />

    </>
  );
}
