const projects = [
  {
    name: "Personal Data Analyst Landing Page",
    started: "Mar 2026",
    summary:
      "Designed and developed a modern personal landing page to present analytics experience, skills, and upcoming project portfolio work.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    href: "./projects/personal-data-analyst-landing-page.html",
    preview:
      "Preview: Scope, design decisions, implementation notes, deployment workflow, and upcoming iteration log.",
    placeholder: "Portfolio UI Preview",
    audience: ["Hiring Teams", "Recruiters", "Stakeholders"]
  },
  {
    name: "Fantasy Basketball Calculator",
    started: "May 2025",
    summary:
      "Built an interactive fantasy basketball calculator to evaluate roster value, compare trade outcomes, and optimize category-based decision making, and completed the first full release in May 2025.",
    tags: ["JavaScript", "Data Modeling", "Sports Analytics", "Decision Support"],
    href: "./projects/fantasy-basketball-calculator.html",
    preview:
      "Preview: scoring logic, player valuation approach, simulation assumptions, and upcoming calculator screenshots.",
    placeholder: "Fantasy Calculator Preview",
    audience: ["Fantasy Basketball Players", "League Managers", "Analytics Users"]
  }
];

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-preview-card" aria-hidden="true">
        <div class="preview-placeholder">${project.placeholder}</div>
        <p class="preview-copy">${project.preview}</p>
        <p class="preview-label">Clients / Users</p>
        <div class="audience-badges">
          ${project.audience.map((item) => `<span>${item}</span>`).join("")}
        </div>
      </div>
      <div class="project-top">
        <span class="project-date">${project.started}</span>
      </div>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
      <a class="project-doc-btn" href="${project.href}" aria-label="Open ${project.name} documentation page">
        View Project Documentation Page
      </a>
    `;
    projectsGrid.appendChild(card);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.14
  }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
