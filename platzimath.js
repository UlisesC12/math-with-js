const printedPieces = [40, 50, 12, 34, 20, 23, 10]; //Per day
const twoDimList = [["a",1],["b",2],["c",3]];
const twoDimList2 = [["a",100],["b",20],["c",30]];
const customList = [1,2,3,4,1,'a','abc',13,'abc','abc'];

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

    const arrayList = Object.entries(countList);
    const sortedList = sortBidimensionalList(arrayList, 1);
    const sortedListMode = sortedList[sortedList.length - 1];
    // console.log({countList, arrayList, sortedList, sortedListMode});
    // console.log("La moda es: " + sortedListMode);
    const mode = sortedListMode[0];
    return mode;
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

function sortBidimensionalList (unorderedList) {
    function sortMyList(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }

    const myList = unorderedList.sort(sortMyList)

    return myList;
}

function sortList (unorderedList) {
    function sortMyList(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }

    const myList = unorderedList.sort(sortMyList)

    return myList;
}
