import { Settings2Icon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { useDataTable } from './DataTableContext';

export function DataTableColumnsVisibilityDropdown() {
  const { table } = useDataTable();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Settings2Icon className="mr-2 size-5" /> Visualizar
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {table.getAllColumns().map((column) =>
          !column.getCanHide() ? null : (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              disabled={!column.getCanHide()}
              onCheckedChange={column.toggleVisibility}
            >
              {column.columnDef.meta?.nameInFilters}
            </DropdownMenuCheckboxItem>
          ),
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
