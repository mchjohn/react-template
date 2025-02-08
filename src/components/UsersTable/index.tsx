import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { USERS } from './data';

export function UsersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nome</TableHead>
          <TableHead>Raça</TableHead>
          <TableHead>Classe</TableHead>
          <TableHead className="text-right">Armas</TableHead>
          <TableHead className="text-right">Aliado</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {USERS.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.race}</TableCell>
            <TableCell>{user.class}</TableCell>
            <TableCell className="text-right">{user.weapons}</TableCell>
            <TableCell className="text-right">{user.ally}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
