import { Column } from '@tanstack/react-table';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDown,
  EyeOffIcon,
} from 'lucide-react';

interface IDataTableColumnHeaderProps {
  title: ReactNode;
  column: Column<any>;
}

export function DataTableColumnHeader({
  title,
  column,
}: IDataTableColumnHeaderProps) {
  if (!column.getCanSort()) {
    return title;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          variant="ghost"
          size="sm"
          className="data-[state=open]:bg-accent -ml-3"
        >
          {title}
          {!column.getIsSorted() && <ChevronsUpDown className="size-4" />}
          {column.getIsSorted() === 'asc' && <ArrowUpIcon className="size-4" />}
          {column.getIsSorted() === 'desc' && (
            <ArrowDownIcon className="size-4" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onSelect={() => column.toggleSorting(false)}>
          <ArrowUpIcon className="text-muted-foreground size-3" />
          Asc
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={() => column.toggleSorting(true)}>
          <ArrowDownIcon className="text-muted-foreground size-3" />
          Desc
        </DropdownMenuItem>

        {column.getCanHide() && (
          <>
            <DropdownMenuSeparator />

            <DropdownMenuItem onSelect={() => column.toggleVisibility()}>
              <EyeOffIcon className="text-muted-foreground size-3" />
              Hide
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
