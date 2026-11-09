# Combining Union and Intersection Types in TypeScript

## Introduction

In TypeScript, Union (`|`) and Intersection (`&`) types are useful features for creating flexible and reusable types. A Union type allows a variable to accept one of several types, whereas an Intersection type combines multiple types into a single type.

## Detailed Discussion

A **Union type (`|`)** means that a value can match either one type or another. For example, a user ID can be either a string or a number.

An **Intersection type (`&`)** combines multiple object types. It requires an object to contain all the properties defined in the combined types.

We can combine both concepts in a practical example. Suppose we are building a user management system where a user can be either an Admin or a Customer, but every user must have basic information.

### Code Example

```ts
type BasicInfo = {
    name: string;
    email: string;
};

type Admin = {
    role: "admin";
    permissions: string[];
};

type Customer = {
    role: "customer";
    totalOrders: number;
};

type User = BasicInfo & (Admin | Customer);

const user: User = {
    name: "Rahim",
    email: "rahim@gmail.com",
    role: "admin",
    permissions: ["manage-users", "delete-users"]
};
```

Here, the intersection (`&`) ensures that every user has basic information, while the union (`|`) allows the user to be either an Admin or a Customer.

## Conclusion

In conclusion, combining Union and Intersection types helps developers create flexible and structured data models. It is especially useful when building real-world applications with different user roles.