interface Props {
    position_title: string;
    company: string;
    overview: string;
    start_date: string;
    end_date: string;
}

function Experience_Item ( { position_title, company, overview, start_date, end_date } : Props ) {
    return (
        <div>
            <div>
                <div>
                    <h4>{position_title} | {company}</h4>
                    <h5>{overview}</h5>
                </div>
                <div>
                    <span>{start_date} | {end_date}</span>
                </div>
            </div>
        </div>
    )
}

export default Experience_Item;