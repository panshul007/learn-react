# .reduce

```javascript
  var scores = [89, 76, 47, 95]
  var initialValue = 0
  var reducer = function (accumulator, item) {
    return accumulator + item
  }
  var total = scores.reduce(reducer, initialValue)
  var average = total / scores.length
```

You'll notice .reduce takes in two values, a callback function and an initial value.

The callback (reducer) function has two parameters. This is where .reduce can get a little weird if you're not used to it.

The very first time the reducer function is called, it's going to be passed the initialValue you gave it (the 2nd argument to .reduce) and the first item in the actual array. So in our example above the first time that our reducer function runs, accumulator is going to be 0 and item is going to be 89. Remember, the goal is to transform an array into a single value. We currently have two numbers, 0 and 89, and are goal is to get that to one value. Because we're wanting to find the sum of every item in the array, we'll add 89 + 0 to get 89. That brings up a very important step. The thing that gets returned from the reducer function will then be passed as the accumulator the next time the function runs. So when reducer runs again, accumulator will be 89 and item will now be the second item in the array, 76. This pattern continues until we have no more items in the array and we get the summation of all of our reducer functions, which is 307

```javascript
var votes = [
  'tacos',
  'pizza',
  'pizza',
  'tacos',
  'fries',
  'ice cream',
  'ice cream',
  'pizza'
]
var initialValue = {}
var reducer = function(tally, vote) {
  if (!tally[vote]) {
    tally[vote] = 1;
  } else {
    tally[vote] = tally[vote] + 1;
  }
  return tally;
}
var result = votes.reduce(reducer, initialValue) // {tacos: 2, pizza: 3, fries: 1, ice cream: 2}
```

You have an array of foods and you want to transform that to an object whose keys are the food itself and whose values are how many votes that food received.