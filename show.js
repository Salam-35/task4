// let userData = document.createElement("div");

// userData.innerHTML = `
// <button id="edit_this_user">Edit</button>
// <button id="del_this_user">Delete</button>
// <h3 class="full_name"> ${user.firstName} ${user.lastName} </h3>
// <h2>Points: ${user.point}</h2>
// <div class="user_info">
// <span>Email: ${user.email}</span>
// <span>Phone: ${user.phone}</span>
// <span>Company: ${user.company}</span>
// </div>
// `;


// let url = new URL(location.href);
// let params = new URLSearchParams(url.search);
// console.log(url);


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

let user = getQueryVariable('user');
console.log(user);
let data = JSON.parse(user);
let userDataHtml = "";
userDataHtml += `<h1>${data.firstName}  ${data.lastName}</h1>
                        <h1>${data.email}</h1>
                        <h1>${data.point}</h1>`
document.getElementById('pasteuser').innerHTML = userDataHtml;