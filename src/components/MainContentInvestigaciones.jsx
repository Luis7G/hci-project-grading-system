import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Papa from "papaparse";

function MainContentInvestigaciones() {
  const [investigaciones, setInvestigaciones] = useState([]);
  const [filteredInvestigaciones, setFilteredInvestigaciones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          // "https://investigacionescsv.netlify.app/investigaciones.csv"
          "https://proyecto-notas.netlify.app/investigaciones.csv"
        );
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            setInvestigaciones(result.data);
            setFilteredInvestigaciones(result.data);
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV:", error);
      }
    };

    fetchCSV();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = investigaciones.filter(
      (item) =>
        item.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.areaEstudio.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredInvestigaciones(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredInvestigaciones.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredInvestigaciones.length / itemsPerPage);

  return (
    <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-8 font-medium max-md:max-w-full">
        <h2 className="self-center text-5xl text-black max-md:max-w-full">
          BIENVENIDO AL PORTAL DE INVESTIGACIONES
        </h2>
        <section className="flex flex-col py-14 mt-8 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
          <SearchBar onSearch={handleSearch} />
          <DataTable data={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
            totalEntries={filteredInvestigaciones.length}
            itemsPerPage={itemsPerPage}
          />
        </section>
      </div>
    </main>
  );
}

export default MainContentInvestigaciones;
