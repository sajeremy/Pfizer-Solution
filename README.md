# Pfizer-Solution
- Time Complexity: O(n), worst case with long string with repeated characters
- Space Complexity: O(n), worst case when string all unique characters

## Approach
- Utilize 2 pointer approach to traverse through string input to identify substring with max number of unique characters
- Store unique characters in set for O(1) look up time and O(1) insertion and deletion
- return the slice of the substring with the max number of unique characters
- error handling handles case if input is not a string

## Function Extension
- Problem can be extended by considering cases where there are mulitple substrings with max unique characters and return array of substrings instead


