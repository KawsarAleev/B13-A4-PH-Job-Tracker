let jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    position: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "pending",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    position: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "pending",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    position: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "pending",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $190,000",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "pending",
  },
  {
    id: 5,
    company: "Innovation Labs",
    position: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "pending",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    position: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 - $170,000",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "pending",
  },
  {
    id: 7,
    company: "StartupXYZ",
    position: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "pending",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    position: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "pending",
  },
];
let currentTab = "all";
const jobsContainer = document.getElementById("jobs-container");
const emptyState = document.getElementById("empty-state");
const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");
const tabJobCountEl = document.getElementById("tab-job-count");
const tabs = {
  all: document.getElementById("tab-all"),
  interview: document.getElementById("tab-interview"),
  rejected: document.getElementById("tab-rejected"),
};
function init() {
  updateDashboardCounts();
  renderJobs();
}
function updateDashboardCounts() {
  const total = jobs.length;
  const interviews = jobs.filter((j) => j.status === "interview").length;
  const rejected = jobs.filter((j) => j.status === "rejected").length;
  totalCountEl.textContent = total;
  interviewCountEl.textContent = interviews;
  rejectedCountEl.textContent = rejected;
}
window.switchTab = function (tabName) {
  currentTab = tabName;
  const activeClasses = [
    "bg-blue-500",
    "text-white",
    "border-blue-500",
    "shadow-sm",
  ];
  const inactiveClasses = [
    "bg-white",
    "text-gray-600",
    "border-gray-200",
    "hover:bg-gray-50",
  ];
  Object.keys(tabs).forEach((key) => {
    const btn = tabs[key];
    if (key === tabName) {
      btn.classList.add(...activeClasses);
      btn.classList.remove(...inactiveClasses);
    } else {
      btn.classList.remove(...activeClasses);
      btn.classList.add(...inactiveClasses);
    }
  });
  renderJobs();
};
function renderJobs() {
  let filteredJobs = [];
  if (currentTab === "all") {
    filteredJobs = jobs;
  } else {
    filteredJobs = jobs.filter((job) => job.status === currentTab);
  }
  tabJobCountEl.textContent = filteredJobs.length;
  jobsContainer.innerHTML = "";
  if (filteredJobs.length === 0) {
    emptyState.classList.remove("hidden");
    emptyState.classList.add("flex");
  } else {
    emptyState.classList.add("hidden");
    emptyState.classList.remove("flex");
    filteredJobs.forEach((job) => {
      const card = createJobCard(job);
      jobsContainer.appendChild(card);
    });
  }
}
function createJobCard(job) {
  const div = document.createElement("div");
  div.className =
    "bg-white p-6 rounded-xl border border-gray-100 relative fade-in";
  let statusBadge = "";
  if (job.status === "pending") {
    statusBadge = `<span class="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">NOT APPLIED</span>`;
  } else if (job.status === "interview") {
    statusBadge = `<span class="bg-teal-100 text-teal-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">INTERVIEW</span>`;
  } else if (job.status === "rejected") {
    statusBadge = `<span class="bg-rose-100 text-rose-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block">REJECTED</span>`;
  }
  const interviewBtnClass =
    job.status === "interview"
      ? "bg-teal-500 text-white border-teal-500"
      : "bg-white text-teal-600 border-teal-500 hover:bg-teal-50";
  const rejectedBtnClass =
    job.status === "rejected"
      ? "bg-rose-500 text-white border-rose-500"
      : "bg-white text-rose-500 border-rose-500 hover:bg-rose-50";
  div.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="w-full pr-8">
                        <h3 class="text-lg font-bold text-gray-900">${job.company}</h3>
                        <p class="text-md text-gray-600 mb-1">${job.position}</p>
                        <div class="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                            <span>${job.location}</span> &bull; 
                            <span>${job.type}</span> &bull; 
                            <span>${job.salary}</span>
                        </div>
                        ${statusBadge}
                        <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                            ${job.description}
                        </p>
                        <div class="flex gap-3">
                            <button onclick="updateStatus(${job.id}, 'interview')" 
                                class="px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded border transition-colors duration-200 ${interviewBtnClass}">
                                Interview
                            </button>
                            <button onclick="updateStatus(${job.id}, 'rejected')" 
                                class="px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded border transition-colors duration-200 ${rejectedBtnClass}">
                                Rejected
                            </button>
                        </div>
                    </div>
                    <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors p-1" title="Delete Application">
                        <i class="fa-solid fa-trash text-lg"></i>
                    </button>
                </div>
            `;
  return div;
}
window.updateStatus = function (id, newStatus) {
  const jobIndex = jobs.findIndex((j) => j.id === id);
  if (jobIndex > -1) {
    jobs[jobIndex].status = newStatus;
    updateDashboardCounts();
    renderJobs();
  }
};
window.deleteJob = function (id) {
  const confirmDelete = confirm("Do you want to delete?");
  if (confirmDelete) {
    jobs = jobs.filter((j) => j.id !== id);
    updateDashboardCounts();
    renderJobs();
  }
};
init();
