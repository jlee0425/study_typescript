interface Vehicle {
	name: string;
	year: Date;
	broken: boolean;
}

interface Reportable {
	summary(): string;
}

const coke = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} grams of sugar`;
	},
};

const oldCivic = {
	name: 'civic',
	year: new Date(),
	broken: true,
	summary() {
		return 'name';
	},
};

const printInfo = (item: Reportable) => {
	console.log(item.summary());
};

printInfo(oldCivic);
printInfo(coke);
