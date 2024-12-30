document.addEventListener("DOMContentLoaded", () => {
    const lastDigit = document.getElementById("last-digit");
    const achievementsBtn = document.getElementById("achievements-btn");

    // الألعاب النارية
    function launchFireworks() {
        confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.7 },
            colors: ['#FFD700', '#FFA500', '#FF6347']
        });
    }

    setInterval(launchFireworks, 1500); // تأثير الألعاب النارية

    // تغيير الرقم
    setTimeout(() => {
        lastDigit.textContent = "5";
    }, 3000);

    // ظهور الزر
    setTimeout(() => {
        achievementsBtn.classList.remove("hidden");
    }, 4000);

    // الانتقال إلى صفحة الإنجازات
    achievementsBtn.addEventListener("click", () => {
        window.location.href = "achievements.html";
    });
});
