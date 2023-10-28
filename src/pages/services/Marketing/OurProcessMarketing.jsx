import shape from "../../../assets/Shapes.svg"
import discover from "../../../assets/services/discover.png"
import development from "../../../assets/services/development.png"
import designing from "../../../assets/services/designing.png"
import maintenance from "../../../assets/services/maintenance.png"
import Service_Process_Card from "../Service_Process_Card"
const OurProcessMarketing = () => {
    const processes = [
        {
            title: "Discover",
            icon: discover,
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            title: "Development",
            icon: development,
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            title: "Designing",
            icon: designing,
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
        {
            title: "Maintenance",
            icon: maintenance,
            description: "We aim to attain the greatest satisfaction for our clients and be one of the prominent."
        },
    ]
    return (
        <section className="mt-8 space-y-10 lg:mt-20">
            <div className="relative space-y-4">
                <p>OUR PROCESS</p>
                <h3 className='text-3xl font-semibold leading-tight lg:text-5xl lg:w-1/2'>The process we are working With Our SEO client Worldwide</h3>
                <p className='font-semibold lg:w-5/6'>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
                <img src={shape} alt="Shape" className="absolute top-0 right-0 w-5 h-5 overflow-hidden" />
            </div>
            <div className="grid gap-10 lg:grid-cols-2">
                {processes.map((item, index) => (
                    <Service_Process_Card item={item} order={index + 1} key={item.title} />
                ))}
            </div>
        </section>
    )
}

export default OurProcessMarketing
