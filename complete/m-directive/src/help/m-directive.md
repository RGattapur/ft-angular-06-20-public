## Angular 9 Training Course
## Exercise M-DIRECTIVE
## April 2020
## John Coumbe

#### Directive creation

	ng generate directive directives/music
		
- This creates a directive and updates app.module.ts

		  declarations: [ThingDirective]
		  
- Add debugging to the constructor

		@Directive({
		  selector: '[music]'
		})
		export class MusicDirective {		
		  constructor() {
		    console.log("MusicDirective");
		  }		
		}
		
- Attach the directive to a DOM element in your template.

		<section music>Custom</section>
		
- This should log MusicDirective to the browser console.
- Note the selector in the directive uses CSS custom data-attribute selector syntax.

#### ElementRef

- Change the constructor signature.

		import { Directive,ElementRef } from '@angular/core';
		
	  constructor(private el: ElementRef) {
		    console.log( el.nativeElement );
		}
		
- This gives us access to the DOM element that the directive is attached to.

#### Direct styling

- We can direct style the elements that the directive is attached to.
- Do this in the OnInit lifecycle method.

	  constructor(private elRef: ElementRef) {}
	
	  ngOnInit() {
	    this.elRef.nativeElement.style
	    .backgroundColor = "orangered";
	  }
	  
#### Using Renderer

- The styling code works in a browser, but not on mobile OS. The Renderer class is a platform-independent API for styling.

	  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
	
	  ngOnInit() {
	    this.renderer.setStyle(this.elRef.nativeElement, 'font-size', remSize );
	  }
	    
#### HostBinding

- We can use a HostBinding decorator. 
- This binding lets us change the font-size by using the expression this.textSize

		  @HostBinding('style.font-size') textSize:string;
		  
		  this.textSize = `4rem`;

#### Inputs

- We can pass in the text size in REMS as an Input

	  @Input() size:number = 1;
	  
	  this.textSize = `${this.size}rem`;
	  
#### Host Listeners

- Host listeners are event listeners attached to the DOM element that hosts this directive.	  

		@HostListener('click') toggle() {}
		
- We can emit a custom event from within this method.

	  @Output() quote = new EventEmitter();
	  this.quote.emit();
	  
#### Main template

- We can apply the directive in different ways.

	  <section music size="1.8" (quote)="save($event)">
	  <section music (quote)="save($event)">
	  <section music >
	  <section music size="10">	  
