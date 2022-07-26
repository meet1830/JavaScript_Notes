let formName = document.getElementById("formName");
let formEmail = document.getElementById("formEmail");
let formPhone = document.getElementById("formPhone");
let formMembers = document.getElementById("formMembers");
let formAddress = document.getElementById("formAddress");
let validName, validEmail, validPhone, validMembers, validAddress;

formName.addEventListener("blur", () => {
  let regex = /([a-z A-Z]){2,30}\s([a-z A-Z]){2,30}\s([a-z A-Z]){2,30}/;
  let str = formName.value;
  let result = regex.test(str);
  if (result) {
    // console.log("Name Value OK");
    validName = true;
    formName.classList.remove('is-invalid');
    formName.classList.add('is-valid');
  } else {
    // console.log("Name Value invalid");
    validName = false;
    formName.classList.add('is-invalid');
    formName.classList.add('is-invalid');
  }
});
formEmail.addEventListener("blur", () => {
  let regex = /([a-z A-Z 0-9 _ . -])@([a-z A-Z]).([a-z A-Z])/;
  // let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  let str = formEmail.value;
  let result = regex.test(str);
  if (result) {
    // console.log("email Value OK");
    validEmail = true;
    formEmail.classList.remove('is-invalid');
    formEmail.classList.add('is-valid');
  } else {
    // console.log("email Value invalid");
    validEmail = false;
    formEmail.classList.remove('is-valid');
    formEmail.classList.add('is-invalid');
  }
});
formPhone.addEventListener("blur", () => {
  let regex = /([0-9]){1,3}\s[0-9]([0-9]){9}$/;
  let str = formPhone.value;
  let result = regex.test(str);
  if (result && str.length == 14) {
    // console.log("phone Value OK");
    validPhone = true;
    formPhone.classList.remove('is-invalid');
    formPhone.classList.add('is-valid');
  } else {
    // console.log("phone Value invalid");
    validPhone = false;
    formPhone.classList.add('is-invalid');
    formPhone.classList.add('is-invalid');
  }
});
formMembers.addEventListener("blur", () => {
  let str = JSON.parse(formMembers.value);
  if (str > 0 && str <= 20) {
    // console.log("members Value OK");
    validMembers = true;
    formMembers.classList.remove('is-invalid');
    formMembers.classList.add('is-valid');
  } else {
    // console.log("members Value invalid");
    validMembers = false;
    formMembers.classList.add('is-invalid');
    formMembers.classList.add('is-invalid');
  }
});
formAddress.addEventListener("blur", () => {
  let str = formAddress.value;
  if (str.length > 5 && str.length <= 200) {
    // console.log("address Value OK");
    validAddress = true;
    formAddress.classList.remove('is-invalid');
    formAddress.classList.add('is-valid');
  } else {
    // console.log("address Value invalid");
    validAddress = false;
    formAddress.classList.add('is-invalid');
    formAddress.classList.add('is-invalid');
  }
});

let submit = document.getElementById("formSubmit");
submit.addEventListener("click", (e) => {
  if (validName == true && validEmail == true && validPhone == true && validMembers == true && validAddress == true) {
    let message = document.getElementById("message");
    // message.innerHTML = `<div class="alert alert-success alert-dismissible fade" role="alert">
    //     <strong>Success!</strong> Your travel request has been successfully submitted
    //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //         <span aria-hidden="true">×</span>
    //     </button>
    //     </div>`;
    message.innerHTML = `<div class="alert alert-success" role="alert">
    <strong>Success!</strong> Your travel request has been successfully submitted
    </div>`

    formName.value = '';
    formEmail.value = '';
    formPhone.value = '';
    formMembers.value = '';
    formAddress.value = '';
  } else {
    // message.innerHTML = `<div class="alert alert-danger alert-dismissible fade" role="alert">
    //     <strong>Error!</strong> Your travel request has not been sent due to errors
    //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //         <span aria-hidden="true">×</span>
    //     </button>
    // </div>`;
    message.innerHTML = `<div class="alert alert-danger" role="alert">
    <strong>Error!</strong> Your travel request has not been sent due to errors
    </div>`
  }
  setTimeout (function () {
    message.innerHTML = '';
  }, 3000);
  e.preventDefault();
});