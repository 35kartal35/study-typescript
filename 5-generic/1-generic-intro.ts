/**
 * gereric types
 */



const example_number_arr: number[] = [1,2,3,4,5,6,7];
const example_string_arr: string[] = [
    "foo",
    "soo",
    "joo",
    "hoo"
];

function random_array(arr: any[], count: number): any[] {
    return []
}

const arr_result_1 = random_array(example_number_arr, 3);
const arr_result_2 = random_array(example_string_arr, 2);
console.log("random_array", example_number_arr)