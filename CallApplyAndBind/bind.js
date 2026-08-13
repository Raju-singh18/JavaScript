
function introduce(city, profession) {
    console.log(
        `${this.name} lives in ${city} and is a ${profession}.`
    );
}

const user = {
    name: "Raju"
};

const introduceRaju = introduce.bind(
    user,
    "Delhi",
    "Developer"
);

introduceRaju();
