import { State } from '../interfaces/interface-models'
import Printer_Icon from '../assets/printer_icon.svg'
import Download_Icon from '../assets/download_icon.svg'

interface Props extends State {
    handle_export_to_JSON: () => void
}

function Utilities({ handle_export_to_JSON }: Props) {
    return (
        <div className="relative w-full flex flex-row justify-center items-center gap-2">
            <button className="print_button mt-16" onClick={window.print}>
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
        </div>
    )
}

export default Utilities
