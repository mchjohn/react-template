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
  },
  {
    accessorKey: 'race',
    header: 'Raça',
    size: 80,
  },
  {
    accessorKey: 'class',
    header: 'Classe',
  },
  {
    accessorKey: 'weapons',
    header: 'Armas',
  },
  {
    accessorKey: 'ally',
    header: 'Aliado',
  },
];
