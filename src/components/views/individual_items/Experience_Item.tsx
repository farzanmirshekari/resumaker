interface Props {
    position_title: string;
    company: string;
    overview: string;
    start_date: string;
    end_date: string;
    details: string[];
}

function Experience_Item ( { position_title, company, overview, start_date, end_date, details } : Props ) {
    return (
        <div className = 'w-full flex flex-col justify-start items-start gap-0.5'>
            <div className = 'w-full flex flex-col justify-start items-center'>
                <div className = 'w-full flex flex-row justify-between items-center'>
                    <h4 className = 'text-black item_title'><span className = 'bold'>{position_title}</span> | {company}</h4>
                    <span>{start_date} | {end_date}</span>
                </div>
                <div className = 'text-black w-full flex flex-row items-start justify-start gap-0.5'>
                    <h5>{overview}</h5>
                </div>
            </div>
            <div>
                <ul>    
                    {
                        details.map((details_item, index) => {
                            return (
                                <li className = 'list-square ml-4 -mt-0.5 leading-5 mb-1' key={index}>{details_item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Experience_Item;