// Concept of generic
function print<T>(value: T): T {
  console.log(value, typeof value);
  return value;
}

print("Hello, World!"); // string
print(42); // number
print<number[]>([1, 2, 3]); // number[]
print<{ id: number; name: string }>({ id: 1, name: "John Doe" });

// Generic function with multiple type parameters
function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const users = { id: 1, name: "John Doe" };
const address = { street: "123 Main St", city: "Anytown" };
const merged = mergeObjects(users, address);
console.log(merged); // { id: 1, name: 'John Doe', street: '123 Main St', city: 'Anytown' }

// Concept of generic types
/*
 * Generic types allow you to define a type that can work with any data type.
 * This is useful for creating reusable components or functions that can handle different types of data.
 *
 * Example: Creating a generic type for a box that can hold any type of content.
 */
type MystryBox<T> = {
  content: T;
};

const numberBox: MystryBox<number> = {
  content: 42,
};
const stringBox: MystryBox<string> = {
  content: "Hello, World!",
};
const userBox: MystryBox<{ id: number; name: string }> = {
  content: { id: 1, name: "John Doe" },
};

const printBoxContent = <T>(box: MystryBox<T>): T => {
  console.log(box.content, typeof box.content);
  return box.content;
};

printBoxContent(numberBox); // 42
printBoxContent(stringBox); // Hello, World!
printBoxContent(userBox); // { id: 1, name: 'John Doe' }

/*
 * real world example of generic types: like apiresponse type
 * Generic types allow you to define a type that can work with any data type.
 * This is useful for creating reusable components or functions that can handle different types of data.
 *
 * Example: Creating a generic type for an API response that can handle different data types.
 */

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchUser(): Promise<ApiResponse<{ id: number; name: string }>> {
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}

async function fetchProduct(): Promise<
  ApiResponse<{ id: number; name: string; price: number }>
> {
  const response = await fetch("https://api.example.com/product");
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
}

/*
 * Optimize this apiresponse example with more generic types and optimization.
 */

const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
};

async function main() {
  // const user = await fetchUser();
  // console.log(user.data);

  // const product = await fetchProduct();
  // console.log(product.data);

  const user = await fetchData<{ id: number; name: string }>(
    "https://api.example.com/user"
  );
  console.log(user.data);

  const product = await fetchData<{
    id: number;
    name: string;
    price: number;
  }>("https://api.example.com/product");
  console.log(product.data);
}
