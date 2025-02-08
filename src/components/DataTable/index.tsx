import {
  ColumnDef,
  getCoreRowModel,
  getFacetedMinMaxValues,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { ReactNode } from 'react';

import { DataTableContext } from './DataTableContext';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
}

export function DataTable<TData>({
  data,
  columns,
  children,
}: IDataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
  });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
}
