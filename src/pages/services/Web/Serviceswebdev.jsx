// import service_1 from "../../../assets/services/service_01.png"
import Tech_Skill_Dev from '../../../assets/New folder/Tech_Skill_Dev.png'
import ui_ux from '../../../assets/New folder/ui_ux.png'
import SEO_Friendly from '../../../assets/New folder/SEO_Friendly.png'
import Custom_Framework from '../../../assets/New folder/Custom_Framework.png'

import ServiceCard from "../ServiceCard"
import SectionTitle from '../../shared/SectionTitle'
const Serviceswebdev = () => {
    const services = [
        {
            title: "Technically Skilled Developer",
            subtitle: "Navigating Complex Code Landscapes - The Role of a Technically Skilled Developer in Crafting",
            description: "A technically skilled developer is a professional with a deep and comprehensive understanding of programming languages, software development tools, and coding practices. They are adept at writing, maintaining, and optimizing software or applications, bringing technical expertise to the development process",
            image: Tech_Skill_Dev
        },
        {
            title: "Great UI-UX",
            subtitle: "Elevating User Experiences through Intuitive Design - How the Synergy of User Interface ",
            description: "Great UI-UX refers to a user interface and user experience design that excels in providing a visually appealing, intuitive, and user-friendly interaction with a digital product or website. It focuses on creating a seamless and enjoyable experience for users, optimizing accessibility and engagement",
            image: ui_ux
        },
        {
            title: "100% SEO Friendly",
            subtitle: "Mastering the Art of Search Engine Optimization - Achieving a 100% SEO-Friendly Online Presence for Enhanced Visibility",
            description: " A 100% SEO-friendly website or content is structured and optimized to the highest standards of search engine optimization. It ensures that the content, metadata, and technical elements are aligned with best practices to improve visibility and ranking on search engine results pages, ultimately driving organic traffic",
            image: SEO_Friendly
        },
        {
            title: "Custom Framework",
            subtitle: "Building Tailor-Made Solutions for Uniqueness and Precision - The Power of Custom Frameworks in Shaping Software",
            description: "A custom framework in software development refers to a tailored and unique infrastructure or set of tools designed for a specific project or application. It offers flexibility and efficiency by addressing the project's unique requirements, allowing developers to create solutions that precisely meet their needs, rather than using off-the-shelf solutions",
            image: Custom_Framework
        },
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

export default Serviceswebdev
