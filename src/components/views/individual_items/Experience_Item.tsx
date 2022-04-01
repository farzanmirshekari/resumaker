interface Props {
    position_title: string;
    company: string;
    overview: string;
    start_date: string;
    end_date: string;
}

function Experience_Item ( { position_title, company, overview, start_date, end_date } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-0.5 -mt-1'>
            <div className = 'w-full flex flex-row justify-between items-center'>
                <div>
                    <h4 className = 'text-black'>{position_title} | {company}</h4>
                    <h5>{overview}</h5>
                </div>
                <div className = 'text-black flex flex-row items-start gap-0.5'>
                    <span>{start_date} | {end_date}</span>
                </div>
            </div>
        </div>
    )
}

export default Experience_Item;