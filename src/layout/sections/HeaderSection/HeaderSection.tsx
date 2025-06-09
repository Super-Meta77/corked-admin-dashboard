import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export const HeaderSection = (): JSX.Element => {
  // User data that can be used for mapping or dynamic content
  const userData = {
    name: "Jane Cooper",
    email: "jane@gmail.com",
    greeting: "Hello, Connor Dixon 👋",
  };

  return (
    <header className="flex w-full items-center justify-between p-6 bg-white border-b border-[#e0e1e4]">
      <h1 className="font-heading-heading-3 font-[number:var(--heading-heading-3-font-weight)] text-app-primary text-[length:var(--heading-heading-3-font-size)] tracking-[var(--heading-heading-3-letter-spacing)] leading-[var(--heading-heading-3-line-height)]">
        {userData.greeting}
      </h1>

      <div className="flex items-center gap-[18px]">
        <Separator orientation="vertical" className="h-[17px]" />

        <DropdownMenu>
          <DropdownMenuTrigger
            className="flex items-center gap-3 focus:outline-none"
            asChild
          >
            <button className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/frame-1686551994.png" alt={userData.name} />
                <AvatarFallback>{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col items-start">
                <span className="font-[number:var(--16-font-16-strong-font-weight)] text-[#0e1a2a] text-[length:var(--16-font-16-strong-font-size)] leading-[var(--16-font-16-strong-line-height)] font-16-font-16-strong tracking-[var(--16-font-16-strong-letter-spacing)]">
                  {userData.name}
                </span>
                <span className="font-SM-12-SM-med-20 font-[number:var(--SM-12-SM-med-20-font-weight)] text-slate-500 text-[length:var(--SM-12-SM-med-20-font-size)] tracking-[var(--SM-12-SM-med-20-letter-spacing)] leading-[var(--SM-12-SM-med-20-line-height)]">
                  {userData.email}
                </span>
              </div>

              <ChevronDownIcon className="w-5 h-2.5 text-gray-500" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* Dropdown menu items would go here */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
