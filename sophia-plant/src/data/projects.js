import rawProjects from "./projects.json"
const projects = [...rawProjects].sort((a,b) => a.date.localeCompare(b.date)); //raw cria uma cópia antes de ordenar, vindo para a timeline na ordem do mais antigo para o mais recente
export {projects};

