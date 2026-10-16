import rawProjects from "./projects.json"

// chave = o "id" do projeto no projects.json
const imagesById = {
  "receitas-de-minas": ["/projects/receitas-de-minas.png"],
  perniloco: ["/projects/perniloco.jpeg"],
  "clima-api": ["/projects/climaapi.png"],
  acessopuc: [
    "/projects/acessopuc1.png",
    "/projects/acessopuc2.png",
    "/projects/acessopuc3.png",
    "/projects/acessopuc4.png",
  ],
};

//raw cria uma cópia antes de ordenar, vindo para a timeline na ordem do mais antigo para o mais recente
const projects = rawProjects
  .map((p) => ({ ...p, images: imagesById[p.id] ?? [] }))
  .sort((a, b) => a.date.localeCompare(b.date));

export { projects };
