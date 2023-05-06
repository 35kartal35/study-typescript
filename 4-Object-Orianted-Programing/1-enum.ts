type WeekOfDaysType = "mon" | "tue" | "wed";

enum WeekOfDaysEnum {
	Monday,
	Tuesday,
	Wednesday,
	Thursday,
	Friday,
	Saturday,
	Sunday,
}

let today: WeekOfDaysEnum = WeekOfDaysEnum.Friday;
console.log("today", today);

let tomorrow: WeekOfDaysEnum = WeekOfDaysEnum.Sunday;
console.log("tomorrow", tomorrow);
