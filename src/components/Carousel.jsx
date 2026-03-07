export default function Example() {
    return (
        <>
            <h1 className=" text-3xl mt-6 font-semibold text-center mx-auto">Our Lead Instructors</h1>
            <p className=" text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">Meet our experienced instructors who guide learners with practical knowledge, industry insights, and real-world project experience.</p>
            
            <div className=" flex items-center gap-6 h-100 w-full max-w-5xl my-6 mx-auto">
                <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="./angela-yu-maam.png"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Prompt engineers</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-right"
                        src="./harry-data-science.png"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Data scientists</h1>
                        <p className="text-sm">Bridging the gap between human intent and machine understanding through expert prompt design.</p>
            
                    </div>
                </div>
                <div className="relative group grow transition-all w-56 h-100 duration-500 hover:w-full">
                    <img className="h-full w-full object-cover object-center"
                        src="./hitesh-sir.png"
                        alt="image" />
                    <div
                        className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <h1 className="text-3xl">Software engineers</h1>
                        <p className="text-sm">Learn how to create and control web page elements using JavaScript DOM to build dynamic and interactive websites.</p>
            
                    </div>
                </div>
            </div>
        </>
    );
};