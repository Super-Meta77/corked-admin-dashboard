import React, { useState } from "react";
import {
  FilterIcon,
  PlusIcon,
  ArchiveIcon,
  TrashIcon,
  ToggleLeftIcon,
  EditIcon,
  XCircleIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export const Marketplace = (): JSX.Element => {
  // Table data for marketplace sales with state management
  const [salesData, setSalesData] = useState([
    {
      id: 1,
      date: "3/4/16",
      wineTier: "Basic",
      lastActive: "10 min ago",
      isChecked: false,
    },
    {
      id: 2,
      date: "8/16/13",
      wineTier: "Basic",
      lastActive: "10 min ago",
      isChecked: false,
    },
    {
      id: 3,
      date: "6/21/19",
      wineTier: "Basic",
      lastActive: "10 min ago",
      isChecked: false,
    },
    {
      id: 4,
      date: "10/6/13",
      wineTier: "Basic",
      lastActive: "10 min ago",
      isChecked: false,
    },
    {
      id: 5,
      date: "3/4/16",
      wineTier: "Basic",
      lastActive: "10 min ago",
      isChecked: false,
    },
  ]);

  // Action buttons for selected items
  const actionButtons = [
    {
      icon: <ArchiveIcon className="w-5 h-5" />,
      label: "Archive",
      action: () => handleAction("archive"),
    },
    {
      icon: <TrashIcon className="w-5 h-5" />,
      label: "Remove",
      action: () => handleAction("remove"),
    },
    {
      icon: <ToggleLeftIcon className="w-5 h-5" />,
      label: "Toggle",
      action: () => handleAction("toggle"),
    },
    {
      icon: <EditIcon className="w-5 h-5" />,
      label: "Edit pricing",
      action: () => handleAction("edit"),
    },
  ];

  // Handle checkbox changes
  const handleCheckboxChange = (id: number) => {
    setSalesData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  // Handle select all checkbox
  const handleSelectAll = (checked: boolean) => {
    setSalesData((prevData) =>
      prevData.map((item) => ({ ...item, isChecked: checked }))
    );
  };

  // Handle action buttons
  const handleAction = (action: string) => {
    const selectedItems = salesData.filter((item) => item.isChecked);
    console.log(`Performing ${action} action on:`, selectedItems);
    // Add your action logic here
  };

  // Count selected items
  const selectedCount = salesData.filter((item) => item.isChecked).length;

  return (
    <Card className="flex flex-col w-full gap-4 p-7 bg-white border border-solid border-[#e0e1e4] shadow-shadow">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="font-semibold text-app-primary text-xl [font-family:'Outfit',Helvetica] tracking-[0]">
            Marketplace Sales Hub
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          <Select>
            <SelectTrigger className="w-[140px] px-3 py-2 border border-gray-300 bg-white text-sm font-medium rounded-md shadow-sm hover:bg-gray-50 focus:ring-1 focus:ring-gray-200">
              <div className="flex items-center gap-2">
                <img className="w-5 h-5" alt="Icon" src="/icon-3.svg" />
                <SelectValue placeholder="Filter by" />
              </div>
            </SelectTrigger>

            <SelectContent className="w-[140px]">
              <SelectItem value="date">By Date</SelectItem>
              <SelectItem value="rating">By Rating</SelectItem>
            </SelectContent>
          </Select>

          <Button className="h-[38px] gap-2 px-3 py-1.5 bg-app-primary border border-solid border-[#52111e]">
            <PlusIcon className="w-5 h-5" />
            <span className="font-button-links-small-14px text-white">Add</span>
          </Button>
        </div>
      </div>

      <Card className="flex flex-col w-full items-start relative shadow-shadow border border-[#e8e8e8] rounded-lg overflow-hidden">
        <Table className="border-collapse shadow-shadow">
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#fafcfe] w-[84px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4] rounded-tl-md">
                <Checkbox
                  checked={selectedCount === salesData.length}
                  onCheckedChange={handleSelectAll}
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
              </TableHead>
              <TableHead className="bg-[#fafcfe] w-[278px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-[#989797] text-[13.1px]">
                  Name
                </span>
              </TableHead>
              <TableHead className="bg-[#fafcfe] w-[321px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-[#989797] text-[13.1px]">
                  Date
                </span>
              </TableHead>
              <TableHead className="bg-[#fafcfe] w-[106px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-[#989797] text-[13.1px]">
                  Wine Tier
                </span>
              </TableHead>
              <TableHead className="bg-[#fafcfe] w-[136px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-[#989797] text-[13.1px]">
                  Status
                </span>
              </TableHead>
              <TableHead className="bg-[#fafcfe] w-[145px] h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4] rounded-tr-md">
                <span className="[font-family:'Outfit',Helvetica] font-medium text-[#989797] text-[13.1px]">
                  Last Active
                </span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {salesData.map((item, index) => (
              <TableRow
                key={item.id}
                className={
                  index === salesData.length - 1 ? "last:rounded-b-md" : ""
                }
              >
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <Checkbox
                    checked={item.isChecked}
                    onCheckedChange={() => handleCheckboxChange(item.id)}
                    className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                  />
                </TableCell>
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <div className="flex items-center gap-[10px]">
                    <img
                      className="w-9 h-[46px] object-cover"
                      alt="Wine bottle"
                      src="/106880066-1620413243866petruswinebottle-jpg-4.png"
                    />
                    <div className="flex items-start">
                      <span className="[font-family:'Outfit',Helvetica] font-medium text-[#02020e] text-[13.1px]">
                        Name
                      </span>
                      <span className="[font-family:'Outfit',Helvetica] font-bold text-[#02020e] text-sm text-center">
                        ✅
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <span className="[font-family:'Outfit',Helvetica] font-medium text-black text-[13.1px]">
                    {item.date}
                  </span>
                </TableCell>
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <span className="[font-family:'Outfit',Helvetica] font-medium text-[#00000033] text-[13.1px]">
                    {item.wineTier}
                  </span>
                </TableCell>
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <Switch
                    checked={true}
                    className="data-[state=checked]:bg-blue-500"
                  />
                </TableCell>
                <TableCell className="h-[58px] px-5 py-[15px] border border-solid border-[#e0e1e4]">
                  <span className="[font-family:'Outfit',Helvetica] font-medium text-app-primary text-[13.1px]">
                    {item.lastActive}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {selectedCount > 0 && (
        <Card className="flex flex-col gap-4 p-4 border border-solid border-[#e0e1e4] shadow-shadow">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedCount === salesData.length}
                onCheckedChange={handleSelectAll}
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
              <span className="[font-family:'Outfit',Helvetica] font-medium text-black text-[13.1px]">
                {selectedCount} Selected
              </span>
            </div>
            <Button
              variant="ghost"
              onClick={() => handleSelectAll(false)}
              className="p-0"
            >
              <XCircleIcon className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center gap-3 w-full">
            {actionButtons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="flex items-center gap-2.5 px-3 py-2.5 w-[122px]"
                onClick={button.action}
              >
                <div className="flex items-center gap-[11px]">
                  {button.icon}
                  <span className="[font-family:'Outfit',Helvetica] font-normal text-primary-text text-sm whitespace-nowrap">
                    {button.label}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        </Card>
      )}
    </Card>
  );
};
