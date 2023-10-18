let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()
} 

function finalizar () {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]//na posição 0
        let menor = valores[0]//primeiro valor é o maior antes da análise
        let soma = 0
        let media = 0
        for(let pos in valores) {//laço de percurso varre todo o vetor
            soma += valores[pos]
            if (valores[pos] > maior)//se valores na posição pos > maior
            maior = valores[pos]// o maior vlr recebe ele
            if(valores[pos] < menor)// se 
            menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram cadastrados ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
        res.innerHTML += `<p>O resultado da soma de todos os valores é ${soma}.</p>`
        res.innerHTML += `<p>A média aritmética de todos os valores é ${media}.</p>`
    }
}