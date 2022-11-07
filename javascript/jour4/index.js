let person = {
    name: 'Alice',
    age: 20,
    job: 'singer',
    introduction() {
        return this.name+ '' + this.age + '' + this.job;
    }
};

console.log(person.introduction());
