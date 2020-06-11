
class DataService {

	async getRequest( path ){

	  const response = await fetch(path);

	  if(response.ok) {
		return await response.json()
	  } else {
		return this.handleErrors( response );
	  } 
	}

	handleErrors = (response) => {

		const {status, statusText,ok,url} = response;
		return Promise.reject({ status, statusText, ok, url });
	}

}

class Exchange extends DataService{

    constructor( open ) {
        super();
        this.open = open;
        this.getData();
    }

    getData() {

        let ratesP = this.getRequest( this.open.latest )
        let currenciesP = this.getRequest( this.open.currencies )

        // Wait for both promises to resolve.
        Promise.all( [ ratesP, currenciesP ]).then( data => this.draw(data))
    }

    draw(data) {

        let rates = data[0].rates;
        let currencies = data[1];

        for( let prop in rates) {
            let rate = rates[prop];
            let name = currencies[prop];
            console.log(rate,name)
            this.drawCurrency(rate,name);
        }
    }

    drawCurrency = (rate,name) => {
        document.querySelector(".exchange").innerHTML += `<section class="panel"><p class="rate">${rate}</p><p>${name}</p></section>`   ;
    }

}


const open = {
    latest      : `https://openexchangerates.org/api/latest.json?app_id=9db569126a8644978968875847fec9cb`,
    currencies  : `https://openexchangerates.org/api/currencies.json?app_id=9db569126a8644978968875847fec9cb`
} 

new Exchange( open );

