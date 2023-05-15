# Java Data Types

In Java, data types define the type and size of values that can be stored in variables. Understanding data types is essential for declaring variables and performing operations on them. Java has two categories of data types: primitive types and reference types.

## Primitive Data Types

Java provides eight primitive data types, which are divided into four categories: integer, floating-point, character, and boolean.

### Integer Types

Integer types are used to store whole numbers without a fractional component. The four integer types in Java are:

- `byte`: Represents signed 8-bit integers with a range of -128 to 127.
- `short`: Represents signed 16-bit integers with a range of -32,768 to 32,767.
- `int`: Represents signed 32-bit integers with a range of -2,147,483,648 to 2,147,483,647.
- `long`: Represents signed 64-bit integers with a range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

### Floating-Point Types

Floating-point types are used to store numbers with a fractional component. The two floating-point types in Java are:

- `float`: Represents single-precision 32-bit floating-point numbers.
- `double`: Represents double-precision 64-bit floating-point numbers.

### Character Type

The `char` data type is used to store a single character or letter. It represents Unicode characters and is stored in 16 bits.

### Boolean Type

The `boolean` data type is used to store either `true` or `false` values. It is used in conditional expressions and logical operations.

## Reference Data Types

Reference data types are used to refer to objects. They include classes, interfaces, arrays, and enumerated types. Reference types are declared using class names, and variables of reference types store references to objects in memory.

### Classes

Classes are reference types that define objects with attributes (fields) and behaviors (methods). They serve as blueprints for creating objects. For example:

```java
public class Person {
    String name;
    int age;
}
```

### Interfaces

Interfaces are reference types that define a contract for classes to implement. They specify methods that must be implemented by classes that implement the interface. For example:

```java
public interface Printable {
    void print();
}
```

### Arrays

Arrays are used to store multiple values of the same type in a single variable. They can be of any data type, including primitive types and reference types. For example:

```java
int[] numbers = {1, 2, 3, 4, 5};
String[] names = {"Alice", "Bob", "Charlie"};
```

### Enumerated Types

Enumerated types, or enums, define a set of named values. They are used to represent a fixed number of possible values. For example:

```java
public enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
```

## Type Inference

Java also provides type inference through the `var` keyword, introduced in Java 10. It allows the compiler to infer the type of a variable based on the assigned value. For example:

```java
var age = 25;  // Inferred as int
var name = "Alice";  // Inferred as String
```

Type inference can improve code readability and reduce redundancy when the type is already evident from the assigned value.

These
