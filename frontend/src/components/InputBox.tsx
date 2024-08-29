import { useState } from "react";
import urlLogo from "../assets/icons8-url-48.png";
import fileLogo from "../assets/icons8-file-48.png";
import { UrlInput } from "./UrlInput";
import { FileInput } from "./FileInput";

interface InputBoxProps {
    onQRCodeGenerated: (qrCodeData: string) => void;
}

export const InputBox = ({ onQRCodeGenerated }: InputBoxProps) => {
    const [urlSelector, setSelector] = useState(true);

    return (
        <div>
            <nav role="navigation">
                <div className="flex justify-center w-full items-center mt-1">
                    <div className="flex justify-start items-center w-[385px]">
                        <ul role="tablist" className="flex items-center">
                            <div
                                className="w-20 h-8 mb-3 p-1 cursor-pointer border-b-slate-200 border-b-2 rounded"
                                onClick={() => setSelector(true)}
                            >
                                <li className="flex items-center">
                                    <div className="h-7 w-7">
                                        <img src={urlLogo} alt="URL" />
                                    </div>
                                    <div className="ml-1 text-slate-500 font-medium">URL</div>
                                </li>
                            </div>
                            <div
                                className="w-20 h-8 mb-3 p-1 ml-2 cursor-pointer border-b-slate-200 border-b-2 rounded"
                                onClick={() => setSelector(false)}
                            >
                                <li className="flex items-center">
                                    <div className="h-6 w-6">
                                        <img src={fileLogo} alt="File" />
                                    </div>
                                    <div className="ml-1 text-slate-500 font-medium">FILE</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="flex justify-center">
                {urlSelector ? (
                    <UrlInput onSubmit={onQRCodeGenerated} />
                ) : (
                    <FileInput onFileUpload={onQRCodeGenerated} />
                )}
            </div>
        </div>
    );
};
