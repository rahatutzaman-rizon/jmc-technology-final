import {
  MdOutlinePermIdentity,
  MdQuestionMark,
  // MdRefresh,
} from "react-icons/md";
import {
  FaHome,
  FaBook,
  FaUsers,
  FaBriefcase,
  FaCog,
  FaRegPaperPlane,
  FaRegStar,
} from "react-icons/fa"; // Import your icons
import { TbAntennaBars5 } from "react-icons/tb";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdMenu } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import ActiveLink from "@/components/Shared/commonComps/ActiveLink";

const navItemsUp = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <FaHome className="mr-2" />,
  },
  // {
  //   name: "Employees",
  //   href: "/employees",
  //   icon: <MdOutlinePermIdentity className="mr-2" />,
  // },
  // {
  //   name: "Landing Page",
  //   href: "",
  //   icon: <TbAntennaBars5 className="mr-2" />,
  //   dropdown: [
  //     {
  //       name: "At A Glance",
  //       href: "/dashboard/at-a-glance",
  //     },
  //     {
  //       name: "Services",
  //       href: "/dashboard/services",
  //     },
  //     {
  //       name: "Tech Tool Boxes",
  //       href: "/dashboard/tech-tool-boxes",
  //     },
  //   ],
  // },
  // {
  //   name: "Works",
  //   href: "/dashboard/works",
  //   icon: <FaBriefcase className="mr-2" />,
  // },
  {
    name: "Blog",
    href: "",
    icon: <FaBook className="mr-2" />,
    dropdown: [
      {
        name: "All Blogs",
        href: "/dashboard/all-blogs",
      },
      {
        name: "Category",
        href: "/dashboard/blog-category",
      },
    ],
  },
  // {
  //   name: "FAQ",
  //   href: "/dashboard/faq",
  //   icon: <MdQuestionMark className="mr-2" />,
  // },
  {
    name: "Contacts",
    href: "/dashboard/contacts",
    icon: <FaRegPaperPlane className="mr-2" />,
  },
  // {
  //   name: "User",
  //   href: "/dashboard/user",
  //   icon: <FaUsers className="mr-2" />,
  // },
  {
    name: "Career",
    href: "",
    icon: <AiOutlineMenuUnfold className="mr-2" />,
    dropdown: [
      {
        name: "All Vacancies",
        href: "/dashboard/all-vacancies",
      },
      {
        name: "All Applied Jobs",
        href: "/dashboard/all-applied-jobs",
      },
      {
        name: "Online Application",
        href: "/dashboard/career/application",
      },
    ],
  },
  // {
  //   name: "Subscriptions",
  //   href: "/dashboard/subscriptions",
  //   icon: <IoMdMenu className="mr-2" />,
  // },
  // {
  //   name: "Client Review",
  //   href: "/dashboard/client-review",
  //   icon: <FaRegStar className="mr-2" />,
  // },
];

const navItemsDown = [
  // {
  //   name: "Settings",
  //   href: "/dashboard/settings",
  //   icon: <FaCog className="mr-2" />,
  // },
];

const DashBoardSideBar = ({ isSidebarOpen, openDropdown, toggleDropdown }) => {
  return (
    <>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 8px; /* Adjust width */
        }

        ::-webkit-scrollbar-thumb {
          background: #d1d5db; /* Tailwind color for the thumb */
          border-radius: 9999px; /* Fully rounded */
        }

        ::-webkit-scrollbar-track {
          background: transparent; /* Track background */
        }

        /* For Firefox */
        * {
          scrollbar-width: thin; /* Makes scrollbar thin */
          scrollbar-color: #d1d5db transparent; /* Thumb color and track color */
        }
      `}</style>
      <aside
        className={`w-full lg:w-1/5 bg-white lg:static fixed ${
          isSidebarOpen ? "left-0" : "-left-full"
        } transition-all duration-300 ease-in-out border-e max-h-screen overflow-y-auto z-50`}
      >
        <div className="flex items-center p-6">
          <Image
            src="https://www.hrm-api.bdcare.vip/uploads/logo/Tech-logo.png"
            alt="HRM Logo"
            layout="responsive" // Make the image responsive
            width={150} // Original width of the image
            height={50} // Original height of the image
            className="w-full" // Add w-full to make it take full width
          />
        </div>
        <nav className="min-h-screen">
          <ul className="space-y-2 px-6">
            {navItemsUp.map((item, index) => {
              if (item.dropdown) {
                return (
                  <li key={index}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex justify-between items-center w-full p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white "
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                      <IoMdArrowDropdown size={20} />
                    </button>
                    {openDropdown === item.name && (
                      <ul className="pl-5 space-y-2">
                        {item.dropdown.map((subItem, subIndex) => {
                          return (
                            <li key={subIndex}>
                              <ActiveLink
                                href={subItem.href}
                                className="block p-2 text-dashCaviarTitleText rounded-lg text-lg"
                              >
                                {subItem.name}
                              </ActiveLink>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={index}>
                  <ActiveLink
                    href={item.href}
                    className="flex items-center p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white "
                  >
                    {item.icon}
                    {item.name}
                  </ActiveLink>
                </li>
              );
            })}
          </ul>
          <div>
            {navItemsDown?.length > 0 && (
              <>
                <hr className="border-dashAshText my-6" />
                <ul className="space-y-2 px-6">
                  {navItemsDown.map((item, index) => {
                    if (item.dropdown) {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex justify-between items-center w-full p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white "
                          >
                            <div className="flex items-center">
                              {item.icon}
                              <span>{item.name}</span>
                            </div>
                            <IoMdArrowDropdown size={20} />
                          </button>
                          {openDropdown === item.name && (
                            <ul className="pl-5 space-y-2">
                              {item.dropdown.map((subItem, subIndex) => {
                                return (
                                  <li key={subIndex}>
                                    <ActiveLink
                                      href={subItem.href}
                                      className="block p-2 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white"
                                    >
                                      {subItem.name}
                                    </ActiveLink>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    }
                    return (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center p-3 text-dashCaviarTitleText rounded-lg text-lg hover:bg-dashPrimary hover:text-white "
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default DashBoardSideBar;
