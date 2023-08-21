# Rutgers Course Viewer (RCV)

RCV, or Rutgers Course Viewer, is an open-source platform designed as a more aesthetically-pleasing and eye-friendly alternative to the Rutgers SOC (Schedule of Classes). Our aim is to provide Rutgers students with an intuitive and visually appealing way to explore their course options.

## Features

- **Modern Design**: Built with the latest front-end technologies to ensure a sleek and responsive user experience.
- **Open Source**: Contributions are welcome! Feel free to fork, modify, and submit pull requests.
- **Fast and Efficient**: Optimized backend to ensure quick loading times and efficient data retrieval.

## Prerequisites

Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

## Setting Up and Running Locally

Follow the steps below to get RCV up and running on your local machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your_username/rcv.git
   cd rcv
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the environment variable**:
   Make sure to set the environment variable for the database connection:

   ```bash
   export DATABASE_URL={DB_URL}
   ```

   Replace `{DB_URL}` with your actual database connection string.

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   Once the server starts successfully, you can visit `http://localhost:3000` in your browser to view the application.

## Contributing

We welcome contributions from the community!

## License

No license yet!

## Acknowledgements

- The RCV team would like to thank all contributors and the Rutgers community for their support and feedback.
