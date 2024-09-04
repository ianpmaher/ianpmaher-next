"use client";

import React, { useState } from 'react';
import SelectMenu from './SelectMenu'; // Assuming you have this component set up
import { MinusIcon } from '@radix-ui/react-icons';

const gradePointsTable = {
  AP: { 'A+': 5.3, A: 5.0, 'A-': 4.7, 'B+': 4.3, B: 4.0, 'B-': 3.7, 'C+': 3.3, C: 3.0, 'C-': 2.7, 'D+': 2.3, D: 2.0, F: 0.0 },
  H: { 'A+': 4.8, A: 4.5, 'A-': 4.2, 'B+': 3.8, B: 3.5, 'B-': 3.2, 'C+': 2.8, C: 2.5, 'C-': 2.2, 'D+': 1.8, D: 1.5, F: 0.0 },
  1: { 'A+': 4.3, A: 4.0, 'A-': 3.7, 'B+': 3.3, B: 3.0, 'B-': 2.7, 'C+': 2.3, C: 2.0, 'C-': 1.7, 'D+': 1.3, D: 1.0, F: 0.0 },
  2: { 'A+': 3.8, A: 3.5, 'A-': 3.2, 'B+': 2.8, B: 2.5, 'B-': 2.2, 'C+': 1.8, C: 1.5, 'C-': 1.2, 'D+': 0.8, D: 0.5, F: 0.0 },
  3: { 'A+': 3.3, A: 3.0, 'A-': 2.7, 'B+': 2.3, B: 2.0, 'B-': 1.7, 'C+': 1.3, C: 1.0, 'C-': 0.7, 'D+': 0.3, D: 0.2, F: 0.0 },
};

const initialCourse = { courseName: '', level: '', grade: '', credits: '', gradePoints: 0, qualityPoints: 0 };

const GPACalculator = () => {
  const [courses, setCourses] = useState(Array(7).fill({ ...initialCourse }));
  const [gpa, setGpa] = useState(0);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    updateCourse(index, name, value);
  };

  const handleSelectChange = (index, name, value) => {
    updateCourse(index, name, value);
  };

  const updateCourse = (index, name, value) => {
    const updatedCourses = courses.map((course, i) => {
      if (i === index) {
        const updatedCourse = { ...course, [name]: value };
        const gradePoints = gradePointsTable[updatedCourse.level]?.[updatedCourse.grade] || 0;
        const qualityPoints = gradePoints * (updatedCourse.credits || 0);
        return { ...updatedCourse, gradePoints, qualityPoints };
      }
      return course;
    });
    setCourses(updatedCourses);
    calculateGPA(updatedCourses);
  };

  const calculateGPA = (courses) => {
    let totalQualityPoints = 0;
    let totalCredits = 0;

    courses.forEach(course => {
      // Only factor in rows that have valid values
      if (course.level && course.grade && course.credits) {
        totalQualityPoints += course.qualityPoints || 0;
        totalCredits += parseFloat(course.credits) || 0;
      }
    });

    setGpa(totalCredits ? totalQualityPoints / totalCredits : 0);
  };

  const addRow = () => {
    setCourses([...courses, { ...initialCourse }]);
  };

  const removeRow = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses);
    calculateGPA(updatedCourses);
  };

  return (
    <>
      <table className="table-auto border-collapse mt-10 w-[60vw]">
        <caption className="text-center text-xl">GPA Calculator</caption>
        <thead className=" text-wrap">
          <tr>
            <th>Class</th>
            <th>Level</th>
            <th>Grade</th>
            <th>Credits</th>
            <th>Grade Points</th>
            <th>Quality Points</th>
            <th className='text-red-500'>Remove Row</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td className="border border-paper-text">
                <input
                  type="text"
                  name="courseName"
                  value={course.courseName}
                  onChange={(event) => handleInputChange(index, event)}
                  className="bg-green-200 hover:bg-dracula-green w-full text-black text-center focus:bg-sky-200"
                />
              </td>
              <td className="border border-paper-text">
                <SelectMenu
                  data={["AP", "H", "1", "2", "3"]}
                  selected={course.level}
                  onChange={(value) => handleSelectChange(index, 'level', value)}
                />
              </td>
              <td className="border border-paper-text">
                <SelectMenu
                  data={Object.keys(gradePointsTable[course.level] || {})}
                  selected={course.grade}
                  onChange={(value) => handleSelectChange(index, 'grade', value)}
                />
              </td>
              <td className="border border-paper-text">
                <SelectMenu
                  data={["2.5", "5", "6"]}
                  selected={course.credits.toString()}
                  onChange={(value) => handleSelectChange(index, 'credits', parseFloat(value))}
                />
              </td>
              <td className="border border-paper-text">
                {course.gradePoints.toFixed(2)}
              </td>
              <td className="border border-paper-text">
                {course.qualityPoints.toFixed(2)}
              </td>
              <td className="border border-paper-text">
                <button onClick={() => removeRow(index)} className="py-1 text-red-500 hover:outline rounded-sm">
                  <MinusIcon className='h-5 w-5 center-center' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addRow} className="mt-4 p-2 bg-green-500 text-white">Add Row</button>
      <div className="mt-4 text-lg">
        Your GPA is: {gpa.toFixed(2)}
      </div>
    </>
  );
};

export default GPACalculator;
