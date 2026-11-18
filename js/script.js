// script.js - makes the page work
// it uses the arrays and objects from data.js (so data.js must be loaded first)

// ============ 1. PROFILE INFO ============

// puts my info inside every element that has data-profile="something"
function fillProfile() {
  document.title = profile.name + " | Developer's Profile";

  let items = document.querySelectorAll("[data-profile]");

  // for loop - go through all the elements
  for (let i = 0; i < items.length; i++) {
    let key = items[i].dataset.profile; // ex. "name"
    items[i].textContent = profile[key]; // profile["name"]
  }
}

// shows the facts (school, course, etc.) as a list
function showFacts() {
  let list = document.getElementById("factsList");

  facts.forEach(function (fact) {
    list.innerHTML += `<li><strong>${fact.label}:</strong> ${fact.value}</li>`;
  });
}

// ============ 2. TYPING EFFECT IN THE HERO ============

function startTyping() {
  let roleText = document.getElementById("roleText");
  let roleIndex = 0;   // which role (word) we are typing
  let charIndex = 0;   // how many letters are shown
  let deleting = false;

  function type() {
    let currentRole = profile.roles[roleIndex];

    // add or remove 1 letter
    if (deleting) {
      charIndex--;
    } else {
      charIndex++;
    }
    roleText.textContent = currentRole.substring(0, charIndex);

    let delay = deleting ? 50 : 100;

    if (!deleting && charIndex === currentRole.length) {
      // finished typing, wait a bit then start deleting
      deleting = true;
      delay = 1500;
    } else if (deleting && charIndex === 0) {
      // finished deleting, go to the next role
      deleting = false;
      roleIndex = (roleIndex + 1) % profile.roles.length;
      delay = 400;
    }

    setTimeout(type, delay);
  }

  type();
}

// ============ 3. DESIGN PHILOSOPHY ============

// makes a card for each item in the philosophy array
function showPhilosophy() {
  let container = document.getElementById("philosophyCards");
  let html = "";

  for (let i = 0; i < philosophy.length; i++) {
    html += `
      <div class="col-md-6 col-lg-3">
        <div class="card philosophy-card shadow-sm">
          <div class="card-body">
            <h3 class="h5 text-brand-title">${i + 1}. ${philosophy[i].title}</h3>
            <p class="card-text mb-0">${philosophy[i].text}</p>
          </div>
        </div>
      </div>`;
  }

  container.innerHTML = html;
}

// shows the color circles
function showPalette() {
  let row = document.getElementById("paletteRow");

  palette.forEach(function (item) {
    row.innerHTML += `
      <div class="swatch">
        <div class="swatch-circle" style="background-color: ${item.color};"></div>
        <div>${item.name}</div>
        <small class="text-body-secondary">${item.color}</small>
      </div>`;
  });
}

// ============ 4. PROJECTS ============

// makes the html of one project card
function makeProjectCard(project) {
  // one badge for each technology used
  let techBadges = "";
  project.tech.forEach(function (tech) {
    techBadges += `<span class="badge text-bg-secondary me-1">${tech}</span>`;
  });

  return `
    <div class="col-md-6 col-lg-4">
      <div class="card project-card shadow-sm">
        <img src="${project.image}" class="card-img-top project-image" alt="Screenshot of ${project.title}" data-project-id="${project.id}">
        <div class="card-body d-flex flex-column">
          <span class="badge bg-brand align-self-start mb-2">${project.term}</span>
          <h3 class="h5 card-title">${project.title}</h3>
          <p class="card-text">${project.description}</p>
          <div class="mb-3">${techBadges}</div>
          <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-brand mt-auto">View on GitHub</a>
        </div>
      </div>
    </div>`;
}

// shows the projects, term can be "All", "Midterm" or "Finals"
function showProjects(term) {
  let list = document.getElementById("projectList");
  let html = "";

  for (let i = 0; i < projects.length; i++) {
    // show the project if the filter is "All" or if the term is the same
    if (term === "All" || projects[i].term === term) {
      html += makeProjectCard(projects[i]);
    }
  }

  list.innerHTML = html;
}

// makes the filter buttons (All, Midterm, Finals)
function makeFilterButtons() {
  let box = document.getElementById("filterButtons");

  // get the different terms from the projects array, no duplicates
  let terms = ["All"];
  projects.forEach(function (project) {
    if (!terms.includes(project.term)) {
      terms.push(project.term);
    }
  });

  // make a button for each term
  terms.forEach(function (term) {
    let button = document.createElement("button");
    button.type = "button";
    button.textContent = term;
    button.className = "btn " + (term === "All" ? "btn-brand" : "btn-outline-secondary");

    button.addEventListener("click", function () {
      // change the look of the buttons (the clicked one is the dark one)
      box.querySelectorAll("button").forEach(function (b) {
        b.className = "btn btn-outline-secondary";
      });
      button.className = "btn btn-brand";

      showProjects(term);
    });

    box.appendChild(button);
  });
}

// opens the pop-up with the big screenshot when a project image is clicked
function setupScreenshotModal() {
  let modal = new bootstrap.Modal(document.getElementById("screenshotModal"));

  // one listener for the whole list (works even if the cards are remade by the filter)
  document.getElementById("projectList").addEventListener("click", function (event) {
    if (!event.target.matches(".project-image")) {
      return; // not an image, do nothing
    }

    let id = Number(event.target.dataset.projectId);

    // find() gives the project with the same id
    let project = projects.find(function (p) {
      return p.id === id;
    });

    document.getElementById("screenshotTitle").textContent = project.title;
    document.getElementById("screenshotImage").src = project.image;
    document.getElementById("screenshotImage").alt = "Screenshot of " + project.title;
    modal.show();
  });
}

// ============ 5. CONTACT ============

// shows the contact details as cards
function showContacts() {
  let box = document.getElementById("contactInfo");

  contacts.forEach(function (contact) {
    // make it a link only if there is a link
    let value = contact.link
      ? `<a href="${contact.link}" target="_blank" rel="noopener">${contact.value}</a>`
      : contact.value;

    box.innerHTML += `
      <div class="card contact-card shadow-sm">
        <div class="card-body py-3">
          <small class="text-body-secondary text-uppercase">${contact.label}</small>
          <div class="fw-bold">${value}</div>
        </div>
      </div>`;
  });
}

// shows a bootstrap alert above the form, type is "success" or "danger"
function showFormMessage(text, type) {
  let box = document.getElementById("formMessage");
  box.innerHTML = "";

  let alert = document.createElement("div");
  alert.className = "alert alert-" + type;
  alert.textContent = text; // textContent so the user's name can't break the page
  box.appendChild(alert);
}

function setupContactForm() {
  let form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    // stop the page from reloading
    event.preventDefault();

    // checkValidity() checks the required / minlength / email rules in the html
    if (!form.checkValidity()) {
      form.classList.add("was-validated"); // bootstrap shows the red and green borders
      showFormMessage("Please fix the fields in red first.", "danger");
      return;
    }

    let name = document.getElementById("contactName").value.trim();
    let email = document.getElementById("contactEmail").value.trim();
    let message = document.getElementById("contactMessage").value.trim();

    // there is no server here, so the message is sent by opening the user's email app
    let subject = encodeURIComponent("Message from " + name);
    let body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
    window.location.href = "mailto:" + profile.email + "?subject=" + subject + "&body=" + body;

    showFormMessage("Thanks, " + name + "! Your email app should open so you can send the message.", "success");

    // clear the form
    form.reset();
    form.classList.remove("was-validated");
  });
}

// ============ 6. OTHER SMALL THINGS ============

// light / dark mode
function setupThemeToggle() {
  let button = document.getElementById("themeToggle");
  let html = document.documentElement;

  // use the theme saved from the last visit (if there is one)
  let saved = localStorage.getItem("theme");
  if (saved) {
    html.setAttribute("data-bs-theme", saved);
  }
  updateThemeButton();

  button.addEventListener("click", function () {
    let newTheme = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeButton();
  });

  // the button says what will happen when clicked
  function updateThemeButton() {
    let isDark = html.getAttribute("data-bs-theme") === "dark";
    button.textContent = isDark ? "Light Mode" : "Dark Mode";
  }
}

// back to top button
function setupBackToTop() {
  let button = document.getElementById("backToTop");

  // show the button only if scrolled down more than 400px
  window.addEventListener("scroll", function () {
    button.style.display = window.scrollY > 400 ? "block" : "none";
  });

  button.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============ RUN EVERYTHING ============
// the script is at the bottom of the body, so the elements already exist here
fillProfile();
showFacts();
startTyping();
showPhilosophy();
showPalette();
makeFilterButtons();
showProjects("All");
setupScreenshotModal();
showContacts();
setupContactForm();
setupThemeToggle();
setupBackToTop();
document.getElementById("year").textContent = new Date().getFullYear();
