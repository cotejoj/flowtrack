# FlowTrack

FlowTrack is a simple and intuitive task management app that helps you organize your tasks in four categories: To Do, Pending, Done, and Backlog. It supports adding, editing, deleting, and drag-and-drop task movement — all saved locally in your browser.

## Features

- Add new tasks to the **Backlog** column
- Drag and drop tasks between **To Do**, **Pending**, **Done**, and **Backlog**
- Edit task names inline
- Delete tasks easily
- Highlight tasks marked as **Done**
- Display the date when each task was added
- Data persists in browser **localStorage**
- Responsive and clean user interface

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/flowtrack.git
   cd flowtrack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm start
   ```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the app.

## Project Structure

- `src/components/` — React components such as `Header`, `TaskList`, and `Footer`
- `src/App.tsx` — Main app entry point
- `src/TaskList.css` — Styles for task list UI
- `src/Header.css`, `src/Footer.css` — Styles for header and footer

## Technologies Used

- React with TypeScript
- CSS for styling
- Browser localStorage for persistence

## Author

Created by [Jomar Cotejo](https://your-portfolio-url.com)

## License

This project is licensed under the MIT License.
