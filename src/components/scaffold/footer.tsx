import Copyright from "./copyright";
import logo_dark from '../../../public/logo-landscape-dark-theme.svg';
import Link from "next/link";
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="inline-block w-full">
            <footer className="sm:m-8 xl:m-10 bg-gray-800 sm:rounded-3xl py-10">
                <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-6 md:p-0 my-0 md:my-10">
                <div>
                    <Link href="/" className="m-auto md:m-0">
                        <Image className="pointer-events-none" width={192} src={logo_dark} alt="BroadbandHub Dark Logo" />
                    </Link>
                </div>
                <ul className="w-full text-base">
                    <li className="text-blue-500 uppercase font-medium mb-5">Platforms</li>
                    <li className="text-gray-300 my-5">
                        <a href="/erate">E-rate</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="/rural-health-care">Rural Health Care</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="/document-locker">Document Locker</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="/mapping">Mapping and Target Automation</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="/geolocation-insights">Geolocation Insights</a>
                    </li>
                </ul>
                <ul className="w-full text-base">
                    <li className="text-blue-500 uppercase font-medium mb-5">Resources</li>
                    <li className="text-gray-300 my-5">
                        <a href="https://help.broadbandhub.us">Help Pages</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="https://blog.broadbandhub.us">Blog</a>
                    </li>
                    <li className="text-gray-300 my-5">Video Tutorials (coming soon)</li>
                </ul>
                <ul className="w-full text-base">
                    <li className="text-blue-500 uppercase font-medium mb-5">Company</li>
                    {/*
                        <li>About</li>
                        <li>Contracted Sales</li>
                        <li>Partnerships</li>
                    */}
                    <li className="text-gray-300 my-5">
                        <a href="/contact">Contact</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="https://broadbandhub.us/terms" target="_blank" rel="noreferrer">Terms of service</a>
                    </li>
                    <li className="text-gray-300 my-5">
                        <a href="https://broadbandhub.us/privacy" target="_blank" rel="noreferrer">Privacy policy</a>
                    </li>
                </ul>
            </div>
            <div className="w-full border-solid border-t-2 border-x-0 border-b-0 border-gray-700"></div>
            <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8 mb-4 mt-10 md:mb-10 text-base">
                <div className="text-gray-500">
                    <Copyright />
                </div>
                <div className="grow"></div>
                <div className="flex items-center gap-8">
                    {/*
                        <a href="https://www.facebook.com/broadbandhub" target="_blank"
                        className="rounded-full text-slate-200 bg-slate-700 hover:bg-slate-600 w-10 h-10 flex justify-center items-center">
                        <ng-icon name="ion-logo-facebook" size="20px"></ng-icon>
                    </a>
                    <a href="https://www.instagram.com/broadbandhub/" target="_blank"
                        className="rounded-full text-slate-200 bg-slate-700 hover:bg-slate-600 w-10 h-10 flex justify-center items-center">
                        <ng-icon name="ion-logo-instagram" size="20px"></ng-icon>
                    </a>
                    <a href="https://twitter.com/BroadbandH" target="_blank"
                        className="rounded-full text-slate-200 bg-slate-700 hover:bg-slate-600 w-10 h-10 flex justify-center items-center">
                        <ng-icon name="ion-logo-twitter" size="20px"></ng-icon>
                    </a>
                    <a href="https://www.linkedin.com/company/broadbandhub/" target="_blank"
                        className="rounded-full text-slate-200 bg-slate-700 hover:bg-slate-600 w-10 h-10 flex justify-center items-center">
                        <ng-icon name="ion-logo-linkedin" size="20px"></ng-icon>
                    </a>
                    */}
                </div>
            </div>
        </div>
            </footer>
        </div>
    )
}