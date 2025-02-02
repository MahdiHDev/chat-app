const Card = ({ title, className, children }) => {
    return (
        <div className={`shadow-lg rounded-md p-6 ${className}`}>
            <h1 className="text-center text-xl font-semibold mb-6">{title}</h1>
            {children}
        </div>
    );
};

export default Card;
