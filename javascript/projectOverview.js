// First: title of the project, second: description of the project, third: link to git repository or website
const project1 = [
    "Code Exchange", 
    "Code exchange website (like Stack Overflow) where developers can ask and answer questions. ",
    "https://github.com/Jayson-1307/Code-Exchange"
    ];

const project2 = [
    "Game Engine - Text based adventure game", 
    "Game engine assignment. Text based adventure game with puzzle elements. ", 
    "https://github.com/Jayson-1307/Text-based-adventure-game"
];

const project3 = [
    "Game Webshop", 
    "Webshop for the created games in block 3 and corresponding merchandise.", 
    "https://github.com/Jayson-1307/Game-webshop"
];

const projects = [project1, project2, project3];

const projectListElement = document.getElementById('projectList');



projects.forEach(project => {
    projectListElement.onclick = function() {
        window.location.href = project[2];
    }

    // Create a container for each project
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    // Create a title element for the project
    const projectTitle = document.createElement('h3');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project[0]; // Project name
    projectContainer.appendChild(projectTitle);

    // Create a description element for the project
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('Description');
    projectDescription.textContent = project[1]; // Short description
    projectContainer.appendChild(projectDescription);

    // Create a link element for the project
    const projectLink = document.createElement('p');
    projectLink.classList.add('link');
    projectLink.textContent = "View project >>>"; // Details about the project
    projectContainer.appendChild(projectLink);

    // Append the project container to the #projectlist element
    projectListElement.appendChild(projectContainer);
    
});