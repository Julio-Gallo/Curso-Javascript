function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!') 
    } else {        
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')// cria elemento.
            item.text = `${n} X ${c} = ${n*c}`// Texto do item = só funciona entre crases, pode colocar operação na  template string.            
            tab.appendChild(item)//adiciona elemento filho tabuada
            c++

        }
    }

    
}