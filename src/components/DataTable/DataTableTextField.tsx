import { Input } from '@/components/ui/input';

import { useDataTable } from './DataTableContext';

interface IDataTableTextFieldProps {
  column?: string;
  placeholder?: string;
}

export function DataTableTextField({
  column,
  placeholder = 'Pesquisar...',
}: IDataTableTextFieldProps) {
  const { table } = useDataTable();

  if (column) {
    const tableColumn = table.getColumn(column);
    const value = tableColumn?.getFilterValue() as string | undefined;

    return (
      <Input
        placeholder={placeholder}
        className="w-96"
        value={value ?? ''}
        onChange={(event) => tableColumn?.setFilterValue(event.target.value)}
      />
    );
  }

  return (
    <Input
      placeholder={placeholder}
      className="w-96"
      onChange={(event) => table?.setGlobalFilter(event.target.value)}
    />
  );
}
