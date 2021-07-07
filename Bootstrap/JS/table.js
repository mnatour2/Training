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

var myEditModal = new bootstrap.Modal(document.getElementById("editModal"), {
  keyboard: false,
});
var myDeleteModal = new bootstrap.Modal(
  document.getElementById("deleteModal"),
  {
    keyboard: false,
  }
);
const tableBody = document.querySelector("tbody");

function showDeleteModal(id) {
  const spanDelete = document.querySelector("#deleteModal .userId");
  const spanDelete2 = document.querySelector("#deleteModal .username");
  const confirmBtn = document.querySelector("#confirmDeleteBtn");

  spanDelete.textContent = id;
  spanDelete2.textContent = users.find((user) => user.id == id).username;
  confirmBtn.onclick = confirmDelete(id);
  myDeleteModal.show();
}

function confirmDelete(id) {
  const person = users.find((user) => user.id == id);
  const index = users.indexOf(users.push(person));
  users.splice(index, 1);
}

const getActionCol = function (id) {
  return `<button class="btn btn-outline-warning btn-sm me-2 btn-edit" title="Edit" onclick="">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-edit" class="svg-inline--fa fa-user-edit fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h274.9c-2.4-6.8-3.4-14-2.6-21.3l6.8-60.9 1.2-11.1 7.9-7.9 77.3-77.3c-24.5-27.7-60-45.5-99.9-45.5zm45.3 145.3l-6.8 61c-1.1 10.2 7.5 18.8 17.6 17.6l60.9-6.8 137.9-137.9-71.7-71.7-137.9 137.8zM633 268.9L595.1 231c-9.3-9.3-24.5-9.3-33.8 0l-37.8 37.8-4.1 4.1 71.8 71.7 41.8-41.8c9.3-9.4 9.3-24.5 0-33.9z"></path></svg>
    </button><button class="btn btn-outline-danger btn-sm btn-delete" title="Delete" onclick="showDeleteModal(${id})">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-minus" class="svg-inline--fa fa-user-minus fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M624 208H432c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
    </button>`;
};

tableBody.innerHTML = users
  .map(
    (user) =>
      `<tr><td>${user.id}</td><td>${user.username}</td><td>${
        user.email
      }</td><td>${user.mobileNumber}</td><td>${getActionCol(user.id)}</td></tr>`
  )
  .reduce((prev, curr) => prev + curr);
