document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página, evitando el comportamiento por defecto
  
   //inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // credenciales
    if (username === "admin" && password === "Abcd1234") {
      // Creamos el token falso a partir del código pasado por classroom
      const fakeToken = {
        sub: "1",
        name: "admin",
        exp: new Date().getTime() + 15 * 60000, // 15 mins
      };
  
      // Guardamos el token en el localStorage
      localStorage.setItem("fakeToken", JSON.stringify(fakeToken));
      window.location.href = "/admin-editor";// Redirigimos a la pagina de admin si todas las credenciales son correctas
    } else {// Si las credenciales son incorrectas se muestra un alert y se limpia el formulario
      alert("Usuario o contraseña incorrectos");
      event.target.reset();
    }
  });
  