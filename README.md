# Gradebook App

A simple web-based application designed to help teachers calculate and display student grades, including the class average and individual grade performance. This project provides a straightforward way to review and apply JavaScript fundamentals such as functions, conditionals, loops, and string manipulation.

## Features

- **Calculate Class Average:** The app calculates the average score for the class based on the scores provided.
- **Grade Conversion:** Convert numerical scores into letter grades ranging from "A++" to "F" based on the predefined grading scale.
- **Pass/Fail Status:** Determine if a student has passed the course based on their score.
- **Student Messaging:** Display a message to the student that includes the class average, their grade, and whether they passed or failed the course.

## Project Structure

- **HTML:** The `index.html` file sets up the structure of the application, including input fields for student scores, a button to show the result, and a display area for the message.
- **CSS:** The `index.css` file styles the application, making it visually appealing and user-friendly.
- **JavaScript:** The `index.js` file contains all the logic for calculating the average, converting scores to grades, determining pass/fail status, and displaying the result to the student.

## How to Use

1. **Input Scores:** Enter the scores for up to 10 subjects in the input fields provided.
2. **Enter Total Score:** Input the student's total score in the designated field.
3. **Show Result:** Click the "Show Result" button to see the class average, the student's grade, and whether they passed or failed the course.
4. **Close Result:** Click the close button to hide the result and input new scores.

## Grading Scale

- **100:** A++
- **90 - 99:** A
- **80 - 89:** B
- **70 - 79:** C
- **60 - 69:** D
- **0 - 59:** F

## Example

```javascript
// Example usage of the main functions

let scores = [85, 90, 78, 92, 88, 76, 95, 89, 84, 91];
let studentScore = 88;

// Calculate the class average
let average = getAverage(scores); // Output: 86.8

// Get the student's grade
let grade = getGrade(studentScore); // Output: "B"

// Check if the student passed
let passed = hasPassingGrade(studentScore); // Output: true

// Display the message
let message = studentMsg(scores, studentScore);
// Output: "Class average: 86.8. Your grade: B. You passed the course."
```

## Installation

1. **Clone the repository:** `git clone https://github.com/yourusername/gradebook-app.git`
2. **Navigate to the project directory:** `cd gradebook-app`
3. Open **index.html** in your preferred web browser.
