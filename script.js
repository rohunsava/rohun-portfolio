const projects = [
  {
    name: "Personal Data Analyst Landing Page",
    status: "Live",
    statusClass: "status-live",
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
    name: "Service KPI Intelligence Dashboard",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "Analyzing service, labor, and parts performance data with interactive dashboards to surface trends, bottlenecks, and branch-level opportunities.",
    tags: ["Power BI", "SQL", "KPI Reporting"],
    href: "./projects/service-kpi-intelligence-dashboard.html",
    preview:
      "Preview: KPI framework, metric definitions, data model approach, and phased dashboard roadmap.",
    placeholder: "KPI Dashboard Mock",
    audience: ["Service Leaders", "Operations", "BI Team"]
  },
  {
    name: "Cost Variance & Expense Insights Model",
    status: "Planned",
    statusClass: "status-planned",
    summary:
      "Planned deep-dive analysis of expense and variance patterns with scenario modeling to support budget forecasting and management decisions.",
    tags: ["Excel", "Financial Analysis", "Forecasting"],
    href: "./projects/cost-variance-expense-insights-model.html",
    preview:
      "Preview: variance drivers, forecast assumptions, scenario logic, and decision-ready reporting outputs.",
    placeholder: "Variance Model Preview",
    audience: ["Finance", "Branch Managers", "Executives"]
  },
  {
    name: "Technician Training Impact Analysis",
    status: "Planned",
    statusClass: "status-planned",
    summary:
      "Future project to evaluate how training allocation influences service productivity and operational outcomes across teams.",
    tags: ["Operational Analytics", "Data Storytelling", "Visualization"],
    href: "./projects/technician-training-impact-analysis.html",
    preview:
      "Preview: workforce effectiveness indicators, before-and-after analysis design, and implementation plan.",
    placeholder: "Impact Analysis Preview",
    audience: ["Product Support", "Training Teams", "Leadership"]
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
        <span class="status ${project.statusClass}">${project.status}</span>
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
