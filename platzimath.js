const printedPieces = [40, 50, 12, 34, 20, 23, 10]; //Per day

function getMode (list) {
    const countList = {};

    for (let i = 0; i < list.length; i++) {
        const element = list[i];

        if (countList[element]){
            countList[element] += 1;
        } else {
            countList[element] = 1;
        }
    }

    console.log(countList);
}

function isEven (myList) {
    return !(myList.length % 2);
} 

function getMean (myList) {
    const list = sortList(myList)
    const isEvenList = isEven(list);
    if (isEvenList) {
        const meanFirstIndex = (list.length / 2) - 1;
        const meanSecondIndex = list.length / 2;
        const evenMean = (list[meanFirstIndex] + list[meanSecondIndex]) / 2;

        return evenMean;
    } else {
        const oddMeanIndex = Math.floor(myList.length / 2);
        const oddMean = myList[oddMeanIndex];
        
        return oddMean;
    }

}

function getAverage (myList) {
    const daysWorked = myList.length;
    const productionSum = myList.reduce(
        (previousValue, currentValue) => previousValue + currentValue
    );

    return productionSum / daysWorked; //Average - Produced pieces per day
} 

function sortList (unorderedList) {
    function sortMyList(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }

    const myList = unorderedList.sort(sortMyList)

    return myList;
}
