fetch("students.json")
  .then(response => response.text())
  .then(jsonString => {
    printStudentsWithBadGrades(jsonString);
  });

function printStudentsWithBadGrades(jsonString) {
  const data = JSON.parse(jsonString);

  data.students.forEach(student => {
    if (student.discipline.grades.includes(2)) {
      console.log(
        `Студент: ${student.name}, дисциплина с 2кой: ${student.discipline.title}`
      );
    }
  });
}
