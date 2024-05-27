$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu').toggleClass('show');
    });
});
$(document).ready(function(){
    $('.slider-header').slick({
        dots: false,
        slidesToShow: 1, 
        slidesToScroll: 1
    });
});

/* project slider */ 

$(document).ready(function(){
    $('.slider-product').slick({
        slidesToShow: 5, 
        slidesToScroll: 1, 
        prevArrow: $('.prev-product'), 
        nextArrow: $('.next-product'), 
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
           
        ]
    });
});

// projects page
document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');
  const paginationContainer = document.getElementById('pagination-container');
  const searchInput = document.getElementById('search-input');
  const itemsPerPage = 12;
  let currentPage = 1;
  let filteredProjects = projects;

  function displayProjects(page) {
    projectsContainer.innerHTML = '';
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedProjects = filteredProjects.slice(start, end);

    paginatedProjects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('col-md-3', 'mb-4');

      projectElement.innerHTML = `
        <div class="card">
          <img src="${project.images[0]}" class="card-img-top" alt="${project.name}" title="${project.name}">
          <div class="card-body">
            <h5 class="card-title">${project.name}</h5>
            <p class="card-text">${project.description}</p>
            <a href="project-details.html?id=${project.id}" class="btn btn-details">Detayları Görüntüle</a>
          </div>
        </div>
      `;

      projectsContainer.appendChild(projectElement);
    });

    displayPagination();
  }

  function displayPagination() {
    paginationContainer.innerHTML = '';
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

    const firstButton = document.createElement('button');
    firstButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
    <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
    </svg>`;
    firstButton.disabled = currentPage === 1;
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      displayProjects(currentPage);
    });
    paginationContainer.appendChild(firstButton);

    const prevButton = document.createElement('button');
    prevButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
    </svg>`;
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        displayProjects(currentPage);
      }
    });
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      if (i === currentPage) {
        pageButton.classList.add('active');
      }
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayProjects(currentPage);
      });
      paginationContainer.appendChild(pageButton);
    }

    const nextButton = document.createElement('button');
    nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayProjects(currentPage);
      }
    });
    paginationContainer.appendChild(nextButton);

    const lastButton = document.createElement('button');
    lastButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
    <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
  </svg>`;
    lastButton.disabled = currentPage === totalPages;
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      displayProjects(currentPage);
    });
    paginationContainer.appendChild(lastButton);
  }

  function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProjects = projects.filter(project => 
      project.name.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm)
    );
    currentPage = 1; 
    displayProjects(currentPage);
  }

  if (projectsContainer && paginationContainer && searchInput) {
    projectsContainer.classList.add('row');
    displayProjects(currentPage);

    searchInput.addEventListener('input', filterProjects);
  } else {
    console.error('Projects container, pagination container or search input not found');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = parseInt(urlParams.get('id'));

  const project = projects.find(p => p.id === projectId);

  if (project) {
    const projectDetailsContainer = document.getElementById('project-details');
    projectDetailsContainer.innerHTML = `
      <div class="container">
        <div class="row">
          <div class="col-md-6 mt-4 mb-4">
            <div class="slider-container">
              <div class="slider" id="slider">
                ${project.images.map(image => `<img src="${image}" class="img-detail">`).join('')}
              </div>
              <button class="prev" onclick="moveSlide(-1)">&#10094;</button>
              <button class="next" onclick="moveSlide(1)">&#10095;</button>
            </div>
          </div>
          <div class="col-md-6 mt-4 mb-4">
            <h2 class="name-detail">${project.name}</h2>
            <p class="text-detail">${project.details}</p>
          </div>
        </div>
      </div>
    `;
  } else {
    document.getElementById('project-details').innerHTML = '<p>Proje bulunamadı.</p>';
  }
});

let currentSlide = 0;

function moveSlide(n) {
  const slider = document.getElementById('slider');
  const slides = slider.children.length;
  currentSlide = (currentSlide + n + slides) % slides;
  slider.style.transform = `translateX(${-currentSlide * 100}%)`;
}
