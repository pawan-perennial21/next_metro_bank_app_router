import { FC } from "react";
import {
    AVAILABLE_SERVICES,
    CURRENT_SERVICES,
    SUMMARY_INFO,
} from "@/shared/constants";
import { Typography } from "@/shared/components";
import ServicesCard from "../serviceCard";

const SummaryBoard: FC = () => {
    return (
        <div className='summary-services'>
            {/* summary */}
            <div className='dashboard-summary'>
                <Typography
                    variant='h4'
                    className='dashboard-summary-title'
                >
                    Summary
                </Typography>

                <div className='summary-details'>
                    {SUMMARY_INFO.map(({ title, value }) => (
                        <div key={value} className='summary-content'>
                            <Typography
                                variant='span'
                                color='rgba(0, 0, 0, 0.38)'
                            >
                                {title}
                            </Typography>
                            <Typography variant='h5'>
                                {value}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
            {/* services */}
            <div className='dashboard-services'>
                <div className='dashboard-services-title'>
                    <Typography variant='h6'>Services</Typography>
                    <Typography
                        variant='h6'
                        fontWeight='400'
                        fontStyle='italic'
                    >
                        Micro bank services for you
                    </Typography>
                </div>

                {/* current services */}
                <ServicesCard
                    cardTitle='Current Services'
                    services={CURRENT_SERVICES}
                />

                {/* Available services */}
                <ServicesCard
                    cardTitle='Available Services'
                    services={AVAILABLE_SERVICES}
                />
            </div>
        </div>
    );
};

export default SummaryBoard;
