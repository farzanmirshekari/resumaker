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
        <div>
            {heading ? <h3>{heading}</h3> : null}
            {projects_list.map((item, index) => {
                const { title, overview, github_repository, tools, start_date, end_date } = item;
                return (
                    <Project_Item
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