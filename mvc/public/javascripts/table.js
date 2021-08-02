var myModal = new bootstrap.Modal("#yee");

function editForm(id, user) {
  return `
  <form id="edit-form">
    <div class="form-floating mb-2">
      <input type="text" class="form-control" id="floatingID" placeholder="id" value="${id}" disabled>
      <label for="floatingID">ID</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" name="username" class="form-control" id="floatingUsername" placeholder="admin" value="${user.username}">
      <label for="floatingUsername">Username</label>
    </div>
    <div class="form-floating mb-2">
      <input type="email" name="email" class="form-control" id="floatingEmail" placeholder="admin@vatrin" value="${user.email}">
      <label for="floatingEmail">Email</label>
    </div>
    <div class="form-floating">
      <input type="text" name="mobile" class="form-control" id="floatingMobile" placeholder="0598220091" value="${user.mobile}">
      <label for="floatingMobile">Mobile Number</label>
    </div>
  </form>`;
}

function deleteForm(id, user) {
  return `<form>
    <div class="form-floating mb-2">
      <input type="text" class="form-control" id="floatingID" placeholder="${id}" value="${id}" disabled>
      <label for="floatingID">ID</label>
    </div>
    <div class="form-floating mb-2">
      <input type="text" name="username" class="form-control" id="floatingUsername" placeholder="admin" value="${user.username}" disabled>
      <label for="floatingUsername">Username</label>
  </form>`;
}

function sendRequest(method, url, body, callback) {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = callback;

  xhttp.open(method, url, true);
  if (body) {
    xhttp.setRequestHeader("content-type", "application/json");
    xhttp.send(JSON.stringify(body));
  } else {
    xhttp.send();
  }
}

function handleRes() {
  if (this.status === 200) {
    myModal.hide();
  } else {
    alert("something went wrong");
  }
}

function editContent(id) {
  sendRequest(
    "PATCH",
    `/users/${id}`,
    Object.fromEntries(new FormData(document.getElementById("edit-form"))),
    function () {
      handleRes.call(this);
      if (this.status === 200) {
        const user = JSON.parse(this.responseText);
        const userRow = document.querySelector(`tr[data-user-id="${id}"]`);
        const usernameCol = userRow.querySelector('td[data-column="username"]');
        usernameCol.textContent = user.username;
        const emailCol = userRow.querySelector('td[data-column="email"]');
        emailCol.textContent = user.email;
        const mobileCol = userRow.querySelector('td[data-column="mobile"]');
        mobileCol.textContent = user.mobile;
      } else {
        alert("something went wrong");
      }
    }
  );
}

function deleteContent(id) {
  sendRequest("DELETE", `/users/${id}`, null, function () {
    handleRes.call(this);
    if (this.status === 200) {
      const userRow = document.querySelector(`tr[data-user-id="${id}"]`);
      userRow.remove();
    } else {
      alert("something went wrong");
    }
  });
}

function showModal(id, type) {
  document
    .getElementById("modalBtn")
    .classList.remove("btn-success", "btn-danger");

  if (type == true) {
    sendRequest("GET", `/users/${id}`, null, function () {
      const user = JSON.parse(this.responseText);
      document.getElementById("modalLabel").innerHTML = "Edit";
      document.querySelector(".modal-body").innerHTML = editForm(id, user);
      document.getElementById("modalBtn").classList.add("btn-success");
      document.getElementById("modalBtn").innerHTML = "Submit";
      document
        .getElementById("modalBtn")
        .setAttribute("onclick", `editContent(${id})`);
    });
  } else {
    sendRequest("GET", `/users/${id}`, null, function () {
      const user = JSON.parse(this.responseText);
      document.getElementById("modalLabel").innerHTML = "Delete";
      document.querySelector(".modal-body").innerHTML = deleteForm(id, user);
      document.getElementById("modalBtn").classList.add("btn-danger");
      document.getElementById("modalBtn").innerHTML = "Delete";
      document
        .getElementById("modalBtn")
        .setAttribute("onclick", `deleteContent(${id})`);
    });
  }
  myModal.show();
}
