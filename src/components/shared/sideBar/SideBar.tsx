import User from "../../ui/user/User";
import { sidebarData } from "./sideBar.data";

const SideBar = () => {
    


    return (
        <aside className="sidebar">
            <div className="scrollbar">
                <User />
            </div>
        </aside>
    )
}

export default SideBar;