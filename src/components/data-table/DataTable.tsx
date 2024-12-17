import React from 'react';

import { cn } from '@/lib/utils';
import {
  DataTableProps,
  TableCellProps,
  TableHeaderProps,
  TableRowProps,
} from '@/types/table';

function TableHeader<T>({ columns }: TableHeaderProps<T>) {
  return (
    <thead className="sticky left-0 right-0 top-0 z-10">
      <tr className="relative bg-white first:[&_th]:w-[1px] last:[&_th]:w-[1px]">
        {columns.map((column) => (
          <th
            key={String(column.key)}
            className="whitespace-nowrap border px-4 py-2 text-left"
          >
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
}

function TableCell<T>({ value, render }: TableCellProps<T>) {
  return (
    <td className="border px-4 py-2">
      {render ? render(value) : String(value)}
    </td>
  );
}

function TableRow<T extends { id: number | string }>({
  row,
  columns,
}: TableRowProps<T>) {
  return (
    <tr className="whitespace-nowrap first:[&_td]:w-[1px] last:[&_td]:w-[1px]">
      {columns.map((column) => {
        const value =
          column.key === 'custom' ? row : row[column.key as keyof T];

        return (
          <TableCell
            key={String(column.key)}
            value={value}
            render={
              column.render ? (value) => column.render?.(value, row) : undefined
            }
          />
        );
      })}
    </tr>
  );
}

export default function DataTable<T extends { id: number | string }>({
  data,
  className,
  columns,
  children,
}: DataTableProps<T>) {
  return (
    <div className={cn('overflow-x-auto ', className)}>
      {data.length ? (
        <table className="min-w-full border-collapse border border-gray-200">
          <TableHeader columns={columns} />
          <tbody>
            {data.map((row) => (
              <TableRow key={row.id} row={row} columns={columns} />
            ))}
          </tbody>
        </table>
      ) : children ? (
        children
      ) : (
        <p className="p-4 text-center">Data not found.</p>
      )}
    </div>
  );
}
