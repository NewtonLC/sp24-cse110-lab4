1. The bug was that num1 and num2 are concatenated as strings, instead of the numbers being added together.
2. To fix it, I used the Number() function to convert num1 and num2 into numbers.
   Before that though, I checked that if num1 or num2 couldn't convert to numbers, then the function would return NaN instead.
