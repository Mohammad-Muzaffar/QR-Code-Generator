import { FC } from "react";

interface QRCodeDisplayProps {
    qrCodeData: string | null; // Base64 QR code image data
}

export const QRCodeDisplay: FC<QRCodeDisplayProps> = ({ qrCodeData }) => {
    return (
        <div className="flex justify-center items-center p-4">
            {qrCodeData ? (
                <img src={qrCodeData} alt="QR Code" className="max-w-full max-h-[400px]" />
            ) : (
                <p>No QR Code available</p>
            )}
        </div>
    );
};
