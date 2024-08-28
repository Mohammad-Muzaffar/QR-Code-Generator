import { useState} from "react"
import urlLogo from "../assets/icons8-url-48.png";
import fileLogo from "../assets/icons8-file-48.png";
import { UrlInput } from "./UrlInput";

export const InputBox = () => {
    const [selector, setSelector] = useState({
        urlSelector : true,
    });

    return (
        <div className="">
            <nav role="navigation" >
                    <div className="flex justify-center">
                        <ul role="tablist" className="flex items-center">
                            <div className="w-32 h-8 mb-3 p-1 cursor-pointer"  onClick={()=>{
                                setSelector(c => ({
                                    ...c,
                                    urlSelector : true,
                                   }));
                            }}>
                                <li className="flex items-center">
                                    <div className="h-7 w-7">
                                        <img src={urlLogo} alt="URL"/>
                                    </div>
                                    <div className="ml-1 text-slate-500 font-medium">
                                        URL
                                    </div>
                                </li>
                            </div>
                            <div className="w-32 h-8 mb-3 p-1 cursor-pointer" onClick={()=>{
                                setSelector(c => ({
                                    ...c,
                                    urlSelector : false,
                                }));
                            }}>
                                <li className="flex items-center">
                                    <div className="h-6 w-6">
                                        <img src={fileLogo} alt="File"/>
                                    </div>
                                    <div className="ml-1 text-slate-500 font-medium">
                                        FILE
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
            </nav>
            <div className="flex justify-center">
                <UrlInput />
            </div>
        </div>
    )
}
