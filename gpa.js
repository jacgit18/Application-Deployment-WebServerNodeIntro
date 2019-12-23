const rules = [
    {start: 93, end: 100, grade: "A", score:4.0},
    {start: 90, end: 92.99,  grade: "A-", score:3.7},
    {start: 87, end: 89.99, grade: "B+", score:3.3},
    {start: 83, end: 86.99, grade: "B", score:3.0},
    {start: 80, end: 82.99, grade: "B-", score:2.7},
    {start: 77, end: 79.99, grade: "C+", score:2.3},
    {start: 75, end: 76.99, grade: "C", score:2.0},
    {start: 60, end: 74.99, grade: "D", score:1.0},
    {start: 0, end: 59.99, grade: "F", score:0.0}
]

function calculate(score){
   
    const status = rules.find(e => score >= e.start)
status.score = score
return status
}
exports.gpa = calculate 
/*
[100,95, 90,85,80,82,70,60,50, 0].forEach(e =>{
    const answer = calculate(e)
    console.log(answer)
    
})
*/