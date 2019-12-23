function weeklySalary(hoursWorked, hourlyWage){
    let salary = hoursWorked * hourlyWage
    return salary


}

function advancedweeklySalary(hoursWorked, hourlyWage, callback){
    let salary = 0

    setTimeout(() => {
        salary = hourlyWage * hourlyWage
    callback(salary) }, 3000)
}

salary = weeklySalary(42,10);
advancedweeklySalary(42,10, e => {
    console.log({salary: e, netSalary: e *.75})
});
console.log({salary})
