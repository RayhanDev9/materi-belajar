import { defineStore } from "pinia";


export const useNumbers = defineStore("numbers", {
    state : () => ({
        numbers : [1,2,3,4,5]
    }),
    actions : {
        addNumber () {
            this.numbers.push(this.numbers.length + 1)
        }
    },
    getters : {
        filterNumbers :  (state) => {
            return (minNumber : number) => state.numbers.filter(num => num > minNumber)
        } 
    }
});

export default useNumbers;