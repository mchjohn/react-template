import { DataTable } from '../DataTable';

import { COLUMNS } from './columns';
import { USERS } from './data';

export function UsersTable() {
  return <DataTable data={USERS} columns={COLUMNS} />;
}
