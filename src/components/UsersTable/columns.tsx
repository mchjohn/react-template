import { ColumnDef } from '@tanstack/react-table';
import { Edit2Icon, EllipsisIcon, Trash2Icon } from 'lucide-react';

import { IUser } from '@/interfaces/user';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * Caso necessário usar hooks, states ou códigos mais complexos
 * o ideal é usar o useMemo<ColumnDef<IUser>[]> para memoizar esse array.
 */

export const COLUMNS: ColumnDef<IUser>[] = [
  {
    accessorKey: 'name',
    header: 'Nome',
    meta: {
      nameInFilters: 'Nome',
    },
  },
  {
    accessorKey: 'race',
    header: 'Raça',
    size: 80,
    meta: {
      nameInFilters: 'Raça',
    },
  },
  {
    accessorKey: 'class',
    header: 'Classe',
    meta: {
      nameInFilters: 'Classe',
    },
  },
  {
    accessorKey: 'weapons',
    header: 'Armas',
    meta: {
      nameInFilters: 'Armas',
    },
  },
  {
    accessorKey: 'ally',
    header: 'Aliado',
    meta: {
      nameInFilters: 'Aliado',
    },
  },
  {
    id: 'actions',
    size: 40,
    maxSize: 40,
    enableHiding: false,
    enableSorting: false,
    enableResizing: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    cell: ({ row }) => {
      const originalRow = row.original;

      return (
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <EllipsisIcon className="size-4" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem
                onSelect={() => alert(`Editar: ${originalRow.name}`)}
              >
                <Edit2Icon className="size-4" /> Editar
              </DropdownMenuItem>

              <DropdownMenuItem
                onSelect={() => alert(`Deletar: ${originalRow.name}`)}
              >
                <Trash2Icon className="size-4" /> Deletar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
