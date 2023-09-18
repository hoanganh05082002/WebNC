﻿function hidePasswords(inputId, value) {
    var input = document.getElementById(inputId);
    if (input.type !== "password") {
        input.type = "password";
    }
}

function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}