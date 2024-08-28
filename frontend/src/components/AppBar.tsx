import { Link } from "react-router-dom";
import logo from "../assets/icons8-qr-code-90.png"; 

export const AppBar = () => {
    return (
        <div className="flex bg-[#e8f3f5] items-center text-2xl px-10 py-5 font-mono ui-monospace h-20 border-b-2">
            <Link to={"/"}>
                <div className="h-9 w-9">
                    <img src={logo} alt="Logo"/>
                </div>
            </Link>
                <div className="m-5 font-medium">
                    QR Generator
                </div>
        </div>
    )
}