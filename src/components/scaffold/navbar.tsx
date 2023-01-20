import Image from "next/image";
import logo from '../../../public/logo-landscape-light-theme.svg';
import NavbarMenuButton from "./navbar-menu-button";
import Button from '@mui/joy/Button';
import Sheet from '@mui/joy/Sheet';
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {

    const router = useRouter();

    return (
        <Sheet>
            <header className="bg-gray-50 z-50">
                <div className="h-14 lg:h-20 flex items-center max-w-6xl mx-auto px-3 gap-2 justify-between">

                    <nav className="flex justify-start items-center">
                        <Link href="/" className="flex items-center">
                            <Image alt="BroadbandHub Logo" src={logo} className="h-9 lg:h-11 w-auto pointer-events-none select-none" />
                        </Link>
                    </nav>

                    <nav className="hidden lg:flex items-center justify-center gap-2">
                        <NavbarMenuButton message="Platforms">
                            <div>Hello world</div>
                        </NavbarMenuButton>
                        <NavbarMenuButton message="Features">
                            <div>Hello world</div>
                        </NavbarMenuButton>
                        <Button color={router.pathname.startsWith('/pricing') ? 'primary' : 'neutral'} variant="plain" size="sm" component={Link} href="/pricing">
                            <span>Pricing</span>
                        </Button>
                        <Button color={router.pathname.startsWith('/contact') ? 'primary' : 'neutral'} variant="plain" size="sm" component={Link} href="/contact">
                            <span>Contact</span>
                        </Button>
                        <Button color={router.pathname.startsWith('/blog') ? 'primary' : 'neutral'} variant="plain" size="sm" component={Link} href="/blog">
                            <span>Blog</span>
                        </Button>
                        
                    </nav>

                    <nav className="hidden lg:flex items-center justify-center gap-2">
                        <Button color="neutral" variant="plain" size="sm" component={Link} href="#">
                            <span>Sign in</span>
                        </Button>
                        <Button color="primary" variant="solid" size="sm" component={Link} href="#">
                            <span>Get started</span>
                        </Button>
                    </nav>

                </div>
            </header>
        </Sheet>
    )
}