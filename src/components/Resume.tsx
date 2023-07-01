/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Personal_Information from './views/groups/Personal_Information'
import Skills from './views/groups/Skills'
import Abstract_List from './views/groups/Abstract_List'
import { State } from '../interfaces/interface-models'

interface Props extends State {
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

function Resume({
    personal_details,
    skills,
    experience,
    education,
    projects,
    volunteering,
    on_drag_start,
    on_drag_over,
    on_drag_end,
}: Props) {
    return (
        <div className="flex flex-col justify-start items-start gap-4 resume_side">
            <Personal_Information {...personal_details} />
            <Skills {...skills} />
            {experience.length > 0 ? (
                <Abstract_List
                    heading="experience"
                    items_list={experience}
                    on_drag_start={on_drag_start}
                    on_drag_end={on_drag_end}
                    on_drag_over={on_drag_over}
                />
            ) : null}
            {projects.length > 0 ? (
                <Abstract_List
                    heading="projects"
                    items_list={projects}
                    on_drag_start={on_drag_start}
                    on_drag_end={on_drag_end}
                    on_drag_over={on_drag_over}
                />
            ) : null}
            {volunteering.length > 0 ? (
                <Abstract_List
                    heading="volunteering"
                    items_list={volunteering}
                    on_drag_start={on_drag_start}
                    on_drag_end={on_drag_end}
                    on_drag_over={on_drag_over}
                />
            ) : null}
            {education.length > 0 ? (
                <Abstract_List
                    heading="education"
                    items_list={education}
                    on_drag_start={on_drag_start}
                    on_drag_end={on_drag_end}
                    on_drag_over={on_drag_over}
                />
            ) : null}
        </div>
    )
}

export default Resume
