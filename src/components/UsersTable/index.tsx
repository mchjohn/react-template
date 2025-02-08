import { DataTable } from '../DataTable';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';

import { COLUMNS } from './columns';
import { USERS } from './data';

export function UsersTable() {
  return (
    <DataTable data={USERS} columns={COLUMNS}>
      <div className="flex justify-end mb-4">
        <DataTableColumnsVisibilityDropdown />
      </div>

      <DataTableContent />
    </DataTable>
  );
}
