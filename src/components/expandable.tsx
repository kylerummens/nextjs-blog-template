import { createRef, ElementType, PropsWithChildren, RefObject, useEffect, useLayoutEffect, useState } from "react";
import { AddCircleOutline } from "@mui/icons-material";
import styles from '../styles/Expandable.module.scss';

interface ExpandableProps extends PropsWithChildren {
    title: string;
    expanded?: boolean;
}

const Expandable: ElementType<ExpandableProps> = ({ title, expanded: _expanded, children }) => {

    const [expanded, setExpanded] = useState(typeof _expanded === 'boolean' ? _expanded : false);
    const [height, setHeight] = useState(0);

    const header: RefObject<HTMLDivElement> = createRef();
    const content: RefObject<HTMLDivElement> = createRef();

    const toggle = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        setHeight(expanded ? header.current!.offsetHeight + content.current!.offsetHeight : header.current!.offsetHeight)
    }, [expanded, header, content])

    return (
        <div className={styles.expandable} onClick={toggle} style={{maxHeight: height}}>
            <div ref={header} className="p-3 md:p-5 flex items-center justify-between transition-colors">
                <div className={`text-xl font-medium ${expanded ? 'text-blue-500' : 'text-slate-700'}`}>{ title }</div>
                <div className={`flex items-center justify-center transition-all duration-300 ${expanded ? 'rotate-45' : 'rotate-0'}`}>
                    <AddCircleOutline style={{ fontSize: 24 }} className="text-slate-700" />
                </div>
            </div>
            <div ref={content} className="px-3 pb-3 md:px-5 md:pb-5 text-lg text-slate-700">
                { children }
            </div>
        </div>
    )
}

export default Expandable;