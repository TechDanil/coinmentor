import { sidebarData } from "./sideBar.data";

const SideBar = () => {
    const renderSubItems = (subItems?: any[]) => {
        if (!subItems) return null;

        return (
            <ul>
                {subItems.map((subItem) => (
                    <li key={subItem.id}>
                        <a href={`/${subItem.label.toLowerCase().replace(/\s/g, '-')}.html`}>{subItem.label}</a>
                    </li>
                ))}
            </ul>
        )
    }


    return (
        <aside className="sidebar">
            <div className="scrollbar">
                <ul className="navigation">
                    {sidebarData.map((item) => (
                        <li key={item.id} className={item.subItems ? 'navigation__sub' : ''}>
                            <a href="">
                                <i className={`zwicon ${item.iconClass}`}></i> {item.label}
                            </a>
                            {renderSubItems(item.subItems)}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

export default SideBar;