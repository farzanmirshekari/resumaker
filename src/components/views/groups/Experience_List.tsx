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
        <div>
            {heading ? <h3>{heading}</h3> : null}
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