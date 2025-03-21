// فعال‌سازی سیستم آشوب کوانتومی
function activateMordor() {
    document.getElementById('status').innerHTML = "🔍 Initiating Mordor Protocol...";
    setTimeout(establishLink, 3000);
}

// شبیه‌سازی اتصال به ماهواره‌های نظامی سری
function establishLink() {
    document.getElementById('status').innerHTML = "📡 Secure Link Established with Quantum Satellite Grid...";
    setTimeout(activateQuantumCore, 4000);
}

// فعال‌سازی هسته کوانتومی
function activateQuantumCore() {
    document.getElementById('status').innerHTML = "⚡️ Quantum Core Online - Encryption Level: ∞";
    
    // فعال‌سازی فرمان صوتی و کلید فیزیکی مخفی
    setTimeout(() => {
        document.getElementById('status').innerHTML += "<p>🔊 Voice Command Confirmed - Awaiting Final Trigger...</p>";
        setTimeout(confirmActivation, 3000);
    }, 2000);
}

// تأیید فعال‌سازی نهایی
function confirmActivation() {
    document.getElementById('status').innerHTML += "<h2>💀 MORDOR XX333XXX777 Fully Armed - Destruction Imminent! 💀</h2>";
    console.log("☢️ MORDOR PROTOCOL ONLINE! ☢️");
}
