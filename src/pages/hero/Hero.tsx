import {  useRouter } from "@tanstack/react-router";

const Hero=()=> {
  const {user} = useRouter().options.context as any;
  return (
    <>
    <div>hero</div>
    <button onClick={()=>{console.log(user)}}>click me</button>
    </>
  )
}


export default Hero;