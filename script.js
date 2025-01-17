

function checkNumber() {
    const userInput = prompt("Iltimos, istalgan sonni kiriting:");

    if (userInput === null) {
        return; // Foydalanuvchi qochish tugmasini bosgan bo'lsa
    }

    const number = Number(userInput); // Kiritilgan qiymatni son sifatida olish

    if (isNaN(number)) {
        alert("Bu son emas, iltimos son kiriting!");
        checkNumber(); // Yana raqam kiritishni so'rash
    } else {
        // Son toq yoki juftligini aniqlash
        const result = (number % 2 === 0) ? `${number} juft son.` : `${number} toq son.`;
        showModal(result); // Natijani modalda ko'rsatish
    }
}
let a = prompt ("Iltimos, istalgan sonni kiriting!" )

if ( a % 2 == 0)
    console.log('juft')
else
    console.log('Toq')

// Modalni yopish
document.getElementById("closeModal").onclick = closeModal;

// Modalni yopish uchun tashqi bosish
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Sahifa yuklanganda raqam kiritishni boshlash
window.onload = checkNumber;