type ID = string | number;
type Admin = {
  id: ID;
  name: string;
  role: "admin";
  fullControll: boolean;
};

type Manager = {
  id: ID;
  name: string;
  role: "manager";
};

type User = Admin | Manager;

function printUser2(user: User) {
  if (user.role === "admin") {
    console.log("Full Control:", user.fullControll);
  } else {
    console.log("Role:", user.role);
  }
}

printUser2({ id: 1, name: "Alice", role: "admin", fullControll: true });
printUser2({ id: 2, name: "Bob", role: "manager" });
 