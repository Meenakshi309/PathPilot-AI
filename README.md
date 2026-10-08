
# PathPilot AI

AI-powered study planner, learning assistant, and progress tracker.

## About the Project

PathPilot AI is a student-focused application designed to help students organize their study schedules, discover learning resources, understand study materials, and track their learning progress with AI assistance.

## Problem Statement

Students often struggle to manage study schedules, find reliable learning resources, stay consistent with their plans, and track their progress. PathPilot AI aims to bring these activities together in one application.

## MVP Features

The initial version will focus on:

- **Study Planner:** Create and manage study sessions.
- **Goals:** Set learning goals and track progress.
- **AI Learning Assistant:** Ask questions and receive AI-generated explanations.
- **Learning Resources:** Discover useful resources for selected topics.
- **PDF Learning:** Extract and understand content from uploaded study materials.
- **Reminders:** Receive reminders for planned study sessions.
- **Progress Tracking:** Review completed sessions and learning progress.

## Tech Stack

The planned technology stack includes:

- **Frontend:** React, TypeScript, Vite
- **Backend:** Node.js, Express, TypeScript
- **Database:** MongoDB with Mongoose
- **AI Integration:** LLM APIs
- **Version Control:** Git and GitHub

## Project Structure

```text
PathPilot-AI/
├── client/       # Frontend application
├── server/       # Backend API
├── docs/         # Project documentation
└── README.md
```

The `server/` folder will be completed as the backend setup task is completed.

## Getting Started

### Prerequisites

- Node.js and npm
- Git
- A code editor such as Visual Studio Code

### Run the Client

1. Clone the repository.
2. Open a terminal in the project directory.
3. Navigate to the client folder:

   ```bash
   cd client
   ```

4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL displayed in your terminal.

## Environment Variables

The client uses `VITE_API_BASE_URL` to configure the backend API base URL.

Example:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

See `client/.env.example` for the example configuration.

## Team Workflow

- Use branch prefixes: `feature/`, `fix/`, and `chore/`.
- All changes to `main` must go through a pull request with at least one approval.
- Use feature branches instead of working directly on `main`.
- Create small pull requests and link the relevant GitHub Issue.
- Review a teammate's changes before merging.
- Use consistent commit prefixes such as `feat:`, `fix:`, `docs:`, and `chore:`.

## Project Status

**Current Phase:** Week 1 — Repository Planning and Starter Setup

The frontend starter and API service are being prepared. Backend, database, and AI integration will be developed in subsequent tasks.

## Project Goal

Build a practical AI-powered learning companion that helps students plan, learn, and track their progress in one place.
