import Experience_Item from "../individual_items/Experience_Item";

interface Item {
    id: string;
    position: string;
    company: string;
    overview: string;
    start_date: string;
    end_date: string;
}

interface Props {
    heading: string;
    experience_list: Item[];
}

function Experience_List ( { heading, experience_list } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-2 -mt-4'>
            {heading ? <h3 className = 'text-black uppercase'>{heading}</h3> : null}
            <hr className = 'w-full -mt-2.5 bg-black' style={{ height: `0.75px` }}></hr>
            {experience_list.map((item, index) => {
                const { position, company, overview, start_date, end_date } = item;
                return (
                    <Experience_Item
                        key = {index}
                        position_title = {position}
                        company = {company}
                        overview = {overview}
                        start_date = {start_date}
                        end_date = {end_date}
                    />
                )
            })}
        </div>
    )
}

export default Experience_List;