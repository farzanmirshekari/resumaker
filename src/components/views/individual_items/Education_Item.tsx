interface Props {
    education_institute: string;
    program: string;
    start_date: string;
    end_date: string;
    details: string[];
}

function Education_Item ( { education_institute, program, start_date, end_date, details } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-0.5'>
            <div className = 'w-full flex flex-row justify-between items-center'>
                <h4 className = 'text-black item_title bold'><span>{education_institute}</span></h4>
                <span>{start_date} - {end_date}</span>
            </div>
            <div>
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