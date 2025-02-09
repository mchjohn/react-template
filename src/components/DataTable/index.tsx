import {
  ColumnDef,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  useReactTable,
} from '@tanstack/react-table';
import { ReactNode } from 'react';

import { DataTableContext } from './DataTableContext';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
  pagination?: PaginationState;
}

export function DataTable<TData>({
  data,
  columns,
  children,
  pagination,
}: IDataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    initialState: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
}
