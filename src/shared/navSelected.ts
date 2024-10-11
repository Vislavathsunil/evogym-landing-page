// Enum to define the selected pages in the application
export enum SelectedPage {
    Home = "home",         // Represents the Home page
    Benfits = "benefits",  // Represents the Benefits page
    OurClasses = "ourclasses", // Represents the Our Classes page
    ContactUs = "contactus",    // Represents the Contact Us page
}

// Interface to define the structure of a ClassType object
export interface ClassType {
    name: string;         // The name of the class
    description: string;  // A brief description of the class
    image: string;        // The URL of the class image
}
