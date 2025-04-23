function giveAdvice() {
    const situation = document.getElementById('situation').value.trim();
    const adviceOutput = document.getElementById('adviceOutput');
    
    if (situation.length === 0) {
        adviceOutput.style.display = 'none';
        alert("Please enter a situation.");
        return;
    }

    let advice = "";

    if (situation.toLowerCase().includes("shy")) {
        advice = "You gotta step up and be confident, bro! Women like guys who are self-assured. Try small talk first, like asking her about her favorite music or hobbies!";
    } else if (situation.toLowerCase().includes("party")) {
        advice = "At a party, just vibe! Don't try too hard to impress. Show interest, dance, have fun, and don't be afraid to make the first move. Approach her with a genuine compliment!";
    } else if (situation.toLowerCase().includes("friend zone")) {
        advice = "The friend zone can be tricky, but it’s not impossible. Start flirting lightly, tease a little, but make sure she knows you're serious about wanting more than just friendship.";
    } else {
        advice = "Keep it cool, be yourself, and make sure you're having fun. Women are attracted to confidence, but also authenticity.";
    }

    adviceOutput.style.display = 'block';
    adviceOutput.textContent = advice;
}