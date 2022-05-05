let anchorage = new Date().toLocaleString('en-US',{timeZone: 'America/Anchorage'})
let iceland = new Date().toLocaleString('en-IC', {timeZone: 'Atlantic/Reykjavik'})
let petersburg = new Date().toLocaleString('ru-RU',{timeZone: 'Europe/Moscow'})
let bxl = new Date().toLocaleString('en-GB',{timeZone: 'Europe/Brussels'})

console.log(anchorage)
console.log(iceland)
console.log(petersburg)
console.log(bxl)

document.querySelector('body').innerHTML = `USA ${anchorage}     Iceland: ${iceland}    Russia: ${petersburg}   Belgian: ${bxl}`



let birthDays = new Date('1997-09-01')
let nowDays = new Date()

//console.log((nowDays.getTime() / 1000) + ' seconds have passed betweeen halloween 2002 and 1/1/1970')
console.log((nowDays.getTime() - birthDays.getTime()) / (1000 * 60*60*24) + ' minutes have passed betweeen halloween 2002 and c')


let dt = new Date(); dt.setHours(dt.getHours() + 80000); // document.write(dt); console.log(dt)
console.log(dt)

function timestamp(){
    
}