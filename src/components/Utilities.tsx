import React from 'react'
import { State } from '../models/interface-models'
import Printer_Icon from '../assets/printer_icon.svg'
import Return_Icon from '../assets/return_icon.svg'
import Download_Icon from '../assets/download_icon.svg'

interface Props extends State {
    handle_print_mode: () => void
    handle_export_to_JSON: () => void
}

function Utilities({
    print_mode,
    handle_print_mode,
    handle_export_to_JSON,
}: Props) {
    return (
        <div className="relative w-full flex flex-row justify-center items-center gap-2">
            {print_mode && (
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
            {!print_mode && (
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
    )
}

export default Utilities
