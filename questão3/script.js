let vetorInputs = []

let body = document.getElementById("body");
let button = document.getElementById("botao");
let buttonDiv = document.getElementById("buttonDiv");

let campo0 = document.createElement("p");
let campo1 = document.createElement("p");
let campo2 = document.createElement("p");
let campo3 = document.createElement("p");
let campo4 = document.createElement("p");

function gerarCampos(){
    preencherVetor()
    console.log(vetorInputs);
    setAtributes()
    console.log(vetorInputs);
    console.log(body);
    removerBotaoInserir()
}

function atualizar() {
    atualizarCores()
}

function removerBotaoInserir(){
    button.remove()
}


function atualizarCores() {
    let num = [0,1,2,3,4]
    for (let i = 0; i < vetorInputs.length; i++) {
        const numSorteado = num[Math.floor(Math.random()*num.length)];
        const campoSorteado = vetorInputs[Math.floor(Math.random()*vetorInputs.length)]
        if(numSorteado != i){
            campoSorteado.style.border = "4vh solid #471408"
        }
        if(numSorteado != 0){
            campoSorteado.style.border = "4vh solid #f5ff36"
            if(numSorteado != 1){
                campoSorteado.style.border = "4vh solid #1ed41e"
                if(numSorteado != 2){
                    campoSorteado.style.border = "4vh solid #1e91d4"
                    if(numSorteado != 3){
                        campoSorteado.style.border = "4vh solid #220d66"
                        if(numSorteado != 4){
                            campoSorteado.style.border = "4vh solid #a32e78"
                        }
                    }
                }
            }
        }else if(numSorteado != 4){
            campoSorteado.style.border = "4vh solid #a32e78"
        }else if (numSorteado == 3) {
            campoSorteado.style.border = "4vh solid #ff00cc"
        }else if (numSorteado == i) {
            campoSorteado.style.border = "4vh solid #ff00cc" 
            if (numSorteado == 0) {
                campoSorteado.style.border = "4vh solid #cc182d"
                if (numSorteado == 1) {
                    campoSorteado.style.border = "4vh solid #76ad51"
                    if (numSorteado == 2) {
                        campoSorteado.style.border = "4vh solid #a262c4"
                        if (numSorteado == 3) {
                            campoSorteado.style.border = "4vh solid #1890cc"
                            if (numSorteado == 4) {
                                campoSorteado.style.border = "4vh solid #f0a8e1"
                            }
                        }
                    }
                }

            }
        }
    }
}

function preencherVetor(){
    vetorInputs.push(campo0)
    vetorInputs.push(campo1)
    vetorInputs.push(campo2)
    vetorInputs.push(campo3)
    vetorInputs.push(campo4)
    
    body.appendChild(campo0)
    body.appendChild(campo1)
    body.appendChild(campo2)
    body.appendChild(campo3)
    body.appendChild(campo4)
}

function setAtributes(){
    campo0.setAttribute("id", 1);
    campo1.setAttribute("id", 2);
    campo2.setAttribute("id", 3);
    campo3.setAttribute("id", 4);
    campo4.setAttribute("id", 5);

    colors()
}

function colors(){
    campo0.style.border = "4vh solid red"
    campo1.style.border = "4vh solid green"
    campo2.style.border = "4vh solid yellow"
    campo3.style.border = "4vh solid blue"
    campo4.style.border = "4vh solid pink"
}
