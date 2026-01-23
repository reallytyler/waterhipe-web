// Init AOS
AOS.init();

// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Click to Copy IP
function copyIP() {
    const ip = "play.waterhipe.fun";
    navigator.clipboard.writeText(ip);
    
    const successMsg = document.querySelector('.copy-success');
    successMsg.style.display = 'block';
    
    setTimeout(() => {
        successMsg.style.display = 'none';
    }, 2000);
}

// Fetch Minecraft Server Status
async function updateStatus() {
    try {
        const response = await fetch('https://api.mcsrvstat.us/2/play.waterhipe.fun');
        const data = await response.json();
        
        const playerElement = document.getElementById('player-num');
        if(data.online) {
            playerElement.innerText = data.players.online;
        } else {
            playerElement.innerText = "0";
        }
    } catch (error) {
        document.getElementById('player-num').innerText = "OFFLINE";
    }
}

// Auto-update player count every 30 seconds
updateStatus();
setInterval(updateStatus, 30000);

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
