
// ES6 class syntax provides a cleaner way to work with JS prototypal inheritance.

class People {

    constructor(path,size) {

        this.path = `${path}?results=${size}`;
        this.crowd = document.querySelector(".crowd");

        this.getData()
    }

    getData() {
        fetch(this.path)
            .then(response => response.json())
            .then(data => this.draw(data.results))
            .catch(error => console.log(error))
    }

    draw(people) {
        this.people = people;
        this.drawPeople();       
    }

    drawPeople() {
        this.crowd.innerHTML = "";
        this.people.forEach( p => this.drawPerson(p));
        // Uses explicit binding to ensure that the runtime value of THIS inside select points to this class.
        document.querySelectorAll(".person").forEach( p => p.addEventListener( "click", this.remove.bind(this)))
    }

    remove(e) {
        const id = e.currentTarget.getAttribute("data-id");
        this.people = this.people.filter( p => p.login.uuid !== id )
        // When state changes, we need to manually redraw the data again.
        this.drawPeople();
    }

    drawPerson(p) {

        const { first, last } = p.name;
        const { city } = p.location;
        const { medium } = p.picture;
        const { email } = p;
        const { uuid:id } = p.login;

        const person =
            `<section class="person" data-id=${id}>
                <p>${first} ${last}</p>
                <img src=${medium} alt=${last}/>
                <p>${city}</p>
                <p>${email}</p>
            </section>`

        this.crowd.innerHTML += person

    }
}

const people = new People("https://randomuser.me/api/",64);
