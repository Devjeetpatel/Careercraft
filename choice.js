// back button function
document.getElementById
("back").addEventListener("click",()=>{
    window.location.href="fields.html";
})

// selected field will be saved for further process not used here
document.addEventListener('DOMContentLoaded', function () {
    const fieldNameElement = document.getElementById('field');
    const choiceContainer = document.getElementById('content');

    const selectedField = localStorage.getItem('selectedField');
    // if field is selected then show option
    if (selectedField) {
        fieldNameElement.textContent = selectedField;

        // const exploreCourseButton = document.createElement('button');
        // exploreCourseButton.textContent = 'Explore Course';
        // exploreCourseButton.addEventListener('click', function () {
        //     localStorage.setItem('selectedChoice', 'Course');
        //     window.location.href = 'courses.html';
        // });

        const exploreCourseButton = document.createElement('button');
        exploreCourseButton.classList.add('stream-button');
        exploreCourseButton.textContent = 'Explore Course';
        exploreCourseButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Course');
            window.location.href = 'courses.html';
        });

        // const exploreCareerButton = document.createElement('button');
        // // exploreCareerButton.classList.add('stream-button');
        // exploreCareerButton.textContent = 'Explore Career';
        // exploreCareerButton.addEventListener('click', function () {
        //     localStorage.setItem('selectedChoice', 'Career');
        //     window.location.href = 'careers.html';
        // });

        const exploreCareerButton = document.createElement('button');
        exploreCareerButton.classList.add('stream-button');
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