# Timetable Management System Software Design Document(SDD)
## Introduction

### The Purpose

This software design document describes the structure of the software and how it will be built and executed. The file provides technical details and a description of all methods and technologies.

### The Scope

The SDD aims to provide a comprehensive technical blueprint detailing the design, architecture, and implementation strategies for the TMS application. It serves as a guide for developers, outlining the system's structure and functionality.

### Audience

This document will be created and used by the development team. The process of making changes to the software design document should be discussed with all participants. All stakeholders are free to refer to SDD at any stage of the project.

### Definitions, Acronyms and Abbreviations
* TMS - Timetable Management System
* SDD - Software Design Document

### Reference

## Overview
The Timetable Management System (TMS) is a comprehensive solution designed to streamline and automate the process of generating and managing academic timetables. TMS offers a user-friendly interface for administrators and lecturers, ensuring efficient scheduling and easy access to timetable information.

Key Features:

- **Timetable Generation:** Automates the creation of timetables based on predefined parameters and constraints.
- **Conflict Resolution:** Prevents conflicts by intelligently managing lecture hall assignments, ensuring no overlap.
- **Real-Time Updates:** Ensures administrators and lecturers have the latest timetable information.
- **Mobile-Optimized Design:** Enjoy a seamless experience on any device, from smartphones to desktops.

## Executive Summary

**TMS** revolutionizes academic scheduling by providing an efficient, user-centric platform for the creation and management of timetables. Our mission is to streamline the scheduling processes for Information Technology Department, offering an intuitive interface for administrators and lecturers to generate optimized schedules effortlessly.

### Goals

To streamline and optimize the creation and management of academic timetables and enhancing the efficiency of scheduling processes for lecturers, contributing to an organized academic environment.

### Objectives

* **Efficient Timetable Generation:** Implement an algorithm for efficient timetable generation, considering course types, lecturer availability, and hall allocations to minimize manual efforts, reduce conflicts, and generate optimized schedules based on predefined constraints.
* **User-Friendly Interface:** Provide a user-friendly interface for administrators and lecturers to input scheduling details effortlessly, improving accessibility, simplifying navigation, and offering customization options for a positive user experience.
* **Real-Time Updates:** Enable real-time updates for dynamic timetable displays, ensuring users have the latest schedule information to keep administrators and lecturers informed of schedule changes as the algorithm assigns time slots and lecture halls.

## Design Guidelines
### Roles/Responsibilities
#### 1. Development Team

- Developers, Engineers, Designers: Responsible for technical implementation, system architecture, and design elements.  
- Designs system architecture, modules, and implements technical solutions aligned with project requirements. 

#### 2. Product Managers

- Oversee product vision, requirements gathering, and alignment of technical solutions with business objectives.
- Gather and prioritize requirements, define user stories, and ensure the SDD reflects the intended product functionality.

#### 3. Quality Assurance (QA) Team

- Ensures software quality, performs testing, and validates system functionalities.
- Conducts testing, validates system functionalities, and ensures adherence to specified requirements.

### System Assumptions

- **Stable Internet Connectivity:** Assumes users have stable internet access for using TMS across mobile and desktop platforms.   
- **Platform Compatibility:** Assumes compatibility with android and windows operating systems for optimal user experience.

### Constraints

- **Resource Limitations:** Constraints on server resources or storage may impact scalability and data handling capabilities.
- **Third-Party Integration:** Dependency on third-party APIs or services for specific functionalities may impose limitations.

### System Dependencies

- **Data Storage Services:** Relies on robust data storage services for securely managing users data and timetable information
- **External APIs:** Dependencies on external APIs for certain functionalities, such as PDF and image creation.

### Project Risks

- **Security Vulnerabilities:** Risk of security breaches due to data handling, storage, or transmission vulnerabilities.
- **Scope Creep:** Risk of project scope expanding beyond initial requirements, impacting timelines and resource allocation.

## Design Considerations

### Operating Environments

TMS operates across multiple platforms to ensure a broad user reach and convenience.

- **Mobile:** Native mobile apps developed for Android (using React Native), ensuring optimal performance and user experience on android platforms.
- **Desktop:** Utilizes Electron framework to create desktop applications compatible with Windows operating systems. The system should run under Windows 7/8/10/11.

### Development Methods

TMS adopts a Waterfall development methodology to ensure a systematic and structured approach to software development, emphasizing thorough planning and sequential execution.

- **Waterfall Approach:** Enforces a well-defined and linear development process with distinct phases, including requirements gathering, system design, implementation, testing, deployment, and maintenance.


### Technology Stack

- **Backend:** Node.js for server-side runtime, Express.js for handling HTTP requests and routing, and MongoDB for data storage.
- **Frontend:** React Native for building mobile applications, ensuring cross-platform compatibility and a native-like user experience. Electron facilitates the use of React for desktop application development, enabling the creation of cross-platform desktop applications with web technologies.

## System Architecture and Architecture Design

### System Architecture Design

The architecture revolves around three key elements: the Backend Services responsible for data processing, Frontend Interfaces for user interaction, and Database Management for secure data storage.

![TMS design 1.drawio](https://hackmd.io/_uploads/BkK2bDb5p.png)

### Software Architecture Description

- **Backend Services:**

   - Node.js and Express.js power the backend, handling timetable generation, user authentication, and database interactions.
   - Utilizing a monolithic architecture to consolidate all components into a single codebase for streamlined development and deployment.

- **Frontend Interfaces:**

   - Developed using React Native and Electron with React for mobile and desktop interfaces respectively.
   - Offers a uniform and intuitive user experience across platforms.

- **Database Management:**

   - MongoDB utilized as the primary database for efficient data storage and retrieval.
   - Implements Mongoose ODM for simplified database interactions.

### TMS Data Flow Diagram
![TMS DFD.drawio](https://hackmd.io/_uploads/r1uF8oGcT.png)

## Design Specifications

### **Database:** MongoDB

### **Collections**
1. **lecturers**
   - Attributes: 
     - \_id (String)
     - fullname (String)
     - faculty_no (String)
     - designation (String)
     - mobile (String)
     - email (String)
2. **courses**
   - Attributes: 
     - \_id (String)
     - name (String)
     - code (String)
     - type (String)
     - semester (String)
     - lecturer (String)
     - lecturerID (Reference to lecturers collection)
     - period (String)
3. **lecture_halls**
    - Attributes:
        - \_id (String)
        - name (String)
        - type (String)
4. **timetables**
    - Attributes:
        - \_id
        - course (Reference to courses collection)
        - period
        - lecture_hall              

### **Relationships**
- One-to-Many relationship between lecturers and courses (One lecturer can take multiple courses)