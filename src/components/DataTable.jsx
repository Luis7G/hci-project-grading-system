import React from "react";

function DataTable({ data }) {
  if (data.length === 0) {
    return <div className="text-center">No hay datos disponibles.</div>;
  }

  return (
    <div className="overflow-x-auto mt-14">
      <table className="min-w-full text-center">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm leading-normal">
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} className="py-3 px-6">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              {Object.keys(item).map((key) => (
                <td key={key} className="py-3 px-6">
                  {item[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
