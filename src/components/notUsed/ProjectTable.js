class ProjectTable extends HTMLElement { //INTENTO DE WEB COMPONENT CON JS
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <div class="overflow-x-auto">
          <table class="min-w-full border-2 border-black">
            <thead class="bg-paleBlue text-gray-700">
              <tr id="table-headers"></tr>
            </thead>
            <tbody id="table-rows" class="divide-y divide-gray-200"></tbody>
          </table>
        </div>
      `;
    }
  
    static get observedAttributes() {
      return ["data"];
    }
  
    attributeChangedCallback(name, newValue) {
      if (name === "data") {
        try {
          const projects = JSON.parse(newValue);
          this.renderTable(projects);
        } catch (e) {
          console.error("Error parsing JSON data:", e);
        }
      }
    }
  
    renderTable(projects) {
      const keys = projects.length > 0 ? Object.keys(projects[0]) : [];
      const headers = this.shadowRoot.querySelector("#table-headers");
      const rows = this.shadowRoot.querySelector("#table-rows");
  
      // Renderizar los encabezados
      headers.innerHTML = `
        ${keys
          .map(
            (key) => `<th class="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium text-gray-700">${key}</th>`
          )
          .join("")}
        <th class="px-6 py-3 border-b border-gray-300 text-center text-sm font-medium text-gray-700">Acciones</th>
      `;
  
      // Renderizar las filas
      rows.innerHTML = projects
        .map(
          (project) => `
            <tr class="hover:bg-gray-50">
              ${keys
                .map(
                  (key) => `<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${typeof project[key] === "object" ? JSON.stringify(project[key]) : project[key]}</td>`
                )
                .join("")}
              <td class="px-6 py-4 whitespace-nowrap text-center">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2">Edit</button>
                <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mr-2">Delete</button>
                <button class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2">To Test</button>
                <button class="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">To Prod</button>
              </td>
            </tr>`
        )
        .join("");
    }
  }
  
  customElements.define("project-table", ProjectTable);
  