import { ArrowRight } from "lucide-react";
import React from "react";

const BenefitCard = ({ icon, title, description, action }) => (
  <div className="benefit-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
    <div className="benefit-header flex items-center mb-4">
      <div className="group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="ml-4 text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600 my-4">{description}</p>
    <button className="benefit-action flex items-center justify-between w-full py-2 px-4 border-2 border-blue-500 text-blue-500 rounded-lg group-hover:bg-blue-700 group-hover:text-white transition-all">
      {action}
      <ArrowRight className="ml-2 h-4 w-4" />
    </button>
  </div>
);

export default BenefitCard;
  