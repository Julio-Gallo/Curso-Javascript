function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
   
    
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Em Brasília ${hora} horas, bom dia!`
        img.src = 'manha3.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Em Brasília ${hora} horas, boa tarde!`
        img.src = 'tarde3.jpg'
        document.body.style.background = "#b9846f"
    } else {
        msg.innerHTML = `Em Brasília ${hora} horas, tenha uma boa noite!`
        img.src = 'noite3.jpg'
        document.body.style.background = '#515154'
    }
}

