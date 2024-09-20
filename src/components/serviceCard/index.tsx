import { Typography } from "@/shared/components";
import { IServicesCard } from "@/shared/interface";
import Image from "next/image";
import { FC } from "react";

const ServicesCard: FC<IServicesCard> = ({ cardTitle, services }) => {
    return (
        <div className='current-services'>
            <Typography
                variant='h4'
                className='dashboard-summary-title'
            >
                {cardTitle}
            </Typography>

            <div className='current-services-details'>
                {services.map(({ title, imgPath }) => (
                    <div
                        key={title}
                        className='current-services-content'
                    >
                        <Image
                            src={imgPath}
                            alt={title}
                            width={60}
                            height={60}
                        />
                        <Typography variant='h5' fontWeight='400'>
                            {title}
                        </Typography>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesCard;
