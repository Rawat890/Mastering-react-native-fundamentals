TYPESCRIPT 

TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript. Developed by Microsoft, its primary goal is to help developers write more robust and maintainable code, especially in large-scale applications, by catching errors during development (compile time) rather than at runtime. 

* It is a compiled language, meaning TypeScript code is first converted into JavaScript before execution.
* Strong typing reduces runtime errors.
* It makes code more predictable, maintainable, and easier to debug.

Limitations of TypeScript
Despite its power, TypeScript has some limitations to consider:

* Compilation Overhead: Must be compiled into JavaScript before execution.
* Learning Curve: Developers must learn types, generics, and advanced concepts.
* Configuration Complexity: Large projects may require detailed tsconfig.json setup.
* Extra Build Step: Slower feedback loop compared to plain JavaScript.

We need compiler that converts the typescript to JavaScript
sudo npm i -g typescript

CONVERSION OF TS TO JS - 
tsc index.js (targrt version)
tsc index.js --target es2016

JavaScript	                                                                                               TypeScript
A lightweight, interpreted scripting language used for web development.	               A superset of JavaScript that adds static typing and advanced features.
Dynamically typed (types are checked at runtime).	                                     Statically typed (optional) – types are checked at compile time.
Runs directly in browsers or Node.js (no compilation needed).	                         Must be compiled to JavaScript using the TypeScript compiler (tsc).
Errors appear only at runtime.	                                                       Errors are caught at compile time, reducing runtime bugs.
Prototype-based object-oriented programming.	                                         Class-based object-oriented programming with interfaces, access modifiers, generics.
Supports ES6+ features depending on the environment.	                                 Supports all modern ES6+ features, plus extra TypeScript-only features.
Runs everywhere (browser, Node.js, servers).	                                         Used in large-scale applications, compiled to JS for execution.


tsc --init  (initialize the tsconfig.json)
has compliler options, use strict mode etc options that is checked when converting ts to js

The 'any' and 'unknown' types in ts are both used to represent value of any type
In 'ANY', no type checking is done.
But 'UNKNOWN', is safer than any, because you cannot perform operations on unknown value without first narrowing its types through type checks.

We have to consume value i.e type of (value === 'string'), only than allows performing operations

Primitive data types - NSBUN
Non-Primitive data types - OAFDR

let arr: (string | number)[] =['rohit',2,3,5] ----------------> (union)

Tuples - Fixed size array (below has 2 elements)
let tuple:[string, number] = ["rohit", 45]

*************** COMPILE TIME *****************
It refers to the phase when the source code is translated into machine code or an intermediate format like bytecode.

Various programming languages - 
source code --->compile---> machine code ---> run by cpu
Java source code --->compile---> byte code ---> run by cpu

Compile time errors include -
Syntax errors like missing semi-colon
Type mismatches 

HERE COMES THE JAVASCRIPT LANGUAGE - interpreted langugage that is no compilation option

[let x=10
let y=90;         
let sum = x + y    ----> one line is passed to execute in CPU that makes the process slower
console.log(sum)]

Errors detected in this phase are runtime error - 
Divide by 0, running out of memory, accessing undefined variable


The main differences between type and interface in TypeScript are:

Key Differences
1. DECALARATION MERGING
Interfaces support declaration merging (automatically combining multiple declarations with the same name)

Types do not support declaration merging

typescript
// Interface merging
interface User {
  name: string;
}
interface User {
  age: number;
}
// Result: User = { name: string; age: number; }

// Type - Error: Duplicate identifier
type User = { name: string; };
type User = { age: number; }; // ❌ Error

2. EXTENDS/IMPLEMENTS
Interfaces can extend other interfaces and classes

Types use intersection (&) for composition

typescript
// Interface extends
interface Animal { name: string; }
interface Dog extends Animal { breed: string; }

// Type intersection
type Animal = { name: string; };
type Dog = Animal & { breed: string; };

3. COMPUTED PROPERTIES
Types can use computed properties (mapped types, conditional types, etc.)

Interfaces cannot use computed properties

typescript
// Type with computed properties
type Keys = 'name' | 'age';
type Person = { [K in Keys]: string }; // ✅ Works

// Interface - ❌ Cannot use mapped types
interface Person { [K in Keys]: string; } // Error
4. Primitives, Unions, Tuples
Types can represent primitives, unions, and tuples

Interfaces cannot represent primitives or unions directly

typescript
// Type can be anything
type ID = string | number;  // Union
type Point = [number, number];  // Tuple
type Name = string;  // Primitive alias

// Interface must represent an object
interface ID = string | number;  // ❌ Error
When to Use What
Use Interface when:
Defining the shape of objects (especially for public APIs)

You need declaration merging

Working with classes (implements)

Building object-oriented code

Use Type when:
Working with unions, intersections, tuples, or primitives

Using mapped/conditional types

Need computed properties

Creating utility types

Practical Example
typescript
// Interface - good for objects
interface User {
  id: number;
  name: string;
}

// Type - good for unions
type UserRole = 'admin' | 'user' | 'guest';

// Interface with class
class Admin implements User {
  id: 1;
  name: 'Admin';
}

// Type with intersection
type AdminUser = User & { role: 'admin' };
Both can often be used interchangeably for simple object types, but understanding these differences helps you choose the right tool for your specific use case.

Quick Rule Developers Use
interface → object shapes
type → unions, primitives, advanced types

🔟 Comparison Table
Feature	                 interface	             type
Objects	                    ✅                   	✅
Union types	                ❌	                    ✅
Primitive alias	            ❌	                    ✅
Tuples	                    ❌	                    ✅
Declaration merging	        ✅	                    ❌
Extending                 	✅	                    ✅
✅ Simple Rule for React Native Projects

Use:

interface

Redux state

API models

component props

Example:

interface ProfileProps {
  name: string
  age: number
}

Use:

type

union values

utility types

complex compositions

Example:

type Gender = "Male" | "Female" | "Other"