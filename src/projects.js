'use strict';

// 프로젝트 필터링 관련 로직 처리
const $categories = document.querySelector('.categories');
const $projects = document.querySelectorAll('.project');
const $projectsContainer = document.querySelector('.projects');
$categories.addEventListener('click', (e) => {
  const filter = e.target.dataset.category;
  if (!filter) {
    return;
  }
  handleActiveSelection(e.target);
  filterProjects(filter);
});

function handleActiveSelection(target) {
  const active = document.querySelector('.category--selected');
  active.classList.remove('category--selected');
  target.classList.add('category--selected');
}

function filterProjects(filter) {
  setTimeout(() => {
    $projects.forEach((project) => {
      if (filter === 'all' || filter === project.dataset.type) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
    $projectsContainer.classList.remove('animation-out');
  }, 250);
  $projectsContainer.classList.add('animation-out');
}
