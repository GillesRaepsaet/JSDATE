let anchorage = new Date().toLocaleString('en-US',{timeZone: 'America/Anchorage'})
let iceland = new Date().toLocaleString('en-IC', {timeZone: 'Atlantic/Reykjavik'})
let petersburg = new Date().toLocaleString('ru-RU',{timeZone: 'Europe/Moscow'})
let bxl = new Date().toLocaleString('en-GB',{timeZone: 'Europe/Brussels'})

console.log(anchorage)
console.log(iceland)
console.log(petersburg)
console.log(bxl)

document.querySelector('body').innerHTML = `USA ${anchorage}     Iceland: ${iceland}    Russia: ${petersburg}   Belgian: ${bxl}`
