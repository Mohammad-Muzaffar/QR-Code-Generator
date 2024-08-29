import { FC, useState } from "react";
import axios from "axios";
interface UrlInputProps {
    onSubmit: (qrCodeData: string) => void;
}

export const UrlInput: FC<UrlInputProps> = ({ onSubmit }) => {
    const [url, setUrl] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (url) {
            try {
                const response = await axios.post("http://localhost:5000/api/v1/links/upload", { url });
                const data = response.data;
                onSubmit(data.qrCode); // Pass QR code data to parent
            } catch (error) {
                alert("Error generating QR code: " + error);
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="border-slate-400 border-2 border-solid rounded-md mb-2">
                    <input
                        type="text"
                        placeholder="https://..."
                        className="h-10 w-96 p-3 text-slate-700"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </div>
                <div className="m-1 p-1 text-base text-slate-500">Add a valid URL.</div>
                <div>
                    <button
                        type="submit"
                        className="border-slate-400 border-2 border-solid rounded-md h-10 text-slate-700 text-sm p-1 hover:bg-slate-200"
                    >
                        Generate QR
                    </button>
                </div>
            </form>
        </div>
    );
};
