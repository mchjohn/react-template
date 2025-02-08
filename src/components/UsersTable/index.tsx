import { DataTable } from '../DataTable';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';
import { DataTableTextField } from '../DataTable/DataTableTextField';

import { COLUMNS } from './columns';
import { USERS } from './data';

export function UsersTable() {
  return (
    <DataTable data={USERS} columns={COLUMNS}>
      <div className="flex justify-between mb-4">
        <DataTableTextField />
        <DataTableColumnsVisibilityDropdown />
      </div>

      <DataTableContent />
    </DataTable>
  );
}
