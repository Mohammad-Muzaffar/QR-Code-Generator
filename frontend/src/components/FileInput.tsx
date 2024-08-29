import { FC, useRef, useState } from "react";
import axios from "axios";
interface FileInputProps {
    onFileUpload: (qrCodeData: string) => void;
}

export const FileInput: FC<FileInputProps> = ({ onFileUpload }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File | null>(null);
    const fileName: string = file?.name ?? "No File Chosen";

    const handleFileInputClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0] ?? null;
        setFile(selectedFile);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (file) {
            const formData = new FormData();
            formData.append("file", file);

            try {
                const response = await axios.post("http://localhost:5000/api/v1/files/upload", formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                const data = response.data;
                onFileUpload(data.qrCode); // Pass QR code data to parent
            } catch (error) {
                alert("Error generating QR code: " + error);
            }
        } else {
            alert("No file selected.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="border-slate-400 border-2 border-solid rounded-md mb-2 flex items-center">
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                    accept="application/pdf,image/jpeg,image/png"
                />
                <input
                    type="text"
                    placeholder="No file chosen"
                    className="h-10 w-[380px] p-3 text-slate-700 flex-grow cursor-pointer"
                    readOnly
                    value={fileName}
                    onClick={handleFileInputClick}
                />
            </div>
            <div className="m-1 p-1 text-base text-slate-500">Supported file types: pdf, jpeg, png.</div>
            <div>
                <button
                    type="submit"
                    className="border-slate-400 border-2 border-solid rounded-md h-10 text-slate-700 text-sm p-1 hover:bg-slate-200"
                >
                    Generate QR
                </button>
            </div>
        </form>
    );
};
