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
    <table className="border border-black border-solid w-full">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="border-b border-black border-solid px-6 py-2"
              key={column.key}
            >
              {column.name}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className="hover:bg-orange-500" key={item.id}>
            {columns.map((column) => (
              <td className="px-3 py-1 text-center" key={column.key}>
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
