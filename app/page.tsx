import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <div className="">
      

    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
            <Image src="/assets/hero.avif" alt="Electric Car" className="w-full h-full object-cover" width={100} height={100} quality={100} unoptimized/>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-2xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-bold mb-6 border border-green-200">
                    🌱 Odisha EV Policy 2025
                </span>
                <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.9] mb-9 tracking-tighter">
                    Powering a <br />
                    <span className="text-green-600">Cleaner Odisha</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                    Join the green revolution. Get up to ₹1.5 Lakh in subsidies and zero road tax on your next electric vehicle.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-green-600 text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-200 hover:bg-green-700 transition-all">Explore Subsidies</button>
                    <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all">Locate Charging</button>
                </div>
            </div>
        </div>
    </section>

    <section id="benefits" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Go Electric?</h2>
            <p className="text-slate-500 text-lg">Sustainable mobility for a smarter tomorrow.</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-green-50 border border-green-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-green-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Save ₹1 Lakh/Year</h3>
                <p className="text-slate-600 leading-relaxed">Electricity is 80% cheaper than petrol. Reduce your monthly fuel bills significantly from day one.</p>
            </div>
            <div className="p-10 rounded-3xl bg-blue-50 border border-blue-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h.5A2.5 2.5 0 0018 9.5V8.5a3 3 0 00-3-3h-1m-4-3H9M11 11v1a2 2 0 002 2v1a2 2 0 01-2 2H3m15.341-9.22a9 9 0 11-14.682 9.22l-.01.01" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zero Emissions</h3>
                <p className="text-slate-600 leading-relaxed">Combat air pollution in Bhubaneswar and Cuttack. Every EV reduces 2 tons of CO2 annually.</p>
            </div>
            <div className="p-10 rounded-3xl bg-orange-50 border border-orange-100 hover:shadow-2xl transition-all">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Low Maintenance</h3>
                <p className="text-slate-600 leading-relaxed">No engine oil, no spark plugs, no complex transmission. Spend more time driving and less time at the workshop.</p>
            </div>
        </div>
    </section>

    <section id="incentives" className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Odisha EV Incentives</h2>
            <p className="text-slate-500 text-lg">Direct financial benefits for every citizen.</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col">
                <h4 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-widest">Two Wheelers</h4>
                <div className="text-5xl font-extrabold mb-2">₹5,000</div>
                <p className="text-green-600 font-bold mb-10">per kWh subsidy</p>
                <ul className="space-y-4 mb-10 text-slate-600">
                    <li className="flex items-center gap-3">✅ 100% Road Tax Waiver</li>
                    <li className="flex items-center gap-3">✅ No Registration Fee</li>
                    <li className="flex items-center gap-3">✅ Interest Subsidy</li>
                </ul>
                <button className="mt-auto w-full py-4 rounded-2xl bg-slate-100 font-bold hover:bg-green-600 hover:text-white transition-all">Apply Now</button>
            </div>
            <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl shadow-slate-300 flex flex-col scale-105">
                <h4 className="text-xl font-bold text-slate-500 mb-6 uppercase tracking-widest">Four Wheelers</h4>
                <div className="text-5xl font-extrabold mb-2">₹1.5 Lakh</div>
                <p className="text-green-400 font-bold mb-10">Fixed subsidy amount</p>
                <ul className="space-y-4 mb-10 text-slate-300">
                    <li className="flex items-center gap-3">✅ 100% Road Tax Waiver</li>
                    <li className="flex items-center gap-3">✅ Free Charging in Odisha</li>
                    <li className="flex items-center gap-3">✅ Priority Permit</li>
                    <li className="flex items-center gap-3">✅ Home Charger Install</li>
                </ul>
                <button className="mt-auto w-full py-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all">Most Popular</button>
            </div>
            <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 flex flex-col">
                <h4 className="text-xl font-bold text-slate-400 mb-6 uppercase tracking-widest">Public Transport</h4>
                <div className="text-5xl font-extrabold mb-2">₹10,000</div>
                <p className="text-green-600 font-bold mb-10">per kWh subsidy</p>
                <ul className="space-y-4 mb-10 text-slate-600">
                    <li className="flex items-center gap-3">✅ E-Auto Incentives</li>
                    <li className="flex items-center gap-3">✅ Charging Priority</li>
                    <li className="flex items-center gap-3">✅ Fleet Conversion Bonus</li>
                </ul>
                <button className="mt-auto w-full py-4 rounded-2xl bg-slate-100 font-bold hover:bg-green-600 hover:text-white transition-all">For Business</button>
            </div>
        </div>
    </section>

        
    </div>
  )
}
