'use client';

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function RegisterPage(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobileNumber: "",
        city: ""
    })

    const [showThanks, setShowThanks] = useState(false)

    const router = useRouter()

    const onSubmit = async ()=>{
        if(!formData.name || !formData.email || !formData.mobileNumber || !formData.city){
            return alert("Please Fill All the Details")
        }
        const data =await  fetch("/api/leads", {
            method: 'POST',
            body:JSON.stringify(formData)
        })
        const contact = await data.json()

        console.log(contact)

        if(contact.data === null){
            return alert("There was some problem in submitting your request please try again later")
        }

        setShowThanks(true)
        setFormData({
            name:"",
            email: "",
            mobileNumber: "",
            city: ""
        })

    }

    return(
        <main className="min-h-screen flex flex-col justify-center items-center bg-slate-50">
            <section className="flex flex-col md:flex-row justify-center items-center h-full gap-10 px-20 py-10">
                <div className="contact-form bg-slate-900 text-white border border-green-100 py-5 px-10 rounded-2xl  shadow-xl h-full">
                    <h1 className="text-2xl font-medium text-center">Registration Form</h1>
                    <p className="text-center text-slate-100 leading-relaxed text-sm mb-3">Enter your Correct Details and our specialist will in get in touch with you shortly!</p>
                    
                    <div className="flex flex-col gap-3">

                        <div className="flex flex-col gap-1">
                            <label htmlFor="name" className=" text-lg font-medium">Name</label>
                            <input onChange={(e)=> setFormData({...formData, name:e.target.value})} type="text" name="name" placeholder="Ankit Biswas" className="text-black bg-white border border-slate-500 rounded-md py-3 px-3"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className=" text-lg font-medium">Email</label>
                            <input onChange={(e)=> setFormData({...formData, email:e.target.value})} type="email" name="email" placeholder="ankitb.collab@gmail.com" className="text-black bg-white border border-slate-500 rounded-md py-3 px-3"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="mobileNumber" className=" text-lg font-medium">Mobile Number</label>
                            <input onChange={(e)=> setFormData({...formData, mobileNumber:e.target.value})} type="text" name="mobileNumber" placeholder="9795786303" className="text-black bg-white border border-slate-500 rounded-md py-3 px-3"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="city" className=" text-lg font-medium">City</label>
                            <input onChange={(e)=> setFormData({...formData, city:e.target.value})} type="text" name="city" placeholder="Bhubaneswar" className="text-black bg-white border border-slate-500 rounded-md py-3 px-3"/>
                        </div>

                        <div className="flex justify-center">
                            <button onClick={()=> onSubmit()} className="mt-auto w-full py-3 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all">Most Popular</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-10">
                    <div className="min-w-80 min-h-24 p-7 bg-blue-50 rounded-2xl shadow-xl">
                        <h2 className="text-lg font-bold">Going electric can : </h2>

                        <ul className="flex flex-col gap-2 list-disc pl-6 mt-3">
                            <li className="text-slate-600 leading-relaxed">Help you save upto <span className="text-green-600 font-bold">₹1 Lakh/Year</span></li>
                            <li className="text-slate-600 leading-relaxed">Combat air pollution in Bhubaneswar and Cuttack</li>
                            <li className="text-slate-600 leading-relaxed">Have low maintainance and increase lifecycle</li>
                        </ul>
                    </div>
                    <div className="min-w-80 min-h-24 p-7 bg-orange-50 rounded-2xl shadow-xl">
                        <h2 className="text-lg font-bold">Registering now can : </h2>

                        <ul className="flex flex-col gap-2 list-disc pl-6 mt-3">
                            <li className="text-slate-600 leading-relaxed">Get you subsidy of <span className="text-green-600 font-bold">₹5,000</span> on Two Wheelers <span className="text-green-600 font-bold">per kWh subsidy</span></li>
                            <li className="text-slate-600 leading-relaxed">Get you subsidy of <span className="text-green-600 font-bold">₹1.5 Lakh fixed subsidy</span> on Four Wheelers</li>
                            <li className="text-slate-600 leading-relaxed">Get you subsidy of <span className="text-green-600 font-bold">₹10,000</span> on Public Transport <span className="text-green-600 font-bold">per kWh subsidy</span></li>
                        </ul>
                    </div>
                </div>
            </section>
            {showThanks && (
                <div className="absolute min-w-screen h-screen bg-black/10 flex justify-center items-center overflow-hiddle">
                    <div className="bg-white text-black p-10 rounded-xl overflow-hidden relative">
                        <p className="absolute top-2 right-4 hover:bg-black/10 px-3 py-2 cursor-pointer rounded-full" onClick={()=>setShowThanks(false)}>X</p>
                        <h1 className="text-center text-black font-bold text-2xl">Yay! You have been Registered Successfully! </h1>
                        <h2 className="text-center text-medium text-xl mt-2">Thanks for taking your fisrt step towards making india pollution free</h2>
                        <p className="text-slate-600 text-center text-lg">Our expert will call you shortly!</p>

                        <div className="flex justify-center">
                            <button onClick={()=> {setShowThanks(false);router.push("/") }} className="mt-5 px-7 py-3 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all">Done</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}