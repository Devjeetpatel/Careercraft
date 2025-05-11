


document.addEventListener('DOMContentLoaded', function () {
    const fieldNameElement = document.getElementById('field'); 
    const choiceContainer = document.getElementById('content');  

    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        fieldNameElement.textContent = selectedField;

        const exploreCourseButton = document.createElement('button');
        exploreCourseButton.textContent = 'Explore Course';
        exploreCourseButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Course');
            window.location.href = 'courses.html'; 
        });

        const exploreCareerButton = document.createElement('button');
        exploreCareerButton.textContent = 'Explore Career';
        exploreCareerButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Career');
            window.location.href = 'careers.html';
        });

        choiceContainer.appendChild(exploreCourseButton);
        choiceContainer.appendChild(exploreCareerButton);

    } else {
        fieldNameElement.textContent = 'No field selected.';
      
    }
});