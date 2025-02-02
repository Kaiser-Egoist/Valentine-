let noAttempts = 0;
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const messageDiv = document.getElementById("messageText");
const extraOptionsDiv = document.getElementById("extraOptions");
const heartsDiv = document.getElementById("hearts");

btnYes.addEventListener("click", () => {
    messageDiv.textContent = "Good girl! 💖 You said Yes!";
    displayHearts();
    showExtraOptions();
    hideButtons();
});

btnNo.addEventListener("click", () => {
    noAttempts++;

    // Handle No presses up to 4 times with increasing teasing phrases
    if (noAttempts === 1) {
        messageDiv.textContent = `Aww... you're playing hard to get, but I know you secretly want to say Yes 😏`;
    } else if (noAttempts === 2) {
        messageDiv.textContent = `You can’t hide from me forever... just say Yes already 😘`;
    } else if (noAttempts === 3) {
        messageDiv.textContent = `I’m not letting you go that easily... let’s make this official already 😈`;
    } else if (noAttempts === 4) {
        messageDiv.textContent = `Okay, enough teasing... you can't run from me any longer. Will you be my Valentine? 💖`;

        // After the 4th No, change the No button to Yes and disable the No button
        btnNo.style.display = "none";
        btnYes.textContent = "Yes! 💖";
        btnYes.disabled = false;
    }

    showExtraOptions();
});

document.getElementById("btnTryAgain").addEventListener("click", () => {
    noAttempts = 0;
    messageDiv.textContent = "Come on, let’s try again... Will you be my Valentine? 💖";
    showButtons();
});

function showExtraOptions() {
    extraOptionsDiv.style.display = "block";
}

function showButtons() {
    extraOptionsDiv.style.display = "none";
    btnYes.disabled = false;
    btnNo.disabled = false;
    btnNo.style.display = "inline"; // Ensure No button is visible again when retrying
}

function hideButtons() {
    btnYes.disabled = true;
    btnNo.disabled = true;
}

function displayHearts() {
    const heartCount = 30;
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heartsDiv.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}