/* eslint-disable react/jsx-pascal-case */
import Volunteering_Item from "../individual_items/Volunteering_Item";

interface Item {
    id: string;
    title: string;
    organization: string;
    overview: string;
    start_date: string;
    end_date: string;
    details: string[];
}

interface Props {
    heading: string;
    volunteering_list: Item[];
    on_drag_start: (
        property: "experience" | "education" | "projects" | "volunteering",
        index: number
    ) => void;
    on_drag_over: (
        e: React.DragEvent<HTMLDivElement>,
        property: "experience" | "education" | "projects" | "volunteering",
        index: number
    ) => void;
    on_drag_end: (e: React.DragEvent<HTMLDivElement>) => void;
}

function Volunteering_List({
    heading,
    volunteering_list,
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
                {volunteering_list.map((item, index) => {
                    const {
                        title,
                        organization,
                        overview,
                        start_date,
                        end_date,
                        details,
                    } = item;
                    return (
                        <Volunteering_Item
                            key={`volunteering_${index}`}
                            index={index}
                            title={title}
                            organization={organization}
                            overview={overview}
                            start_date={start_date}
                            end_date={end_date}
                            details={details}
                            on_drag_start={on_drag_start}
                            on_drag_over={on_drag_over}
                            on_drag_end={on_drag_end}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Volunteering_List;