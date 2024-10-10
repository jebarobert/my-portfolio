import { SiAnsible, SiKubernetes, SiPowershell, SiMicrosoftazure, SiTerraform, SiMysql, SiVault } from "react-icons/si";
import { DiJenkins } from "react-icons/di";
import { FaGitlab, FaReact, FaDocker, FaPython, FaAws, FaBootstrap } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
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
import c_dq_sql from "../src/Images/coursera_db_sql.png";
import c_busi_analytics from "../src/Images/coursera_BAnalytics.png";
import project_video from "../src/Images/proj_video.mp4";
import project_image from "../src/Images/proj_img.png";
import a_practitioner from "../src/Images/Automation Practitioner.pdf";
import a_prac_img from "../src/Images/Automation_practitioner.png";
import java_proj_img from "../src/Images/4pic1word.png";
import java_proj_pdf from "../src/Images/JavaMiniProject.pdf";
import awt_video from "../src/Images/Embellish_English.mp4";
import awt_img from "../src/Images/Embellish_english_img.png";
import hsc_award from "../src/Images/HSC_Award1.png";
import ssc_award from "../src/Images/SSC_Award1.png";

const logotext = "JEBA ROBERT";
const meta = {
    title: "Jeba Robert",
    description: "I’m Jeba Robert _ DevOps Engineer, currently working at Capgemini",
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
        where: "CAPGEMINI TECHNOLOGY SERVICES",
        date: "08/2022-Present",
    },
    {
        jobtitle: "Engineer - Cloud & Infra Services",
        where: "LTI (LTI Mindtree)",
        date: "01/2020 - 08/2022",
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
        name: "Rest Api",
        icon: <TbApi size={50}/>,
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
        name: "Hashicorp Vault",
        icon: <SiVault size={50}/>,
        value: 65,
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
    {
        name: "Bootstrap",
        icon: <FaBootstrap size={50}/>,
        value: 70,
    },
    {
        name: "MySQL",
        icon: <SiMysql size={50}/>,
        value: 65,
    },
];

const services = [{
        title: "Master of Science - IT (SIES College of Arts, Science and Commerce) 2021",
        description1: "Percentage: 93.4% (CGPA: 9.83) (Rank 1)",
        description2: "Research Paper: Mobile games: Expectations and Interests of the users",
        description3: "Project(s):",
        description3_1: "Fake Product Identification System (Android Studio, Java, MySql, Blockchain),", 
        description3_2: "Embellish English (React JS, Bootstrap)",
    },
    {
        title: "Bachelor of Science - IT (SIES College of Arts, Science and Commerce) 2019",
        description1: "Percentage: 82.65% (CGPA:8.7)",
        description3: "Project(s):",
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
    {description1: "Advanced Relational Database and SQL(Coursera) Grade Achieved: 90%",
     link: "https://www.coursera.org/account/accomplishments/certificate/M4VYWPKKHUKT",
    },
    {description1: "Getting Started with Google Apps Script (Coursera) Grade Achieved: 100%",
     link: "https://www.coursera.org/account/accomplishments/certificate/V9BMXBF787W9",
    },
    {description1: "Introduction to Python Scripting for DevOps (Coursera) Grade Achieved: 90%",
     link: "https://www.coursera.org/account/accomplishments/certificate/EU2D6PZHLJX3",
    },
    {description1: "Business Analytics for Decision-Making (Coursera) Grade Achieved: 93.65%",
     link: "https://www.coursera.org/account/accomplishments/certificate/P8M6ASR55DFK",
    },
    {description1: "Microsoft Certified: Azure Fundamentals (AZ900)",
     link: "https://www.credly.com/badges/dd849a08-d37f-42db-862d-8061906289c9?source=linked_in_profile",
    },
    {description1: "Microsoft Certified: Microsoft Azure Administrator Associate (AZ104)",
     link: "https://www.credly.com/badges/d702e8e6-a494-4776-878e-74017879e544?source=linked_in_profile",
    },
    {description1: "Getting Started with Azure DevOps Boards (Coursera)",
     link: "https://www.coursera.org/account/accomplishments/certificate/452VL9CTTGGB",
    },
    {description1: "Containerization I/O Docker, Kubernetes, OpenShift (Coursera)",
     link: "https://www.coursera.org/account/accomplishments/certificate/4NHNMQVPBAFF",
    },
    {description1: "Introduction to Bash Shell Scripting",
     link: "https://www.coursera.org/account/accomplishments/certificate/ENYRV23YDDVU",
    },
    {description1: "Introduction to Ansible: The Fundamentals",
     link: "https://www.coursera.org/account/accomplishments/certificate/N34DAFU89DHZ",
    },
    {description1: "Docker for absolute beginners",
     link: "https://www.coursera.org/account/accomplishments/verify/84MQ9ZRAE36T",
    },
    {description1: "Jenkins : Automating your delivery pipeline",
    link: "https://www.coursera.org/account/accomplishments/certificate/7PE5CSGLM79S",
    },
    {description1: "Complete DevOps Ansible Automation Training (Udemy)",
    link: "https://www.udemy.com/certificate/UC-c27db1c0-ec6e-44cb-aee1-89e10ca8d199/",
    },
    {description1: "Ansible Tower Overview (Udemy)",
    link: "https://www.udemy.com/certificate/UC-4866d158-15ba-4e60-b5e2-c61ac40ea5a6/",
    },
    {description1: "Ansible Advanced - Hands-On - DevOps (Udemy)",
    link: "https://www.udemy.com/certificate/UC-aa6c9a9c-785a-4d6f-9663-d86b4c75a310/",
    },
    {description1: "create a Jira SCRUM project",
    link: "https://www.coursera.org/account/accomplishments/verify/TBE8C56E63UP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project",
    },
    {description1: "Terraform on Azure (Udemy)",
    link: "https://capgemini.udemy.com/certificate/UC-a251d43a-52ac-49d6-8198-eb5636526a14/",
    },
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
        img: `${c_dq_sql}`,
        description: "Advanced Relational Database and SQL",
        link: "https://www.coursera.org/account/accomplishments/certificate/M4VYWPKKHUKT",
    },
    {
        img: `${hsc_award}`,
        description: "HSC (Science) - Distinction Award",
        link: `${hsc_award}`,
    },
    {
        img: `${cg_anniversary}`,
        description: "It's my 1st Anniversary at Capgemini!",
        link: `${cg_anniversary}`,
    },
    {
        img: `${isprint_img}`,
        description: "iSprint 2023 - Automation at a Glance",
        link: `${isprint}`,
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
        img: `${ssc_award}`,
        description: "SSC - Distinction Award",
        link: `${ssc_award}`,
    },
    {
        img: `${c_busi_analytics}`,
        description: "Business Analytics for Decision Making",
        link: "https://www.coursera.org/account/accomplishments/certificate/P8M6ASR55DFK",
    },
    {
        img: `${project_image}`,
        description: "Graduation Project at Glance",
        link: `${project_video}`,
    },
    {
        img: `${a_prac_img}`,
        description: "Automation Practitioner Certificate (Capgemini)",
        link: `${a_practitioner}`,
    },
    {
        img: `${java_proj_img}`,
        description: "Java Mini Project at a Glance - SY Bachelor's",
        link: `${java_proj_pdf}`,
    },
    {
        img: `${awt_img}`,
        description: "React Internal Project at a Glance - Master's",
        link: `${awt_video}`,
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