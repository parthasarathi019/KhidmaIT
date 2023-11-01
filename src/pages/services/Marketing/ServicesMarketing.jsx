import service_1 from "../../../assets/services/service_01.png"
import SectionTitle from "../../shared/SectionTitle"
import ServiceCard from "../ServiceCard"
const ServicesMarketing = () => {
    const services = [
        {
            title: "Digital Marketing            ",
            subtitle: " Navigating the Digital Landscape for Business Success",
            description: "Digital marketing is a broad term that encompasses all marketing efforts conducted through digital channels. It involves utilizing online platforms, such as websites, search engines, social media, email, and paid advertising, to connect with the target audience, promote products or services, and achieve marketing objectives. Digital marketing allows for precise targeting, real-time analytics, and the ability to adapt campaigns for optimal results",
            image: service_1
        },
        {
            title: "       Social Media Marketing            ",
            subtitle: "Harnessing the Power of Social Media for Your Brand",
            description: "Social media marketing is a subset of digital marketing that focuses on leveraging social media platforms like Facebook, Instagram, Twitter, and LinkedIn to build a brand's online presence, engage with the audience, and promote products or services. It includes content creation, community management, and advertising on these platforms to connect with and influence the target audience",
            image: service_1
        },
        {
            title: "      YouTube Marketing            ",
            subtitle: "Unlocking Opportunities on the Video-First Platform",
            description: "YouTube marketing involves using the popular video-sharing platform YouTube as a marketing channel. It includes creating, optimizing, and promoting video content to reach and engage with a specific audience. YouTube marketing can encompass various strategies, including video ads, influencer collaborations, and the development of a branded YouTube channel, all aimed at achieving marketing goals and enhancing brand visibility on the platform",
            image: service_1
        }
    ]

    return (
        <div>
            <div className=" text-center">
                <SectionTitle text={"our Support"} number={""} />
            </div>
            <div className="mt-[1em] space-y-8 lg:space-y-20 lg:mt-[3em] text-center md:text-left">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        order={index + 1}
                        service={service} />
                ))}
            </div>
        </div>
    )
}

export default ServicesMarketing


// Reach
// Target Market
// Outrank Competitors
// Measurable Results
// Gain Buyers
// Conversion
