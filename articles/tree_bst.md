# Is a Tree a BST?

Say you have the following tree:

```
    4
   / \
  2   5
 / \   
1   3  
```

How would one determine if this tree is a binary search tree?

The answer is to check each subtree's max and min against the root. If the left subtree's max is less than the root's value AND the right subtree's min is greater than the root's value, then the tree is a BST.
To do this efficiently, we must traverse the tree, keeping track of the largest and smallest numbers that a number can be.
This solution is based off the one found at [this GeeksForGeeks article](http://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/).

```javascript
// assume Node structure has .right, .left, and .data methods.
// .right or .left called on a leaf will return null

function isBST(root, maxSeen, minSeen) {
  // base case
  if(root === null) {
    return true;
  }

  // checks if the function has traversed nodes
  // and that the root's value is smaller than the max value seen
  if (maxSeen !== undefined && maxSeen < root.data) {
    return false;
  }

  if (minSeen !== undefined && minSeen > root.data) {
    return false;
  }

  const leftResult = isBST(root.left, root.data - 1, minSeen);
  const rightResult = isBST(root.right, maxSeen, root.data + 1);

  return(leftResult && rightResult);
}
```

In words, this means that isBST looks at a node, and takes arguments relating to other nodes that have been looked at. If the current node is `null`, that means that isBST has gotten all the way down a branch without return false, so that branch fulfills the requirements of a BST. The algorithm then looks at maxSeen and minSeen. If one is undefined, that means either that we are looking at the first node (too early to disqualify) or are going down the other branch (we don't need to keep track of the minimum on the left branch) and we can skip that condition. If the correct condition exists, we check if the root (the current node) is greater than the maximum value seen below it, or smaller than the minimum seen below it. How do we find those values? The next lines call the function recursively on each of the root's children. For the left subtree, the new maximum is defined as the parent's value - 1. For the right subtree, the new minimum is defined as the parent's value + 1.
