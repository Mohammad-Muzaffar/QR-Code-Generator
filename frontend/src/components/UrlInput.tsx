
export const UrlInput = () =>{

    return (
        <div>
            <div className="border-slate-400 border-2 border-solid rounded-md mb-2">
                <input type="text" placeholder="https://..." className="h-10 w-96 p-3"/>
            </div>
            <div >
                <button type="button" className="border-slate-400 border-2 border-solid rounded-md h-10 p-2">Generate QR</button>
            </div>
        </div>
    )
}