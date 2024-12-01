const loadContent = async (language) => {
  try {
      // Carga el archivo JSON del idioma correspondiente
      const response = await fetch(`/data/lang-${language}.json`);
      if (!response.ok) throw new Error('Error al cargar el archivo JSON');
      const data = await response.json();

      // Función recursiva, accede al DOM y actualiza el contenido
      const updateContent = (data) => {
          Object.keys(data).forEach((key) => {
              const element = document.getElementById(key);

              // Si el valor es un objeto, se llama a la función recursivamente
              if (typeof data[key] === 'object') {
                  Object.keys(data[key]).forEach((subKey) => {
                      const subElement = document.getElementById(`${key}-${subKey}`);
                      if (subElement) {
                          // Si la subkey es "link", actualizar el href del <a>
                          if (subKey === 'link') {
                              const linkElement = document.getElementById(`${key}-link`);
                              if (linkElement) {
                                  linkElement.setAttribute('href', data[key][subKey]);
                              }
                          } else {
                              subElement.textContent = data[key][subKey];
                          }
                      }
                  });
              } else if (element) {
                  // Si el valor no es un objeto, se actualiza simplemente
                  element.textContent = data[key];
              }
          });
      };

      // Llamada a la función de actualización
      updateContent(data);
  } catch (error) {
      console.error('Error cargando contenido:', error);
  }
};

// Event listeners para los botones de idioma
document.getElementById('btn-es').addEventListener('click', () => loadContent('es'));
document.getElementById('btn-en').addEventListener('click', () => loadContent('en'));

// Cargar el contenido en inglés por defecto
loadContent('en');
