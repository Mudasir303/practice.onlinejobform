// Function to calculate age
function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    
    if (!dobInput.value) {
        ageInput.value = '';
        return;
    }

    const dob = new Date(dobInput.value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    ageInput.value = age || '';
}

// Expanded dataset for states and cities in India
const stateCityData = {
    "Andhra Pradesh": ["Guntur", "Kakinada", "Tirupati", "Vijayawada", "Visakhapatnam"],
    "Arunachal Pradesh": ["Bomdila", "Itanagar", "Pasighat", "Tawang", "Ziro"],
    "Assam": ["Dibrugarh", "Guwahati", "Jorhat", "Silchar", "Tezpur"],
    "Bihar": ["Bhagalpur", "Darbhanga", "Gaya", "Muzaffarpur", "Patna"],
    "Chhattisgarh": ["Bilaspur", "Durg", "Jagdalpur", "Korba", "Raipur"],
    "Goa": ["Mapusa", "Margao", "Panaji", "Ponda", "Vasco da Gama"],
    "Gujarat": ["Ahmedabad", "Bhavnagar", "Rajkot", "Surat", "Vadodara"],
    "Haryana": ["Ambala", "Chandigarh", "Faridabad", "Gurgaon", "Panipat"],
    "Himachal Pradesh": ["Dharamshala", "Manali", "Mandi", "Shimla", "Solan"],
    "Jharkhand": ["Bokaro", "Dhanbad", "Deoghar", "Jamshedpur", "Ranchi"],
    "Karnataka": ["Belagavi", "Bengaluru", "Hubballi", "Mangaluru", "Mysuru"],
    "Kerala": ["Kochi", "Kollam", "Kozhikode", "Thiruvananthapuram", "Thrissur"],
    "Madhya Pradesh": ["Bhopal", "Gwalior", "Indore", "Jabalpur", "Ujjain"],
    "Maharashtra": ["Aurangabad", "Mumbai", "Nagpur", "Nashik", "Pune"],
    "Manipur": ["Bishnupur", "Churachandpur", "Imphal", "Kakching", "Thoubal"],
    "Meghalaya": ["Cherrapunjee", "Jowai", "Nongpoh", "Shillong", "Tura"],
    "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lunglei", "Serchhip"],
    "Nagaland": ["Dimapur", "Kohima", "Mokokchung", "Tuensang", "Wokha"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Puri", "Rourkela", "Sambalpur"],
    "Punjab": ["Amritsar", "Bathinda", "Jalandhar", "Ludhiana", "Patiala"],
    "Rajasthan": ["Ajmer", "Jaipur", "Jodhpur", "Kota", "Udaipur"],
    "Sikkim": ["Gangtok", "Gyalshing", "Namchi", "Pelling", "Ravangla"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Tiruchirappalli"],
    "Telangana": ["Hyderabad", "Karimnagar", "Khammam", "Nizamabad", "Warangal"],
    "Tripura": ["Agartala", "Ambassa", "Dharmanagar", "Kailashahar", "Udaipur"],
    "Uttar Pradesh": ["Agra", "Kanpur", "Lucknow", "Meerut", "Varanasi"],
    "Uttarakhand": ["Dehradun", "Haldwani", "Haridwar", "Nainital", "Rishikesh"],
    "West Bengal": ["Asansol", "Darjeeling", "Durgapur", "Kolkata", "Siliguri"],
    "Jammu and Kashmir": ["Anantnag", "Baramulla", "Jammu", "Srinagar", "Udhampur"],
    "Ladakh": ["Kargil", "Leh", "Nubra Valley", "Pangong Tso", "Zanskar"],
    "Andaman and Nicobar Islands": ["Diglipur", "Havelock Island", "Neil Island", "Port Blair"],
    "Chandigarh": ["Chandigarh"],
    "Dadra and Nagar Haveli and Daman and Diu": ["Daman", "Diu", "Silvassa"],
    "Lakshadweep": ["Agatti", "Kavaratti", "Minicoy"],
    "Delhi": ["New Delhi", "Old Delhi"],
    "Puducherry": ["Karaikal", "Mahe", "Puducherry", "Yanam"]
};

// Populate states in the dropdown
const stateDropdown = document.getElementById("state");
for (const state in stateCityData) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
}

// Populate cities based on selected state
function loadCities() {
    const cityDropdown = document.getElementById("city");
    const selectedState = stateDropdown.value;

    // Clear existing cities
    cityDropdown.innerHTML = '<option value="" selected>Select City</option>';

    // Add cities for the selected state
    if (selectedState && stateCityData[selectedState]) {
        const sortedCities = stateCityData[selectedState].sort();
        const fragment = document.createDocumentFragment(); // Use DocumentFragment for performance
        sortedCities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            fragment.appendChild(option);
        });
        cityDropdown.appendChild(fragment);
    }
}

// Function to get the current date
document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Get date in YYYY-MM-DD format
    document.getElementById("current-date").value = formattedDate;
});

// Toggle spouse name field based on marital status
function toggleSpouseNameField() {
    const maritalStatus = document.getElementById("marital-status").value;
    const spouseNameField = document.getElementById("spouse-name-field");

    spouseNameField.style.display = maritalStatus === "married" ? "block" : "none";
}

// Handle form submission
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('full-name').value;
    const position = document.getElementById('post').value;

    document.getElementById('responseMessage').innerText = `Thank you, ${name}. Your application for the position of ${position} has been submitted.`;
    
    // Reset the form
    this.reset();
});