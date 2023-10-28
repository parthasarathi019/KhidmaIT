import service_1 from "../../../assets/services/service_01.png"
import ServiceCard from "../ServiceCard"
const ServicesMarketing = () => {
    const services = [
        {
            title: "Technical Support",
            subtitle: "Best in class tech support for your company. We become your tech backbone.",
            description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
            image: service_1
        },
        {
            title: "Development",
            subtitle: "Best in class tech support for your company. We become your tech backbone.",
            description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
            image: service_1
        },
        {
            title: "AWS/Azure",
            subtitle: "Best in class tech support for your company. We become your tech backbone.",
            description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
            image: service_1
        },
        {
            title: "Consulting",
            subtitle: "Best in class tech support for your company. We become your tech backbone.",
            description: "Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded.",
            image: service_1
        },
    ]

    return (
        <div className="mt-8 space-y-8 lg:space-y-20 lg:mt-20">
            {services.map((service, index) => (
                <ServiceCard
                    key={service.title}
                    order={index + 1}
                    service={service} />
            ))}
        </div>
    )
}

export default ServicesMarketing
