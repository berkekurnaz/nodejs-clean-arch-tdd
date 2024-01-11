# Clean Arch TDD API

This project contains an example of a RESTful API built using Node.js, Express.js, and MongoDB, adhering to Clean Architecture and Test-Driven Development (TDD) principles.

## Getting Started

To run the project on your local machine, follow the steps below.

### Prerequisites

- Node.js
- Express.js
- MongoDB

### Endpoints
Route| Http Verb | Post Body | Description
:--- | :---: | :---: | :---:
api/users | `GET` | Empty | List all users
api/users | `POST` | { "name": "Berke kurnaz", "email: "contact@berkekurnaz.com"} | Create a new user
api/users/:id | `PUT` | Empty | Update user by id
api/users/:id | `DELETE` | Empty | Delete user by id

### Installation

1. Clone the repository:

```bash
git clone https://github.com/berkekurnaz/nodejs-clean-arch-tdd.git
cd nodejs-clean-arch-tdd
npm test
npm start

