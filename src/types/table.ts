import type { ReactNode } from 'react';

import type { TChildren } from '.';

export type Column<T> = {
  key: keyof T | 'custom';
  header: string;
  render?: (value: T[keyof T] | T, row?: T) => ReactNode;
};

export type DataTableProps<T> = TChildren & {
  data: T[];
  columns: Column<T>[];
  className?: string;
};

export type TableHeaderProps<T> = {
  columns: Column<T>[];
};

export type TableRowProps<T> = {
  row: T;
  columns: Column<T>[];
};

export type TableCellProps<T> = {
  value: T[keyof T] | T;
  render?: (value: T[keyof T] | T) => ReactNode;
};
