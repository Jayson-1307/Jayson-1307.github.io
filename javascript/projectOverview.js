const projectListElement = document.getElementById('projectList');

async function fetchRepositories() {
    const username = "jayson-1307"; // GitHub username
    const response = await fetch(`https://api.github.com/users/${username}/repos`); // Fetch repositories from GitHub API
    const repositories = await response.json(); // Parse the response as JSON
    const sortedRepos = repositories.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); // Sort repositories by creation date (newest first)
    console.log(sortedRepos)

    sortedRepos.forEach(repo => {
        console.log(repo); // Log each repository to the console
        // Create a container for each project
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        // Add an onclick event to the entire project container
        projectContainer.onclick = function () {
            window.open(repo.html_url); // Open link in a new window/tab
        };

        // Add some styles to indicate the container is clickable
        projectContainer.style.cursor = 'pointer';

        // Create a title element for the project
        const projectTitle = document.createElement('h3');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = repo.name; // Project name
        projectContainer.appendChild(projectTitle);

        // Create a description element for the project
        const projectDescription = document.createElement('p');
        projectDescription.classList.add('description');
        if (!repo.description) {
            projectDescription.textContent = `No description available for ${repo.name}`; // Short description
        } else {
            projectDescription.textContent = repo.description; // Project description
        }
        projectContainer.appendChild(projectDescription);

        // Create a link container for the project
        const projectLinkContainer = document.createElement('div');
        projectLinkContainer.classList.add('link-container');

        // Create a link text element for the project
        const projectLink = document.createElement('p');
        projectLink.classList.add('link');
        projectLink.textContent = "View project";// Details about the project
        projectLinkContainer.appendChild(projectLink);

        // Create a link pointer element for the project
        const linkPointer = document.createElement('i');
        linkPointer.classList.add('fa-solid', 'fa-arrow-right');
        projectLinkContainer.appendChild(linkPointer);

        projectContainer.appendChild(projectLinkContainer);

        // Append the project container to the #projectList element
        projectListElement.appendChild(projectContainer);
    });
}

fetchRepositories();