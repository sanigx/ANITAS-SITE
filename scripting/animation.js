window.onload = function() {
    const words = [
        "Aspiring Software Engineer",
        "Cat Enthusiast 🐱",
        "Muay Thai Athlete 🥊",
        "Baker 🍰",
        "Sushi Master 🍣",
        "Digital Artist 🎨"
    ];

    let wordIndex = 0;
    const changingWordElement = document.getElementById('changingWord');
    
    function changeWordWithGlow() {
        // Add glow animation
         changingWordElement.style.animation = 'pulse 0.3s ease';
        changingWordElement.style.transform = 'scale(1.05)';
        changingWordElement.style.textShadow = '0 0 10px #00ff9f';
        changingWordElement.style.color = '#00ff9f';
        changingWordElement.style.fontWeight = 'bold';
        changingWordElement.style.transition = '0.5s';
        
        setTimeout(() => {
            // Change text
            wordIndex = (wordIndex + 1) % words.length;
            changingWordElement.textContent = words[wordIndex];
            
            // Remove glow animation
            setTimeout(() => {
        changingWordElement.style.color = 'rgb(255, 204, 0)';

                changingWordElement.style.transform = 'scale(1)';
        changingWordElement.style.textShadow = '0 0 10px rgb(255, 204, 0)';
                changingWordElement.style.textShadow = '0 0 5px rgb(255, 204, 0)';
                
            }, 200);
        }, 200);
    }
    
    // Change word every 3 seconds
    setInterval(changeWordWithGlow, 2000);
};