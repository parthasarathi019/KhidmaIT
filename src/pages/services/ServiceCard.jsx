/* eslint-disable react/prop-types */


const ServiceCard = ({ service, order }) => {
    return (
        <div className={`items-center justify-between lg:flex lg:space-y-0 space-y-6 ${order % 2 === 0 && "flex-row-reverse"} gap-20`}>
            <div className="space-y-1 lg:space-y-4 lg:w-4/6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <h3 className="text-2xl font-bold lg:text-3xl">{service.subtitle}</h3>
                <p>{service.description}</p>
            </div>
            <div>
                <img src={service.image} alt="Service Image" className="w-[418px] h-[403px]" />
            </div>
        </div>
    )
}

export default ServiceCard
