import { useState, useEffect } from 'react';
import Card from './Card'; // Asegúrate de que esta ruta esté correcta
import { render } from 'astro/compiler-runtime';

const CardGenerator = () => {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // El estado para el campo de búsqueda
  const [technologies, setTechnologies] = useState([]); // Estado para las tecnologías
  const url = "http://localhost:8080/api/v1/projects";
  const arrayPages = [...Array(totalPages).keys()];// Creamos un array con el total de paginas para el paginado

  // Esta función maneja la lógica para obtener proyectos de la API
  const fetchProjects = async (page = 0) => {
    try {
      const response = await fetch(`${url}?size=3&page=${page}`);
      const data = await response.json();
      setPosts(data.content || []);
      setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setPosts([]);
    }
  };

  // Función para obtener las tecnologías disponibles
  const fetchTechnologies = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/technologies");
      const data = await response.json();
      setTechnologies(data); // Guardamos las tecnologías en el estado
    } catch (error) {
      console.error("Error fetching technologies:", error);
    }
  };

  // Esta función maneja la búsqueda por palabra
  const getByWord = async (word = "") => {
    try {
      const response = await fetch(`${url}/byword/${word}?size=3&page=${page}`);
      const data = await response.json();
      if (data === null || data.content.length === 0) {
        alert('No se encontraron proyectos');
      } else {
        setPosts(data.content || []);
        setTotalPages(data.totalPages || 1);
      }
    } catch (error) {
      alert('No se encontraron proyectos');
      console.error(error);
    }
  };

  // Esta función maneja la búsqueda por tecnología
  const getByTech = async (techName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/projects/bytech/${techName}?size=3&page=${page}`);
      const data = await response.json();
        setPosts(data.content || []);
        setTotalPages(data.totalPages || 1);
    } catch (error) {
      console.error(error);
    }
  };

  // Función que maneja la búsqueda al hacer clic en el botón
  const handleSearch = () => {
    getByWord(searchTerm); // Llama a getByWord con el término de búsqueda
  };

  // Función que maneja el clic en los botones de tecnología
  const handleTechClick = (techName) => {
    getByTech(techName); // Llama a getByTech con el nombre de la tecnología
  };

  // UseEffect para inicializar los proyectos cuando se carga la página
  useEffect(() => {
    fetchProjects(page);
    fetchTechnologies(); // Llamamos a la función para obtener las tecnologías
  }, [page]);

  //Función para renderizar los botones de las páginas
  const renderPageButtons = () => {
    return arrayPages.map((pageNumber) => (
      <button
        key={pageNumber}
        onClick={() => setPage(pageNumber)}
        className={`px-4 py-2 rounded-lg shadow-lg hover:bg-azulMedio ${
          page === pageNumber ? "bg-azulMedio text-whiteBrkn" : "bg-paleBlue text-darkBlue"
        }`}
      >
        {pageNumber + 1}
      </button>
    ));
  };
  

  return (
    <div class="flex flex-col w-full">
      {/* Fila de botones de tecnología */}
      <div className="flex gap-2 mb-4">
        {technologies.map((tech) => (
          <button
            key={tech.id}
            onClick={() => handleTechClick(tech.name)} // Llama a handleTechClick con el nombre de la tecnología
            className="px-4 py-2 bg-paleBlue text-darkBlue rounded-lg shadow-lg hover:bg-crudo"
          >
            {tech.name}
          </button>
        ))}
      </div>

      {/* Input y Botón de búsqueda por palabra */}
      <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado de búsqueda
            className="px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-paleBlue"
          />
          <button
            onClick={handleSearch} // Llama a la función de búsqueda al hacer clic
            disabled={searchTerm.length < 3} // Deshabilitar si el término de búsqueda es menor a 3 caracteres
            className={`px-4 py-2 rounded-lg shadow-lg ${
              searchTerm.length < 3
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-paleBlue text-darkBlue hover:bg-cyan-400"
            }`}
            id="buttonSearch"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchTerm(""); // Restablece el término de búsqueda
              fetchProjects(); // Llama a una función para mostrar todos los proyectos
            }}
            className="px-4 py-2 bg-crudo text-whiteBrkn rounded-lg shadow-lg hover:bg-red-400"
          >
            Reset
          </button>
        </div>



      {/* Mostrar las tarjetas de proyectos */}
      <div className="flex flex-row gap-4">
        {posts.map((project) => (
          <Card
            key={project.projectId}
            projectId={project.projectId}
            name={project.name}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
            pictureUrl={project.pictureUrl}
            statusName={project.statusName}
            developersNames={project.developersNames}
            technologiesNames={project.technologiesNames}
          />
        ))}
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-4">
        <span className="text-lg font-semibold flex flex-row gap-5 justify-center w-full">
          {renderPageButtons()}
        </span>
      </div>
    </div>
  );
};

export default CardGenerator;
