import Experience_Item from "../individual_items/Experience_Item";

interface Item {
    id: string;
    position: string;
    company: string;
    overview: string;
    start_date: string;
    end_date: string;
    details: string[];
}

interface Props {
    heading: string;
    experience_list: Item[];
}

function Experience_List ( { heading, experience_list } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-2 -mt-5'>
            {heading ? <h3 className = '-mb-2.5 lighter section_header'><p>{heading.toUpperCase()}</p></h3> : null}
            <div className = 'horizontal_divider'></div>
            <div className = '-translate-y-1 text-base w-full flex flex-col'>
                {experience_list.map((item, index) => {
                    const { position, company, overview, start_date, end_date, details } = item;
                    return (
                        <Experience_Item
                            key = {index}
                            position_title = {position}
                            company = {company}
                            overview = {overview}
                            start_date = {start_date}
                            end_date = {end_date}
                            details = {details}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Experience_List;