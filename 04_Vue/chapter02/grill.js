function grillMeat(menu){
    let tmp =  new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`🔥${menu}이(가) 다 구워졌습니다`)
        },2000)
    })
    return tmp;
}

export {grillMeat};