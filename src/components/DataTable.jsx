import React from "react";

function DataTable({ data }) {
  return (
    <div className="flex overflow-hidden gap-2.5 justify-center items-center px-4 py-2.5 mt-14 text-[14px] tracking-normal text-center text-black max-md:mt-10">
      <div className="flex flex-wrap gap-1 justify-center items-center self-stretch my-auto min-w-[256px] w-[1230px]">
        {Object.keys(data[0] || {}).map((key) => (
          <div
            key={key}
            className="flex flex-col justify-between items-center self-stretch my-auto min-h-[83px]"
          >
            <div className="text-gray-400">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </div>
            {data.map((item, index) => (
              <div key={index} className="mt-2.5">
                {item[key]}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataTable;
