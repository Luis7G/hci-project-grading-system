import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";
import Papa from "papaparse";

function MainContentEstudiantes() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [filteredEstudiantes, setFilteredEstudiantes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          // "https://estudiantescsv.netlify.app/estudiantes.csv"
          "https://proyecto-notas.netlify.app/estudiantes.csv"
        );
        const csvData = await response.text();

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            setEstudiantes(result.data);
            setFilteredEstudiantes(result.data);
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
    const filtered = estudiantes.filter(
      (item) =>
        item.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.apellidos.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEstudiantes(filtered);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEstudiantes.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredEstudiantes.length / itemsPerPage);

  return (
    <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-8 font-medium max-md:max-w-full">
        <h2 className="self-center text-5xl text-black max-md:max-w-full">
          BIENVENIDO AL PORTAL DE ESTUDIANTES
        </h2>
        <section className="flex flex-col py-14 mt-8 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
          {/* <SearchBar onSearch={handleSearch} /> */}
          <DataTable data={currentItems} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
            totalEntries={filteredEstudiantes.length}
            itemsPerPage={itemsPerPage}
          />
        </section>
      </div>
    </main>
  );
}

export default MainContentEstudiantes;
