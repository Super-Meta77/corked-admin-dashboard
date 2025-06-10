import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { MoreVerticalIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Winery = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      name: "Product Name",
      description: "Description",
      price: 75.0,
      image: "/106880066-1620413243866petruswinebottle-jpg-4.png",
    },
    {
      id: 2,
      name: "Product Name",
      description: "Description",
      price: 75.0,
      image: "/106880066-1620413243866petruswinebottle-jpg-4.png",
    },
    {
      id: 3,
      name: "Product Name",
      description: "Description",
      price: 75.0,
      image: "/106880066-1620413243866petruswinebottle-jpg-4.png",
    },
    {
      id: 4,
      name: "Product Name",
      description: "Description",
      price: 75.0,
      image: "/106880066-1620413243866petruswinebottle-jpg-4.png",
    },
    {
      id: 5,
      name: "Product Name",
      description: "Description",
      price: 75.0,
      image: "/106880066-1620413243866petruswinebottle-jpg-4.png",
    },
  ];

  // Winery info data
  const wineryInfo = {
    address: "128 Vinayard LnNapa, CA 84668",
    hours: "Mon-Sat 11.00 AM - 5.00 PM",
    website: "http://sunsetvalleyvineyzods.com/",
  };

  return (
    <section className="flex flex-col w-full items-center justify-center gap-5 py-5 px-4 md:px-5 bg-white rounded-lg shadow-shadow">
      <header className="flex w-full h-[38px] justify-between pl-0 pr-0 md:pl-5 md:pr-5">
        <h1 className="font-semibold text-app-primary text-xl">
          Winery Page Manager
        </h1>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="w-[125px] h-[38px] bg-basewhite border border-solid border-[#dbdbdb] shadow-drop-shadow px-3 py-2 text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:ring-1 focus:ring-gray-200"
            >
              Last 7 Days
              <img
                className="w-5 h-5 ml-2"
                alt="Dropdown arrow"
                src="/icon-2.svg"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[125px]">
            <DropdownMenuItem>Last 7 Days</DropdownMenuItem>
            <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
            <DropdownMenuItem>Last 90 Days</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <div className="flex flex-col md:flex-row items-start justify-between w-full gap-8">
        <div className="flex flex-col items-start gap-4 w-full">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-full border border-solid border-[#e0e1e4]"
            >
              <CardContent className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 gap-4 w-full">
                <div className="flex items-start gap-4 w-full md:w-auto">
                  <img
                    className="w-[58px] h-[74px] object-cover"
                    alt="Wine bottle"
                    src={product.image}
                  />
                  <div className="flex flex-col items-start justify-center gap-1.5">
                    <h3 className="font-bold text-primary-text text-base">
                      {product.name}
                    </h3>
                    <p className="font-normal text-[#5c5f6a] text-xs">
                      {product.description}
                    </p>
                    <div className="font-bold text-[#0e1422] text-lg">
                      <span>${product.price.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                  <Switch className="data-[state=checked]:bg-[#0d6efd]" />
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="w-7 h-7 p-[5px]"
                      >
                        <MoreVerticalIcon className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="w-full md:w-[320px] p-2 border border-solid border-[#e0e1e4] shadow-shadow">
          <CardContent className="flex flex-col w-full items-start gap-6 p-7">
            <h2 className="font-semibold text-app-primary text-lg leading-8">
              Info
            </h2>

            <div className="flex flex-col items-start gap-5 w-full">
              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="font-semibold text-primary-text text-base w-full">
                  Tasting room Address
                </h3>
                <p className="font-semibold text-[#686868] text-sm w-full">
                  {wineryInfo.address}
                </p>
              </div>

              <div className="flex flex-col items-start gap-2.5 w-full">
                <h3 className="font-semibold text-primary-text text-base w-full">
                  Hours
                </h3>
                <p className="font-semibold text-[#686868] text-sm w-full">
                  {wineryInfo.hours}
                </p>
              </div>

              <a
                href={wineryInfo.website}
                className="font-semibold text-[#5e1a22] text-sm w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                {wineryInfo.website}
              </a>

              <Button className="w-full h-[44.28px] bg-app-primary text-white font-semibold border-[0.95px] border-solid border-[#52111e]">
                Update Live Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
