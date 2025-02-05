// 1. Створення класу та об'єкта:

// Створіть клас Person з властивостями name та age.

// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // 2. Методи класу:

  // Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

  sayHello() {
    console.log(`Привіт, мене звати ${this._name}`);
  }
}

let firstPerson = new Person('John', 30);

console.log(firstPerson);

// 3. Наслідування:

// Створіть клас Student, який наслідує від класу Person.

// Додайте властивість studentId до класу Student.

// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this._studentId = studentId;
  }

  study() {
    console.log(`${this._name} є студентом з номером ${this._studentId}.`);
  }
}

let firstStudent = new Student('Jack', 22, 141764);

console.log(firstStudent);

firstStudent.sayHello();
firstStudent.study();
