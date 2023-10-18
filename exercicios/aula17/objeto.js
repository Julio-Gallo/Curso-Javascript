let amigo = {nome: 'José', 
sexo:'M', 
peso:84.7,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(3.3)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)