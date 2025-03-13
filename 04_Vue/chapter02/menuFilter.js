export function filterMenuByPrice(menu,maxPrice){
    const result = menu.filter((food)=> food.price<=maxPrice);
        return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(result);
        },1000)
    })
}
