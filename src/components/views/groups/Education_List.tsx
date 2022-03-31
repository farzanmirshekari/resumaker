import Education_Item from "../individual_items/Education_Item";

interface Item {
    id: string;
    education_institute: string;
    program: string;
    start_date: string;
    end_date: string;
    details: string[];
}

interface Props {
    heading: string;
    education_list: Item[];
}

function Education_List ( { heading, education_list } : Props ) {
    return (
        <div>
            {heading ? <h3>{heading}</h3> : null}
            {education_list.map((item, index) => {
                const { education_institute, program, start_date, end_date, details } = item;
                return (
                    <Education_Item
                        key = {index}
                        education_institute = {education_institute}
                        program = {program}
                        start_date = {start_date}
                        end_date = {end_date}
                    />
                )
            })}
        </div>
    )
}

export default Education_List;