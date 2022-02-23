import { Sorter } from '../Sorter';
import { Node } from './Node';

export class LinkedList extends Sorter{
    head: Node | null = null;
    nodeCount: number = 0;

    get length():number {
        return this.nodeCount;
    }

    add(value: number): void {
        let newNode = new Node(value);
        this.nodeCount = this.length+1;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while(tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }

    at(index: number): Node {
        if(!this.head) {
            throw new Error('Index out of bounds');
        }
        let counter = 0;
        let node: Node | null= this.head;
        while(node) {
            if(counter === index) {
                return node;
            }
            node = node.next;
            counter++;
        }
        throw new Error('Indext out of bounds');
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }

    swap(leftIndex: number, rightIndex: number): void {
        let leftNode: Node = this.at(leftIndex);
        let rightNode: Node = this.at(rightIndex);
        let rightMostNode: Node | null = rightNode.next;
        let leftMostNode: Node | null = null;
        leftNode.next = rightMostNode;
        rightNode.next = leftNode;
        if (leftIndex === 0) {
            this.head = rightNode;
            return;
        }
        leftMostNode = this.at(leftIndex - 1);
        leftMostNode.next = rightNode;
    }

    print(): void {
        let node: Node | null = this.head;
        while(node) {
            console.log(node.data);
            node = node.next;
        }
    }
}