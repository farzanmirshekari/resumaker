import Project_Item from "../individual_items/Project_Item";

interface Item {
    id: string;
    title: string;
    overview: string;
    github_repository: string;
    tools: string;
    start_date: string;
    end_date: string;
}

interface Props {
    heading: string;
    projects_list: Item[];
}

function Projects_List ( { heading, projects_list } : Props ) {
    return (
        <div className = 'w-full flex flex-col items-start gap-2 -mt-4'>
            {heading ? <h3 className = 'text-black uppercase'>{heading}</h3> : null}
            <hr className = 'w-full -mt-2.5 bg-black' style={{ height: `0.75px` }}></hr>
            {projects_list.map((item, index) => {
                const { title, overview, github_repository, tools, start_date, end_date } = item;
                return (
                    <Project_Item 
                        key = {index}
                        title = {title}
                        overview = {overview}
                        tools = {tools}
                        github_repository = {github_repository}
                        start_date = {start_date}
                        end_date = {end_date}
                    />
                )
            })}
        </div>
    )
}

export default Projects_List;