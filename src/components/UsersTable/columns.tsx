import { ColumnDef } from '@tanstack/react-table';
import { Edit2Icon, EllipsisIcon, Trash2Icon } from 'lucide-react';

import { IUser } from '@/interfaces/user';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { DataTableColumnHeader } from '../DataTable/DataTableColumnHeader';

/**
 * Caso necessário usar hooks, states ou códigos mais complexos
 * o ideal é usar o useMemo<ColumnDef<IUser>[]> para memoizar esse array.
 */

export const COLUMNS: ColumnDef<IUser>[] = [
  {
    id: 'select',
    size: 40,
    maxSize: 40,
    enableHiding: false,
    enableSorting: false,
    enableResizing: false,
    enableColumnFilter: false,
    enableGlobalFilter: false,
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={() => table.toggleAllPageRowsSelected()}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={row.getToggleSelectedHandler()}
      />
    ),
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    meta: {
      nameInFilters: 'Nome',
    },
  },
  {
    accessorKey: 'race',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Raça" />
    ),
    size: 80,
    meta: {
      nameInFilters: 'Raça',
    },
  },
  {
    accessorKey: 'class',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Classe" />
    ),
    meta: {
      nameInFilters: 'Classe',
    },
  },
  {
    accessorKey: 'weapons',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Armas" />
    ),
    meta: {
      nameInFilters: 'Armas',
    },
  },
  {
    accessorKey: 'ally',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Aliado" />
    ),
    meta: {
      nameInFilters: 'Aliado',
    },
  },
  {
    accessorKey: 'age',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Idade" />
    ),
    size: 40,
    maxSize: 40,
    meta: {
      nameInFilters: 'Idade',
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
