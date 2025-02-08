/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */
import '@tanstack/react-table';

declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    nameInFilters?: string;
  }
}
