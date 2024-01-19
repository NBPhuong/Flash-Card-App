const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const nextbtn = document.querySelector(".next");
const checkbtn = document.querySelector(".check");

const words = {
    Certification: "証明",
    Negotiation: "交渉",
   Overflow: "溢れる",
    "My name is Phuong": "私の名前はフオンです"
};

const data = Object.entries(words);

function getRandomWord() {
    randomterm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = randomterm[0];
    definition.innerHTML = randomterm[1];
    definition.style.display = "none"; // Ẩn nghĩa của từ mới
}

checkbtn.addEventListener('click', function () {
    definition.style.display = "block";
});

nextbtn.addEventListener('click', function () {
    getRandomWord();
});

// Gọi hàm để hiển thị từ đầu tiên
getRandomWord();
