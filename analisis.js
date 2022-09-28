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

//Analysis by Company
const companies = {};
for (person of salaries) {
        for (job of person.trabajos) {
            if (!companies[job.empresa]) {
                companies[job.empresa] = {};
            }

            if(!companies[job.empresa][job.year]){
                companies[job.empresa][job.year] = [];
            }
            
            companies[job.empresa][job.year].push(job.salario);
        }
    }
console.log(companies);

function medianPerCompany (companyName, year) {
    if(!companies[companyName]){
        console.warn("No se encontró empresa");
    } else if(!companies[companyName][year]){
        console.warn("No se encontró año");
    } else{
    return PlatziMath.getMedian(companies[companyName][year]);
    }
}

function projectionPerCompany (companyName) {
    if(!companies[companyName]){
        console.warn("No se encontró empresa");
        return;
    }
    const companyYears = Object.keys(companies[companyName]);
    const companyMedianByYear = companyYears.map((year) => {
        return medianPerCompany(companyName, year);
    });

    let growRateList = [];
    for (let i = 1; i < companyMedianByYear.length; i++) {
        const actualSalary = companyMedianByYear[i];
        const pastSalary = companyMedianByYear[i - 1];
        const growth = actualSalary - pastSalary;
        const growRate = growth / pastSalary;
        growRateList.push(growRate)
    }

    const medianGrowRateList = PlatziMath.getMedian(growRateList);

    const lastestSalaryMedian = companyMedianByYear[companyMedianByYear.length - 1];
    const increase = lastestSalaryMedian * medianGrowRateList;
    const newSalary = lastestSalaryMedian + increase;

    return newSalary;
}
projectionPerCompany("Industrias Mokepon");