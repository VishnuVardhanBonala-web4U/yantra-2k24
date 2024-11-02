import f3 from "../../assets/workshop/f3.jpg";
import humanoidRobot from "../../assets/workshop/humonid_workshop.jpg";
import industry from "../../assets/workshop/5_o.jpg";

// Import PDF files for each workshop
import iot from "../../assets/pdfs/iot.pdf";
import f3pdf from "../../assets/pdfs/f3.pdf"; // Replace with actual PDF path
// Replace with actual PDF path
//import industryPdf from "../../assets/workshop/industry.pdf"; // Replace with actual PDF path

export const WorkShopJson = [
    {
        title: "IoT WITH HUMANOID ROBOTS",
        price: "Workshop: ₹ 700/-",
        Accommodation: 'Accommodation: ₹ 300/-',
        highlight: "Highlights",
        description: [
            "Participants should select one Robot to Build and Control",
            "IoT-Driven Control via NodeMCU and Web Servers.",
            "Servo Motor Integration with MG90S",
        ],
        image: humanoidRobot,
        pdfLink: iot // Added PDF link here
    },
    {
        title: "HIGH SPEED E-VEHICLE DYNAMICS & DESIGNING",
        price: "Workshop: ₹ 700/-",
        Accommodation: 'Accommodation: ₹ 300/-',
        highlight: "Highlights",
        description: [
            "Design Concept",
            "Technical Concept",
            "Dynamics of Braking System",
            "Steering Dynamics and Designing",
        ],
        image: f3,
        pdfLink: f3pdf // Added PDF link here
    },
    {
        title: "Industry 5.0",
        price: "Workshop: ₹ 700/-",
        Accommodation: 'Accommodation: ₹ 300/-',
        highlight: "Highlights",
        description: [
            "Unlock the future of innovation with Industry 5.0! Elevate your skills",
            "Harness the power of human-technology collaboration",
            "Don't just adapt-thrive in  transformation.",
        ],
        image: industry,
        //pdfLink: industryPdf // Added PDF link here
    }
    // Add more workshops as needed
];
