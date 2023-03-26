# Higher_Order_Function-Experiment



    
        Here I have written two different ways to write a programme-

        Tasks to do:
        An array of 5 boxex are given, where in each box there are different number of apples. we have to do 3 tasks on
        this array :
        1. add 2 apples in each boxes
        2. substract 2 apples from each boxes
        3. multiply 2 apples to each boxes

    

    
        for this I have written one programme in RepeatFunction.js :

        here I have written 3 different functions for adding , substracting and multiplication.
        but what the issues I am facing here?
        I am writing same code 3 times. so it is like Repeating same thing. and which is not a good way to write
        efficient programme.
        here we can check that only changing the logic 3 different times will be perfect to return value.

        so to write this code in more optimize way I have to write it the way it is written in HigherOrderFunction.js
        file.
    

    
        In HigherOrderFunction.js file I have used two processes:

        1. Higher Order function
        2. within this Higher Order function write all those three different logics (add, substract, multiply) as
        Callback function.

        here I will just have to write 3 logics in 3 different functions, giving them particular name,
        and after that i will create a FinalCount function (Higher Order Function). and in this function these 3
        functions will be passed as an argument , just like Callback function.
        and after that i will simply return the Higher Order Function(FinalCount) with its particular callback function
        as an argument, whenever it is needed to be called.
    

