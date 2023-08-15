const express = require('express');
const app = express();

const generateRandomCoordinates = () => ({
    lat: Math.random() * (28.41028362 - 28.39894851) + 28.39894851,
    lon: Math.random() * (77.36357032 - 77.35048133) + 77.35048133,
});

const patientData = [
    {"ID": "DJZR3846", "Name": "Aditya Sharma", "Health_Condition": "STABLE"},
    {"ID": "SEBD4473", "Name": "Akash Singh", "Health_Condition": "STABLE"},
    {"ID": "IPPP6549", "Name": "Alok Kumar", "Health_Condition": "STABLE"},
    {"ID": "LJTZ0167", "Name": "Amar Gupta", "Health_Condition": "STABLE"},
    {"ID": "NWPF6412", "Name": "Amit Patel", "Health_Condition": "STABLE"},
    {"ID": "GVAM3156", "Name": "Anil Kumar", "Health_Condition": "STABLE"},
    {"ID": "OIGU3656", "Name": "Anjali Sharma", "Health_Condition": "STABLE"},
    {"ID": "QQDV9988", "Name": "Anuj Singh", "Health_Condition": "STABLE"},
    {"ID": "RGWA2674", "Name": "Arjun Gupta", "Health_Condition": "STABLE"},
    {"ID": "UZRL8988", "Name": "Ayush Patel", "Health_Condition": "STABLE"},
    {"ID": "HSYU5425", "Name": "Chirag Shah", "Health_Condition": "STABLE"},
    {"ID": "RTSS5014", "Name": "Deepak Verma", "Health_Condition": "UNSTABLE"},
    {"ID": "CDSY6402", "Name": "Divya Singh", "Health_Condition": "UNSTABLE"},
    {"ID": "RZRD6794", "Name": "Gaurav Kumar", "Health_Condition": "UNSTABLE"},
    {"ID": "ODJU7408", "Name": "Hitesh Patel", "Health_Condition": "UNSTABLE"},
    {"ID": "DPCR2302", "Name": "Ishita Sharma", "Health_Condition": "UNSTABLE"},
    {"ID": "EEOY1433", "Name": "Jatin Patel", "Health_Condition": "UNSTABLE"},
    {"ID": "IPOU8088", "Name": "Karan Gupta", "Health_Condition": "UNSTABLE"},
    {"ID": "WDQZ8871", "Name": "Kavya Singh", "Health_Condition": "UNSTABLE"},
    {"ID": "RPVK1168", "Name": "Manish Patel", "Health_Condition": "UNSTABLE"},
    {"ID": "RNCH8463", "Name": "Mansi Sharma", "Health_Condition": "CRITICAL"},
    {"ID": "RNCG6878", "Name": "Mayank Gupta", "Health_Condition": "CRITICAL"},
    {"ID": "NQRD1794", "Name": "Mohit Sharma", "Health_Condition": "CRITICAL"},
    {"ID": "BAEE6638", "Name": "Mukesh Patel", "Health_Condition": "CRITICAL"},
    {"ID": "CXVL0833", "Name": "Nidhi Singh", "Health_Condition": "CRITICAL"},
    {"ID": "ROHS7141", "Name": "Nitin Gupta", "Health_Condition": "CRITICAL"},
    {"ID": "ZRYX5170", "Name": "Pooja Sharma", "Health_Condition": "CRITICAL"},
    {"ID": "EFHW8174", "Name": "Prachi Patel", "Health_Condition": "CRITICAL"},
    {"ID": "HZMI2960", "Name": "Prateek Singh", "Health_Condition": "CRITICAL"},
];

function updateCoordinates(){
    for (const patient of patientData) {
        const { lat, lon } = generateRandomCoordinates();
        patient.lat = lat;
        patient.lon = lon;
    }
}

setInterval(updateCoordinates,5000)
};

app.get('/patients', (req, res) => {
    res.json(patientData);
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running...');
    updateCoordinates();
});
