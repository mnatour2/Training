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

// function sendRequest(method, url, body, callback) {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = callback;

//   xhttp.open(method, url, true);
//   if (body) {
//     xhttp.setRequestHeader("content-type", "application/json");
//     xhttp.send(JSON.stringify(body));
//   } else {
//     xhttp.send();
//   }
// }

function sendRequest(
  method,
  url,
  body,
  successCallback = null,
  errorCallback = null
) {
  $.ajax({
    url,
    data: body,
    success: successCallback,
    error: errorCallback,
    dataType: "json",
    type: method,
  });
}

function editContent(id) {
  sendRequest(
    "PATCH",
    `/users/${id}`,
    Object.fromEntries(new FormData($("#edit-form")[0])),
    function (user) {
      myModal.hide();
      $(`tr[data-user-id="${id}"] td[data-column="username"]`).text(
        user.username
      );
      $(`tr[data-user-id="${id}"] td[data-column="email"]`).text(user.email);
      $(`tr[data-user-id="${id}"] td[data-column="mobile"]`).text(user.mobile);
    },
    function () {
      alert("something went wrong");
    }
  );
}

function deleteContent(id) {
  sendRequest(
    "DELETE",
    `/users/${id}`,
    null,
    function () {
      myModal.hide();
      $(`tr[data-user-id="${id}"]`).remove();
    },
    function (error) {
      console.log(error);
      alert("something went wrong");
    }
  );
}

function showModal(id, type) {
  $("#modalBtn").removeClass(["btn-success", "btn-danger"]);

  if (type == true) {
    sendRequest("GET", `/users/${id}`, null, function (user) {
      $("#modalLabel").text("Edit");
      $(".modal-body").html(editForm(id, user));
      $("#modalBtn").addClass("btn-success");
      $("#modalBtn").text("Submit");
      $("#modalBtn").attr("onclick", `editContent(${id})`);
    });
  } else {
    sendRequest("GET", `/users/${id}`, null, function (user) {
      $("#modalLabel").text("Delete");
      $(".modal-body").html(deleteForm(id, user));
      $("#modalBtn").addClass("btn-danger");
      $("#modalBtn").text("Delete");
      $("#modalBtn").attr("onclick", `deleteContent(${id})`);
    });
  }
  myModal.show();
}
