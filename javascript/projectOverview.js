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

const project4 = [
    "Discord bot (python)",
    "Discord bot that can be used to play games some games like blackjack and slot machines. It has a currency and it can be used to moderate the server as well.",
    "https://github.com/Jayson-1307/Discord-bot"
]; 

const project5 = [
    "Dokkie payments",
    "An online tool to manage payments for a group of people. It can be used to keep track of who paid for what and who owes who.",
    "https://github.com/Jayson-1307/Dokkie-payments"
]; 

const projects = [project1, project2, project3, project4, project5];

const projectListElement = document.getElementById('projectList');

projects.forEach(project => {
    // Create a container for each project
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project');

    // Add an onclick event to the entire project container
    projectContainer.onclick = function() {
        window.open(project[2], '_blank'); // Open link in a new window/tab
    };

    // Add some styles to indicate the container is clickable
    projectContainer.style.cursor = 'pointer';

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

    // Create a link text element for the project
    const projectLink = document.createElement('p');
    projectLink.classList.add('link');
    projectLink.textContent = "View project >>>"; // Details about the project
    projectContainer.appendChild(projectLink);

    // Append the project container to the #projectList element
    projectListElement.appendChild(projectContainer);
});
