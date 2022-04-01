interface Props {
    icon?: string;
    text: string;
}

function Contact_Details ( { icon, text } : Props ) {
    return (
        <div className = 'flex justify-center items-center gap-1.5'>
            {icon ? <img src={icon} alt="Contact Detail"/> : null}
            <span>{text}</span>
        </div>
    )
}

export default Contact_Details;