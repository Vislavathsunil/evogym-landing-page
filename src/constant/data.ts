import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import { ClassType } from "@/shared/navSelected";
import { ReactElement, createElement } from "react";

import {
    AcademicCapIcon,
    UserGroupIcon,
    HomeModernIcon,
} from "@heroicons/react/24/solid";



export const HomeDesciption = {
    description: "A gym is a fitness facility designed for exercise and physical training.It typically offers a variety of equipment such as weights,cardio machines, and fitness classes to help individuals improve their strength, endurance, and overall health.",
    para: "A gym is a fitness facility equipped with weights, cardio machines, and classes to help individuals improve strength, endurance, and overall health."
}

export const ClientImages: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        description: "Our weight training classes cater to all fitness levels.Focusing on strength and technique with personalized guidance from experienced instructors. Join us to challenge yourself and reach your fitness goals! ",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Our yoga classes offer a peaceful space to improve flexibility, balance, and mental well-being for all levels. Led by skilled instructors, you'll explore various styles and cultivate mindfulness while reducing stress!",
        image: image2,
    },
    {
        name: "Ab Core Classes",
        description: "Our Ab Core classes strengthen your core and improve stability for all fitness levels. Focused on targeted exercises, you'll enhance posture and functional movements. Join us to build a stronger, more defined core!",
        image: image3,
    },
    {
        name: "Stretching Classes",
        description: "Our Stretching Classes improve flexibility and mobility for all fitness levels, reducing muscle tension. Learn relaxation and injury prevention techniques from experienced instructors. Join us to enhance your range of motion!",
        image: image4,
    },
    {
        name: "Fitness Classes",
        description: "Our Fitness Classes provide diverse workouts for all fitness levels. Led by certified instructors, they combine cardio, strength training, and flexibility to help you achieve your goals. Join us for an energizing experience!",
        image: image5,
    },

];

interface BenfitsTypes {
    icon: ReactElement;
    title: string;
    description: string;
}

export const benfits: Array<BenfitsTypes> = [
    {
        icon: createElement(HomeModernIcon, { className: "h-6 w-6" }),
        title: "State of the Art Facilities",
        description:
            "Our gym features cutting-edge equipment and a modern, comfortable space for all your fitness needs.",
    },
    {
        icon: createElement(UserGroupIcon, { className: "h-6 w-6" }),
        title: "IOCs of Diverse Classes",
        description:
            "Our gym offers diverse, expert-led classes for all fitness levels, from high-intensity workouts to yoga."
    },
    {
        icon: createElement(AcademicCapIcon, { className: "h-6 w-6" }),
        title: "Expert and Pro Trainers",
        description:
            "Our expert trainers offer personalized guidance in better way to help you reach your fitness goals at any level.",
    },
];


export const MillionsHappyCustomer = {
    para1: "Join the millions of happy members who have transformed their lives with our gym services! Our welcoming community and supportive environment inspire you to stay motivated and committed to your fitness journey. With a variety of classes and state-of-the-art facilities, there's something for everyone, making it easy to find your perfect workout.",
    para2: "Connect with fellow fitness enthusiasts and expert trainers who are dedicated to your success. We celebrate every achievement in a positive atmosphere where you can thrive. Join our ever-growing family, get fit, and have fun today!"
}

export const OurClassesDescription = {
    para: "Discover our diverse classes for all fitness levels! From high-energy workouts to relaxing yoga, our expert instructors keep you motivated and challenged in a supportive community. Join us to find your perfect fit!"
}

export const JoinNow = {
    para: "Join us now to kickstart your fitness journey and get in shape! Our welcoming community and expert instructors are here to support you every step of the way. Take the first step toward a healthier, stronger you today!"
}

export const FooterDescription = {
    descript:
        "Your fitness journey starts here. Embrace challenges, celebrate milestones, and transform into a healthier, stronger you. Join our supportive community and create lasting habits. Let’s embark on this journey together!"
}