# this keyword

* Implicit Binding
* Explicit Binding
* new Binding
* window Binding

## Implicit Binding
** Left of the Dot at call time. **

### Example 1
```javascript
var me = {
  name: 'Tyler',
  age: 25,
  sayName: function () {
    console.log(this.name);
  }
};

me.sayName();
```
In the above example, left of the Dot is `me`, so in the function sayName, `this.name` is synonymous to `me.name`

### Example 2
```javascript
var sayNameMixin = function (obj) {
  obj.sayName = function () {
    console.log(this.name);
  };
};

var me = {
  name: 'Tyler',
  age: 25
};

var you = {
  name: 'Joey',
  age: 21
};

sayNameMixin(me);
sayNameMixin(you);

me.sayName(); // should print `Tyler`
you.sayName(); // should print `Joey`
```

In the above example:
* first case `me`
  * prints `Tyler`, because left of dot is `me`, so `this.name` => `me.name`
* second case `you`
   * prints `Joey`, because left of dot is `you`, so `this.name` => `you.name`

### Example 3
```javascript
var Person = function (name, age) {
  return {
    name: name,
    age: age,
    sayName: function () {
      console.log(this.name);
    },
    mother: {
      name: 'Stacey',
      sayName: function () {
        console.log(this.name);
      }
    }
  };
};

var jim = Person('Jim', 42);
jim.sayName(); // should print `Jim`
jim.mother.sayName(); // should print `Stacey`
```

In the above example:
* first case `jim.sayName()`, should print `Jim`, as left to dot is `jim`, so `this.name` => `jim.name`
* second case `jim.mother.sayName()`, should print `Stacey`, as left to dot is `jim.mother`, so `this.name` => `jim.mother.name`

## Explicit Binding
** call, apply, bind **

### Example 1 (call)
```javascript
var sayName = function () {
  console.log('My name is ' + this.name);
}

var stacey = {
  name: 'Stacey',
  age: 34
};

sayName.call(stacey);
```

In the above example:
* `sayName` is function defined in the global scope.
* every function has a `call` method, that invokes the method with first parameter as context.
* here `sayName` is invoked with context `stacey`, so `this.name` => `stacey.name`.

### Example 2 (call with parameters)
This is an enhancement to `Example 1`
```javascript
var sayName = function (lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', '+ lang3);
}

var stacey = {
  name: 'Stacey',
  age: 34
};

var langs = ['javascript', 'java', 'python'];

sayName.call(stacey, langs[0], langs[1], langs[2]);
```

In the above example:
* `call` method of a function has first parameter as `context`, followed by all parameters passed to the function as normal parameters.

### Example 3 (apply)
This is an enhancement to `Example 2`
```javascript
var sayName = function (lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', '+ lang3);
}

var stacey = {
  name: 'Stacey',
  age: 34
};

var langs = ['javascript', 'java', 'python'];

sayName.apply(stacey, langs);
```

In the above example:
* `apply` method of a function, takes in the context as first parameter, binds the function to this context.
* followed by an array or parameters, which it splits as separate parameters while passing to the function.

### Example 4 (bind)
```javascript
var sayName = function (lang1, lang2, lang3) {
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', '+ lang3);
}

var stacey = {
  name: 'Stacey',
  age: 34
};

var langs = ['javascript', 'java', 'python'];

var newFn = sayName.bind(stacey, langs[0], langs[1], langs[2]);
newFn();
```

In the above example, its like the call example but with bind:
* It does everything like call but:
  * `call` and `apply` method invokes the function immediately.
  * `bind` method does everything like `call`, but returns a new function, which can be invoked later.  

## new Binding

```javascript
var Animal = function (color, name, type) {
  //this = {}
  this.color = color;
  this.name = name;
  this.type = type;
};

var zebra = new Animal('black and white', 'Zorro', 'Zebra');
```

* when a function is invoked a `new` keyword, it creates a `this` object and binds it to the instance. so `this.color` => `zebra.color`.

## window Binding
```javascript
var sayAge = function () {
  'use strict';
  console.log(this.age);
}

var me = {
  age: 25
};

sayAge();
window.age = 35;
sayAge();
```

* in the first case we invoke `sayAge` without any context for the `this` keyword to refer, so we will get `undefined`. (we need to remove the `use strict` to get undefined. As it makes the function intelligent and Type Safe.)
  * so when there is no context specified for `this` keyword, it binds to the `window` object by default.
* in the second case when we `window.age = 35`, then `sayAge()` method prints `35`, as now the window object has a value.
