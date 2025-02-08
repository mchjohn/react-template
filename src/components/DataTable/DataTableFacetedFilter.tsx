import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useDataTable } from './DataTableContext';

interface IDataTableFacetedFilterProps {
  column: string;
}

export function DataTableFacetedFilter({
  column,
}: IDataTableFacetedFilterProps) {
  const { table } = useDataTable();

  if (column) {
    const tableColumn = table.getColumn(column);
    const facet = tableColumn?.getFacetedUniqueValues();
    const keys = facet?.keys();
    const options = keys ? Array.from(keys) : [];

    return (
      <Select onValueChange={(value) => tableColumn?.setFilterValue(value)}>
        <SelectTrigger className="w-[180px] h-8">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>

        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option} ({facet?.get(option)})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
}
