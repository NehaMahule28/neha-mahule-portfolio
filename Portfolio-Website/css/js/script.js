

// Fade-in Animation

const cards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "0.5s";
    observer.observe(card);
});
// About section scroll animation
const aboutParagraphs = document.querySelectorAll("#about p");

const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

aboutParagraphs.forEach(p => {
    aboutObserver.observe(p);
});
const projectCards = document.querySelectorAll(".project-card");

const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

projectCards.forEach(card => {
    projectObserver.observe(card);
});

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Message sent successfully 🚀");

    form.reset();
});