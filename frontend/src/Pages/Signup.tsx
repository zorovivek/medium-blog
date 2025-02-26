import SignupComponent from "../components/SignupComponent"


function Signup() {
  return (
    <div className="grid  md:grid-cols-2">

    <div className="h-screen flex  items-center justify-center">
      <SignupComponent/>
    </div>
    <div className="hidden bg-slate-200 md:flex  items-center justify-center  ">
        <div className="flex flex-col ">
        <h1 className="font-bold max-w-80">"The customer service I received was exceptional. The support team went above and  beyond to address my concerns" </h1>
        <h2 className="text-sm font-medium">Jules Winfield</h2>
        <h3 className="text-xs text-slate-500">CEO, Acren Inc.</h3>
        </div>
    </div>
    </div>
  )
}



export default Signup
