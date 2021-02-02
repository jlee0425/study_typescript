/* enum
 * 	- converted to a regular object when going TS -> JS
 *  - primarily used to signal other devs that they are closely reltaed
 *  - used for a small number of fixed set of values
 *  - also when they are known at compile time.
 **/
export enum MatchResult {
	HomeWin = 'H',
	AwayWin = 'A',
	Draw = 'D',
}
