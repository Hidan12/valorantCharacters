# Valorant Agents App

![Valorant Logo](https://upload.wikimedia.org/wikipedia/en/0/0c/Valorant_logo_-_pink.svg)

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)


## Description

This project is a practical assignment for the Full Stack course at MindHub Academy. The **Valorant Agents App** is a React-based application that displays Valorant agents by consuming the Valorant API. It offers functionalities such as filtering agents by name and role, selecting agents to form a team, viewing detailed information about each agent, and paginating the agent list.

## Features

1. **Consume Valorant Agents API:**
   - Utilizes `fetch` to retrieve data from the Valorant API.
   - Displays all playable agents in the interface.
   - [API Endpoint](https://valorant-api.com/v1/agents?isPlayable=true)

2. **Filtering by Text and Role:**
   - **Text Search:** Allows users to filter agents by their names.
   - **Role Filter:** Enables viewing agents based on specific roles.
   - **Combined Filtering:** Both filters work simultaneously to refine results.

3. **Add Agents to Team:**
   - Users can add agents to their team with a maximum limit of 5 agents.
   - Displays a notification when the team limit is reached.

4. **Team Modal:**
   - A modal that showcases the selected agents in the user's team.
   
5. **Agent Detail Modal:**
   - Clicking on an agent opens a modal with detailed information about the agent.

6. **User Messages:**
   - Displays "No agents found matching your search." when no results are found.
   - Shows a "Loading..." message while fetching data from the API.

7. **Pagination:**
   - Implements pagination to display a maximum of 6 agents per page.
   - Pagination works seamlessly with existing filtering functionalities.

8. **State Management:**
   - Utilizes `useState` and `useEffect` hooks for state management and side effects.


## Technologies Used

- **React:** Front-end library for building user interfaces.
- **JavaScript:** Programming language for logic and functionality.
- **tailwind:** Styling the application.
- **Fetch API:** For making HTTP requests to the Valorant API.

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/valorant-agents-app.git
2. **Navigate to the Project Directory**
    ```bash
    cd valorantCharacters
3. **Install Dependencies:**
    ```bash
    npm install
4. **Start the Application:**
    ```bash
    npm run dev
5. **Open in Browser**
    Open http://localhost:5173/ to view the app in your browser.

 ## Usage
1. **Search Agents:**
   - Use the search bar to filter agents by their names.

2. **Filter by Role:**
   - Select a role from the dropdown to view agents belonging to that role.

3. **Add to Team:**
   - Click the "Add to Team" button on an agent card to include them in your team.
   - A maximum of 5 agents can be added. A notification will appear if the limit is reached.

4. **View Team:**
   - Click the "View Team" button to open a modal displaying your selected agents.

5. **View Agent Details:**
   - Click on an agent card to open a modal with detailed information about the agent.

6. **Navigate Pages:**
   - Use the pagination controls at the bottom to navigate through different pages of agents.

