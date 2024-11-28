// Paths
const url = "http://localhost:8080/api/v1";
const path = "/projects";
const pathToEdit = "/projects/update/{id}";
const pathToDelete = "/projects/delete/{id}";
const pathToInsert = "/projects/insert";

// Al cargar la página
window.onload = () => {
    getFields(url + path);
    fetchTechnologies();
    fetchDevelopers();
};

// Renderizar tabla inicial
function checkJSON(array) {
    let allKeys = [];
    array.some((element) => {
        for (key in element) {
            allKeys.push(key);
        }
        return allKeys;
    });
    return allKeys;
}

function renderFields(array, allKeys) {
    document.getElementById("formEdit").innerHTML = "";
    const tableDiv = document.getElementById("tablediv");
    tableDiv.innerHTML = "";
    const table = document.createElement("table");
    table.classList.add("table-auto", "border-collapse", "border-1", "border-darkBlue", "w-full", "max-w-4xl", "mx-auto", "font-montserrat", "shadow-lg", "rounded-lg");

    const tr1 = document.createElement("tr");
    allKeys.forEach((element) => {
        const th = document.createElement("th");
        th.classList.add("border-2", "border-darkBlue", "px-4", "py-2", "text-darkBlue", "text-sm", "font-montserrat", "bg-paleBlue", "text-center");
        th.textContent = element;
        tr1.appendChild(th);
    });

    const thAcciones = document.createElement("th");
    thAcciones.classList.add("border-2", "border-darkBlue", "px-4", "py-2", "text-darkBlue", "text-sm", "font-montserrat", "bg-paleBlue", "text-center");
    thAcciones.textContent = "Acciones";
    tr1.appendChild(thAcciones);

    table.appendChild(tr1);

    array.forEach((element) => {
        const tr = document.createElement("tr");
        tr.classList.add();

        allKeys.forEach((key) => {
            const td = document.createElement("td");
            td.classList.add("border-2", "border-darkBlue", "px-4", "py-2", "text-sm", "font-montserrat", "text-center");
            td.textContent = typeof element[key] === "object" ? JSON.stringify(element[key]) : element[key];
            tr.appendChild(td);
        });

        const tdAcciones = document.createElement("td");
        tdAcciones.classList.add("border-2", "border-darkBlue", "px-4", "py-2", "text-center");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-red-500", "text-white", "font-medium", "rounded-lg", "hover:bg-red-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        deleteButton.onclick = () => { console.log("Delete button clicked"); deleteField(getID(element)); };
        tdAcciones.appendChild(deleteButton);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-blue-500", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        editButton.onclick = () => { console.log("Edit button clicked"); editField(element.projectId, element); };
        tdAcciones.appendChild(editButton);

        const toTestButton = document.createElement("button");
        toTestButton.textContent = "To Test";
        toTestButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-blue-500", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        toTestButton.onclick = () => { console.log("to Test button clicked"); toTest(element.projectId); };
        tdAcciones.appendChild(toTestButton);

        const toProdButton = document.createElement("button");
        toProdButton.textContent = "To Prod";
        toProdButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-blue-500", "text-white", "font-medium", "rounded-lg", "hover:bg-blue-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        toProdButton.onclick = () => { console.log("to Prod button clicked"); toProd(element.projectId); };
        tdAcciones.appendChild(toProdButton);

        tr.appendChild(tdAcciones);
        table.appendChild(tr);
    });

    tableDiv.appendChild(table);
}



// GET Fields
async function getFields(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const allKeys = checkJSON(data.content);
        renderFields(data.content, allKeys);
    } catch (error) {
        console.error("Error fetching projects:", error);
        renderFields([]);
        fetchTechnologies();
        fetchDevelopers();
    }
}

// Formulario de Inserción
document.getElementById("insertForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Obtener los valores de los campos del formulario
    const projectId = document.getElementById("projectId").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const repoUrl = document.getElementById("repoUrl").value;
    const demoUrl = document.getElementById("demoUrl").value;
    const pictureUrl = document.getElementById("pictureUrl").value;
    const technologiesIds = document.getElementById("technologiesIds").value.split(",").map(Number);
    const developersIds = document.getElementById("developersIds").value.split(",").map(Number);

    // Crear el objeto de datos que se va a enviar
    const data = {
        projectId,
        name,
        description,
        startDate,
        endDate,
        repoUrl,
        demoUrl,
        pictureUrl,
        technologiesIds,
        developersIds
    };
    addField(data);
});

// Función para hacer el fetch y enviar los datos al backend
function addField(data) {
    fetch(url + pathToInsert, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al insertar el proyecto");
        }
        return response.json();
    })
    .then(data => {
        console.log("Proyecto insertado correctamente:", data);
        getFields(url + path);
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al insertar el proyecto.");
    });
}

// Formulario de Edición
function editField(id, data) {
    console.log(`Editing project with ID: ${id}`, data); // Log para verificar que los datos se están pasando correctamente
    const form = document.getElementById("formEdit");
    form.innerHTML = "";
    form.classList.add("p-4", "bg-whiteBrkn", "rounded", "shadow", "w-full", "mx-auto");

    const title = document.createElement("h4");
    title.textContent = `Formulario de Edición - Proyecto ID: ${id}`;
    title.classList.add("text-lg", "font-semibold", "text-darkBlue", "mb-4");
    form.appendChild(title);

    const fields = [
        { name: "projectId", type: "number", label: "ID del Proyecto" },
        { name: "name", type: "text", label: "Nombre del Proyecto" },
        { name: "description", type: "text", label: "Descripción" },
        { name: "startDate", type: "date", label: "Fecha de Inicio" },
        { name: "endDate", type: "date", label: "Fecha de Fin" },
        { name: "repoUrl", type: "url", label: "URL del Repositorio" },
        { name: "demoUrl", type: "url", label: "URL de la Demo" },
        { name: "pictureUrl", type: "string", label: "URL de la Imagen" },
        { name: "technologiesIds", type: "text", label: "IDs de Tecnologías (separados por comas)" },
        { name: "developersIds", type: "text", label: "IDs de Desarrolladores (separados por comas)" },
    ];

    fields.forEach(({ name, type, label }) => {
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = label;
        fieldLabel.classList.add("block", "text-sm", "font-medium", "text-darkBlue", "mt-2");

        const input = document.createElement("input");
        input.type = type;
        input.name = name;
        input.value = data[name] || "";
        input.classList.add("block", "w-full", "mt-1", "p-2", "border", "border-darkBlue", "rounded", "text-sm");
        form.appendChild(fieldLabel);
        form.appendChild(input);
    });

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Guardar Cambios";
    submit.classList.add("mt-4", "w-full", "bg-paleBlue", "hover:bg-darkBlue", "text-whiteBrkn", "py-2", "px-4", "rounded", "cursor-pointer");
    form.appendChild(submit);

    form.onsubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const updatedData = {};
        fields.forEach(({ name }) => {
            let value = formData.get(name);
            updatedData[name] = name === "technologiesIds" || name === "developersIds" ? value.split(",").map(Number) : value;
        });
        updateField(id, updatedData); // Llamada a la función de actualización
    };

    formDiv = document.getElementById("formsDiv");
    formDiv.appendChild(form);
}

// Actualizar Campo
function updateField(id, data) {
    const realPath = pathToEdit.replace(/\{[^}]+\}/, id);
    fetch(url + realPath, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            getFields(url + path);
        })
        .catch((error) => console.error("Error:", error));
}

// Eliminar Campo
function deleteField(id) {
    console.log(`Deleting project with ID: ${id}`); // Log para verificar el ID
    const realPathDel = pathToDelete.replace(/\{[^}]+\}/, id);
    fetch(url + realPathDel, { method: "DELETE" })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            getFields(url + path);
        })
        .catch((error) => console.error("Error:", error));
}

// Obtener el ID de un proyecto (Asegúrate de que esta función esté funcionando correctamente)
function getID(element) {
    return element.projectId;
}

// Cambiar el estado del proyecto
function toTest(id) {
    const pathTotest = "/projects/totesting/{id}";
    const realPath = pathTotest.replace(/\{[^}]+\}/, id);
    fetch(url + realPath, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            getFields(url + path);
        })
        .catch((error) => console.error("Error:", error));
}

// Cambiar el estado del proyecto
function toProd(id) {
    const pathToProd = "/projects/toprod/{id}";
    const realPath = pathToProd.replace(/\{[^}]+\}/, id);
    fetch(url + realPath, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
    })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            getFields(url + path);
        })
        .catch((error) => console.error("Error:", error.message));
}

// Asignar desarrollador al proyecto
document.getElementById("assignBtnDev").onclick = function () {
    event.preventDefault(); // Evitar el comportamiento por defecto de recarga de la página

    // Obtener los valores de los campos
    const developerId = document.getElementById("developerId").value;
    const projectId = document.getElementById("projectIdAddDev").value;


    const endpoint = `/projects/asigndev/${developerId}/toproject/${projectId}`;
    console.log(endpoint);

    fetch(url+endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al asignar el desarrollador al proyecto");
        }
        return response.json();
    })
    .then(data => {
        console.log("Asignación exitosa:", data);
        getFields(url + path);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}


//asignar tecnología a proyecto
document.getElementById("assignBtnTech").onclick = function () {
    event.preventDefault(); // Evitar el comportamiento por defecto de recarga de la página

    // Obtener los valores de los campos
    const techId = document.getElementById("technologyId").value;
    const projectId = document.getElementById("projectIdAddTech").value;

    const endpoint = `/projects/asigntech/${techId}/toproject/${projectId}`;
    console.log(endpoint);

    fetch(url + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al asignar el desarrollador al proyecto");
        }
        return response.json();
    })
    .then(data => {
        console.log("Asignación exitosa:", data);
        getFields(url + path);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

//Nuevo desarrollador
document.getElementById("submitBtnDev").onclick = function() {
    // Obtener los valores de los campos del formulario
    const name = document.getElementById("devname").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const linkedinUrl = document.getElementById("linkedinUrl").value;
    const githubUrl = document.getElementById("githubUrl").value;
    const projectsIdsString = document.getElementById("projectsIds").value;
    // Convertir el campo de proyectos
    const projectsIds = projectsIdsString.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));

    // Crear el objeto JSON con los datos
    const data = {
        name: name,
        surname: surname,
        email: email,
        linkedinUrl: linkedinUrl,
        githubUrl: githubUrl,
        projectsIds: projectsIds
    };

    fetch(url + '/developers/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al enviar los datos");
        }
        return response.json();
    })
    .then(data => {
        console.log("Desarrollador insertado correctamente:", data);
        getFields(url + path);
        document.getElementById("developerForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al registrar al desarrollador.");
    });
};


//nueva tecnologia
document.getElementById("submitBtnTech").onclick = function() {
    // Obtener el valor del campo techName
    const techName = document.getElementById("techName").value;

    // Crear el objeto JSON con los datos
    const data = {
        techName: techName
    };

    // Hacer el fetch POST al endpoint para insertar
    fetch(url + '/technologies/insert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al enviar los datos");
        }
        return response.json();
    })
    .then(data => {
        console.log("Tecnología añadida correctamente:", data);
        fetchTechnologies();
        document.getElementById("techForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Hubo un error al añadir la tecnología.");
    });
};


//Funcion para mostrar las tecnologías
const fetchTechnologies = async () => {
    try {
        const response = await fetch(url + "/technologies");
        const data = await response.json();
        setTechnologies(data); // renderizamos la tabla
    } catch (error) {
        console.error("Error fetching technologies:", error);
    }
};

function setTechnologies(technologies) {
    const mainDiv = document.getElementById("tableTech");
    mainDiv.innerHTML = "";
    const techTable = document.createElement("table");
    techTable.classList.add("w-1/4", "mx-auto", "mt-4", "text-sm", "font-montserrat", "border-collapse","drop-shadow-lg");

   
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerName = document.createElement("th");
    const headerId = document.createElement("th");
    const headerActions = document.createElement("th");

    headerName.textContent = "Tecnologías";
    headerId.textContent = "ID";
    headerActions.textContent = "Acciones";

   
    headerName.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");
    headerId.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");
    headerActions.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");

    headerRow.appendChild(headerName);
    headerRow.appendChild(headerId);
    headerRow.appendChild(headerActions);
    thead.appendChild(headerRow);

    
    const tbody = document.createElement("tbody");

    technologies.forEach((tech) => {
        const row = document.createElement("tr");

        row.classList.add();

        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => { console.log("delete button clicked"); deleteTech(tech.id); };
        cell3.appendChild(deleteButton);

        deleteButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-red-500", "text-white", "font-medium", "rounded-lg", "hover:bg-red-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        


        cell1.textContent  = tech.name;
        cell2.textContent = tech.id;

       
        cell1.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");
        cell2.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");
        cell3.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        tbody.appendChild(row);
    });

    techTable.appendChild(thead);
    techTable.appendChild(tbody);


    mainDiv.appendChild(techTable);
}

//funcion para mostrar developers
const fetchDevelopers = async () => {
    try {
        const response = await fetch(url + "/developers");
        const data = await response.json();
        console.log(data.content);
        setDevelopers(data.content); // renderizamos la tabla
    } catch (error) {
        console.error("Error fetching developers:", error);
    }
};

function setDevelopers(developers) {
    const mainDiv = document.getElementById("tableDev");
    mainDiv.innerHTML = "";
    const devTable = document.createElement("table");
    devTable.classList.add("w-1/4", "mx-auto", "mt-4", "text-sm", "font-montserrat", "border-collapse","drop-shadow-lg");

   
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headerName = document.createElement("th");
    const headerId = document.createElement("th");
    const headerProjects = document.createElement("th");
    const headerActions = document.createElement("th");

    headerActions.textContent = "Acciones";
    headerName.textContent = "Desarrolladores";
    headerId.textContent = "ID";
    headerProjects.textContent = "Proyectos";


   
    headerName.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");
    headerId.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");
    headerProjects.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");
    headerActions.classList.add("px-4", "py-2", "text-center", "bg-paleBlue", "text-darkBlue", "font-semibold", "border-2", "border-darkBlue");

    headerRow.appendChild(headerName);
    headerRow.appendChild(headerId);
    headerRow.appendChild(headerProjects);
    headerRow.appendChild(headerActions);
    thead.appendChild(headerRow);

    const tbody = document.createElement("tbody");

    developers.forEach((dev) => {
        const row = document.createElement("tr");

        row.classList.add();

        const cell1 = document.createElement("td");
        const cell2 = document.createElement("td");
        const cell3 = document.createElement("td");
        const cell4 = document.createElement("td");

        cell1.textContent  = dev.developerName;
        cell2.textContent = dev.developerId;
        cell3.textContent = dev.projects.join(", ");
        
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.onclick = () => { console.log("delete button clicked"); deleteDev(dev.developerId); };
        cell4.appendChild(deleteButton);

        deleteButton.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue", "bg-red-500", "text-white", "font-medium", "rounded-lg", "hover:bg-red-600", "focus:outline-none", "focus:ring-2", "focus:ring-red-500", "mr-2");
        cell1.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");
        cell2.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");
        cell3.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");
        cell4.classList.add("px-4", "py-2", "text-center", "border-2", "border-darkBlue");

        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        tbody.appendChild(row);
    });

    devTable.appendChild(thead);
    devTable.appendChild(tbody);
    mainDiv.appendChild(devTable);
}

//Metodos delete Dev y delete tech

function deleteDev(id) {
    console.log(`Deleting dev with ID: ${id}`); // Log para verificar el ID
    const pathToDeleteDev = "/developers/delete/{id}";
    const realPathDel = pathToDeleteDev.replace(/\{[^}]+\}/, id);
    fetch(url + realPathDel, { method: "DELETE" })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            fetchDevelopers();
        })
        .catch((error) => console.error("Error:", error));
}

function deleteTech(id) {
    console.log(`Deleting tech with ID: ${id}`); // Log para verificar el ID
    const pathToDeleteTech ="/technologies/delete/{id}";
    const realPathDel = pathToDeleteTech.replace(/\{[^}]+\}/, id);
    fetch(url + realPathDel, { method: "DELETE" })
        .then((response) => {
            if (!response.ok) throw new Error("Error en la solicitud");
            console.log("Tech deleted successfully");
            fetchTechnologies();
        })        
        .catch((error) => console.error("Error:", error));    
}        



