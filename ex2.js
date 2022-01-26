let a =[60,40,55,75,64]
let b =[]
let kga=0
let kgb=0
a.forEach((item,index)=>{
    if(index%2==0){
        kga+=item
    }
    else{
        kgb+=item
    }
})
b.push(kga,kgb)
b.forEach(item=>{
    console.log(item)
}) 