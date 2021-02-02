import fs from 'fs';

export interface Reporter {
	print(report: string): void;
}

export class ConsoleReport implements Reporter {
	print(report: string): void {
		console.log(report);
	}
}

export class HTMLReport implements Reporter {
	print(report: string): void {
		const html = `
			<div>
				<h1>Analysis Output</h1>
				<div>${report}</div>
			</div>
		`;

		fs.writeFileSync('report.html', html);
	}
}
