/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Project_Input_Group from './input_groups/Project_Input_Group'
import Skills_Input_Group from './input_groups/Skills_Input_Group'
import Personal_Details_Input_Group from './input_groups/Personal_Details_Input_Group'
import { State } from '../interfaces/interface-models'
import Abstract_Input_Group from './input_groups/Abstract_Input_Group'

interface Props extends State {
    on_personal_details_input_change: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void
    on_skills_input_change: (e: React.ChangeEvent<HTMLInputElement>) => void
    on_input_array_change: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_details_input_array_change: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void
    on_detail_add: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => void
    on_detail_delete: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        index: number,
        detail_index: number
    ) => void
    on_existing_section_JSON_upload: (
        e: React.ChangeEvent<HTMLInputElement>
    ) => void
    on_item_delete: (
        property: 'experience' | 'education' | 'projects' | 'volunteering',
        id: string
    ) => void
    on_experience_item_add: () => void
    on_education_item_add: () => void
    on_project_item_add: () => void
    on_volunteering_item_add: () => void
}

function Form({
    personal_details,
    skills,
    experience,
    education,
    projects,
    volunteering,
    on_personal_details_input_change,
    on_skills_input_change,
    on_input_array_change,
    on_details_input_array_change,
    on_detail_add,
    on_detail_delete,
    on_existing_section_JSON_upload,
    on_item_delete,
    on_experience_item_add,
    on_education_item_add,
    on_project_item_add,
    on_volunteering_item_add,
}: Props) {
    return (
        <form
            onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                e.preventDefault()
            }
            className="input_form"
        >
            <section className="relative w-full flex flex-row">
                <h2
                    className="relative w-full overflow-hidden whitespace-nowrap"
                    style={{ color: '#093652' }}
                >
                    Been here before?
                </h2>
                <label className="relative flex w-full h-auto justify-end items-center">
                    <input
                        type="file"
                        accept=".json"
                        className="hidden"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            on_existing_section_JSON_upload(e)
                        }
                    />
                    <span className="relative w-full flex justify-center items-center cursor-pointer import_input">
                        Upload Existing Résumé
                    </span>
                </label>
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Personal Details
                </h2>
                <Personal_Details_Input_Group
                    item={personal_details}
                    on_input_change={on_personal_details_input_change}
                />
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Skills
                </h2>
                <Skills_Input_Group
                    item={skills}
                    on_input_change={on_skills_input_change}
                />
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Experience
                </h2>
                {experience.length === 0 ? (
                    <div className="relative w-full h-fit flex justify-end items-center">
                        <button
                            type="button"
                            className="form_button add_item_button"
                            onClick={on_experience_item_add}
                        >
                            Add Experience
                        </button>
                    </div>
                ) : (
                    experience.map((item, index) => {
                        return (
                            <Abstract_Input_Group
                                key={index}
                                type="experience"
                                label_list={[
                                    'Position',
                                    'Company',
                                    'Overview',
                                    'Start Date',
                                    'End Date',
                                ]}
                                item={item}
                                index={index}
                                on_input_array_change={on_input_array_change}
                                on_details_input_array_change={
                                    on_details_input_array_change
                                }
                                on_detail_add={on_detail_add}
                                on_item_delete={on_item_delete}
                                on_detail_delete={on_detail_delete}
                                on_item_add={on_experience_item_add}
                            />
                        )
                    })
                )}
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Projects
                </h2>
                {projects.length === 0 ? (
                    <div className="relative w-full h-fit flex justify-end items-center">
                        <button
                            type="button"
                            className="form_button add_item_button"
                            onClick={on_project_item_add}
                        >
                            Add Project
                        </button>
                    </div>
                ) : (
                    projects.map((item, index) => {
                        return (
                            <Project_Input_Group
                                key={index}
                                item={item}
                                index={index}
                                on_input_array_change={on_input_array_change}
                                on_details_input_array_change={
                                    on_details_input_array_change
                                }
                                on_detail_add={on_detail_add}
                                on_detail_delete={on_detail_delete}
                                on_item_delete={on_item_delete}
                                on_item_add={on_project_item_add}
                            />
                        )
                    })
                )}
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Volunteering
                </h2>
                {volunteering.length === 0 ? (
                    <div className="relative w-full h-fit flex justify-end items-center">
                        <button
                            type="button"
                            className="form_button add_item_button"
                            onClick={on_experience_item_add}
                        >
                            Add Volunteering
                        </button>
                    </div>
                ) : (
                    volunteering.map((item, index) => {
                        return (
                            <Abstract_Input_Group
                                key={index}
                                type="volunteering"
                                label_list={[
                                    'Title',
                                    'Organization',
                                    'Overview',
                                    'Start Date',
                                    'End Date',
                                ]}
                                item={item}
                                index={index}
                                on_input_array_change={on_input_array_change}
                                on_details_input_array_change={
                                    on_details_input_array_change
                                }
                                on_detail_add={on_detail_add}
                                on_item_delete={on_item_delete}
                                on_detail_delete={on_detail_delete}
                                on_item_add={on_volunteering_item_add}
                            />
                        )
                    })
                )}
            </section>
            <section>
                <h2 className="mb-1" style={{ color: '#093652' }}>
                    Education
                </h2>
                {education.length === 0 ? (
                    <div className="relative w-full h-fit flex justify-end items-center">
                        <button
                            type="button"
                            className="form_button add_item_button"
                            onClick={on_education_item_add}
                        >
                            Add Education
                        </button>
                    </div>
                ) : (
                    education.map((item, index) => {
                        return (
                            <Abstract_Input_Group
                                key={index}
                                type="education"
                                label_list={[
                                    'Education Institute',
                                    'Degree',
                                    'Overview',
                                    'Start Date',
                                    'End Date',
                                ]}
                                item={item}
                                index={index}
                                on_input_array_change={on_input_array_change}
                                on_details_input_array_change={
                                    on_details_input_array_change
                                }
                                on_detail_add={on_detail_add}
                                on_item_delete={on_item_delete}
                                on_detail_delete={on_detail_delete}
                                on_item_add={on_education_item_add}
                            />
                        )
                    })
                )}
            </section>
        </form>
    )
}

export default Form
