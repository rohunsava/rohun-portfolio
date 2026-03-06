const projects = [
  {
    name: "Personal Data Analyst Landing Page",
    status: "Live",
    statusClass: "status-live",
    summary:
      "Designed and developed a modern personal landing page to present analytics experience, skills, and upcoming project portfolio work.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive UI"]
  },
  {
    name: "Service KPI Intelligence Dashboard",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "Analyzing service, labor, and parts performance data with interactive dashboards to surface trends, bottlenecks, and branch-level opportunities.",
    tags: ["Power BI", "SQL", "KPI Reporting"]
  },
  {
    name: "Cost Variance & Expense Insights Model",
    status: "Planned",
    statusClass: "status-planned",
    summary:
      "Planned deep-dive analysis of expense and variance patterns with scenario modeling to support budget forecasting and management decisions.",
    tags: ["Excel", "Financial Analysis", "Forecasting"]
  },
  {
    name: "Technician Training Impact Analysis",
    status: "Planned",
    statusClass: "status-planned",
    summary:
      "Future project to evaluate how training allocation influences service productivity and operational outcomes across teams.",
    tags: ["Operational Analytics", "Data Storytelling", "Visualization"]
  }
];

const projectsGrid = document.getElementById("projects-grid");

if (projectsGrid) {
  projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.innerHTML = `
      <div class="project-top">
        <span class="status ${project.statusClass}">${project.status}</span>
      </div>
      <h3>${project.name}</h3>
      <p>${project.summary}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
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
