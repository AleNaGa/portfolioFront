// Card.jsx
const Card = ({ // Creamos un componente Card con las propiedades totales del proyecto por si en un futuro necesitamos mostrar alguna información adicional
    projectId,
    name,
    description,
    startDate,
    endDate,
    repoUrl,
    demoUrl,
    pictureUrl,
    statusName,
    developersNames,
    technologiesNames
  }) => {
    return ( //Card de los proyectos. Aqui podemos ir añadiendo las propiedades que necesitemos
         <div className="relative group rounded-xl shadow-lg w-full md:w-1/3 h-80 overflow-hidden font-montserrat">

          <img
            src={pictureUrl}
            alt={`Project ${name}`}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent flex flex-col justify-end p-4 transition-all duration-500 ease-in-out">
            <h5 className="text-2xl font-bold text-whiteBrkn mb-2 group-hover:opacity-0 transition-opacity duration-300">
              {name}
            </h5>
          </div>

          {//Contenido de la tarjeta que aparece al hacer hover 
          }
          <div className="absolute inset-0 bg-darkBlue/90 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <h5 className="text-2xl font-bold text-whiteBrkn mb-2">{name}</h5>
            <p className="text-whiteBrkn text-sm mb-4">{description}</p>
            <p className="text-crudo italic text-sm mb-4">
              {technologiesNames.join(", ")}
            </p>
            <a
              href={repoUrl}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center bg-whiteBrkn rounded-full transition-transform duration-300 hover:scale-110"
            >
              <img
                src="/gitHubIcon.png"
                alt="GitHub Repo"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>


    );
  };
  
  export default Card;
  