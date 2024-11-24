// Card.jsx
const Card = ({
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
    return (
      <div className="rounded-xl shadow-lg" id={projectId.toString()}>
        <div className="p-5 flex flex-col">
          <div className="rounded-xl overflow-hidden h-1/4 w-1/2 p-5">
            <img src={pictureUrl} alt={`Project ${name}`} id="img" />
          </div>
          <h5 className="text-2xl font-bold tracking-tight text-azulGris" id="cardTitle">{name}</h5>
          <p className="font-montserrat font-medium text-20 text-azulGris" id="cardDescription">{description}</p>
          <p className="font-montserrat font-medium text-20 text-azulGris" id="cardDate">Start: {startDate}</p>
          <p className="font-montserrat font-medium text-20 text-azulGris" id="cardFinalDate">End: {endDate}</p>
          <p className="font-montserrat font-medium text-20 text-azulGris" id="cardStatus">{statusName}</p>
          <div className="flex flex-row gap-5">
            <p className="font-montserrat font-medium text-20 text-azulGris" id="cardDeveloper">
              Developers: {developersNames.join(', ')}
            </p>
            <p className="font-montserrat font-medium text-20 text-azulGris" id="cardTechnologies">
              Technologies: {technologiesNames.join(', ')}
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <a href={demoUrl} id="cardUrl" target="_blank">
              <img
                className="object-contain h-24 mr-auto transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
                src="/github.png"
                alt="Demo"
              />
            </a>
            <a href={repoUrl} id="cardGitUrl" target="_blank">
              <img
                className="object-contain h-24 mr-auto transition-all duration-500 ease-in-out hover:scale-105 hover:opacity-90"
                src="/git.png"
                alt="Repo"
              />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  