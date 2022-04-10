interface Props {
    title: string;
    overview: string;
    tools: string;
    github_repository: string;
    start_date: string;
    end_date: string;
    details: string[];
}

function Project_Item ( { title, overview, tools, github_repository, start_date, end_date, details } : Props ) {
    return (
        <div className = 'w-full flex flex-col justify-start items-start gap-0.5'>
            <div className = 'w-full flex flex-col justify-start items-center'>
                <div className = 'w-full flex flex-row justify-between items-center'>
                    <h4><span className = 'bold'><a href = {github_repository} target = "_blank" className = 'text-sky-700'>{title}</a></span> | {tools}</h4>
                    {
                        start_date.length > 0 && end_date.length > 0 && (
                            <span>{start_date} | {end_date}</span>
                        )
                    }
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

export default Project_Item;