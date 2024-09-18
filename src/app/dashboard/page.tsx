import "../../styles/main.scss";
import { DASHBOARD_TABS } from "@/shared/constants";
import { Typography } from "@/shared/components";
import ActiveLink from "@/shared/components/ActiveLink";

export default function Home() {
    return (
        <div className='dashboard-container'>
            <Typography variant='h2' className='dashboard-title'>
                Dashboard
            </Typography>

            {/* Tabs */}
            <div className='dashboard-tabs'>
                {DASHBOARD_TABS.map(
                    ({ className, content, link }) => (
                        <ActiveLink
                            key={className}
                            href={link}
                            className={className}
                        >
                            {content}
                        </ActiveLink>
                    )
                )}
            </div>
        </div>
    );
}
