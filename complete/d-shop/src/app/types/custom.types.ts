
interface Item{
	desc:string;
	price:number;
	size:string;
  quantity:number;
  code:string;
}

interface BasketItem extends Item{
	id:number;
}

export {Item,BasketItem}
