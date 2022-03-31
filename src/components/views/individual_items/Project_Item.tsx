interface Props {
    title: string;
    overview: string;
    tools: string;
    github_repository: string;
    start_date: string;
    end_date: string;
}

function Project_Item ( { title, overview, tools, github_repository, start_date, end_date } : Props ) {
    return (
        <div>
            <div>
                <div>
                    <h4>{title} | {tools}</h4>
                    <h5>{overview}</h5>
                </div>
            </div>
        </div>
    )
}

export default Project_Item;