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
console.log("*****************1. consol çıktısı***************");
console.log("beginnerCarPriceCalculator", mersaidin_arabasi);

// 2. Callback ile çalışmak
// 2.1. Fonksiyon parametresinde fonksiyon olması durumu

type StringConverterFuncType = (
	str: string,
	func: (str: string) => string,
) => string;
