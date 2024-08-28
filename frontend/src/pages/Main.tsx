import { AppBar } from "../components/AppBar"
import { InputBox} from "../components/InputBox"

export const Main = () => {
    return (
        <div>
            <div className="h-20 w-screen">
                <AppBar />
            </div>
            <div>
                <InputBox />
            </div>
        </div>
    )
}