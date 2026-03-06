const projects = [
  {
    name: "Personal Portfolio",
    started: "Mar 2026",
    summary:
      "Designed and shipped a production-ready personal portfolio with a modern UI system, project case-study architecture, and performance/accessibility hardening for recruiter and hiring-manager workflows.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    href: "./projects/personal-data-analyst-landing-page.html",
    placeholder: "Portfolio UI Preview",
    users: "Hiring teams, recruiters, and collaborators",
    dataSources: "LinkedIn profile data, resume content, and project planning notes",
    methods: "Responsive UI architecture, accessibility-first CSS, and interaction design",
    outcome: "Released a portfolio with Lighthouse 100 performance, Lighthouse 100 accessibility, and a measurable reduction in page asset weight"
  },
  {
    name: "Fantasy Basketball Calculator",
    started: "May 2025",
    summary:
      "Built an interactive fantasy basketball calculator to evaluate roster value, compare trade outcomes, and optimize category-based decision making.",
    tags: ["JavaScript", "Data Modeling", "Sports Analytics", "Decision Support"],
    href: "./projects/fantasy-basketball-calculator.html",
    placeholder: "Fantasy Calculator Preview",
    users: "League managers and strategy-focused users",
    dataSources: "Player statistics, league scoring rules, and historical matchup context",
    methods: "Weighted category scoring, normalization logic, and scenario-based comparison",
    outcome: "Completed a decision-support tool that improves lineup, waiver, and trade evaluation speed"
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
        <dl class="preview-list">
          <div class="preview-row">
            <dt>Users</dt>
            <dd>${project.users}</dd>
          </div>
          <div class="preview-row">
            <dt>Data sources</dt>
            <dd>${project.dataSources}</dd>
          </div>
          <div class="preview-row">
            <dt>Methods</dt>
            <dd>${project.methods}</dd>
          </div>
          <div class="preview-row">
            <dt>Outcome</dt>
            <dd>${project.outcome}</dd>
          </div>
        </dl>
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
