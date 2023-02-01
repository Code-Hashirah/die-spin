function roll(){
    let num=Math.floor(Math.random()*6)+1
    console.log(num)
    document.getElementById('die').src="Die/"+num+".jpg"
}
// setTimeout(roll,2000)