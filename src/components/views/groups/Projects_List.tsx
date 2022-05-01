import Project_Item from "../individual_items/Project_Item";
import { Draggable } from "react-drag-reorder";

interface Item {
    id: string;
    title: string;
    overview: string;
    github_repository: string;
    tools: string;
    start_date: string;
    end_date: string;
    details: string[];
}

interface Props {
    heading: string;
    projects_list: Item[];
}

function Projects_List ( { heading, projects_list } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-2 -mt-6'>
            {heading ? <h3 className = '-mb-2.5 lighter section_header'><p>{heading.toUpperCase()}</p></h3> : null}
            <div className = 'horizontal_divider'></div>
            <div className = '-translate-y-1 text-base w-full flex flex-col'>
                <Draggable>
                    {projects_list.map((item, index) => {
                        const { title, overview, github_repository, tools, start_date, end_date, details } = item;
                        return (
                            <Project_Item 
                                key = {index}
                                title = {title}
                                overview = {overview}
                                tools = {tools}
                                github_repository = {github_repository}
                                start_date = {start_date}
                                end_date = {end_date}
                                details = {details}
                            />
                        )
                    })}
                </Draggable>
            </div>
        </div>
    )
}

export default Projects_List;