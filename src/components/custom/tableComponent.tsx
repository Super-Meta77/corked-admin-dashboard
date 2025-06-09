import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import React, { useState } from "react";

type Column = {
  label: string;
  className?: string;
};

interface TableComponentProps<T> {
  columns: Column[];
  data: T[];
  renderRow: (item: T) => React.ReactNode;
  withCheckbox?: boolean;
  checkboxColumnWidth?: string;
  onSelectionChange?: (selectedIds: (string | number)[]) => void;
}

export default function TableComponent<T extends { id: string | number }>({
  columns,
  data,
  renderRow,
  withCheckbox = false,
  checkboxColumnWidth = "w-[100px]",
  onSelectionChange,
}: TableComponentProps<T>) {
  const [selectedItems, setSelectedItems] = useState<(string | number)[]>([]);

  const handleSelectAll = (checked: boolean) => {
    const newSelection = checked ? data.map((item) => item.id) : [];
    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const handleSelectItem = (id: string | number, checked: boolean) => {
    const newSelection = checked
      ? [...selectedItems, id]
      : selectedItems.filter((itemId) => itemId !== id);
    setSelectedItems(newSelection);
    onSelectionChange?.(newSelection);
  };

  const isAllSelected = data.length > 0 && selectedItems.length === data.length;
  const isSomeSelected =
    selectedItems.length > 0 && selectedItems.length < data.length;

  return (
    <Table className="w-full table-fixed border-collapse shadow-md border border-[#e8e8e8]">
      <TableHeader>
        <TableRow className="bg-[#fafcfe] border-b border-[#e8e8e8] h-[60px]">
          {withCheckbox && (
            <TableHead
              className={`${checkboxColumnWidth} border-r border-[#e8e8e8] px-4 py-0 min-h-[60px]`}
            >
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleSelectAll}
                className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
              />
            </TableHead>
          )}
          {columns.map((col, idx) => (
            <TableHead
              key={idx}
              className={`border-r border-[#e8e8e8] text-[#989797] text-sm font-semibold px-4 py-0 min-h-[60px] ${
                col.className || ""
              }`}
            >
              {col.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={item.id || index}
            className={`border-b border-[#e8e8e8] hover:bg-[#f9f9f9] transition h-[60px] ${
              selectedItems.includes(item.id) ? "bg-blue-50" : ""
            }`}
          >
            {withCheckbox && (
              <TableCell
                className={`${checkboxColumnWidth} border-r border-[#e8e8e8] px-4 py-0 min-h-[60px]`}
              >
                <Checkbox
                  checked={selectedItems.includes(item.id)}
                  onCheckedChange={(checked) =>
                    handleSelectItem(item.id, checked as boolean)
                  }
                  className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500"
                />
              </TableCell>
            )}
            {renderRow(item)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
