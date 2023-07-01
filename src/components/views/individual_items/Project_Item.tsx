interface Props {
    index: number
    title: string
    overview: string
    tools: string
    github_repository: string
    start_date: string
    end_date: string
    details: string[]
    on_drag_start: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => void
    on_drag_over: (
        e: React.DragEvent<HTMLDivElement>,
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => void
    on_drag_end: (e: React.DragEvent<HTMLDivElement>) => void
}

function Project_Item({
    index,
    title,
    overview,
    tools,
    github_repository,
    start_date,
    end_date,
    details,
    on_drag_start,
    on_drag_over,
    on_drag_end,
}: Props) {
    return (
        <div
            className="w-full flex flex-col justify-start items-start gap-0.5 cursor-move"
            draggable
            onDragStart={() => on_drag_start('projects', index)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
                on_drag_over(e, 'projects', index)
            }
            onDragEnd={on_drag_end}
        >
            <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full flex flex-row justify-between items-center">
                    <h4 className="item_title">
                        <span className="bold">
                            {github_repository.length > 0 ? (
                                <a
                                    href={github_repository}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sky-700"
                                >
                                    {title}
                                </a>
                            ) : (
                                <span className="text-black">{title}</span>
                            )}
                        </span>{' '}
                        {tools ? `| ${tools}` : ''}
                    </h4>
                    {(start_date.length > 0 && end_date.length) > 0 && (
                        <span>
                            {start_date} | {end_date}
                        </span>
                    )}
                    {start_date.length > 0 && end_date.length === 0 && (
                        <span>{start_date}</span>
                    )}
                </div>
                <div className="text-black w-full flex flex-row items-start justify-start gap-0.5">
                    <h5>{overview}</h5>
                </div>
            </div>
            <div>
                <ul>
                    {details.map((details_item, index) => {
                        return (
                            <li
                                className="list-square ml-4 -mt-0.5 leading-5 mb-1"
                                key={index}
                            >
                                {details_item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Project_Item
