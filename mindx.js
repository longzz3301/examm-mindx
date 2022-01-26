let a = ["BINH","HUNG","PHUOC","CAO","KHANH"]
let b = []
count = 0
a.forEach(item=>{
    if(item.length>count){
        count = item.length
    }
})
a.forEach(item=>{
    if(item.length==count){
        b.push(item)
    }
})
b.forEach(item=>{
    console.log(item)
})

