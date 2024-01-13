// Utilities file for reusable functions

// Function to format dates into mm/dd/yyyy format
const formatDate = (input) => {
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

export default formatDate;