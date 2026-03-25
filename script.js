const excuses = {
    office: [
        "Aaj laptop ne mere saath cooperate nahi kiya",
"Internet tha par kaam karne ka jazba nahi tha",
"Aaj main mentally meeting me tha, physically nahi",
"System on hua par focus nahi hua",
"Aaj productivity ne sick leave le li",
"Emails dekh ke hi thakaan aa gayi",
"Aaj kaam karna HR policy ke against laga",
"Laptop update ho raha tha, main bhi",
"Aaj motivation VPN pe tha",
"Client ke mail ne mini heart attack de diya",
"Aaj kaam karna optional laga",
"Brain ne notice period start kar diya",
"Aaj office ka environment emotionally unsafe laga",
"Meeting ke baad recovery time lag gaya",
"Aaj kaam se zyada coffee zaroori thi",
"Deadline dekh ke system hang ho gaya",
"Aaj WFH ka W zyada ho gaya",
"Aaj kaam karne ka subscription expire ho gaya",
"Office aaya par focus ghar pe reh gaya",
"Aaj bas kaam ka demo version chala"
    ],
    college: [
        "Alarm ne mujhe academic strike pe bhej diya",
"Lecture me sirf body gayi thi, dimag nahi",
"Aaj attendance se zyada neend zaroori thi",
"Notes download hue par dimag me install nahi hue",
"Aaj professor ki vibe thodi heavy lag rahi thi",
"Assignment aur main compatible nahi the",
"Exam ka naam sunte hi tabiyat bigad gayi",
"Aaj syllabus emotionally tough laga",
"Attendance ka risk nahi liya",
"Aaj library ne mujhe reject kar diya",
"Group project me mera group hi gayab tha",
"Aaj college life ne thoda zyada reality dikha di",
"Lecture attend kiya par soul absent thi",
"Aaj ka din hi bunk-friendly tha",
"Practical se zyada theory heavy lag rahi thi",
"Brain ne bola next semester me karenge",
"Aaj padhai optional subject lag rahi thi",
"College aaya par motivation gate pe hi reh gaya",
"Assignment ka file corrupt ho gaya, mann bhi",
"Sach bolu to aaj padhne ka mann hi nahi tha",
    ],
    friends: [
        "Aaj mood ghar pe rehne ka hai",
"Plan pakka tha par neend zyada strong thi",
"Aaj social energy zero pe thi",
"Ready ho gaya tha, phir let gaya",
"Aaj ghar wale emotional ho gaye",
"Aaj ka din hi introvert mode ka tha",
"Aaj wallet ne mana kar diya",
"Plan exciting tha, main nahi",
"Aaj bahar jaane ka mann nahi bana",
"Aaj life ne thoda zyada thaka diya",
"Aaj kaam zyada tha, mood kam",
"Aaj ghar se nikalna risky laga",
"Aaj battery low thi, charger nahi mila",
"Aaj ka din hi cancel-worthy tha",
"Aaj overthinking free me mil rahi thi",
"Aaj social interaction premium lag raha tha",
"Aaj ka plan next update me aayega",
"Aaj ka din hi comfort zone ka tha",
"Aaj bas ghar aur blanket ke saath date thi",
"Kal pakka milenge, aaj bas nahi ho paaya",
    ]
};

const excuseBox = document.getElementById("excuse");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const category = document.getElementById("category");
const themeToggle = document.getElementById("themeToggle");

/* Load saved theme */
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️";
}

/* Generate Excuse */
generateBtn.addEventListener("click", () => {
    const selected = category.value;
    const list = excuses[selected];

    if (!list) {
        excuseBox.innerText = "😅 No excuses found!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * list.length);

    excuseBox.style.animation = "none";
    excuseBox.offsetHeight; // reflow
    excuseBox.style.animation = "fadeSlide 0.6s ease";

    excuseBox.innerText = list[randomIndex];
});

/* Copy Excuse */
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(excuseBox.innerText);
    copyBtn.innerText = "✅ Copied!";
    setTimeout(() => copyBtn.innerText = "📋 Copy Excuse", 1500);
});

/* Dark / Light Mode */
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeToggle.textContent = isDark ? "☀️" : "🌙";
});