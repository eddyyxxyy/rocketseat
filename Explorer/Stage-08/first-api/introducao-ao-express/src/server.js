const express = require("express"); // importa o Express

const app = express(); // Cria uma instância da aplicação Express
const PORT = 3333; // Informa a porta que o app rodará

app.use(express.json());

// Param example
// app.get("/message/:id/:user", (req, res) => {
//   const { id, user } = req.params;
//   res.send(`Message ID: ${id}<br>User: ${user}`);
// });

// Query String example
// app.get("/users", (req, res) => {
//   const { page, limit } = req.query;
//   res.send(`Page ${page ?? "1"}, showing ${limit ?? "15 users"}`);
// });

app.post("/users", (req, resp) => {
  const { name, email, password } = req.body;
  resp.send(
    `<h1>Cadastrar Usuário</h1><h2>Dados:</h2><p>Name: ${name}</p><p>E-mail: ${email}</p><p>Password: ${password}</p>`
  );
  /*
   * Também podemos repassar JSONs via: resp.json({ name, email, password });
   */
});

// Inicia o servidor
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
