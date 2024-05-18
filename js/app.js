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


/* Man slider */ 

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
          <img src="${project.image}" class="card-img-top" alt="${project.name}" title="${project.name}">
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
    firstButton.textContent = 'İlk Sayfa';
    firstButton.disabled = currentPage === 1;
    firstButton.addEventListener('click', () => {
      currentPage = 1;
      displayProjects(currentPage);
    });
    paginationContainer.appendChild(firstButton);

    const prevButton = document.createElement('button');
    prevButton.textContent = 'Önceki';
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
    nextButton.textContent = 'Sonraki';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayProjects(currentPage);
      }
    });
    paginationContainer.appendChild(nextButton);

    const lastButton = document.createElement('button');
    lastButton.textContent = 'Son Sayfa';
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


  // project details
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = parseInt(urlParams.get('id'));
  
    const project = projects.find(p => p.id === projectId);
  
    if (project) {
      const projectDetailsContainer = document.getElementById('project-details');
      projectDetailsContainer.innerHTML = `
        <h2>${project.name}</h2>
        <p>${project.details}</p>
      `;
    } else {
      document.getElementById('project-details').innerHTML = '<p>Proje bulunamadı.</p>';
    }
  });
  