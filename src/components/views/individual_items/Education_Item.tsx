interface Props {
    index: number
    education_institute: string
    program: string
    start_date: string
    end_date: string
    details: string[]
    on_drag_start: (
        property: 'experience' | 'education' | 'projects',
        index: number
    ) => void
    on_drag_over: (
        e: React.DragEvent<HTMLDivElement>,
        property: 'experience' | 'education' | 'projects',
        index: number
    ) => void
    on_drag_end: (e: React.DragEvent<HTMLDivElement>) => void
}

function Education_Item({
    index,
    education_institute,
    program,
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
            onDragStart={() => on_drag_start('education', index)}
            onDragOver={(e: React.DragEvent<HTMLDivElement>) =>
                on_drag_over(e, 'education', index)
            }
            onDragEnd={on_drag_end}
        >
            <div className="w-full flex flex-row justify-between items-center">
                <h4 className="text-black item_title bold">
                    <span>{education_institute}</span>
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
                {program}
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

export default Education_Item
