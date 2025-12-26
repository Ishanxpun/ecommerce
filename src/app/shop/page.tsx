import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Divide } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/shop">shop</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col m-12 gap-24 ">
        <div className="flex justify-evenly">
          <div>
            <h1 className="text-2xl font-bold flex justify-center">
              Disposables
            </h1>
            <Carousel className="border h-[500] w-[450] shadow-[3px_3px_5px_2px_rgba(0,0,0,0.4)]">
              <CarouselContent>
                <CarouselItem>
                  <Image src="/d3.png" alt="img" height={450} width={420} />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/d1gold.png" alt="img" height={450} width={420} />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/iceking.png"
                    alt="img"
                    height={450}
                    width={420}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/rayad2.png" alt="img" height={450} width={420} />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/nasty16k.png"
                    alt="img"
                    height={450}
                    width={420}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/nasty50k.png"
                    alt="img"
                    height={450}
                    width={420}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Button asChild>
              <Link href="/shop/disposable">Purchase</Link>
            </Button>
          </div>
          <div>
            <h1 className="text-2xl font-bold flex justify-center">Devices</h1>
            <Carousel className="border h-[500] w-[450] shadow-[3px_3px_5px_2px_rgba(0,0,0,0.4)]">
              <CarouselContent>
                <CarouselItem>
                  <Image src="/armor.png" alt="img" height={450} width={420} />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/drag.png" alt="img" height={450} width={420} />
                </CarouselItem>
                <CarouselItem>
                  <Image
                    src="/vaperesso.png"
                    alt="img"
                    height={450}
                    width={420}
                  />
                </CarouselItem>
                <CarouselItem>
                  <Image src="/nord.png" alt="img" height={450} width={420} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Button asChild>
              <Link href="/shop/vape">Purchase</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div>
            <h1 className="text-2xl font-bold flex justify-center">Juices</h1>
            <Carousel className="border h-[500] w-[450] shadow-[3px_3px_5px_2px_rgba(0,0,0,0.4)]">
              <CarouselContent>
                
               <CarouselItem>   <Image src="/nastyjuice.png" alt="img" height={450} width={420} /> </CarouselItem>
               <CarouselItem>  <Image src="/nastyjuice2.png" alt="img" height={450} width={420} /></CarouselItem> 
                <CarouselItem> <Image src="/tokyojuice.png" alt="img" height={450} width={420} /></CarouselItem> 
                 <CarouselItem><Image src="/vapestajuice.png" alt="img" height={450} width={420} /></CarouselItem> 
               
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Button asChild>
              <Link href="/shop/juice">Purchase</Link>
            </Button>
          </div>
          <div>
            <h1 className="text-2xl font-bold flex justify-center">Hookahs</h1>
            <Carousel className="border h-[500] w-[450] shadow-[3px_3px_5px_2px_rgba(0,0,0,0.4)]">
              <CarouselContent>
               <CarouselItem>   <Image src="/hookah.png" alt="img" height={450} width={420} /> </CarouselItem>
               <CarouselItem>   <Image src="/hookah1.png" alt="img" height={450} width={420} /> </CarouselItem>
               <CarouselItem>   <Image src="/hookah2.png" alt="img" height={450} width={420} /> </CarouselItem>
               <CarouselItem>   <Image src="/hookah3.png" alt="img" height={450} width={420} /> </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <Button asChild>
              <Link href="/shop/hookah">Purchase</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
