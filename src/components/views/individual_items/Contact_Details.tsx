interface Props {
    icon?: string
    text: string
}

function Contact_Details({ icon, text }: Props) {
    return (
        <div className="flex flex-row justify-center items-center gap-1.5 -mt-0.5">
            {icon ? (
                <img src={icon} alt="Contact Detail" className="w-5" />
            ) : null}
            <span style={{ fontSize: '9pt', fontFamily: 'Montserrat' }}>
                {text}
            </span>
        </div>
    )
}

export default Contact_Details
