import React from "react";
import Card from "../card/Card";
// import './services.css'
import { CgBrowser } from "react-icons/cg";
import { TbBrandNextjs } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { FaWpforms } from "react-icons/fa";




function services() {
  return (
    <div className="ServicesContainer">
      <h1>Services</h1>
      <p>This is what I offer as a React.js DEV</p>
      <div className="cards">
        <Card
          image={<CgBrowser className="icon" />}
          title="Responsive Web Design"
          description="Mobile-first, responsive designs using CSS, Tailwind CSS, or styled-components."
        />
        <Card
          image={<TbBrandNextjs />}
          title="Next.js Development"
          description="Server-side rendering (SSR), static site generation (SSG), routing, and API routes."
        />
        <Card
          image={<GrGraphQl />}
          title="API Integration"
          description="Consuming RESTful APIs or GraphQL in React apps."
        />
        <Card
          image={<FaServer />}
          title="Authentication & Authorization"
          description="Implementing user login/signup with Firebase Auth, JWT, Auth0, etc."
        />
        <Card
          image={<FaWpforms />}
          title="Form Handling & Validation"
          description="Creating dynamic forms with validation using Formik, React Hook Form, and Yup."
        />
      </div>
    </div>
  );
}

export default services;
