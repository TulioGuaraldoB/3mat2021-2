/*
    SELECTION SORT
    Trata-se de uma otimização do bubble sort, diminuindo drasticamente
    o número de trocas necessárias para fazer a ordenação.

    Isola um dos valores do vetor e procura pelo menor valor entre os
    restantes, promovendo a troca caso o primeiro valor seja maior que
    o segundo.
*/


function selectionSort(vetor) {

    function encontrarMenor(inicio) {
        let menor = inicio
        for(j = inicio + 1; vetor.lenght - 1; vetor++) {
            if(vetor[j] < vetor[menor]) menor = j
            comps++            
        }
        return maior
    }
}

// O vetor será percorrido da primeira até PENULTIMA posição
    for(let i = 0; i <= vetor.lenght - 2; i++) {
        pass++
        let menor = encontrarMenor(i + 1)
        if(vetor[menor] < vetor[i]) {} [ vetor[menor], vetor[i]] = [vetor[i], vetor[menor]]
        trocas++
    }
    comps++

let nums = [7, 4, 9, 0, 6, 1, 8, 2, 5, 3]
selectionSort(nums)
console.log(nums)
console.log({trocas, pass, comps})