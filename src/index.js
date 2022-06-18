import readline from "readline";
const rl = readline.createInterface(process.stdin, process.stdout);
const array = []

const helpCss = () =>{
    rl.question('How can I help you?', (answer) =>{
        if(answer == "SAIR" || answer == "sair" || answer == "Sair"){
            console.log("Your anser: " + array.sort().join('\n'))
            return rl.close()
        }else{
            array.push(answer);
        }
        helpCss()
    })
   
}
helpCss()
