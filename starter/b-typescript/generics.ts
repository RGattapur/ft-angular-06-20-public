
class Catalog {
    items = [];
    constructor(items) {
        this.addMany(items)
    }
    addItem = (item) => this.items.push(item); 
    addMany = (many) => this.items = [...this.items, ...many ];
}

const records  = [
    { artist:"Thrash Digit",title:"Classes Rock",   emmy:true,genre:"METAL" },
    { artist:"Howling Wilf",title:"Closure Blues",  emmy:true,genre:"BLUES" },
    { artist:"Dylan Beard", title:"Artisan Code",   emmy:true,genre:"FOLK" },
    { artist:"Herbie Type", title:"Generic Melody", emmy:true,genre:"JAZZ" }       
]

const movies = [
    { artist:"Alfred Hitchcock",title:"North By North West", released:1958, oscar:true },
    { artist:"Martin Scorsese",title:"Taxi Driver", released:1984, oscar:false }  
];

const vowels = [ "A","E","I","O","U" ]; 

const olympicYears = [ 1964, 1968, 1972, 1976, 1980 ];

