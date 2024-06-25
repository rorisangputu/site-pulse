import Image from "next/image"
import Logo from '../../public/assets/Logo.svg'
import User from '../../public/assets/User.svg'
import { AiOutlineMenu } from 'react-icons/ai';

const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Careers" },
];

const NavBar = () => {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px]
            lg:container lg:mx-auto lg:px-20">
            <div className="flex items-center">
                <Image src={Logo} alt="logo" />

                <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
                    {navLinks.map((link, index) => (
                        <p className="text-[#36485C] font-medium" key={index}>{link.name}</p>
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5">
                <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
                    Open an Account
                </p>

                <div className="flex items-center gap-x-2">
                    <Image src={User} alt="user" />
                    <span className="hidden font-medium text-[#36485C] lg:block">
                        Sign In
                    </span>
                </div>
                <AiOutlineMenu className="lg:hidden" />
            </div>
        </nav>
    )
}

export default NavBar