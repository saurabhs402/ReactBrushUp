function Random(){ // dynamic component because of {}
let number=Math.random()*100;

return <h1 className="bg-lime-500" >Random number is:  {Math.round(number)}</h1>

}
export default Random;