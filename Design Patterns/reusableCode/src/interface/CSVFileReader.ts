import fs from 'fs';

export class CsvFileReader {
	data: string[][] = [];

	constructor(public fileName: string) {}

	read(): void {
		const matches = fs.readFileSync(this.fileName, {
			encoding: 'utf-8',
		});
		this.data = matches
			.split('\n')
			.map((row: string): string[] => row.split(','));
	}
}
