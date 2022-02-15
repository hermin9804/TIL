enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "mher",
  age: 25,
  hobbies: ["sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin");
//person.role[1] = 10;

person.role;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
