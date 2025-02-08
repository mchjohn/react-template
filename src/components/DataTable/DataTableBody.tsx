import { flexRender, Table } from '@tanstack/react-table';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { memo } from 'react';

export function DataTableBody({ table }: { table: Table<any> }) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getAllCells().map((cell) => (
            <TableCell
              key={cell.id}
              style={{ width: `calc(var(--col-${cell.column.id}-size) * 1px)` }}
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export const MemoizedTableBody = memo(DataTableBody);
