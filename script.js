document.addEventListener('DOMContentLoaded', () => {
    const typingText = document.getElementById('typing-text');
    const flashingPeriod = document.getElementById('flashing-period');
    const text = "Unleashing creative chaos on complex problems";
    let index = 0;

    function typeOut() {
        if (index < text.length) {
            typingText.insertBefore(document.createTextNode(text.charAt(index)), flashingPeriod);
            index++;
            setTimeout(typeOut, 50); // Adjust the typing speed
        } else {
            document.getElementById('strike-text').style.color = 'rgb(63, 226, 255)';
            flashingPeriod.textContent = '.';
            setTimeout(() => {
                document.getElementById('col1').style.color = 'rgb(63, 226, 255)';
            }, 2000);
            
            setTimeout(() => {
                document.getElementById('col2').style.color = 'rgb(63, 226, 255)';
            }, 4000); 

            setTimeout(() => {
                document.getElementById('col3').style.color = 'rgb(63, 226, 255)';
            }, 6000);
            
            setTimeout(() => {
                document.getElementById('col4').style.color = 'rgb(63, 226, 255)';
            }, 8000); 

            setTimeout(() => {
                document.getElementById('col5').style.color = 'rgb(63, 226, 255)';
            }, 10000);
            
            startFlashing();
        }
    }

    function startFlashing() {
        setInterval(() => {
            flashingPeriod.style.visibility = flashingPeriod.style.visibility === 'hidden' ? 'visible' : 'hidden';
        }, 500); // Adjust flashing speed if necessary
    }

    typeOut();
});


document.addEventListener('DOMContentLoaded', () => {
    const words = ["Security Consulting", "Assessments", "Security Architecture", "Phishing Simulation", "Research", "Vulnerability Management"]; // Your list of words
    const wordCycleElement = document.getElementById('word-cycle');
    let currentIndex = 0;

    function cycleWords() {
        wordCycleElement.style.animationName = 'fadeIn';
        wordCycleElement.textContent = words[currentIndex];
        
        setTimeout(() => {
            wordCycleElement.style.animationName = 'fadeOut';
        }, 3000); // Fade out after 3 seconds

        currentIndex = (currentIndex + 1) % words.length; // Move to the next word, loop back to start if at the end
        setTimeout(cycleWords, 6000); // Wait for fade out to complete, then cycle to next word
    }

    cycleWords();
});