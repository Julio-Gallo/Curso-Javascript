function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')//id=foto p/ img
        if (    fsex[0].checked) {
            genero = 'HOMEM'
            if (idade >=0 && idade < 14) {
                img.setAttribute('src', 'obebe.jpg')
            } else if (idade <21) {
                //jovens
                img.setAttribute('src', 'menino.jpg')
            }
            else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'MULHER'
            if (idade >=0 && idade < 14) {
                //criança
                img.setAttribute('src', 'abebe.jpg')
            } else if (idade <21) {
                //jovens
                img.setAttribute('src', 'menina.jpg')
            }
            else if (idade < 65) {
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            }
            else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}