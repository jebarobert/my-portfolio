import { SiAnsible, SiKubernetes, SiPowershell, SiMicrosoftazure, SiTerraform } from "react-icons/si";
import { DiJenkins } from "react-icons/di";
import { FaGitlab, FaReact, FaDocker, FaPython, FaAws } from "react-icons/fa";
import AZ900 from "../src/Images/AZ-900.png";
import AZ104 from "../src/Images/AZ-104.png";
import bestmgr from "../src/Images/Best_Manager.png";
import github_pg from "../src/Images/github_page.png";
import c_container from "../src/Images/coursera_containers.png";
import dex_award from "../src/Images/DEX_award1.png";
import dex_award1 from "../src/Images/DEX_award.jpg";
import dex_pdf from "../src/Images/CertificateofAppreciation.pdf";
import dex_wish from "../src/Images/dex_wishes.jpg";
import isprint from "../src/Images/i-SPRINT2023.pdf";
import cg_anniversary from "../src/Images/CG_1year.png";
import isprint_img from "../src/Images/isprint.png";
import gi_award from "../src/Images/GeetaIsrani.jpg";
import udemy_ansible from "../src/Images/udemy_ansible.png";

const logotext = "JEBA ROBERT";
const meta = {
    title: "Jeba Robert",
    description: "I’m Jeba Robert _ DevOps Engineer, currently working in India",
};
const introdata = {
    title: "I’m Jeba {DevOps Engineer}",
    animated: {
        first: "DevOps is not a goal,",
        second: "but a never-ending process",
        third: "of continual improvement",
    },
    description: "Experienced Software Engineer with a demonstrated history of working in Devops. Skilled in Ansible, Jenkins, Terraform, Gitlab, Powershell, Python, Docker, Kubernetes, React JS, ServiceNow, Azure DevOps and AWS.",
    resume: "Checkout my updated resume",
    // your_img_url: "jeba.jpg",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "Dedicated DevOps engineer with 5 years of professional expertise, with a focus on DevOps using cloud platforms, DevOps tools, and Front-End tools. Strongly driven and outcome-oriented leader who coaches teams of more than thirty employees on DevOps technologies. A devoted team player who is great at collaborating with others and who is focused on optimizing a facility's production process.",
};
const worktimeline = [{
        jobtitle: "Consultant",
        where: "Capgemini",
        date: "2022-Present",
    },
    {
        jobtitle: "Engineer - Cloud & Infra Services",
        where: "LTI",
        date: "2020",
    },
];

const skills = [{
        name: "Ansible",
        icon: <SiAnsible size={50}/>,
        value: 90,
    },
    {
        name: "Jenkins",
        icon: <DiJenkins size={50}/>,
        value: 85,
    },
    {
        name: "Gitlab",
        icon: <FaGitlab size={50}/>,
        value: 85,
    },
    {
        name: "React",
        icon: <FaReact size={50}/>,
        value: 65,
    },
    {
        name: "Terraform",
        icon: <SiTerraform  size={50}/>,
        value: 85,
    },
    {
        name: "Docker",
        icon: <FaDocker size={50}/>,
        value: 85,
    },
    {
        name: "Kubernetes",
        icon: <SiKubernetes size={50}/>,
        value: 70,
    },
    {
        name: "Powershell",
        icon: <SiPowershell size={50}/>,
        value: 85,
    },
    {
        name: "Python",
        icon: <FaPython size={50}/>,
        value: 80,
    },
    {
        name: "AWS (EC2, VPC, S3, IAM, EBS, RDS)",
        icon: <FaAws size={50}/>,
        value: 85,
    },
    {
        name: "Azure ",
        icon: <SiMicrosoftazure size={50}/>,
        value: 80,
    },
];

const services = [{
        title: "Master of Science - IT (SIES College of Arts, Science and Commerce) 2021",
        description1: "Percentage: 93.4% (CGPA: 9.83) (Rank 1)",
        description2: "Research Paper: Mobile games: Expectations and Interests of the users",
        description3: "Projects:",
        description3_1: "Fake Product Identification System (Android Studio, Java, MySql, Blockchain),", 
        description3_2: "Embellish English (React JS, Bootstrap)",
    },
    {
        title: "Bachelor of Science - IT (SIES College of Arts, Science and Commerce) 2019",
        description1: "Percentage: 82.65% (CGPA:8.7)",
        description3: "Project:",
        description3_1: "Online Sweets Shop (Madhuram) (ASP.NET, C#, MySQL, Bootstrap)",
    },
    {
        title: "HSC - Science (SIES College of Arts, Science and Commerce) 2016",
        description1: "Percentage: 77.85%",
    },
];

const awards = [{
    title: "Delivery Excellence Award",
    description1: "Capgemini (2023)",
 },
 {
    title: "Best Manager's Award",
    description1: "LTI CIS Academy (2021)",
 },
 {
    title: "Endowment Award - First Rank in M.Sc. IT",
    description1: "SIES (2021)",
 },
 {
    title: "Geeta Israani Scholarship Award",
    description1: "SIES (2019)",
 },
];
const certificates = [
    {description1: "LTI Certified Cloud & Infrastructure Services Professional",},
    {description1: "Fundamentals of Database System (NPtel Online Certification) Percentage: 70%",},
    {description1: "Demystifying Networking (NPtel Online Certification) Percentage: 78%",},
    {description1: "Advanced Relational Database and SQL(Coursera) Grade Achieved: 90%",},
    {description1: "Getting Started with Google Apps Script (Coursera) Grade Achieved: 100%",},
    {description1: "Introduction to Python Scripting for DevOps (Coursera) Grade Achieved: 90%",},
    {description1: "Business Analytics for Decision-Making (Coursera) Grade Achieved: 93.65%",},
    {description1: "Microsoft Certified: Azure Fundamentals",},
    {description1: "Microsoft Certified: Microsoft Azure Administrator Associate",},
    {description1: "Getting Started with Azure DevOps Boards (Coursera)",},
    {description1: "Containerization I/O Docker, Kubernetes, OpenShift (Coursera)",},
];
const dataportfolio = [{
        img: `${AZ900}` ,
        description: "Microsoft Certified: Azure Fundamentals",
        link: "https://www.credly.com/badges/dd849a08-d37f-42db-862d-8061906289c9?source=linked_in_profile",
    },
    {
        img: `${AZ104}`,
        description: "Microsoft Certified: Azure Administrator Associate",
        link: "https://www.credly.com/badges/d702e8e6-a494-4776-878e-74017879e544?source=linked_in_profile",
    },
    {
        img: `${bestmgr}`,
        description: "Best Manager's Award from LTI CIS Academy (2021)",
        link: "https://www.linkedin.com/posts/activity-6884886528976400384-v1ZM?utm_source=share&utm_medium=member_desktop",
    },
    {
        img: `${dex_award1}`,
        description: "DEX Award Wishes",
        link: `${dex_wish}`,
    },
    {
        img: `${github_pg}`,
        description: "My github projects",
        link: "https://github.com/jebarobert",
    },
    {
        img: `${c_container}`,
        description: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
        link: "https://coursera.org/share/6e5a037d27f38826bad6e42f23997cca",
    },
    {
        img: `${dex_award}`,
        description: "Delivery Excellence Award (Capgemini) (2023)",
        link: `${dex_pdf}`,
    },
    {
        img: `${cg_anniversary}`,
        description: "It's my 1st Anniversary at Capgemini!",
        link: `${cg_anniversary}`,
    },
    {
        img: `${isprint}`,
        description: "iSprint 2023 - Automation at a Glance",
        link: `${isprint_img}`,
    },
    {
        img: `${gi_award}`,
        description: "Geeta Israani Scholarship Award in TY (2019)",
        link: `${gi_award}`,
    },
    {
        img: `${udemy_ansible}`,
        description: "Complete DevOps Ansible Automation Training",
        link: "https://www.udemy.com/certificate/UC-c27db1c0-ec6e-44cb-aee1-89e10ca8d199/",
    },
    {
        img: ``,
        description: "",
        link: "",
    },
    {
        img: ``,
        description: "",
        link: "",
    },
    {
        img: ``,
        description: "",
        link: "",
    },
    {
        img: ``,
        description: "",
        link: "",
    },
];

const socialprofils = {
    github: "https://github.com/jebarobert",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/jeba-robert/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    awards,
    certificates,
    introdata,
    socialprofils,
    logotext,
};