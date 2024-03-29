interface Props {
    index: number
    type: 'experience' | 'education' | 'projects' | 'volunteering'
    primary_desc: string
    primary_desc_hyperlink?: string
    secondary_desc: string
    overview: string
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

function Abstract_Item({
    index,
    type,
    primary_desc,
    primary_desc_hyperlink,
    secondary_desc,
    overview,
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
            onDragStart={() => on_drag_start(type, index)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
                on_drag_over(e, type, index)
            }
            onDragEnd={on_drag_end}
        >
            <div className="w-full flex flex-col justify-start items-center">
                <div className="w-full flex flex-row justify-between items-center">
                    <h4 className="item_title">
                        <span className="bold">
                            {primary_desc_hyperlink?.length > 0 ? (
                                <a
                                    href={primary_desc_hyperlink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-sky-700"
                                >
                                    {primary_desc}
                                </a>
                            ) : (
                                <span className="text-black">
                                    {primary_desc}
                                </span>
                            )}
                        </span>{' '}
                        {secondary_desc ? (
                            <span>
                                {'| '}
                                <span
                                    className={
                                        type === 'education' ||
                                        type === 'projects'
                                            ? 'text-black'
                                            : 'text-sky-700'
                                    }
                                >
                                    {secondary_desc}
                                </span>
                            </span>
                        ) : (
                            ''
                        )}
                    </h4>
                    <span>
                        {(start_date.length > 0 && end_date.length) > 0 && (
                            <span>
                                {start_date} | {end_date}
                            </span>
                        )}
                        {start_date.length > 0 && end_date.length === 0 && (
                            <span>{start_date}</span>
                        )}
                    </span>
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

export default Abstract_Item
