// Inicializace počítadla kliknutí
let clickCount = 0;

// Tlačítko "Zjistit více"
document.getElementById('welcomeBtn').addEventListener('click', function() {
    alert('Vítej na mé IT vizitce! 👋 Jsem webový vývojář s vášní pro kvalitní kód.');
    clickCount++;
    updateClickCounter();
});

// Funkce pro aktualizaci počítadla
function updateClickCounter() {
    document.getElementById('clickCounter').textContent = `Počet kliknutí: ${clickCount}`;
}

// Smooth scroll pro navigační odkazy
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efekt při načtení stránky
window.addEventListener('load', function() {
    console.log('Stránka byla úspěšně načtena!');
    console.log('Vítej! JavaScript funguje správně.');
    
    // Přidání třídy pro animaci prvků
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'opacity 0.6s ease-in';
        setTimeout(() => {
            section.style.opacity = '1';
        }, 100);
    });
});

// Změna barvy pozadí (Bonus interakce)
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        const currentBg = document.body.style.backgroundColor;
        if (currentBg === 'rgb(244, 244, 244)' || currentBg === '') {
            document.body.style.backgroundColor = '#2c3e50';
            document.body.style.color = 'white';
            document.querySelectorAll('.navbar').forEach(el => {
                el.style.backgroundColor = '#1a252f';
            });
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            document.querySelectorAll('.navbar').forEach(el => {
                el.style.backgroundColor = '#2c3e50';
            });
        }
        console.log('Tma/Světlo režim přepnut! (Stiskni "D")');
    }
});

console.log('Vítej na stránce! 🚀');
console.log('Tipy: Klikni na tlačítko v úvodu a stiskni "D" pro tmavý režim.');