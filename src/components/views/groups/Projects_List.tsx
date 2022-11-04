/* eslint-disable react/jsx-pascal-case */
import Project_Item from "../individual_items/Project_Item";

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
    on_drag_start: (property: "experience" | "education" | "projects", index: number) => void;
    on_drag_over: (e: React.DragEvent<HTMLDivElement>, property: "experience" | "education" | "projects", index: number) => void;
    on_drag_end: (e: React.DragEvent<HTMLDivElement>) => void;
}

function Projects_List ( { heading, projects_list, on_drag_start, on_drag_over, on_drag_end } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-2 -mt-5'>
            {heading ? <h3 className = '-mb-2.5 lighter section_header'><p>{heading.toUpperCase()}</p></h3> : null}
            <div className = 'horizontal_divider'></div>
            <div className = '-translate-y-1 text-base w-full flex flex-col'>
                {projects_list.map((item, index) => {
                    const { title, overview, github_repository, tools, start_date, end_date, details } = item;
                    return (
                        <Project_Item 
                            key = {`project_${index}`}
                            index = {index}
                            title = {title}
                            overview = {overview}
                            tools = {tools}
                            github_repository = {github_repository}
                            start_date = {start_date}
                            end_date = {end_date}
                            details = {details}
                            on_drag_start = {on_drag_start}
                            on_drag_over = {on_drag_over}
                            on_drag_end = {on_drag_end}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects_List;