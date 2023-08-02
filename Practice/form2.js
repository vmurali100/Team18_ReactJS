document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const userTable = document.getElementById("userTable");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Save the user details in the table
        addUserToTable(username, password);

        // Reset the form after submission
        loginForm.reset();
    });

    function addUserToTable(username, password) {
        const row = userTable.insertRow();
        const usernameCell = row.insertCell(0);
        const passwordCell = row.insertCell(1);

        usernameCell.textContent = username;
        passwordCell.textContent = password;
    }
});
