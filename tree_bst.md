#Is a Tree a BST?

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
    const rightResult = isBST(root.right, maxSeen, root.data - 1);

    return(leftResult && rightResult);
  }
```
