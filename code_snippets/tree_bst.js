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
