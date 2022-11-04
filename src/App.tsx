/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from 'react'
import data from './Sample_Data'
import {
    Education,
    Experience,
    Project,
    State,
} from './models/interface-models'
import { Drag_Reference } from './models/custom-interfaces'
import { v4 as uuidv4 } from 'uuid'
import Form from './components/Form'
import Personal_Information from './components/views/groups/Personal_Information'
import Skills from './components/views/groups/Skills'
import Education_List from './components/views/groups/Education_List'
import Experience_List from './components/views/groups/Experience_List'
import Projects_List from './components/views/groups/Projects_List'
import Printer_Icon from './assets/printer_icon.svg'
import Return_Icon from './assets/return_icon.svg'
import Download_Icon from './assets/download_icon.svg'
import { useRef } from 'react'

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
        education: [],
        print_mode: false,
    })
    const dragItem = useRef<Drag_Reference>(null)
    const dragOverItem = useRef<Drag_Reference>(null)

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('values')!)) {
            set_resume_data(JSON.parse(localStorage.getItem('values')!))
        } else {
            const {
                personal_details,
                skills,
                projects,
                experience,
                education,
                print_mode,
            }: State = data
            set_resume_data((prev_resume_data) => ({
                ...prev_resume_data,
                personal_details,
                skills,
                projects,
                experience,
                education,
                print_mode,
            }))
        }
    }, [])

    useEffect(() => {
        save_to_local_storage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resume_data])

    const onDragStart = (
        property: 'experience' | 'education' | 'projects',
        index: number
    ) => {
        dragItem.current = { property, index }
    }

    const onDragOver = (
        e: React.DragEvent<HTMLDivElement>,
        property: 'experience' | 'education' | 'projects',
        index: number
    ) => {
        e.preventDefault()
        dragOverItem.current = { property, index }
    }

    const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (dragItem.current && dragOverItem.current) {
            const { property: dragProperty, index: dragIndex } =
                dragItem.current
            const { property: overProperty, index: overIndex } =
                dragOverItem.current
            if (dragProperty === overProperty && dragIndex !== overIndex) {
                const newResumeData = { ...resume_data }
                const draggedItem = newResumeData[dragProperty][dragIndex]
                newResumeData[dragProperty].splice(dragIndex, 1)
                newResumeData[dragProperty].splice(overIndex, 0, draggedItem)
                set_resume_data(newResumeData)
            }
        }
    }

    const save_to_local_storage = () => {
        localStorage.setItem(
            'values',
            JSON.stringify({
                ...resume_data,
                print_mode: false,
            })
        )
    }

    const handle_input_array_change =
        (property: 'experience' | 'education' | 'projects', index: number) =>
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
            property: 'experience' | 'education' | 'projects',
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
        property: 'experience' | 'education' | 'projects',
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
        property: 'experience' | 'education' | 'projects',
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
        property: 'experience' | 'education' | 'projects',
        id: string
    ): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            [property]: prev_resume_data[property].filter(
                (item: Experience | Education | Project) => item.id !== id
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

    const handle_print_mode = (): void => {
        set_resume_data((prev_resume_data) => ({
            ...prev_resume_data,
            print_mode: !prev_resume_data.print_mode,
        }))
        resume_data.print_mode
            ? document
                  .getElementById('resume_container')!
                  .classList.remove('print_mode')
            : document
                  .getElementById('resume_container')!
                  .classList.add('print_mode')
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
            {!resume_data.print_mode && (
                <div style={{ width: `${595}px` }}>
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
                    />
                </div>
            )}
            <div
                className="flex flex-col justify-center items-center h-fit w-fit"
                id="resume_container"
            >
                <div className="flex flex-col justify-start items-start gap-4 resume_side">
                    <Personal_Information {...resume_data.personal_details} />
                    <Skills {...resume_data.skills} />
                    {resume_data.experience.length > 0 ? (
                        <Experience_List
                            heading="experience"
                            experience_list={resume_data.experience}
                            on_drag_start={onDragStart}
                            on_drag_end={onDragEnd}
                            on_drag_over={onDragOver}
                        />
                    ) : null}
                    {resume_data.projects.length > 0 ? (
                        <Projects_List
                            heading="projects"
                            projects_list={resume_data.projects}
                            on_drag_start={onDragStart}
                            on_drag_end={onDragEnd}
                            on_drag_over={onDragOver}
                        />
                    ) : null}
                    {resume_data.education.length > 0 ? (
                        <Education_List
                            heading="education"
                            education_list={resume_data.education}
                            on_drag_start={onDragStart}
                            on_drag_end={onDragEnd}
                            on_drag_over={onDragOver}
                        />
                    ) : null}
                </div>
                <div className="relative w-full flex flex-row justify-center items-center gap-2">
                    {resume_data.print_mode && (
                        <button
                            className="print_button mt-16"
                            onClick={handle_print_mode}
                        >
                            <img
                                src={Return_Icon}
                                className="w-10 -mr-1.5"
                                alt="Return Icon"
                            />
                            <p>Return</p>
                        </button>
                    )}
                    {!resume_data.print_mode && (
                        <>
                            <button
                                className="print_button mt-16"
                                onClick={handle_print_mode}
                            >
                                <img src={Printer_Icon} alt="Printer Icon" />
                                <p>Print to PDF</p>
                            </button>
                            <button
                                className="print_button mt-16"
                                onClick={handle_export_to_JSON}
                            >
                                <img src={Download_Icon} alt="Download Icon" />
                                <p>Export to .JSON</p>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default App
