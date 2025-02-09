import { DataTable } from '../DataTable';
import { DataTableColumnsVisibilityDropdown } from '../DataTable/DataTableColumnsVisibilityDropdown';
import { DataTableContent } from '../DataTable/DataTableContent';
import { DataTablePagination } from '../DataTable/DataTablePagination';
import { DataTableTextField } from '../DataTable/DataTableTextField';

import { COLUMNS } from './columns';
import { USERS } from './data';

export function UsersTable() {
  return (
    <DataTable
      data={USERS}
      columns={COLUMNS}
      pagination={{ pageIndex: 0, pageSize: 2 }}
    >
      <div className="flex justify-between mb-4">
        <DataTableTextField />

        <div className="flex gap-2">
          {/* <DataTableFacetedFilter column="race" /> */}
          <DataTableColumnsVisibilityDropdown />
        </div>
      </div>

      <DataTableContent />

      <div className="flex justify-end items-center mt-4">
        <DataTablePagination />
      </div>
    </DataTable>
  );
}
