# **Caffee Reservation System**

A web-based reservation system for a café that allows users to book tables conveniently online. This project features a user-friendly interface for reservations and a robust backend for data management.

---

## **Features**
- **Responsive Design**: Works seamlessly across devices.
- **Reservation Form**: Users can provide their details and book a table for a specific date, time, and number of persons.
- **Validation**: Ensures all fields are filled with valid inputs.
- **Database Integration**: Stores reservation details securely in the backend.
- **Error Handling**: Handles form errors and server issues gracefully.

---

## **Tech Stack**

### **Frontend**
- React.js
- HTML5, CSS3
- Vite.js
- Axios for API integration

### **Backend**
- Node.js
- Express.js
- MongoDB (or any relational database)

---

## **Installation Instructions**

### **1. Clone the Repository**
```bash
git clone https://github.com/7-astha-rajput/CAFFEE.git
cd CAFFEE
---
```
## 2. Install Dependencies

### Frontend
Navigate to the `frontend` directory and install the necessary dependencies by running the following command:

```bash
cd frontend
npm install
```
### Backend
Navigate to the `backend` directory and install the necessary dependencies by running the following command:

```bash
cd backend
npm install
```
## 3. Start the Development Servers

### Frontend
To start the frontend development server, run the following command:

```bash
cd frontend
npm run dev
```
### Backend
To start the backend server, run the following command:

```bash
cd backend
node index.js
```
## 4. Usage

1. Open your browser and navigate to the frontend development server (e.g., [http://localhost:5173](http://localhost:5173)).
2. Fill in the reservation form with the required details.
3. Submit the form to book your reservation.
## Project Structure
```
CAFFEE/
│
├── frontend/               # Frontend code
│   ├── public/             # Static assets (images, fonts, etc.)
│   ├── src/                # React components and source files
│   ├── main.jsx            # Main entry point
│   ├── vite.config.js      # Vite.js config
│
├── backend/                # Backend code
│   ├── routes/             # API routes
│   ├── models/             # Database models (if needed)
│   ├── index.js            # Main server file
│
└── README.md               # Project documentation
```

## API Endpoints

### POST /api/v1/reservation/send
**Description**: Handles table reservations by accepting user details and returning a success message.

**Request Body**:
```json
{
  "firstName": "Astha",
  "lastName": "Rajput",
  "email": "astha@example.com",
  "phone": "1234567890",
  "date": "2024-11-30",
  "time": "19:00",
  "persons": 2
}
```
**Response**
```
{"success":true,"message":"Reservation Sent Successfully!"}
```
## Contributing

Contributions are welcome! To contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Open a pull request from your forked repository to the main repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.





