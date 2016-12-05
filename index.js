function iterativeLog(array){
  array.forEach((element, index) => {
  console.log(`${index}: ${element}`)
})
}

function iterate(callback){
  var candy = ['Skittles', 'Starburst', 'Sweedish Fish']
  candy.forEach(callback)
  return candy
}

function doToArray(array, callback){
  array.forEach(callback)
}
