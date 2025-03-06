![1](https://github.com/user-attachments/assets/82941125-4a11-44bf-a1d7-faeda344c9a4)
![2](https://github.com/user-attachments/assets/0efb82aa-403e-4ff4-b8f5-d20a98e85758)



# **Booking Application – Full-Stack MERN Project**  

This project is a **booking application** designed with a full-stack approach using the **MERN stack** (MongoDB, Express.js, React, and Node.js). The platform enables users to **browse properties, check room availability, and make bookings seamlessly** while ensuring **security, performance, and a user-friendly experience**.  

---

## **Backend Development**  

- **Express.js**:  
  - Lightweight and flexible web framework for handling API requests.  
- **MongoDB & Mongoose**:  
  - Stores **users, properties, and bookings**.  
  - Mongoose ODM simplifies schema creation and database management.  
- **Authentication & Security**:  
  - `bcrypt` for **password hashing** and secure storage.  
  - `jsonwebtoken (JWT)` for secure **user authentication**.  
  - `cookie-parser` to handle authentication **cookies**.  
- **Environment Management**:  
  - `dotenv` to securely store **API keys and database credentials**.  
- **Media Storage**:  
  - `Cloudinary` for hosting and managing **property images** securely.  
- **CORS Middleware**:  
  - Controls **cross-origin access**, allowing secure frontend-backend communication.  

---

## **Frontend Development**  

- **React & Vite**:  
  - React for building a **dynamic UI**.  
  - Vite for fast development and optimized builds.  
- **State Management**:  
  - Zustand for managing global **authentication and booking state**.  
- **Styling & UI Components**:  
  - **Tailwind CSS** for responsive design.  
  - **DaisyUI** for pre-styled UI components.  
  - **Lucide-React** for visual consistency.  
- **Routing & Navigation**:  
  - **React Router DOM** for **smooth navigation** between pages.  
- **Notifications & User Feedback**:  
  - **React Hot Toast** for toast notifications (e.g., successful bookings, authentication errors).  

---

## **Application Features & Page Flow**  

### **1. Home Page**  
- Displays an **overview of available properties**, categorized into:  
  - **Property by type**: Hotels, resorts, villas, apartments, and houses.  
  - **Featured properties**: Showcasing featured accommodations.  
  - **Property by city**: Focused on **locations within Thailand**.  

### **2. Search Page**  
- Displays **all available properties** based on user search criteria.  
- Users can browse listings and **select a property** for more details.  

### **3. Property Details Page**  
- Provides **detailed information** about the selected property.  
- **Users must log in** to view available rooms.  

### **4. Room Selection & Booking Process**  
- After logging in, users can view **available room types**.  
- The system checks **room availability** based on selected dates.  
- Once a room is selected, users are redirected to the **purchase page**, displaying booking details.  

### **5. Final Booking & Confirmation**  
- Users **review** their booking details before proceeding.  
- After **confirmation**, the booking is processed.  
- Users can check their **booking history** on the booking page.  

---

## **Technologies Used**  

- ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat) **React**  
- ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat) **Vite**  
- ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat) **MongoDB**  
- ![Express.js](https://img.shields.io/badge/-Express.js-000000?logo=express&logoColor=white&style=flat) **Express.js**  
- ![Node.js](https://img.shields.io/badge/-Node.js-43853D?logo=node.js&logoColor=white&style=flat) **Node.js**  
- ![Zustand](https://img.shields.io/badge/-Zustand-FF9F00?logo=zustand&logoColor=black&style=flat) **Zustand**  
- ![TailwindCSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?logo=tailwindcss&logoColor=white&style=flat) **Tailwind CSS**  
- ![Framer Motion](https://img.shields.io/badge/-Framer%20Motion-FF4154?logo=framer&logoColor=white&style=flat) **Framer Motion**  
- ![React Router](https://img.shields.io/badge/-React%20Router-DCDCDC?logo=reactrouter&logoColor=black&style=flat) **React Router DOM**  
- ![Cloudinary](https://img.shields.io/badge/-Cloudinary-F2B94A?logo=cloudinary&logoColor=black&style=flat) **Cloudinary**  

---

## **Conclusion**  

This **Booking Application** integrates **modern web technologies** to deliver a **secure, scalable, and intuitive** platform for users. With a well-structured backend powered by **Node.js, Express.js, MongoDB, and authentication mechanisms**, combined with a **highly responsive frontend built using React, Tailwind CSS, and React Router**, the application ensures a **smooth and user-friendly** experience for property reservations.  
