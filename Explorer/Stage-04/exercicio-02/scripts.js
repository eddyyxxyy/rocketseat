function Student(name, firstGrade, secondGrade) {
  this.name = name;
  this.firstGrade = firstGrade;
  this.secondGrade = secondGrade;
  this.averageGrade = (this.firstGrade + this.secondGrade) / 2;
}

const joao = new Student("João", 6, 8.2);
const leticia = new Student("Leticia", 9.6, 7.1);
const gabriel = new Student("Gabriel", 9.3, 10);
const edson = new Student("Edson", 6, 3.5);
const alexandre = new Student("Alexandre", 10, 5.5);

const students = [joao, leticia, gabriel, edson, alexandre];

for (const student of students) {
  const response =
    `${student.name} average grade is: ${student.averageGrade}.\n` +
    (student.averageGrade >= 7
      ? "Congratulations, you've been aproved!"
      : "My bad, you've been reproved!");
  alert(response);
}
