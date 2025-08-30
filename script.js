document.getElementById("travelForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let destinations = document.getElementById("destinations").value.split(",");
  let budget = parseInt(document.getElementById("budget").value);
  let days = parseInt(document.getElementById("days").value);

  let tripMessage = "";
  if (budget < 10000) {
    tripMessage = "Plan a short domestic trip.";
  } else if (budget >= 10000 && budget <= 50000) {
    tripMessage = "You can plan a long domestic trip.";
  } else {
    tripMessage = "International trip possible!";
  }

  let vacationType = "";
  if (days < 3) {
    vacationType = "Weekend Getaway";
  } else if (days >= 3 && days <= 7) {
    vacationType = "Perfect Holiday Trip";
  } else {
    vacationType = "Extended Vacation";
  }

  const suggestHotel = (totalBudget, totalDays) => {
    let perDay = totalBudget / totalDays;
    if (perDay < 2000) {
      return "Budget Hotels";
    } else if (perDay >= 2000 && perDay <= 5000) {
      return "Mid-range Hotels";
    } else {
      return "Luxury Hotels";
    }
  };

  let hotelSuggestion = suggestHotel(budget, days);

  document.getElementById("result").innerHTML = `
        <h3>Travel Summary</h3>
        <p><strong>Destinations:</strong> ${destinations.join(", ")}</p>
        <p><strong>Total Budget:</strong> ₹${budget}</p>
        <p><strong>Days Planned:</strong> ${days}</p>
        <p><strong>Trip Type:</strong> ${vacationType}</p>
        <p><strong>Hotel Suggestion:</strong> ${hotelSuggestion}</p>
        <p><strong>Travel Summary:</strong> ${tripMessage}</p>
      `;
});
