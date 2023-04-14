# Taskform Project Name

> This project was Rsuit with Create React App.

---

## Description

- Taskform is a simple web application built using React and RSuite that allows users to create, edit, and delete tasks.

---

### Installation

- To install and run Taskform on your local machine, you need to have Node.js and npm installed. Once you have installed Node.js and npm, follow these steps:
- Clone the repository:

  `git clone https://github.com/<username>/taskform.git`

- Note: Replace <username> with your GitHub username.

- Navigate to the project directory:
  `cd taskform`
- Install the dependencies:
  `npm install`
- Start the development server:
  `npm start`

### The Taskform application should now be running on http://localhost:3000.

---

## Dependencies

---

Taskform uses the following dependencies:

"@rsuite/icons": "^1.0.2"

"@testing-library/jest-dom": "^5.16.5"

"@testing-library/react": "^13.4.0"

"@testing-library/user-event": "^13.5.0"

"react": "^18.2.0"

"react-dom": "^18.2.0"

"react-scripts": "5.0.1"

"rsuite": "^5.31.0"

"web-vitals": "^2.1.4"

## About Project

---

- This is a React application that allows a user to create and manage a to-do list.

- It has a theme changer that toggles between light and dark themes, and it uses a context provider to pass the selected theme to child components.
- The application also uses local storage to store the user's to-do list.

---

- The code defines the `App` component which uses the useState hook to manage the selected theme and the user's to-do list.
- It also creates a context using the createContext function to pass the selected theme to child components.

---

- The handleThems function is used to toggle the selected theme between `"light"` and `"dark"` based on the onChange event of the Toggle component.
- The `contextValue` object is created to hold the theme object that corresponds to the selected theme.

- The InputFrorm component is rendered to allow the user to add new to-do items to the list.
- The toDoList state variable is passed down to child components as props to allow them to update the list.

---

- The Todo, Progress, and CompeteTodo components are rendered to display the to-do list items, the progress of completing the items, and the completed items respectively.
- The selected theme is applied to the entire application using the style attribute of the div element with the className of "App"

## How to Use

> Add a task:

- To add a new task, you need to input the task name and
  select a due date for the task. Then, click on the "Add task" button.

> Manage tasks:

- Once you have added tasks, they will appear in the "To Do" container.

- Each task will have three buttons next to it - "Edit", "Delete", and "Next". You can click on "Edit" to edit the task.
- This will open a drawer where you can update the task details. After making changes, click on the "Update" button to save your changes.

> Move tasks:

- You can move tasks to the "In Progress" container by clicking on the "Next" button.
- This will move the task to the next container, indicating that you have started working on it.

> Filter tasks:

- The tasks will be filtered based on the due date, and they will be color-coded accordingly.
- Tasks that have more time will be displayed in green, while tasks that have less time will be displayed in red.
- If the task is nearing the deadline, it will be displayed in orange.

> Delete tasks:

- If you want to delete a task, click on the "Delete" button next to it.
- it is responsive for all the devices
---

# Credits

- Icons: React Icons

---

# Demo

## Here is a link to the deployed project:[todo](https://todo-8733fe.netlify.app/)

Project Image
![image](https://user-images.githubusercontent.com/69744397/231968249-9fc9206f-e111-499c-9873-0d389d7297f6.png)


---

---
