


document.addEventListener('DOMContentLoaded', function () {
    const fieldNameElement = document.getElementById('field'); // Corrected ID
    const choiceContainer = document.getElementById('content');  // Corrected ID

    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        fieldNameElement.textContent = selectedField;

        // Create "Explore Course" button
        const exploreCourseButton = document.createElement('button');
        exploreCourseButton.textContent = 'Explore Course';
        exploreCourseButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Course');
            window.location.href = 'courses.html'; //  Redirect to your courses page
        });

        // Create "Explore Career" button
        const exploreCareerButton = document.createElement('button');
        exploreCareerButton.textContent = 'Explore Career';
        exploreCareerButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Career');
            window.location.href = 'careers.html'; // Redirect to your careers page
        });

        // Append buttons to the container
        choiceContainer.appendChild(exploreCourseButton);
        choiceContainer.appendChild(exploreCareerButton);

    } else {
        fieldNameElement.textContent = 'No field selected.';
        // Optionally, redirect back to fields.html if no field is selected
        // window.location.href = 'fields.html';
    }
});