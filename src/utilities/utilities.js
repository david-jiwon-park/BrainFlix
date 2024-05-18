// Utilities file for reusable functions and variables

// Function to format dates into mm/dd/yyyy format
export const formatDate = (input) => {
    const timestamp = new Date(input.timestamp); 
    const yyyy = timestamp.getFullYear();
    let mm = timestamp.getMonth() + 1; 
    let dd = timestamp.getDate();
    
    if (mm < 10) {
            mm = '0' + mm
    };
    
    if (dd < 10) {
            dd = '0' + dd
    };
    
    return mm + '/' + dd + '/' + yyyy;
};

// Variable for base URL of API
export const apiBaseURL = process.env.REACT_APP_SERVER;