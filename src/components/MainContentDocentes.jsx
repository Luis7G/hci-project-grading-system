import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import DataTable from "./DataTable";
import Pagination from "./Pagination";
import Papa from "papaparse";

function MainContentTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Ajusta según la altura máxima de tu contenedor

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch(
          // "https://profesorescsv.netlify.app/profesores.csv"
          "https://proyecto-notas.netlify.app/docentes.csv"
        );
        const csvData = await response.text();
        console.log("CSV Data:", csvData);

        Papa.parse(csvData, {
          header: true,
          complete: (result) => {
            console.log("Parsed Data:", result.data); // Verifica los datos parseados
            setTeachers(result.data);
            setFilteredTeachers(result.data); // Inicialmente sin filtrar
          },
          error: (error) => {
            console.error("Error parsing CSV:", error);
          },
        });
      } catch (error) {
        console.error("Error fetching CSV:", error); // Verifica si hay un error en la solicitud
      }
    };

    fetchCSV();
  }, []);

  // Maneja la búsqueda
  const handleSearch = (searchTerm) => {
    const filtered = teachers.filter(
      (teacher) =>
        teacher.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.apellidos.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeachers(filtered);
    setCurrentPage(1); // Reinicia la paginación al buscar
  };

  // Lógica para paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentTeachers = filteredTeachers.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

  return (
    <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col mt-8 font-medium max-md:max-w-full">
        <h2 className="self-center text-5xl text-black max-md:max-w-full">
          BIENVENIDO AL PORTAL DE DOCENTES
        </h2>
        <section className="flex flex-col py-14 mt-8 w-full bg-white rounded-[30px] shadow-[0px_10px_60px_rgba(226,236,249,0.5)] max-md:max-w-full">
          {/* <SearchBar onSearch={handleSearch} /> */}
          <DataTable data={currentTeachers} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setCurrentPage}
            totalEntries={filteredTeachers.length}
            itemsPerPage={itemsPerPage}
          />
        </section>
      </div>
    </main>
  );
}

export default MainContentTeacher;
