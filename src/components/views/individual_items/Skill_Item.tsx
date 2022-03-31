interface Props {
    title: string;
    values: string;
}

function Skill_Item ( { title, values } : Props ) {
    return (
        <div>
            <h3>{title}: {values}</h3>
        </div>
    )
}

export default Skill_Item;