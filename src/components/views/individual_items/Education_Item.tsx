interface Props {
    education_institute: string;
    program: string;
    start_date: string;
    end_date: string;
    details: string[];
}

function Education_Item ( { education_institute, program, start_date, end_date, details } : Props ) {
    return (
        <div className = 'w-full flex flex-col justify-start items-start gap-0.5'>
            <div className = 'w-full flex flex-row justify-between items-center'>
                <h4 className = 'text-black item_title bold'><span>{education_institute}</span></h4>
                <span>
                    {
                        (start_date.length > 0 && end_date.length) > 0 && (
                            <span>{start_date} | {end_date}</span>
                        )
                    }
                    {
                        (start_date.length > 0 && end_date.length === 0) && (
                            <span>{start_date}</span>
                        )
                    }
                </span>
            </div>
            <div className = 'text-black w-full flex flex-row items-start justify-start gap-0.5'>
                {program}
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

export default Education_Item;