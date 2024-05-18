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


// main.js
// main.js
document.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');
  projectsContainer.classList.add('row');
  if (projectsContainer) {
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('col-md-3', 'mb-4'); // Bootstrap sütun ve margin sınıfları

      // Proje kartını oluşturma
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

      // Ana project divini projects container'a ekle
      projectsContainer.appendChild(projectElement);
    });
  } else {
    console.error('Projects container not found');
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
  