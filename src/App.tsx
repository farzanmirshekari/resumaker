/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import data from './Sample_Data'
import { AbstractModel, State } from './interfaces/interface-models'
import { Drag_Reference } from './interfaces/drag-reference'
import { v4 as uuidv4 } from 'uuid'
import Form from './components/Form'
import Resume from './components/Resume'
import { useRef } from 'react'
import Utilities from './components/Utilities'

function App() {
    const [resume_data, set_resume_data] = useState({
        personal_details: {
            full_name: '',
            phone_number: '',
            email_address: '',
            github_username: '',
            linkedin_username: '',
            location: '',
        },
        skills: {
            programming_languages: '',
            frameworks: '',
            tools: '',
            certifications: '',
        },
        projects: [],
        experience: [],
        volunteering: [],
        education: [],
    })

    const drag_item = useRef<Drag_Reference>(null)
    const drag_over_item = useRef<Drag_Reference>(null)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('values')!)) {
            set_resume_data(JSON.parse(localStorage.getItem('values')!))
        } else {
            const {
                personal_details,
                skills,
                projects,
                experience,
                volunteering,
                education,
            }: State = data
            set_resume_data((prev_resume_data) => ({
                ...prev_resume_data,
                personal_details,
                skills,
                projects,
                experience,
                volunteering,
                education,
            }))
        }
    }, [])

    useEffect(() => {
        save_to_local_storage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resume_data])

    const on_drag_start = (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => {
        drag_item.current = { property, index }
    }

    const on_drag_over = (
        e: React.DragEvent<HTMLDivElement>,
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => {
        e.preventDefault()
        drag_over_item.current = { property, index }
    }

    const on_drag_end = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (drag_item.current && drag_over_item.current) {
            const { property: drag_property, index: drag_index } =
                drag_item.current
            const { property: over_property, index: over_index } =
                drag_over_item.current
            if (drag_property === over_property && drag_index !== over_index) {
                const new_resume_data = { ...resume_data }
                const dragged_item = new_resume_data[drag_property][drag_index]
                new_resume_data[drag_property].splice(drag_index, 1)
                new_resume_data[drag_property].splice(
                    over_index,
                    0,
                    dragged_item
                )
                set_resume_data(new_resume_data)
            }
        }
    }

    const save_to_local_storage = () => {
        localStorage.setItem('values', JSON.stringify(resume_data))
    }

    const handle_input_array_change =
        (
            property: 'experience' | 'education' | 'projects' | 'volunteering',
            index: number
        ) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            set_resume_data((prev_resume_data) => ({
                ...prev_resume_data,
                [property]: [
                    ...prev_resume_data[property].slice(0, index),
                    {
                        ...prev_resume_data[property][index],
                        [name]: value,
                    },
                    ...prev_resume_data[property].slice(index + 1),
                ],
            }))
        }

    const handle_details_input_array_change =
        (
            property: 'experience' | 'education' | 'projects' | 'volunteering',
            index: number,
            detail_index: number
        ) =>
        (e: React.ChangeEvent<HTMLInputElement>) => {
            set_resume_data((prev_resume_data) => ({
                ...prev_resume_data,
                [property]: [
                    ...prev_resume_data[property].slice(0, index),
                    {
                        ...prev_resume_data[property][index],
                        details: [
                            ...prev_resume_data[property][index].details.slice(
                                0,
                                detail_index
                            ),
                            e.target.value,
                            ...prev_resume_data[property][index].details.slice(
                                detail_index + 1
                            ),
                        ],
                    },
                    ...prev_resume_data[property].slice(index + 1),
                ],
            }))
        }

    const handle_personal_details_input_change = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            personal_details: {
                ...prev_resume_data.personal_details,
                [name]: value,
            },
        }))
    }

    const handle_skills_input_change = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            skills: {
                ...prev_resume_data.skills,
                [name]: value,
            },
        }))
    }

    const handle_detail_item_add = (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            [property]: [
                ...prev_resume_data[property].slice(0, index),
                {
                    ...prev_resume_data[property][index],
                    details: [
                        ...prev_resume_data[property][index].details.slice(
                            0,
                            detail_index + 1
                        ),
                        '',
                        ...prev_resume_data[property][index].details.slice(
                            detail_index + 1
                        ),
                    ],
                },
                ...prev_resume_data[property].slice(index + 1),
            ],
        }))
    }

    const handle_detail_item_delete = (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            [property]: [
                ...prev_resume_data[property].slice(0, index),
                {
                    ...prev_resume_data[property][index],
                    details: [
                        ...prev_resume_data[property][index].details.slice(
                            0,
                            detail_index
                        ),
                        ...prev_resume_data[property][index].details.slice(
                            detail_index + 1
                        ),
                    ],
                },
                ...prev_resume_data[property].slice(index + 1),
            ],
        }))
    }

    const handle_item_delete = (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        id: string
    ): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            [property]: prev_resume_data[property].filter(
                (item: AbstractModel) => item.id !== id
            ),
        }))
    }

    const handle_experience_item_add = (): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            experience: [
                ...prev_resume_data.experience,
                {
                    id: uuidv4(),
                    company: '',
                    position: '',
                    overview: '',
                    start_date: '',
                    end_date: '',
                    details: [],
                },
            ],
        }))
    }

    const handle_education_item_add = (): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            education: [
                ...prev_resume_data.education,
                {
                    id: uuidv4(),
                    education_institute: '',
                    program: '',
                    start_date: '',
                    end_date: '',
                    details: [],
                },
            ],
        }))
    }

    const handle_project_item_add = (): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            projects: [
                ...prev_resume_data.projects,
                {
                    id: uuidv4(),
                    title: '',
                    overview: '',
                    tools: '',
                    github_repository: '',
                    start_date: '',
                    end_date: '',
                    details: [],
                },
            ],
        }))
    }

    const handle_volunteering_item_add = (): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            volunteering: [
                ...prev_resume_data.volunteering,
                {
                    id: uuidv4(),
                    organization: '',
                    title: '',
                    overview: '',
                    start_date: '',
                    end_date: '',
                    details: [],
                },
            ],
        }))
    }

    const on_existing_section_JSON_upload = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const data = JSON.parse(e.target?.result as string)
                set_resume_data((prev_resume_data) => ({
                    ...prev_resume_data,
                    ...data,
                }))
            }
            reader.readAsText(file)
        }
    }

    const handle_export_to_JSON = (): void => {
        const data_string =
            'data:text/json;charset=utf-8,' +
            encodeURIComponent(
                JSON.stringify({
                    ...resume_data,
                    print_mode: false,
                })
            )
        const download_a_tag = document.createElement('a')
        download_a_tag.setAttribute('href', data_string)
        download_a_tag.setAttribute(
            'download',
            `${resume_data.personal_details.full_name.replace(
                ' ',
                '-'
            )}_${new Date().toISOString().slice(0, 10)}_resume.json`
        )
        document.body.appendChild(download_a_tag)
        download_a_tag.click()
        download_a_tag.remove()
    }

    return (
        <div className="flex flex-row flex-wrap justify-center gap-20">
            <div style={{ width: `${595}px` }} id="resume_form">
                <Form
                    {...resume_data}
                    on_personal_details_input_change={
                        handle_personal_details_input_change
                    }
                    on_skills_input_change={handle_skills_input_change}
                    on_input_array_change={handle_input_array_change}
                    on_details_input_array_change={
                        handle_details_input_array_change
                    }
                    on_detail_add={handle_detail_item_add}
                    on_detail_delete={handle_detail_item_delete}
                    on_existing_section_JSON_upload={
                        on_existing_section_JSON_upload
                    }
                    on_item_delete={handle_item_delete}
                    on_education_item_add={handle_education_item_add}
                    on_experience_item_add={handle_experience_item_add}
                    on_project_item_add={handle_project_item_add}
                    on_volunteering_item_add={handle_volunteering_item_add}
                />
            </div>
            <div
                className="flex flex-col justify-center items-center h-fit w-fit"
                id="resume_container"
            >
                <Resume
                    {...resume_data}
                    on_drag_start={on_drag_start}
                    on_drag_over={on_drag_over}
                    on_drag_end={on_drag_end}
                />
                <Utilities
                    {...resume_data}
                    handle_export_to_JSON={handle_export_to_JSON}
                />
            </div>
        </div>
    )
}

export default App
