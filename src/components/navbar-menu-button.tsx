import { ElementType, PropsWithChildren } from "react";
import Button from '@mui/joy/Button';

export interface NavbarMenuButtonProps extends PropsWithChildren {
    message: string;
}

const NavbarMenuButton: ElementType<NavbarMenuButtonProps> = ({ message, children }) => {
    return (
        <div>
            <Button color="neutral" variant="plain" size="sm">
                <span>{ message }</span>
            </Button>
            <div className="hidden">{ children }</div>
        </div>
    )
}

export default NavbarMenuButton;