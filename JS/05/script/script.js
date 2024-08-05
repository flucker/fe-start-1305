/*
Створіть об'єкт заробітної плати obj. Виведіть на екран зарплату Петі та Колі.
<pre>
    <code>
   <span class="green">//Цей об'єкт надано:</span>
         var obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
    </code>
</pre>
*/
const obj = {'Коля': '1000', 'Вася': '500', 'Петя': '200'};
document.write(obj.Петя);
document.write("<br>");
document.write(obj.Коля);

/*Створіть об'єкт криптокошилок. У гаманці має зберігатись ім'я власника, кілька валют Bitcoin, Ethereum,
Stellar і в кожній валюті додатково є ім'я валюти, логотип, кілька монет та курс на сьогоднішній день
день.
Також в об'єкті гаманець є метод при виклику якого він приймає ім'я валюти та виводить на сторінку
інформацію.
"Доброго дня, ... ! На вашому балансі (Назва валюти та логотип) залишилося N монет, якщо ви сьогодні продасте
їх те, отримаєте ...грн.*/
const cryptoWallet = {
    ownerName: "John",
    currencies: {
        Bitcoin: {
            name: "Bitcoin",
            logo: "BTC",
            count: 3,
            rate: 100
        }, 
        Ethereum: {
            name: "Ethereum",
            logo: "ETC",
            count: 5,
            rate: 50
        },
        Stellar: {
            name: "Stellar",
            logo: "STL",
            count: 10,
            rate: 5
        }
    },
    currencyGet: function(currency) {
        const amount = this.currencies[currency].count * this.currencies[currency].rate;
        document.write(`Доброго дня, ${this.ownerName} ! На вашому балансі ${this.currencies[currency].name} ${this.currencies[currency].logo} залишилося ${this.currencies[currency].count} монет, якщо ви сьогодні продасте
їх то, отримаєте ${amount} грн.`);
    }
};

/*Напишіть функцію isEmpty(obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.*/
function isEmpty(obj) {
    if (!Object.keys(obj).length) {
        return true;
    } else {
        return false;
    }
}

/* Виведіть на сторінку назву валюти ціну купівлі та ціну продажу. https://api.privatbank.ua/p24api/exchange_rates?json&date=01.07.2024*/
function exchangeRatesShow() {
    document.write(
        `<table>
            <thead>
                <th>Name</th>
                <th>Buy</th>
                <th>Sell</th>
            </thead>
            <tbody>
        `
    );
    for (let i = 0; i < exchangeRates.exchangeRate.length; i++) {
        document.write(
            `<tr>
                <td>${exchangeRates.exchangeRate[i].currency}</td>
                <td>${exchangeRates.exchangeRate[i].purchaseRateNB}</td>
                <td>${exchangeRates.exchangeRate[i].saleRateNB}</td>
            </tr>`
        );
    }
    document.write(
            `</tbody>
        </table>`
    );    
}
exchangeRatesShow();