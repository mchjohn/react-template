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
import { ReactNode, useEffect, useMemo, useRef } from 'react';

import { DataTableContext } from './DataTableContext';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
  children: ReactNode;
  pagination?: PaginationState;
  onSelectRow?: (selectedRows: TData[]) => void;
}

export function DataTable<TData>({
  data,
  columns,
  children,
  pagination,
  onSelectRow,
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

  const selectedRow = useMemo(
    () => table.getSelectedRowModel().flatRows.map((row) => row.original),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [table.getSelectedRowModel().flatRows],
  );

  const memoOnSelectRow = useRef(onSelectRow);
  memoOnSelectRow.current = onSelectRow;

  useEffect(() => {
    memoOnSelectRow.current?.(selectedRow);
  }, [selectedRow]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <DataTableContext.Provider value={{ table }}>
      {children}
    </DataTableContext.Provider>
  );
}
