class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value) {
    if (value === this.value) return this;
    if (this.left && value < this.value) return this.left.getNodeByValue(value);
    if (this.right && value > this.value) return this.right.getNodeByValue(value);
    return null;
  }

  // In a DFS you start from a given node (usually the root) and traverse as far as you can down. When
  // you reach a node, which has no children to visit or all nodes on its path have been visited, you start
  // backtracking.Let's take a look at how this works.

  depthFirstTraversal() {
    if (this.left) this.left.depthFirstTraversal();
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) this.right.depthFirstTraversal();
  }
}

module.exports = BinaryTree;

// Breadth - first search works across the rows of a tree.

// So the top row will be handled 1st, then the 2nd row, and so on.

// The tree is visited level by level.In order to carry out a BFS, you need a "first-in, first-out"(FIFO) queue so
// you can store all the siblings in the queue and process them in the correct order.When you visit a node you add
// it to the queue.The nodes are then removed from the queue, and their children are visited, adding more values onto the queue.

// The runtime for this is O(n) because each node needs to be visited once.
