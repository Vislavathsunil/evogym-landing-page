import React from "react"; // Importing React

// Define the props type for the HText component
type Props = {
  children: React.ReactNode; // Children elements to be rendered inside the h1
};

// HText component definition
const HText = ({ children }: Props) => {
  return (
    // Render an h1 element with specific classes for styling
    <h1 className="basis-3/5 font-mono text-3xl font-bold">
      {children}  
    </h1>
  );
};

export default HText; // Export the HText component
