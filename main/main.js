function printStudentsWithTwos(students) {
    students.forEach(student => {
        const disciplinesWithTwos = student.disciplines.filter(disc => disc.grades.includes(2));
        
        if (disciplinesWithTwos.length > 0) {
            console.log(`Студент: ${student.name}`);
            console.log('Дисциплины с оценкой 2:');
            disciplinesWithTwos.forEach(disc => {
                console.log(`  - ${disc.title} (оценки: ${disc.grades.join(', ')})`);
            });
            console.log(''); 
        }
    });
}
