// Ex: 1
type Person = {
  id: number;
  name: string;
  age: number;
};

type Employee = Person & {
  salary: number;
};

type Customer = Person & {
  balance: number;
};

const customUser: Customer = {
  id: 1,
  name: "John Doe",
  age: 25,
  balance: 1000,
};

const customerUser2: Employee = {
  id: 1,
  name: "John Doe",
  age: 25,
  salary: 5000,
};

// Ex: 2
type InputType = "text" | "number" | "file" | "email";

type BaseProps = {
  id: string;
  className?: string;
};

type ButtonProps = BaseProps & {
  onClick: () => void;
};

type InputProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: InputType;
};

type LinkProps = BaseProps & {
  href: string;
};
