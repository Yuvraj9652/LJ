// Write a NodeJS code to calculate and display the profit or loss incurred by an investor 
// who purchased 100 shares of a company's stock at Rs.50 per share and 
// later sold them at Rs.60 per share. 
// The script should utilize the HTTP module to create an HTTP server that serves the profit or loss details. 
// If there is a profit, the message should be displayed in green color, and 
// if there is a loss, it should be displayed in red color on server.

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    // Given values
    let totalShares = 100;
    let purchasePrice = 50;
    let sellingPrice = 60;

    // Calculations
    let totalCost = totalShares * purchasePrice;
    let totalSelling = totalShares * sellingPrice;

    let message = "";
    let color = "";

    if (totalSelling > totalCost) {
        let profit = totalSelling - totalCost;
        message = `Profit of Rs. ${profit}`;
        color = "green";
    } else if (totalSelling < totalCost) {
        let loss = totalCost - totalSelling;
        message = `Loss of Rs. ${loss}`;
        color = "red";
    } else {
        message = "No Profit, No Loss";
        color = "black";
    }

    // HTML Response
    res.write(`
        <html>
        <body>
            <h1 style="color:${color}">${message}</h1>
        </body>
        </html>
    `);

    res.end();
});

server.listen(5002, () => {
    console.log("Server running at http://localhost:5002");
});