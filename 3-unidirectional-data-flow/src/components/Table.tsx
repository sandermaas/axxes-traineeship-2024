import type { ReactNode } from 'react';

type TableColumn = {
  key: string;
  name: string;
};
type TableItem = { id: string | number } & Record<string, ReactNode>;

type TableProps = {
  columns: TableColumn[];
  items: TableItem[];
};

function Table({ columns, items }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.name}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map((item, itemIndex) => (
          <tr key={itemIndex}>
            {columns.map((column) => (
              <td key={column.key}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
