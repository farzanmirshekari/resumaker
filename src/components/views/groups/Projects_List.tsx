/* eslint-disable react/jsx-pascal-case */
import Abstract_Item from '../individual_items/Abstract_Item'

interface Item {
    id: string
    primary_desc: string
    primary_desc_hyperlink: string
    secondary_desc: string
    overview: string
    start_date: string
    end_date: string
    details: string[]
}

interface Props {
    heading: string
    projects_list: Item[]
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

function Projects_List({
    heading,
    projects_list,
    on_drag_start,
    on_drag_over,
    on_drag_end,
}: Props) {
    return (
        <div className="w-full flex flex-col items-start gap-2 -mt-5">
            {heading ? (
                <h3 className="-mb-2.5 lighter section_header">
                    <p>{heading.toUpperCase()}</p>
                </h3>
            ) : null}
            <div className="horizontal_divider"></div>
            <div className="-translate-y-1 text-base w-full flex flex-col">
                {projects_list.map((item, index) => {
                    const {
                        primary_desc,
                        primary_desc_hyperlink,
                        secondary_desc,
                        overview,
                        start_date,
                        end_date,
                        details,
                    } = item
                    return (
                        <Abstract_Item
                            key={`project_${index}`}
                            index={index}
                            type="projects"
                            primary_desc={primary_desc}
                            primary_desc_hyperlink={primary_desc_hyperlink}
                            secondary_desc={secondary_desc}
                            overview={overview}
                            start_date={start_date}
                            end_date={end_date}
                            details={details}
                            on_drag_start={on_drag_start}
                            on_drag_over={on_drag_over}
                            on_drag_end={on_drag_end}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Projects_List
