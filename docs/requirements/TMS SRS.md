# Timetable Management System SRS


# 1. Introduction
## 1.1 Purpose
This document outlines the software requirements for the development of Timetable Management System for Information Technology Department, FUTA. This document is meant for users, product designers and developers alike. It contains the overall description of this application, the features and non-functional aspect of the application.

## 1.2 Project Scope
The software will help regulate proper schedules and allocate lectures according to their availability by outlining the lecture halls, sections and other details fed into the system. It will help design timetables for each lecturer.

# 2. Overall Description
## 2.1 Product Perspective
The Timetable Management System (TMS) serves as a comprehensive solution available on both mobile and desktop platforms. This standalone application is specifically designed to streamline the process of timetable generation for lecturers. TMS is dedicated to empowering lecturers by effortlessly creating timetables that align seamlessly with their schedules and preferences.

## 2.2 Product Features
TMS will offer the following key features:

* Timetable Generation: Allow admin to generate automatic timetables according to lecturers schedules and courses.
* Lecture Halls Allocation: Allot lecture halls for each course based on their course type(Practical and Theory).
* Time Allocation: Allot periods/time duration for each course.

## 2.3 Problem Statement
TMS aims to solve the following problems:

* Multiple lectures holding at the same time in the same lecture hall.
* Conflict of two or more courses in a lecturer's timetable.

## 2.4 Users Classes and Characteristics
* **Lecturers**:
    * Login with faculty number
    * View timetable

* **Admin**:
    * Login with the system username and password
    * Register Lecturers
    * Register Courses and its type(Practical and Theory)
    * Register Lecture Halls
    * Generate general and individual timetable for each lecturer

## 2.5 Operating Environment
TMS will operate as a mobile and desktop based application accessible across multiple android devices and computers with internet connectivity. The desktop version will run on the Windows operating system.

# 3 System Features
## 3.1 Functional Requirements 
### 3.1.1 User Authentication
* Enable lecturers to access system features by providing a valid/registered Faculty number.
* Implement a secure login process for administrators using a valid username and password.

### 3.1.2 System Registration
* Allow administrators to register lecturers, subjects, and lecture halls into the system.

### 3.1.3 Timetable Generation
* Automate the process of timetable creation by assigning specific time slots to lecturers and lecture halls for the specified courses.

### 3.1.4 Timetable Viewing
* Provide administrators with the ability to view a comprehensive general timetable displaying all courses, their designated times, and the corresponding lecturers and lecture halls.
* Enable lecturers to view individualized timetables that exclusively showcase their assigned courses and specified lecture halls.

### 3.1.5 Timetable Download
* Empower administrators to download the general timetable in both PDF and image formats.
* Allow lecturers to download their personalized timetables as PDF and image files.

## 3.2 External Interface Requirements 
### 3.2.1 User Interfaces (UI)
* Provide users with an interactive interface for timetable management.
* Intuitive and user-friendly design allowing lecturers and administrators to input and view schedule details effortlessly.
* Clear and accessible display of generated timetables, ensuring ease of access and sharing.
* View schedules in a comprehensible format, facilitating efficient navigation.

### 3.2.2 Software Interfaces
**Timetable Generation Algorithm**
* Integrate a custom timetable creation algorithm, designed to assign time slots and lecture halls efficiently for each course.
* The algorithm should consider course type (practical or theory) when allotting time slots and lecture halls.

**Input Parameters**
* The software interface should allow administrators to input relevant parameters for the timetable generation algorithm.
* Parameters may include course details, course type identification and lecture hall availability.

**Output Representation**
* The generated timetable, displaying assigned time slots, lecturers, and allocated lecture halls, shall be presented in a clear and understandable format.

**Preventing Conflicts**
* The algorithm should be designed to prevent assigning the same lecture hall to more than one course simultaneously.

**Flexibility and Customization**
* The software interface should offer flexibility in adjusting parameters and constraints within the algorithm to accommodate various scheduling scenarios.
* Customization options may include setting priority rules, specifying constraints, and adjusting time slot preferences.

**Integration with Timetable Display**
* Seamless integration between the algorithm and the timetable display interface, ensuring real-time updates as the algorithm assigns time slots and lecture halls.
* The software should provide a dynamic and synchronized view of the timetable as modifications occur during the algorithm's execution.

## 3.3 Non-Functional Requirements
### 3.3.1 Performance
* **Response Time:** Aim for swift timetable generation to provide an efficient user experience.
* **Scalability:** Design the system to handle increased user and scheduling complexities without sacrificing performance.

### 3.3.2 Usability
* **Intuitiveness:** Create an interface that is user-friendly, facilitating easy navigation and timetable management.
* **Accessibility:** Ensure the TMS is accessible and usable for users with varying levels of technical expertise.

### 3.3.3 Reliability
* **Stability:** Maintain the stability and continuous availability of TMS services to prevent disruptions or downtime.
* **Error Handling:** Implement effective error-handling mechanisms to handle issues gracefully and ensure a seamless user experience.

### 3.3.4 Security
* **Data Protection:** Employ robust measures to safeguard user data, preventing unauthorized access and ensuring data integrity.
* **Secure Transmission:** Guarantee secure data transmission between users and the server during all interactions within the TMS.

### 3.3.5 Compatibility
* **Device Compatibility:** Design the TMS to be compatible with various devices and screen sizes, ensuring responsiveness across platforms.

### 3.3.6 Maintainability
* **Code Maintainability:** Develop clean, well-documented code to facilitate easy maintenance and future updates.
* **Ease of Modification:** Design the application architecture to allow straightforward modifications or enhancements as needed.

### 3.3.7 Portability
* **Platform Independence:** Ensure the TMS can seamlessly operate on different operating systems without requiring significant modifications.

## 3.4. Other Requirements

# 4. Conclusion
In conclusion, this detailed SRS outlines the comprehensive requirements and specifications for TMS, emphasizing user-friendly timetable generation with reliability, security, and scalability as key features.