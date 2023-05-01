let total: number;
/**
 * Typescript' te fonksiyon tanımlamak için 3 yöntem kullanılır. 1. function keywordü,
 * 2. arrow function,
 * 3. single line arrow function
 *
 */
//1. yöntem: function keywordü ile
function sum(num1: number, num2: number): number {
	return num1 + num2;
}

total = sum(10, 20);
console.log("1. total: ", total);

//2. yöntem: arrow function tanımlamak

const add = (num1: number, num2: number): number => {
	return num1 + num2;
};
total = add(20, 30);
console.log("2. total: ", total);

//3. yöntem: Single line arrow function
const caculate_total = (num1: number, num2: number): number => num1 + num2;
total = caculate_total(30, 40);
console.log("3. total: ", total);

/**
 * örnek olarak sıklıkla kullandığımız useSelector fonksiyonunu kullanırken single line arrow function
 * ile datayı almak yeterlidir. ama örneğin şöyle bir senaryo düşünelim,
 */

/*const authState = useSelector((state) => state.authState )
const authState = useSelector((state) => {
    console.log(state)
    return state.authState;
})

const authState = useSelector(function getData(state) {
    return state.authState;
})*/
