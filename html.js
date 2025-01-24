function generateMultiplicationTable() {
    let table = "";
    
    for (let i = 1; i <= 10; i++) {
        table += i + "\t";
    }
    table += "\n";

    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            table += (i * j) + "\t";
        }
        table += "\n";
    }

    alert(table);
}

generateMultiplicationTable();
