document.addEventListener("DOMContentLoaded", function () {
    const uppercaseCheckbox = document.getElementById("uppercase");
    const numbersCheckbox = document.getElementById("numbers");
    const specialCharsCheckbox = document.getElementById("specialChars");
    const generateBtn = document.getElementById("generateBtn");
    const passwordResult = document.getElementById("passwordResult");

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_-+=<>?/";

    generateBtn.addEventListener("click", function () {
        const passwordLength = parseInt(document.getElementById("passwordLength").value);
        const includeUppercase = uppercaseCheckbox.checked;
        const includeNumbers = numbersCheckbox.checked;
        const includeSpecialChars = specialCharsCheckbox.checked;

        const availableChars = lowercaseChars +
            (includeUppercase ? uppercaseChars : "") +
            (includeNumbers ? numberChars : "") +
            (includeSpecialChars ? specialChars : "");

        const generatedPassword = generatePassword(passwordLength, availableChars);
        passwordResult.value = generatedPassword;
    });

    function generatePassword(length, chars) {
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars.charAt(randomIndex);
        }
        return password;
    }
});
