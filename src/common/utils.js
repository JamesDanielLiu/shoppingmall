//防抖
export function debounce(func, interval){
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args)
        },interval)
    }
}