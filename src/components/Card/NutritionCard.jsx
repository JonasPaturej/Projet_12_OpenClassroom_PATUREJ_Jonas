function NutritionCard ({ label, value, unit }) {
    return (
        <article>
            <div>
                <p>
                    {value}
                    {unit}
                </p>
                <p>{label}</p>
            </div>
        </article>
    );
}

export default NutritionCard;