//Criando variáveis
const dias = document.getElementById('dias')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos =  document.getElementById('segundos')

//Variável do dia do lançamento
const lancamento = '01 dec 2023'

function countdown() {

    const dataLanc = new Date(lancamento) //Data do Lançamento pelo Date()
    const hoje = new Date() // Data de hoje pelo Date()

    const segTotal = (dataLanc - hoje) / 1000 //Subtraindo dia do lançamento pra hoje, transformando de milissegundo para segundo

    // Usando math.flor() pega apenas o número inteiro
    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24
    const finalMinutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dias.innerHTML = finalDias + 'D'
    horas.innerHTML = formatoTempo(finalHoras) + 'H'
    minutos.innerHTML = formatoTempo(finalMinutos) + 'M'
    segundos.innerHTML = formatoTempo(finalSegundos) + 'S'
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo;
}

countdown()
setInterval(countdown, 1000)