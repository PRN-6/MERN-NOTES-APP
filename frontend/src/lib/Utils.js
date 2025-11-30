// Utils.js
export const formatDate = (input) => {
    if (!input) return "Invalid date";

    let date;

    // If it's already a Date object
    if (input instanceof Date) {
        date = input;
    } 
    // If it's a string or number
    else {
        date = new Date(input);
    }

    // Check if valid date
    if (isNaN(date.getTime())) {
        return "Invalid date";
    }

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};
