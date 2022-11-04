/* eslint-disable react/jsx-pascal-case */
import Education_Item from '../individual_items/Education_Item'

interface Item {
    id: string
    education_institute: string
    program: string
    start_date: string
    end_date: string
    details: string[]
}

interface Props {
    heading: string
    education_list: Item[]
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

function Education_List({
    heading,
    education_list,
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
                {education_list.map((item, index) => {
                    const {
                        education_institute,
                        program,
                        start_date,
                        end_date,
                        details,
                    } = item
                    return (
                        <Education_Item
                            key={`education_${index}`}
                            index={index}
                            education_institute={education_institute}
                            program={program}
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

export default Education_List
