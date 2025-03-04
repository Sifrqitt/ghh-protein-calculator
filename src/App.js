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
    <div style={{
      maxWidth: "400px",
      margin: "auto",
      padding: "20px",
      textAlign: "center",
      background: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "Arial, sans-serif"
    }}>
      <h2 style={{ marginBottom: "20px", color: "#333" }}>Protein Intake Calculator</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <label style={{ fontWeight: "bold" }}>Body Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center"
          }}
        />

        <label style={{ fontWeight: "bold" }}>Activity Level:</label>
        <select
          onChange={(e) => setActivityLevel(e.target.value)}
          value={activityLevel}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        >
          {Object.entries(activityMultipliers).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>

        <label style={{ fontWeight: "bold" }}>Servings per Day:</label>
        <input
          type="number"
          value={servings}
          min={4}
          max={8}
          onChange={(e) => setServings(Number(e.target.value))}
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center"
          }}
        />
      </div>

      <div style={{
        background: "#f3f3f3",
        padding: "15px",
        marginTop: "20px",
        borderRadius: "5px",
        fontWeight: "bold",
        fontSize: "18px"
      }}>
        <p><strong>{proteinPerDay.toFixed(1)}</strong> g per day</p>
        <p><strong>{proteinPerMeal.toFixed(1)}</strong> g per meal</p>
      </div>
    </div>
  );
}
