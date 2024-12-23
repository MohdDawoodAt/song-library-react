# Music Library Frontend

This is the frontend for the Music Library application built with **React** and **Vite**.

## Features

- **Display Songs**: View the list of songs from the database.
- **Search for Songs**: Search for songs by title or other criteria.
- **Add Songs (Admin Only)**: Admin users can add songs to the library.

## Prerequisites

- The **backend** repository must be running for the frontend to work. Please ensure the backend is up and running before using this application.

## Installation

1. Clone the repository:

2. Navigate to the project directory:

3. To run with **Docker Compose**, follow these steps:
   - Make sure your Docker and Docker Compose are installed.
   - Run the following command:
     ```bash
     docker-compose up
     ```
4. Once the container is up, the application will be running on `localhost:5171`.

## Usage

- Open the application in your browser at [http://localhost:5171](http://localhost:5171).
- The backend must be running on the specified port (make sure the backend’s Docker container or service is up).
