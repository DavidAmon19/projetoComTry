const http = require("http");

const endereco = require("./address");

const server = http.createServer((req, res) => {
  try {
    switch (req.url) {
      case "/endereco":
        res.end(endereco(req, res, next));
        break;
      case "/usuario":
        res.end("Pagina de usuario");
        break;
      default:
        res.end("Pagina não encontrada");
        break;
    }
  } catch (error) {
    console.log('Erros dentro do bloco catch', error)
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Erro no servidor");
  }

  //   try {
  //     if (req.url === "/endereco") {
  //       res.end(endereco(req, res));
  //     } else if (req.url === "/usuarios") {
  //       res.end("Pagina de usuarios");
  //     } else if (req.url === "/") {
  //       res.end("Pagina inicial");
  //     }
  //   } catch (error) {
  //     console.error("Pagina não encontrada", error);
  //     res.end("404 not found");
  //   }
});

server.listen(9090, () => {
  try {
    console.log("Servidor rodando na porta 9090");
  } catch (error) {
    console.log("Erro ao acessar", error);
  }
});
