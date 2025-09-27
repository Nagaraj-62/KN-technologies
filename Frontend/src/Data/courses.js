import { FaPython, FaJava, FaDatabase, FaCodeBranch, FaReact } from 'react-icons/fa';

export const coursesData = [
  {
    id: "basic-python",
    title: "Core Python Programming",
    instructor: "Aditya Sharma",
    price: "1,999",
    originalPrice: "4,999",
    duration: "6 Weeks",
    description: "Master the fundamentals of Python, including data types, control flow, and Object-Oriented Programming (OOP). Perfect for beginners.",
    icon: FaPython,
    level: 'Beginner',    // ✨ Added level
    featured: true,       // ✨ Added featured flag
    syllabus: [
      { week: 1, topic: "Python Basics", content: "Variables, Data Types, Operators, and Input/Output." },
      { week: 2, topic: "Control Flow", content: "Conditional Statements (if-else) and Loops (for, while)." },
      { week: 3, topic: "Data Structures", content: "Lists, Tuples, Dictionaries, and Sets." },
      { week: 4, topic: "Functions & Modules", content: "Defining functions, parameters, and using built-in modules." },
      { week: 5, topic: "Object-Oriented Programming (OOP) Part 1", content: "Classes, Objects, and Constructors." },
      { week: 6, topic: "Object-Oriented Programming (OOP) Part 2", content: "Inheritance, Polymorphism, and Encapsulation." },
    ]
  },
  {
    id: "basic-java",
    title: "Core Java Programming",
    instructor: "Priya Singh",
    price: "1,999",
    originalPrice: "4,999",
    duration: "6 Weeks",
    description: "Build a strong foundation in Java, covering core concepts and the principles of Object-Oriented Programming.",
    icon: FaJava,
    level: 'Beginner',
    featured: false,
    syllabus: [
      { week: 1, topic: "Java Fundamentals", content: "JVM, JDK, Data Types, and Basic Syntax." },
      { week: 2, topic: "Control Structures", content: "Conditional logic and looping constructs in Java." },
      { week: 3, topic: "Core APIs", content: "Working with Strings, Arrays, and the Math class." },
      { week: 4, topic: "Object-Oriented Programming (OOP) Part 1", content: "Classes, Objects, Methods, and Constructors." },
      { week: 5, topic: "Object-Oriented Programming (OOP) Part 2", content: "Inheritance, Interfaces, and Packages." },
      { week: 6, topic: "Exception Handling", content: "Understanding try-catch blocks and error management." },
    ]
  },
  {
    id: "python-fullstack",
    title: "Python Fullstack Development",
    instructor: "Aditya Sharma",
    price: "3,999",
    originalPrice: "12,999",
    duration: "16 Weeks",
    description: "Become a complete web developer by mastering Python with Django for the backend and React for the frontend.",
    icon: FaCodeBranch,
    level: 'Intermediate',
    featured: false,
    syllabus: [
      { week: "1-4", topic: "Advanced Python & OOP", content: "Deep dive into Python's advanced features and design patterns." },
      { week: "5-8", topic: "Django Backend", content: "Models, Views, Templates, REST APIs, and Authentication." },
      { week: "9-12", topic: "React Frontend", content: "Components, State, Props, Hooks, and API integration." },
      { week: "13-16", topic: "Project & Deployment", content: "Building a full-stack application and deploying it to the cloud." },
    ]
  },
  {
    id: "java-fullstack",
    title: "Java Fullstack Development",
    instructor: "Priya Singh",
    price: "3,999",
    originalPrice: "12,999",
    duration: "16 Weeks",
    description: "Build robust, enterprise-level applications using Java with Spring Boot for the backend and React for the frontend.",
    icon: FaCodeBranch,
    level: 'Intermediate',
    featured: true,
    syllabus: [
      { week: "1-4", topic: "Advanced Java & Data Structures", content: "Collections, Generics, and core algorithms." },
      { week: "5-8", topic: "Spring Boot Backend", content: "REST APIs, Spring Data JPA, Security, and Microservices concepts." },
      { week: "9-12", topic: "React Frontend", content: "Building dynamic user interfaces with the React library." },
      { week: "13-16", topic: "Project & Deployment", content: "Developing and deploying a full-stack Java application." },
    ]
  },
  {
    id: "python-django",
    title: "Python with Django Framework",
    instructor: "Aditya Sharma",
    price: "2,499",
    originalPrice: "7,499",
    duration: "8 Weeks",
    description: "Specialize in backend development by building powerful and secure web applications with Python and Django.",
    icon: FaPython,
    level: 'Intermediate',
    featured: false,

    syllabus: [
      { week: "1-2", topic: "Django Fundamentals", content: "Project setup, Models, and the powerful Django Admin." },
      { week: "3-4", topic: "Views and Templates", content: "Handling requests, rendering dynamic HTML, and managing forms." },
      { week: "5-6", topic: "REST APIs with Django Rest Framework", content: "Building, testing, and securing APIs." },
      { week: "7-8", topic: "Advanced Topics & Deployment", content: "User authentication, middleware, and deployment strategies." },
    ]
  },
  {
    id: "databases",
    title: "Database Fundamentals",
    instructor: "Neha Reddy",
    price: "1,499",
    originalPrice: "4,499",
    duration: "4 Weeks",
    description: "Learn the essentials of database management, covering both relational (SQL) and non-relational (NoSQL) databases.",
    icon: FaDatabase,
    level: 'Beginner',
    featured: false,
    syllabus: [
      { week: 1, topic: "Introduction to Databases & SQL", content: "Core concepts, setting up MySQL, and basic SELECT queries." },
      { week: 2, topic: "Advanced SQL", content: "JOINs, Aggregations, Subqueries, and data manipulation (INSERT, UPDATE, DELETE)." },
      { week: 3, topic: "Database Design", content: "Normalization, primary keys, foreign keys, and schema design." },
      { week: 4, topic: "Introduction to NoSQL", content: "Understanding MongoDB, document structure, and basic queries." },
    ]
  },
  // ✨ Added a new React course as an example
  // {
  //   id: "react-mastery",
  //   title: "React Frontend Mastery",
  //   instructor: "Vikram Kumar",
  //   price: "2,999",
  //   originalPrice: "8,999",
  //   duration: "10 Weeks",
  //   description: "Go from beginner to expert in React. Learn hooks, state management with Redux, and build complex, scalable applications.",
  //   icon: FaReact,
  //   level: 'Advanced',
  //   featured: false,
  //   syllabus: [
  //     { week: "1-2", topic: "React Fundamentals & JSX", content: "Components, props, state, and the component lifecycle." },
  //     { week: "3-4", topic: "Advanced Hooks & State", content: "Deep dive into useEffect, useContext, useReducer, and custom hooks." },
  //     { week: "5-6", topic: "Routing and Forms", content: "Using React Router and handling complex form state." },
  //     { week: "7-8", topic: "State Management with Redux Toolkit", content: "Managing global application state efficiently." },
  //     { week: "9-10", topic: "Performance & Final Project", content: "Optimization techniques and building a portfolio-ready project." },
  //   ]
  // },
];
