import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

interface Column {
  label: string;
  className?: string;
}

interface TableComponentProps<T> {
  columns: Column[];
  data: T[];
  withCheckbox?: boolean;
  renderRow: (item: T) => React.ReactNode;
  headerClassName?: string;
  cellClassName?: string;
}

const TableComponent = <T extends { id: number }>({
  columns,
  data,
  withCheckbox = false,
  renderRow,
  headerClassName,
  cellClassName,
}: TableComponentProps<T>) => {
  return (
    <Table>
      <TableHeader className={headerClassName}>
        <TableRow>
          {withCheckbox && (
            <TableHead className="w-[50px]">
              <Checkbox />
            </TableHead>
          )}
          {columns.map((column, index) => (
            <TableHead key={index} className={column.className}>
              {column.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            {withCheckbox && (
              <TableCell className={`w-[50px] ${cellClassName}`}>
                <Checkbox />
              </TableCell>
            )}
            {renderRow(item)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
