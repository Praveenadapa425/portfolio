// Load all components when the page loads
document.addEventListener('DOMContentLoaded', function() {
  // Load all HTML partials
  const components = [
    { id: 'header', file: 'partials/header.html' },
    { id: 'home', file: 'partials/home.html' },
    { id: 'about', file: 'partials/about.html' },
    { id: 'skills', file: 'partials/skills.html' },
    { id: 'projects', file: 'partials/projects.html' },
    { id: 'education', file: 'partials/education.html' },
    { id: 'contact', file: 'partials/contact.html' },
    { id: 'footer', file: 'partials/footer.html' },
    { id: 'scripts', file: 'partials/scripts.html' }
  ];

  components.forEach(component => {
    fetch(component.file)
      .then(response => response.text())
      .then(html => {
        document.getElementById(component.id).innerHTML = html;
        
        // If this is the scripts component, we need to load the script.js file
        if (component.id === 'scripts') {
          const script = document.createElement('script');
          script.src = 'js/script.js';
          document.body.appendChild(script);
        }
      })
      .catch(error => console.error(`Error loading ${component.file}:`, error));
  });
});