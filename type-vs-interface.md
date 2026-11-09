# Type vs Interface in TypeScript

## Introduction

In TypeScript, `type` aliases and `interface` are two important ways to define data structures. Both help developers describe the shape of objects and improve code readability. However, they have some key differences.

## Detailed Discussion

An **interface** is mainly used to define the structure of objects. It supports inheritance through the `extends` keyword. Another important feature is declaration merging, which allows multiple interfaces with the same name to be combined.

```ts
interface User {
    name: string;
    age: number;
}

interface Admin extends User {
    role: string;
}
```

On the other hand, a **type alias** is more flexible than an interface. It can define object structures, primitive types, union types, intersection types, and tuples.

```ts
type Status = "success" | "error";

type Product = {
    name: string;
    price: number;
};
```

We should generally choose `interface` when defining object structures, especially when inheritance or declaration merging is needed. However, `type` is a better choice when working with unions, tuples, or more complex type definitions.

## Conclusion

In conclusion, both `type` and `interface` are useful in TypeScript. The best choice depends on the project requirements and the developer's needs.