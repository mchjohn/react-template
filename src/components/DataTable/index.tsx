import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo } from 'react';

import { Button } from '@/components/ui/button';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { MemoizedTableBody } from './DataTableBody';

interface IDataTableProps<TData> {
  data: TData[];
  columns: ColumnDef<TData>[];
}

export function DataTable<TData>({ data, columns }: IDataTableProps<TData>) {
  const table = useReactTable({
    data,
    columns,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
  });

  const { columnSizingInfo, columnSizing } = table.getState();

  const colSizeVariables = useMemo(
    () =>
      table.getFlatHeaders().reduce<Record<string, number>>(
        (acc, header) => ({
          ...acc,
          [`--header-${header.id}-size`]: header.getSize(),
          [`--col-${header.column.id}-size`]: header.column.getSize(),
        }),
        {},
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [columnSizing, columnSizingInfo, table.getFlatHeaders],
  );

  return (
    <Table style={colSizeVariables}>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead
                key={header.id}
                colSpan={header.colSpan}
                style={{
                  width: `calc(var(--header-${header.id}-size) * 1px)`,
                }}
                className="group relative"
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext(),
                )}

                <Button
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={cn(
                    'top-0 border-0 rounded-none p-0 right-0 absolute bg-primary/40 opacity-0 group-hover:opacity-100 w-1.5 h-full transition-all duration-300 cursor-col-resize',
                    header.column.getIsResizing() && 'opacity-100 bg-primary',
                  )}
                />
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <MemoizedTableBody table={table} />
    </Table>
  );
}
