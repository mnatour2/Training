const users = [
  {
    id: 1,
    username: "Mohammad_Natour",
    email: "natour@vatrin.com",
    mobileNumber: "0598220091",
  },
  {
    id: 2,
    username: "Abed_Murrar",
    email: "abed.murrar@vatrin.com",
    mobileNumber: "0598000000",
  },
  {
    id: 3,
    username: "Majdi_Majed",
    email: "majdi.majed@vatrin.com",
    mobileNumber: "0598111111",
  },
];
const tableBody = document.querySelector("tbody");

tableBody.innerHTML = users
  .map(
    (user) =>
      `<tr><td>${user.id}</td><td>${user.username}</td><td>${user.email}</td><td>${user.mobileNumber}</td></tr>`
  )
  .reduce((prev, curr) => prev + curr);
