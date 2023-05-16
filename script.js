
function media(n1, n2, n3) {
  return Math.round((Number(n1) + Number(n2) + Number(n3)) / 3);
}

let mediaJulia = media(9, 10, 5);

let resultJulia = mediaJulia > 7 ? "Parabéns, Julia você foi aprovada" : "Não foi dessa vez, Julia tente novamente"

alert('A média do(a) aluno(a) Julia é: ' + mediaJulia + '\n' + resultJulia);

let mediaDiego = media(7, 2, 1);

let resultDiego = mediaDiego > 7 ? "Parabéns, Diego você foi aprovada" : "Não foi dessa vez, Diego tente novamente"

alert('A média do(a) aluno(a) Julia é: ' + mediaDiego + '\n' + resultDiego);

let mediaPaulo = media(10, 10, 10);

let resultPaulo = mediaPaulo > 7 ? "Parabéns, Paulo você foi aprovada" : "Não foi dessa vez, Paulo tente novamente"

alert('A média do(a) aluno(a) Julia é: ' + mediaPaulo  + '\n' +  resultPaulo);