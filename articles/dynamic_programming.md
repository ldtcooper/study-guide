# Dynamic Programming

## What is it?
Breaking problems down into smaller pieces, then storing them to optimize later problem solving.

### Two Paradigms

#### Top-down
  - Build stacks and save work to cache as the problem breaks down
  - Memoization
  - Typical of recursion

#### Bottom-up
  - Uses base cases to build up to larger problems
  - Typical of iteration

#### Fibonacci Example
  - Top down approach creates new cache items as they come up in the Fibonacci sequence
  - Bottom-up approach creates all necessary cache items, then fetches correct element

### Longest Increasing Subsequence
  - Given an array of integers, find the length of the longest increasing subsequence
  - Ex: `[1,5,2,6,10,4,20] => 5` with sequence `[1,2,6,10,20]`
  - Naive Solution: Generate each possible subsequence and, filter for increasing, then check for length.
    - Time complexity: `O(n!)` or higher i.e. pretty bad.
  - Better Solution: Look at each element, and find the largest possible subsequence starting at that element.
    - `[1] => [1]`
    - `[1, 5] => [1, 5]`
    - `[1, 5, 2] => [1, 5] OR [1, 2]`
    - `[1, 5, 2, 6] => [1, 5, 6] OR [1, 2, 6]`
    - `[1, 5, 2, 6, 10] => [1, 5, 6, 10] OR [1, 2, 6, 10]`
    - `[1, 5, 2, 6, 10, 4] => [1, 5, 6, 10] OR [1, 2, 6, 10]`
    - `[1, 5, 2, 6, 10, 4, 20] => [1, 5, 6, 10, 20] OR [1, 2, 6, 10, 20]`
  - At each step, find the longest sequence in cache that ends with something smaller than the new entrant, and cache it. At the end, just do a linear search to return the largest solution.
