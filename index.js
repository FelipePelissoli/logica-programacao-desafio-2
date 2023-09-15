let saldoVitorias = winRate(72,43)
let nivel = ""

function winRate (vitorias, derrotas){
    return vitorias - derrotas
}
switch (true){
    case saldoVitorias <= 10:
        nivel = "Ferro"
        break
    case saldoVitorias >10 && saldoVitorias <=20:
        nivel = "Bronze"
        break
    case saldoVitorias >20 && saldoVitorias <=50:
        nivel = "Prata"
        break
    case saldoVitorias >50 && saldoVitorias <=80:
        nivel = "Ouro"
        break
    case saldoVitorias >80 && saldoVitorias <=90:
        nivel = "Diamante"
        break
    case saldoVitorias >90 && saldoVitorias <=100:
        nivel = "Lendário"
        break
    case saldoVitorias >100:
        nivel = "Imortal"
        break
}

console.log(`O Herói tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}`)