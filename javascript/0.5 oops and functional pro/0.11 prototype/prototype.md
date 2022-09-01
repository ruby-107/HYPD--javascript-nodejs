

prototype--> every function has a prooperty called prototype.

By defalut this property is empty you can add properties and method do it.

javascrpits has a properties based inheritance

suppose there is a function X. when you create a another function that is inherihed from X, it will inheried the 
methods and propertied defined in X's prototype.

What is difference between __ proto __ and prototype?
Image result
prototype is a property of a Function object. It is the prototype of objects constructed by that function. __proto__ is an internal property of an object, pointing to its prototype. Current standards provide an equivalent Object