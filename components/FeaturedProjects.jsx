
export const projects=[
    {
        id:1,
        bgImage:'/p4.jpg',
        projectName:"House Taps",
        projectDate:new Date().toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    },
    {
        id:2,
        bgImage:'/p5.jpg',
        projectName:"Screw Plumbing",
        projectDate:new Date().toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    },
    {
        id:3,
        bgImage:'/p6.jpg',
        projectName:"Top Taps",
        projectDate:new Date().toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    },
    {
        id:4,
        bgImage:'/p7.jpg',
        projectName:"Complete plumbing",
        projectDate:new Date().toLocaleDateString('en-US',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    },
]

const FeaturedProjects = () => {
  return (
    <section id="projects" className=" min-h-screen flex items-center justify-center flex-col gap-2">
        <p className=" font-light text-sm">Honorable Mentions</p>
        <h1 className=" text-4xl text-[#4273C1] font-extrabold">Featured Projects</h1>
        <p className=" font-light text-center text-[16px]">Some of the projects Uptech Repaired.</p>

        <div className=" grid grid-cols-1 p-5 items-center md:grid-cols-2 lg:grid-cols-4 gap-5 w-full mx-auto" style={{placeItems: 'center'}}>
            {
                projects.map((item)=>{
                    return(
                        <div key={item.id} className="relative h-[500px] w-[90%] lg:w-[300px] bg-gray-100">
                            <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${item.bgImage})` }}
                            >
                            </div>
                            <div className="absolute inset-0 bg-[#30499B] opacity-50"></div>
                
                            <div className="relative right-3 container mx-auto text-white">
                                <h1 className=" font-bold mt-6 text-2xl text-right">{item.projectName}</h1>
                                <p className=" font-bold text-sm text-right">{item.projectDate}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </section>
  )
}

export default FeaturedProjects