import React from "react";

function SelectOption() {
  return (
    <div>
      <select style={{ marginTop: "10px", marginBottom: "20px" }}>
        <option>9AM-12PM</option>
        <option>1PM-3PM</option>
        <option>3PM-6PM</option>
        <option>6PM-9PM</option>
        <option>9PM-12AM</option>
      </select>
    </div>
  );
}

export default SelectOption;
