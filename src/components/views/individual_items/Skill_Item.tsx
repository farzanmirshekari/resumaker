interface Props {
    title: string;
    values: string;
}

function Skill_Item ( { title, values } : Props ) {
    return (
        <div className = 'w-full flex flex-row'>
            <h3 className = 'text-base'>{`${title}:`}</h3>
            <p className = 'ml-2 text-base'>{values}</p>
        </div>
    )
}

export default Skill_Item;