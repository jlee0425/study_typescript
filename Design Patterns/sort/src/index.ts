import { LinkedList } from './LinkedList';
import { CharactersCollection } from './CharactersCollection';
import { NumbersCollection } from './NumbersCollection';
import { GoodSorter } from './Sorter';

const nc = new NumbersCollection([5, 2, 1, 3, 10]);
const cc = new CharactersCollection('AxheoBj');
const ll = new LinkedList();
ll.add(5050);
ll.add(-2);
ll.add(4);
ll.add(0);

nc.sort();
cc.sort();
ll.sort();

console.log(nc.data);
console.log(cc.data);
ll.print();
