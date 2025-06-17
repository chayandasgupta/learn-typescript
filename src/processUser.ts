type user = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  score: number;
};

export function processUserData(users, filterCriteria, fieldsToAggregate) {
  // Step-0: Validate the input
  if (!Array.isArray(users)) {
    throw new TypeError("users must be a non-empty array");
  }

  if (
    typeof filterCriteria !== "object" ||
    Object.keys(filterCriteria).length === 0
  ) {
    throw new TypeError("filterCriteria must be a non-empty object");
  }

  if (!Array.isArray(fieldsToAggregate)) {
    throw new TypeError("fieldsToAggregate must be a non-empty array");
  }
  // Step-1: Filter the users based on filterCriteria
  const filteredUsers = users.filter((user) => {
    return Object.entries(filterCriteria).every(([key, value]) => {
      return user[key] === value;
    });
  });

  // Step-2 : Aggregate the filtered users based on fieldsToAggregate
  const aggregatedUsers = fieldsToAggregate.reduce((acc, field) => {
    acc[field] = filteredUsers.reduce((sum, user) => {
      if (user[field] === undefined || typeof user[field] !== "number") {
        return sum;
      }
      return sum + user[field];
    }, 0);

    return acc;
  }, {});

  // Step-3: Transform the aggregated users
  const transformedUsers = filteredUsers.map((user) => {
    const fullName = [user.firstName, user.lastName]
      .filter((name) => typeof name === "string" && name.trim() !== "")
      .join(" ");

    return {
      id: user.id,
      fullName: fullName,
      ...aggregatedUsers,
    };
  });

  return transformedUsers;
}

const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    score: 90,
  },
  {
    id: 2,
    firstName: "Bob",
    age: 30,
  },
  {
    id: 3,
    firstName: "Chayan",
    lastName: "Das",
    age: 25,
    score: 50,
  },
];

const filterCriteria = { age: 25 };
const fieldsToAggregate = ["score", "age"];

const result = processUserData(users, filterCriteria, fieldsToAggregate);
console.log(result);
