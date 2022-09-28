// console.log(salaries);
//Salary analysis of Juanita
function findPerson (searchName) {
    return salaries.find(person => person.name = searchName);
    // salaries.find((persona) => {
    //     return persona.name == searchName;
    // });
    // return persona;
}

function medianPerPerson(personName){
    const jobs = findPerson(personName).trabajos;
    let salaries = jobs.map(job => job.salario);
    const salariesMedian = PlatziMath.getMedian(salaries);
    console.log(salaries);
    return salariesMedian;
}

function projectionPerPerson(name) {
    const jobs = findPerson(name).trabajos;
    let growRateList = [];
    for (let i = 1; i < jobs.length; i++) {
        const actualSalary = jobs[i].salario;
        const pastSalary = jobs[i - 1].salario;
        const growth = actualSalary - pastSalary;
        const growRate = growth / pastSalary;
        growRateList.push(growRate)
      }
    
      const medianGrowRateList = PlatziMath.getMedian(growRateList);
    
      const lastestSalary = jobs[jobs.length - 1].salario;
      const increase = lastestSalary * medianGrowRateList;
      const newSalary = lastestSalary + increase;
    
      return newSalary;
}