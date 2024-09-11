const phonePattern = /^\+380\d{2} \d{3} \d{2} \d{2}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneOperators = [
    {
        name: "lifecell",
        codes: "63|93|73",
        logo: "https://www.lifecell.ua/images/logo.svg"
    },
    {
        name: "vodafone",
        codes: "50|66|95|99",
        logo: "https://www.vodafone.ua/svg/logo.svg"
    },    
    {
        name: "kyivstar",
        codes: "67|68|96|97|98",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Kyivstar_2015_logo_-_Brandmark.svg"
    },      
];

export {phonePattern, emailPattern, phoneOperators};