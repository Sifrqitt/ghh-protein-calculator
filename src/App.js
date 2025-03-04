import { useState } from "react";

export default function App() {
  const [weight, setWeight] = useState(70);
  const [activityLevel, setActivityLevel] = useState("1.6");
  const [servings, setServings] = useState(4);

  const activityMultipliers = {
    "1.4": "Sedentary",
    "1.6": "Moderate",
    "1.8": "Active",
    "2.0": "Athlete"
  };

  const proteinPerDay = weight * parseFloat(activityLevel);
  const proteinPerMeal = proteinPerDay / servings;

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h2>Protein Intake Calculator</h2>
   
      <label>Body Weight (kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} />

      <label>Activity Level:</label>
      <select onChange={(e) => setActivityLevel(e.target.value)} value={activityLevel}>
        {Object.entries(activityMultipliers).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>

      <label>Servings per Day:</label>
      <input type="number" value={servings} min={4} max={8} onChange={(e) => setServings(Number(e.target.value))} />

      <div style={{ background: "#f3f3f3", padding: "10px", marginTop: "10px" }}>
        <p><strong>{proteinPerDay.toFixed(1)}</strong> g per day</p>
        <p><strong>{proteinPerMeal.toFixed(1)}</strong> g per meal</p>
      </div>
    </div>
  );
}
