let idade = 64
if (idade< 16 ) {
    console.log(`Sua idade é ${idade} e você ainda não pode votar!`)
} else if (idade < 18 || idade >= 65) {
    console.log(`Sua idade é ${idade} e você pode votar se quiser!`)
} else if (idade >=18) {
    console.log(`Sua idade é ${idade} e você deve votar!`)
}