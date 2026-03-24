import "./NutritionCard.css";
import card1 from "../../assets/calories-icon.svg";
import card2 from "../../assets/protein-icon.svg";
import card3 from "../../assets/carbs-icon.svg";
import card4 from "../../assets/fat-icon.svg";

const icons = {
    Calories: card1,
    Proteines: card2,
    Glucides: card3,
    Lipides: card4,
};

function NutritionCard ({ label, value, unit }) {
    return (
        <article className="nutrition-card">
            <div className="nutrition-card_icon">
                <img src={icons[label]} alt={label} />
            </div>
            <div className="nutrition-card_content">
                <p className="nutrition-card_value">
                    {value}{unit}
                </p>
                <p className="nutrition-card_label">
                    {label}
                </p>
            </div>
        </article>
    );
}

export default NutritionCard;