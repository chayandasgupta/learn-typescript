type User = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  score: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    position: {
      latitude: number;
      longitude: number;
    };
  };
};
D:\works\personal\typescript\learn\app\src\typeAlias.ts
