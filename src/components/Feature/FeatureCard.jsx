const FeatureCard = ({ icon, title, description }) => (
    <div className="feature-card group">
      <div className="feature-icon group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  export default FeatureCard;
  