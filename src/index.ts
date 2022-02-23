import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList/LinkedList';

const numbersCollection = new NumbersCollection([0, -5, 5, 3]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedListCollection = new LinkedList();
linkedListCollection.add(100);
linkedListCollection.add(-1);
linkedListCollection.add(3);
linkedListCollection.add(2);
linkedListCollection.sort();
linkedListCollection.print();