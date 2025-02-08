import { flexRender } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';

import { useDataTable } from './DataTableContext';

export function DataTableHeader() {
  const { table } = useDataTable();

  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableHead
              key={header.id}
              colSpan={header.colSpan}
              className="group relative"
              style={{
                width: `calc(var(--header-${header.id}-size) * 1px)`,
              }}
            >
              {flexRender(header.column.columnDef.header, header.getContext())}

              {header.column.getCanResize() && (
                <Button
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={cn(
                    'top-0 border-0 rounded-none p-0 right-0 absolute bg-primary/40 opacity-0 group-hover:opacity-100 w-1.5 h-full transition-all duration-300 cursor-col-resize',
                    header.column.getIsResizing() && 'opacity-100 bg-primary',
                  )}
                />
              )}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  );
}
