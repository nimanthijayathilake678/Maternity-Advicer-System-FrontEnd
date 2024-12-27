# Maternity Adviser Frontend

The Maternity Adviser Frontend is the client-side application of the Maternity Adviser web application, designed to empower expecting mothers by providing personalized advice and support throughout their pregnancy journey. Built with React.js, this application offers a responsive and user-friendly interface catering to various user roles, including mothers, midwives, and healthcare professionals. The frontend communicates with the backend API to deliver a seamless experience for users.

---

## Key Features

### 1. User Authentication
- **Secure Registration and Login**: Users can create accounts and log in securely. Passwords are hashed to ensure the protection of sensitive information.
- **Role-Based Access**: Supports multiple user roles, including:
  - MOH Admin
  - Midwives
  - MOH Doctors
  - VOG Doctors
  - Dentists
  - Families  
  Each role has tailored access to functionalities based on their permissions.

### 2. Role-Based Dashboards
- **Personalized User Experience**: Dedicated dashboards for each user role displaying relevant information and functionalities:
  - Midwives: View patient lists and manage records.
  - Families: Access health information and resources.
- **Dynamic Navigation**: Utilizes React Router for smooth navigation between application sections, enhancing the user experience.

### 3. Pregnancy and Baby Management
- **Comprehensive Tracking**: Allows users to register pregnancies and newborns, capturing essential details like medical history, immunization schedules, and growth milestones.
- **Data Visualization**: Displays visual representations of growth charts and immunization records, enabling easy monitoring of health progress.

---

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces, enabling the creation of dynamic and interactive web applications.
- **Material UI**: A popular React UI framework providing pre-designed components for responsive layouts and enhanced user experience.
- **Axios**: A promise-based HTTP client for making requests to the backend API, facilitating data retrieval and submission.
- **React Router**: A library for routing in React applications, enabling dynamic navigation between different views.

