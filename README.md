# Incorrect Null and Undefined Handling in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to handling `null` and `undefined` values.  The function `foo` attempts to handle cases where either input is `null`, but fails to correctly account for `undefined`. This leads to unexpected `NaN` results instead of a more graceful handling of the undefined input.  The solution illustrates the proper way to handle both `null` and `undefined` to prevent this issue.

## Bug Description:
The initial implementation incorrectly only checks for `null` values. When one of the inputs is `undefined`, the addition operation results in `NaN`. This is unexpected and not robust error handling.

## Solution:
The solution utilizes a more robust check using the loose equality operator (`==`) or `typeof` operator to correctly handle both `null` and `undefined` cases.  The solution ensures the function returns `null` as intended when either input is `null` or `undefined`, or performs the addition when both inputs are valid numbers. 