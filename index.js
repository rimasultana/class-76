const person = {
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: "Rima",
    lastName: "Sultana"
};

const person2 = {
firstName: "Mobasshir",
lastName: "Khondhoker"
};

console.log( person.fullName.apply(person2));