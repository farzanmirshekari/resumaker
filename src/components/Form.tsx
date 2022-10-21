/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Experience_Input_Group from "./input_groups/Experience_Input_Group";
import Education_Input_Group from "./input_groups/Education_Input_Group";
import Project_Input_Group from "./input_groups/Project_Input_Group";
import Skills_Input_Group from "./input_groups/Skills_Input_Group";
import Personal_Details_Input_Group from "./input_groups/Personal_Details_Input_Group";
import { State } from "../models/interface-models";

interface Props extends State {
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number
    ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDetailsInputArrayChange: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => (e : React.ChangeEvent<HTMLInputElement>) => void;
    onDetailAdd: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => void;
    onDetailDelete: (
        property: "experience" | "education" | "projects",
        index: number,
        detail_index: number
    ) => void;
    onExistingSectionsUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onItemDelete: (property: "experience" | "education" | "projects", id: string) => void;
    onExperienceItemAdd: () => void;
    onEducationItemAdd: () => void;
    onProjectsItemAdd: () => void;
}

const preventDefaultOnFormSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
}

function Form ({
    personal_details,
    skills,
    experience,
    education,
    projects,
    onInputChange,
    onInputArrayChange,
    onDetailsInputArrayChange,
    onDetailAdd,
    onDetailDelete,
    onItemDelete,
    onExperienceItemAdd,
    onEducationItemAdd,
    onProjectsItemAdd
} : Props) {

    return (
        <form onSubmit={preventDefaultOnFormSubmit} className = 'input_form'>
            <section className='relative w-full flex flex-row'>
                <h2 className='relative w-full overflow-hidden whitespace-nowrap' style={{ color: '#093652' }}>Been here before?</h2>
                <label className='relative flex w-full h-auto justify-end items-center'>
                    <input type='file' accept='.json' className='hidden'/>
                        <span className='relative w-full flex justify-center items-center cursor-pointer import_input'>
                            Upload Existing Résumé
                        </span>
                </label>
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Personal Details</h2>
                <Personal_Details_Input_Group
                    item = {personal_details}
                    onInputChange = {onInputChange}
                />
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Skills</h2>
                <Skills_Input_Group
                    item={skills}
                    onInputChange={onInputChange}       
                />
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Experience</h2>
                {
                    experience.length === 0 ? (
                        <div className = 'relative w-full h-fit flex justify-end items-center'>
                            <button type='button' className = 'form_button add_item_button' onClick={onExperienceItemAdd}>Add Experience</button>
                        </div>
                    ) : (
                        experience.map((item, index) => {
                            return (
                                <Experience_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onDetailAdd = {onDetailAdd}
                                    onItemDelete = {onItemDelete}
                                    onDetailDelete = {onDetailDelete}
                                    onItemAdd = {onExperienceItemAdd}
                                />
                            )
                        })
                    )
                }
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Projects</h2>
                {
                    projects.length === 0 ? (
                        <div className = 'relative w-full h-fit flex justify-end items-center'>
                            <button type='button' className = 'form_button add_item_button' onClick={onProjectsItemAdd}>Add Project</button>
                        </div>
                    ) : (
                        projects.map((item, index) => {
                            return (
                                <Project_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onDetailAdd = {onDetailAdd}
                                    onDetailDelete = {onDetailDelete}
                                    onItemDelete = {onItemDelete}
                                    onItemAdd = {onProjectsItemAdd}
                                />
                            );
                        })
                    )
                }
            </section>
            <section>
                <h2 className = 'mb-1' style={{ color: '#093652' }}>Education</h2>
                {
                    education.length === 0 ? (
                        <div className = 'relative w-full h-fit flex justify-end items-center'>
                            <button type='button' className = 'form_button add_item_button' onClick={onEducationItemAdd}>Add Education</button>
                        </div>
                    ) : (
                        education.map((item, index) => {
                            return (
                                <Education_Input_Group
                                    key = {index}
                                    item = {item}
                                    index = {index}
                                    onInputArrayChange = {onInputArrayChange}
                                    onDetailsInputArrayChange = {onDetailsInputArrayChange}
                                    onDetailAdd = {onDetailAdd}
                                    onItemDelete = {onItemDelete}
                                    onDetailDelete = {onDetailDelete}
                                    onItemAdd = {onEducationItemAdd}
                                />
                            )
                        })
                    )
                }
            </section>
        </form>
    )

}

export default Form;