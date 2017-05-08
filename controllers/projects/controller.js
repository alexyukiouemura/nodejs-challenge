const projectsService = require('../../services/projects');


function getRisk() { // Retorna os projetos em risco 
  const projects = projectsService.findAll();
  const projectsRisk = [];

  for (let i=0; i<projects.length; i++){
    let countYellow = 0;
    let countRed = 0;
    for (let j=0; j<projects[i].reports.length; j++){
      if(projects[i].reports[j]=="Red")
        countRed++;
      if(projects[i].reports[j]=="Yellow")
        countYellow++;
    }
    if(countRed>=1)
      projectsRisk.push(projects[i].name);
    else if(countYellow>=2)
      projectsRisk.push(projects[i].name);
  }




  return projectsRisk;
}


function get(req, res) {
  const projects = projectsService.findAll();
  return res.json(projects);
}

function post(req, res) {
  if (req.body.name === '') {
    res.status(400).json({ message: 'Empty name' });
  }
  projectsService.create(req.body);
  return res.status(201).json({ message: 'Project Created' });
}

module.exports = { get, post, getRisk };
