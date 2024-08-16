window.onload = () => {
    document.body.classList.remove("container");
    setTimeout(() => {
        document.getElementById("popupModal").classList.add("open"); // Add the "open" class
    }, 3000); // 4000 milliseconds = 4 seconds
  };

  document.addEventListener('DOMContentLoaded', () => {
    const moon = document.getElementById('moon');
    
    // Toggle glowing effect
    setInterval(() => {
      glowMoon();
      setTimeout(resetGlow, 1000); // Reset glow after 1 second
    }, 2000); // Toggle every 2 seconds
  });
  