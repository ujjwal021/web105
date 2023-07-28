let number;
const generate_number = () =>
{
let n1 = Math.random()
let n2 = n1*100
n2 = Math.trunc(n2)
n2 = (n2%100)+1
number = n2
console.log(number)

}
// generate_number();

const generate_number_btn_click =()=>
{
  document.querySelector('#section1').style.display = "none"
  document.querySelector('#section2').style.display = "none"
  document.querySelector('#section3').style.display = "block"
  

  setTimeout(()=>{
   generate_number()
   document.querySelector("#field").value="";
    document.querySelector('#section1').style.display = "none"
    document.querySelector('#section2').style.display = "block"
    document.querySelector('#section3').style.display = "none"
  },1000)
}
// check function
const check_number =()=>
{
    let value=document.querySelector("#field").value
    if(value==number)
    {
        alert("congrats, You won the game")
    }
    else
    {
        alert("oops!!, Your Guess is wrong...")
    }
    generate_number_btn_click();
}