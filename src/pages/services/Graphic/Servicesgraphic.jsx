import service_1 from "../../../assets/services/service_01.png"
import SectionTitle from "../../shared/SectionTitle"
import ServiceCard from "../ServiceCard"
const Servicesgraphic = () => {
    const services = [
        {
            title: "Design analysis            ",
            subtitle: "Uncovering the Art and Science of Graphic Evaluation",
            description: "Design analysis is the critical examination and evaluation of a graphic design project to assess its effectiveness, aesthetic appeal, and alignment with the intended message or purpose. It involves a comprehensive review of design elements, including layout, typography, color schemes, and imagery, to ensure they meet the desired objectives and resonate with the target audience",
            image: service_1
        },
        {
            title: "Presentation",
            subtitle: "Visual Storytelling: Presenting Graphic Designs with Impact",
            description: " In the context of graphic design, presentation refers to the process of showcasing and communicating a design concept or completed project to a client, team, or audience. It involves the visual and verbal communication of design choices, rationale, and the overall creative vision, often using mockups, digital presentations, or printed materials",
            image: service_1
        },
        {
            title: "Revision            ",
            subtitle: "Crafting Excellence: The Iterative Journey of Design Refinement",
            description: "Revision in graphic design is the iterative process of making adjustments or refinements to a design based on feedback and critique. It involves reworking design elements, layout, color, or content to enhance the design's effectiveness or align it better with the client's or audience's preferences. Revisions play a crucial role in achieving the desired design outcome",
            image: service_1
        },
        {
            title: "Delivery",
            subtitle: "From Pixels to Print: Ensuring Your Design Reaches Its Destination",
            description: "Delivery in graphic design encompasses the final stage of the design process, where the designer provides the client or end-users with the finished design files in the required formats. It ensures that the design is ready for use, whether for print, digital display, or other applications, and that it meets all technical specifications and quality standards",
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

export default Servicesgraphic
