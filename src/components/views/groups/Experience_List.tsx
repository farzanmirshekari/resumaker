/* eslint-disable react/jsx-pascal-case */
import Abstract_Item from '../individual_items/Abstract_Item'

interface Item {
    id: string
    position: string
    company: string
    overview: string
    start_date: string
    end_date: string
    details: string[]
}

interface Props {
    heading: string
    experience_list: Item[]
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

function Experience_List({
    heading,
    experience_list,
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
                {experience_list.map((item, index) => {
                    const {
                        position,
                        company,
                        overview,
                        start_date,
                        end_date,
                        details,
                    } = item
                    return (
                        <Abstract_Item
                            key={`experience_${index}`}
                            index={index}
                            type="experience"
                            primary_desc={position}
                            secondary_desc={company}
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

export default Experience_List
