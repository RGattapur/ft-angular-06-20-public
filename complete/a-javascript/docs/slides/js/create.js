
class SlideViewer {
	constructor( slides ) {
		this.draw( slides )
	}

	draw( slides ) {
		this.view = document.querySelector(".presentation");
		this.position = 0;
		this.slides = slides;
		this.setupKeys();
		this.drawSlide()
		this.drawBullets()
	}

	drawBullets() {
		this.slides.forEach( this.drawBullet )
		document.querySelectorAll(".bullet").forEach( el => el.addEventListener("click", this.goSlide.bind(this)))
		document.querySelectorAll(".bullet").forEach( el => el.addEventListener("mouseover", this.describeSlide.bind(this)))
	}

	drawBullet(slide,n) {
		document.querySelector(".progress").innerHTML += `<p class="bullet" data-heading='${slide.h}' data-slide='${n}'>&bullet;</p>`
	}

	goSlide(e) {
		let el = e.currentTarget;
		this.position = Number(el.getAttribute("data-slide"))
		this.drawSlide();
	}

	describeSlide(e) {

		let el = e.currentTarget;
		let arrowMessage = `<span> &larr;</span>arrow keys<span>&rarr;</span>` ;
		this.heading = el.getAttribute("data-heading")
		document.querySelector(".navigate").innerHTML = this.heading
	}

	setupKeys() {
		document.addEventListener( "keyup" , this.changeSlide.bind( this ))
	}

	changeSlide( e ) {

		if( e.code === "ArrowLeft" ) {
			this.position = e.shiftKey ? 0 : Math.max( this.position-1 , 0 );
		}
		if( e.code === "ArrowRight" ) {
			this.position = e.shiftKey ? this.slides.length-1 : Math.min( this.slides.length-1 , this.position+1 );
		}

		this.drawSlide()
	}

	drawSlide() {

		let slide = this.slides[ this.position ];

		// let content = slide.t ? `<p>${ slide.t }</p>` : `<img src="${slide.i}" />`

		// 2nd-Nth element of each array is wrapped in a SPAN.
		// Add a leading space to turn off span wrapping on 2nd-Nth element.

		let content = slide.t.map( (p,n) => (n===0) || (p.charAt(0)===" ") ? `<p>${p}</p>` : `<p><span>${p}</span></p>` ).join("")

		let markup = `
		<section class="slide">
			<h2>${ slide.h }</h2>
			${content}
		</section>
		`

		this.view.innerHTML = markup;
	}
}

new SlideViewer( slides )
