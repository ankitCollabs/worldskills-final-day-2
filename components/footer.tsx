export const Footer = ()=>{
    return(
        <footer className="py-20 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6 text-center">
                <p className="text-slate-400 text-sm mb-4 tracking-widest uppercase font-bold">Government of Odisha</p>
                <p className="text-slate-600 max-w-xl mx-auto mb-10">Building a sustainable future for 4.5 Crore citizens through clean energy and smart mobility.</p>
                <div className="flex justify-center gap-8 text-slate-400 font-medium">
                    <a href="#" className="hover:text-green-600">Policy Document</a>
                    <a href="#" className="hover:text-green-600">Dealer Login</a>
                    <a href="#" className="hover:text-green-600">Contact Help</a>
                </div>
                <div className="mt-16 pt-10 border-t border-slate-100 text-slate-300 text-xs">
                    © 2026 Department of Transport, Government of Odisha. All Rights Reserved.
                </div>
            </div>
        </footer>
    )
}