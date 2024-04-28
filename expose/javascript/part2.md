1. The console prints out '3'. This is because we used "var" to define i, and variables declared with "var" are either function-scoped or global-scoped. So, i was still defined at line 12, and was equal to 3.
2. The console prints out '150'. Since we used "var" to define discountedPrice, it is function-scoped, and is still defined at line 13. So we print out the current value of discountedPrice, which is 300 * (1-0.5) = 150.
3. The console prints out '150'. Since finalPrice was defined in the same scope as line 14, it doesn't matter that we defined it with "var". It will still be defined at line 14 even though we changed its value in the for loop. The current value of finalPrice at line 14 is Math.round(150 * 100) / 100, which = 150.
4. The function returns the array, [50, 100, 150]. These are the final prices of applying a discount of 0.5 on an array of prices: [100, 200, 300]. The discountPrices function creates a new array and assigns the discount onto each price, before pushing the final price to the array and returning it.
5. ERROR! Because we defined i with "let", i's scope is only within the for loop and it is not visible at line 12.
6. ERROR! Because we defined discountedPrice with "let", its scope is only within the for loop it was defined in and it is not visible at line 13.
7. The console prints out '150'. Since finalPrice was defined in the same scope as line 14, it will still be defined at line 14, even though we changed its value inside of the for loop.
8. The function returns the array, [50, 100, 150]. Similarly to question 4, the function applied the discount of 0.5 on the three prices, then pushed those prices into a new array and returned it. Since the new array's scope is the function itself, it can be returned just fine.
9. ERROR! Similarly to question 5, because we defined i with "let", i's scope is only within the for loop and it is not visible at line 11.
10. The console prints out '3'. The length variable is defined in the function's scope, which is the same scope as line 12. There is no error here because length is set to prices.length, which is 3, and the function does not try to change it.
11. The function returns the array, [50, 100, 150]. The discounted array is a const, meaning it cannot be reassigned, but its elements can still be modified. So there isn't an error when discountedPrice is pushed into the array, and the function behaves as expected.
12.
    A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]