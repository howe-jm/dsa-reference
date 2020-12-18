// Hash map: A key-value store that uses an array and a hashing function to save and retrieve values.
// Key: The identifier given to a value for later retrieval.
// Hash function: A function that takes some input and returns a number.
// Compression function: A function that transforms its inputs into some smaller range of possible outputs.

// Recipe for saving to a hash table:
// - Take the key and plug it into the hash function, getting the hash code.
// - Modulo that hash code by the length of the underlying array, getting an array index.
// - Check if the array at that index is empty, if so, save the value (and the key) there.
// - If the array is full at that index continue to the next possible position depending on your collision strategy.

// Recipe for retrieving from a hash table:
// - Take the key and plug it into the hash function, getting the hash code.
// - Modulo that hash code by the length of the underlying array, getting an array index.
// - Check if the array at that index has contents, if so, check the key saved there.
// - If the key matches the one you're looking for, return the value.
// - If the keys don't match, continue to the next position depending on your collision strategy.

const LinkedList = require('./LinkedList');
const Node = require('./Node');
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
  }

  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    const linkedList = this.hashmap[arrayIndex];
    console.log(`Storing ${value} at index ${arrayIndex}`);
    if (linkedList.head === null) {
      linkedList.addToHead({ key, value });
      return;
    }
    let current = linkedList.head;
    while (current) {
      if (current.data.key === key) {
        current.data = { key, value };
      }
      if (!current.next) {
        current.next = new Node({ key, value });
        break;
      }
      current = current.next;
    }
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    let current = this.hashmap[arrayIndex].head;
    while (current) {
      if (current.data.key === key) {
        console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
        return current.data.value;
      }
      current = current.next;
    }
    return null;
  }
}

module.exports = HashMap;
