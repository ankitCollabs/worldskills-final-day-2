import prisma from "@/lib/prisma";

export async function POST(req:Request){
    const {name, email, mobileNumber, city} = await req.json();
    try{

        
        const data = await prisma.leads.create({
            data:{
                name,
                email,
                mobileNumber,
                city
            }
        })
    
        return Response.json({
            status: "true",
            data
        })
    }catch{
        return Response.json({
            status: "false",
            data: null
        })
    }
}


export async function GET(){
    const data = await prisma.leads.findMany({});

    return Response.json({
        message: "Here are all the leads Data",
        leads: data
    })
}