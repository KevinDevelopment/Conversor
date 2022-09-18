const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");

const leitor = new Reader();
const escritor = new Writer();

async function main() {
  const dados = await leitor.Read("./users.csv");
  const dadosProcessados = Processor.Process(dados);

  const usuarios = new Table(dadosProcessados);
  const html = await HtmlParser.Parse(usuarios);
  escritor.Write(`${Date.now()}.html`,html);
}

main();


