//REPL CALCULATOR
//REPLCALC.JS
const readline = require('readline')
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
r1.question("Enter First No: ", (n1)=>{
  r1.question("Enter Second No: ", (n2)=>{
    r1.question("Enter your Choice 1.Add 2.Subtract 3.Multiply 4.Divide ",(choice)=>{
      n1=Number(n1)
      n2=Number(n2)
      if(choice == '1'){
        console.log(`Addition: ${n1+n2}`)
      }
      if(choice == '2'){
        console.log(`Subtraction: ${n1-n2}`)
      }
      if(choice == '3'){
        console.log(`Multiplication: ${n1*n2}`)
      }
      if(choice == '4'){
        console.log(`Division: ${n1/n2}`)
      }
  })
})
})

//RUN NODE REPLCALC.JS
