import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { InputBox } from "../components/InputBox";
import { Footer } from "../components/Footer";

export const Main = () => {
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);

    const handleQRCodeGenerated = (data: string) => {
        setQrCodeData(data);
    };

    const downloadQRCode = () => {
        if (qrCodeData) {
            const link = document.createElement('a');
            link.href = qrCodeData;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <div>
            <div className="h-20 w-screen">
                <AppBar />
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-0 lg:col-span-3 font-medium p-5 mt-8 border-2 m-2 hidden lg:block">
                    <h2 className="text-xl hover:text-slate-600">What is QR Code?</h2>
                    <p className="text-lg text-slate-500 hover:text-[#133d44] mt-3">
                        QR Code is a two-dimensional version of the barcode, typically made up of black and white pixel patterns. 
                        Denso Wave, a Japanese subsidiary of the Toyota supplier Denso, developed them for marking components in 
                        order to accelerate logistics processes for their automobile production. Now, it has found its way into mobile marketing 
                        with the widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to the instant access 
                        to the information hidden in the Code.
                    </p>
                </div>
                <div className="col-span-12 lg:col-span-5 flex justify-center items-center border-2 p-5 mt-8 m-2">
                    <InputBox onQRCodeGenerated={handleQRCodeGenerated} />
                </div>
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-center items-center border-2 p-5 mt-8 m-3">
                    <h2 className="text-xl hover:text-slate-600">QR Code</h2>
                    {qrCodeData && (
                        <div>
                            <img src={qrCodeData} alt="QR Code" className="max-w-full max-h-[400px]" />
                            <button
                                onClick={downloadQRCode}
                                className="border-slate-400 border-2 border-solid rounded-md h-10 text-slate-700 text-sm p-1 mt-2 hover:bg-slate-200"
                            >
                                Download QR Code
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="pt-14">
                <Footer />
            </div>
        </div>
    );
};
