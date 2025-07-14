const skills = document.querySelectorAll(".skill");

window.addEventListener("scroll", () => {
  skills.forEach((skill) => {
    const skillTop = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillTop < windowHeight - 50) {
      if (!skill.classList.contains("show")) {
        skill.classList.add("show");

        const skillPer = skill.querySelector(".skill-per");
        const targetPercent = skillPer.getAttribute("data-per");
        skillPer.style.setProperty("--per", targetPercent);

        const span = skillPer.querySelector("span");
        let count = 0;
        const end = parseInt(targetPercent);

        const interval = setInterval(() => {
          count++;
          span.textContent = `${count}%`;
          if (count >= end) {
            clearInterval(interval);
          }
        }, 2000 / end);
      }
    }
  });
});
