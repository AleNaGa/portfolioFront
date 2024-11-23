const loadContent = async (language) => {
    try {
      // Carga el archivo JSON del idioma correspondiente
      const response = await fetch(`/data/data-${language}.json`);
      if (!response.ok) throw new Error('Error al cargar el archivo JSON');
      const data = await response.json();
  
      // función recursiva, accede al  DOM y actualiza el contenido
      const updateContent = (data) => {
        Object.keys(data).forEach((key) => {
          const element = document.getElementById(key);
  
          // si el valor es un objeto, es decir, tiene otros valores dentro, se llama a la funcion recursivamente y se itera sobre esos valores con la key y la subkey del id del objeto.
          if (typeof data[key] === 'object') {
            Object.keys(data[key]).forEach((subKey) => {
              const subElement = document.getElementById(`${key}-${subKey}`);
              if (subElement) {
                subElement.textContent = data[key][subKey];
              }
            });
          } else if (element) {
            // Si el valor no es un objeto, se actualiza simplemente
            element.textContent = data[key];
          }
        });
      };
      updateContent(data);
    } catch (error) {
      console.error('Error cargando contenido:', error);
    }
  };
  
  // Event listeners para los botones de idioma
  document.getElementById('btn-es').addEventListener('click', () => loadContent('es'));
  document.getElementById('btn-en').addEventListener('click', () => loadContent('en'));
  
  // Cargar el contenido en español por defecto
  loadContent('es');
  