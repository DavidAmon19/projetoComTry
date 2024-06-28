let listaEnderecos = [
  {
    rua: "RUA A",
    numero: 100,
    cidade: "Fortaleza",
    estado: "CE",
  },

  {
    rua: "RUA B",
    numero: 200,
    cidade: "SÃO PAULO",
    estado: "SP",
  },

  {
    rua: "RUA C",
    numero: 300,
    cidade: "RIO DE JANEIRO",
    estado: "RJ",
  },

  {
    rua: "RUA D",
    numero: 400,
    cidade: "BELO HORIZONTE",
    estado: "MG",
  },
];

const mostrarEndereco = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  let html = "<html><head><title>Lista de Endereços</title></head><body>";
  html += "<h1> Lista completa dos endereços</h1>";
  html += "<ul>";

  listaEnderecos.forEach((endereco) => {
    html += `<li>${endereco.rua}, ${endereco.numero}, ${endereco.cidade}, ${endereco.estado}</li>`;
  });

  html += "</ul></body></html>";

  res.end(html);
};

module.exports = mostrarEndereco;
