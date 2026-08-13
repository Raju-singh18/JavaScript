
const user = {
    name: "Raju"
};

function introduce(city, profession) {
    console.log(
        `My name is ${this.name}. I live in ${city} and I am a ${profession}.`
    );
}

// ! using apply
introduce.apply(user, ["Delhi", "Developer"]);
// !using call
introduce.call(user, "Delhi", "Developer");
