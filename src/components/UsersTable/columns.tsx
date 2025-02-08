import { IUser } from '@/interfaces/user';
import { ColumnDef } from '@tanstack/react-table';

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
];
