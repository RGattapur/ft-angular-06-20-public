
const drawStory = ob => {

    let story = `
        <a href='${ ob.link}' >
            <section class="story" data-id="${ ob.id }">
                <h4>${ ob.type }</h4>
                <p>${ ob.headline }</p>
            </section>
        </a>
    ` ;

    document.querySelector(".news").innerHTML += story

}

const drawFooter = ({legal,address}) => document.querySelector(".footer").innerHTML += `${address} ${legal}`

export {drawStory, drawFooter}