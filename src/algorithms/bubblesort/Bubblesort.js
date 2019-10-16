import swapBSort from '../../utils/swap/SwapBubbleSort';
const bubblesort = (array: number[]): number[] =>{
    
    array = array.slice();
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length - 1; j++) {
            swapBSort(array,i,j)
        }
    }
    return array;

};

expect default bubblesort;



