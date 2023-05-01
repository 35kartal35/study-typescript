/**
 * önceki derste ağırlıklı olarak primitive(number ve string) typler kullanarak
 * örnekler yaptık şimdi daha karmaşık örneklerle konuyu detaylandıracağız.
 */

// 1. json türünde datalar üzerinde çalışmak
type WheelType = {
	wheel_count: number;
	diameter: number;
};

type FoldableDoorType = {
	door_count: number;
	sliding_count?: number;
};

type SlideableDoorType = {
	sliding_door_count: number;
};

type EngineType = {
	engine_volume: number;
	fuel_type: "diesel" | "gasoline" | "liquid petroleum gas";
};

type VehicleColorType = {
	color: "black" | "white" | "red" | "blue";
};

type CarVehicleType = WheelType & FoldableDoorType & EngineType;
type MinivanVehicleType = WheelType &
	FoldableDoorType &
	SlideableDoorType &
	EngineType &
	VehicleColorType;

type CarVehiclePriceCalculatorFuncType = (vehicle: CarVehicleType) => number;
type MinivanVehiclePriceCalculatorFuncType = (
	vehicle: MinivanVehicleType,
) => number;

const beginnerCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
	vehicle: CarVehicleType,
): number => {
	// TODO Burayı doldur.
	return 0;
};

const intermediateCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
	vehicle: CarVehicleType,
): number => {
	// TODO Burayı doldur.
	return 0;
};

const expensiveCarPriceCalculator: CarVehiclePriceCalculatorFuncType = (
	vehicle: CarVehicleType,
): number => {
	// TODO Burayı doldur.
	return 0;
};

const mersaidin_arabasi: CarVehicleType = {
	diameter: 22,
	fuel_type: "diesel",
	wheel_count: 4,
	door_count: 4,
	engine_volume: 3,
};
//console.log("*****************1. consol çıktısı***************");
//console.log("beginnerCarPriceCalculator", mersaidin_arabasi);

//2.callback ile çalışmak
//2.1. fonksiyonun parametresi fonksiyon olması durumu

console.log("*****************function in function start ***************");

type StringConverterFuncType = (
	input_str: string,
	converter_function: (str: string) => string,
) => string;

const upperCase = (str: string): string => {
	return str.toUpperCase();
};

const stringCaseChanger: StringConverterFuncType = (
	str: string,
	f: (str: string) => string,
): string => {
	console.log("dış fonksiyon çalışmaya başladı.");
	str = str.trim();
	return f(str);
};

const result_snake_case = stringCaseChanger(
	"Mehmet Sueda ömer havva",
	(str: string): string => {
		console.log("iç fonksiyon çalışmaya başladı.");
		return str.replaceAll(" ", "_");
	},
);

console.log(">>result 1", result_snake_case);

const result_kebab_case = stringCaseChanger(
	"Mehmet Barış Hatice Mevküt",
	(s: string): string => {
		console.log("kebab case iç fonksiyonu çalışmaya başladı");
		return s.replaceAll(" ", "--");
	},
);

console.log(">>result 2 kebab case", result_kebab_case);

// normal function: isimli fonksiyon
// anonymous functionlar: arrow function ve nameless function.

//normal function tanımlama yöntemi
function example_function() {}

// arrow function tanımlama yöntemi

const example_namelessfunction = () => {};

// nameless function tanımlama yöntemi

const example_nameless_function = function (
	param1: string,
	param2: string,
): string {
	return "example string value";
};

/**
 * Fonksiyon parametresine fonksiyon gönderme işlemini daha önceden sıklıkla
 * yapıyorduk. Örneğin dizilerdeki map, filter, forEach gibi fonksiyonlara
 * fonksiyon göndererek dizi elemanları üzerinde işlem yapılıyordu.
 * Şimdi biz bu mantığı yukarıda kendimiz implement etmiş olduk.
 */

// 2.2. fonksiyonun dönüş türünün fonksiyon olması durumu

/**
 * React ta hook kuralları
 * 1- hooklar mutlaka bir component içinde kullanılmalı örneğin const dispatch = useDispatch() gibi
 * 2- hooklar mutlaka en üst bölümde yer almalı ve herhangi bir dallanma içerisinde kullanılmamalı.
 * 3- hooklar `use` ifadesiyle başlar ve fonksiyon isimleri camel case olmalıdır(yani `use` ifadesi küçük, sonraki kelimelerin ilk harfi büyük olmalıdır.)
 *
 *
 */

//fonksiyonel programlama dillerinde her fonksiyon bir fonksiyonu çağırabilir. Bu eğer kontrol altında tutulmazsa sürekli biribirlerini çağıran fonksiyonlar yazılması
//problemine sebebiyet verir. Fonksiyonlar sürekli birbirlerini çağırırlarsa sonsuz döngüye girer ve yazılım crash olur.
//function test1() {
//	test2()
//}
//function test2() {
//	test1()
//}
//test1()
//test2()
// yukarıdaki function bir crash örneğidir

/**
 * useState fonksiyonu bir tuple dönderir, ilk değeri değişken 2. değeri ise bir fonksiyondur.
 * const [counter, setCounter] = useState(0) buradaki counter bir değişken, setCounter ise bir fonksiyondur.
 * useState hookunun geri dönüş türü [variable: any, setCounter: Function]
 *
 */

////////////////-------------SENARYO: useDispatch hook'unu tanımlayın ----//////////////////

type DispatchFuncType = () => (action: { type: string; payload: any }) => void;

const store = {
	userState: null,
	categoryState: null,
	mobilState: null,
};

const useDispatch: DispatchFuncType = () => {
	return (action: { type: string; payload: any }) => {
		switch (action.type) {
			case "set_user":
				store.userState = action.payload;
				// TODO Tam olarak bu satırda state objesinin güncellendiğinin bilgisini abone olmuş olan diğer
				// componentlere de bildirmek gerekiyor.
				return;

			case "set_category":
				store.categoryState = action.payload;
				// TODO Tam olarak bu satırda state objesinin güncellendiğinin bilgisini abone olmuş olan diğer
				// componentlere de bildirmek gerekiyor.
				return;
			case "set_mobil":
				store.mobilState = action.payload;
				//burada state objesinin güncellendiğini abone olmuş diğer componentlere bildirmemiz gerekiyor.
				return;
			default:
				return;
		}
	};
};

const dispatch1 = useDispatch();
const dispatch2 = useDispatch();
const dispatch3 = useDispatch();

dispatch1({
	type: "set_user",
	payload: { id: 1, firstname: "mehmet özdemir" },
});

console.log(">>STORE:", store);

const ahmet = useDispatch();
ahmet({
	type: "set_category",
	payload: { id: 18793247854, firstname: "Ömer Said" },
});
console.log(">>>>>Ahmet:", store);

dispatch3({
	type: "set_mobil",
	payload: { id: 8, firstname: "aliveli" },
});

console.log(">>>>Dispatch3:", store);

console.log(
	"**************************************USE STATE İMPLEMENTASYONU**************************",
);

let ornek_degisken: any;
ornek_degisken = undefined;
ornek_degisken = 10;
ornek_degisken = null;
ornek_degisken = { id: 1 };
ornek_degisken = true;

// dış fonksiyonun prototipi (type'ı)

type UseStateFunctionType = (
	data?: undefined | any,
) => [any, (param1: any | SetterCurrentStateFuncType) => void];
