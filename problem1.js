
function calculateTax(income,expenses) {
    if(income < 0 || expenses < 0 || income < expenses){
        return "Invalid Input";
    }

    const different = income - expenses;
    const tax = different * 0.2;
    return tax;
}
