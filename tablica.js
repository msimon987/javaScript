var table = "<table border=1>\n";

for(var i = 1; i<=10; i++) {
    console.log("iteracija: " +i)
    table +="<tr>\n" +
            "<td>Name " + i +"</td>\n" +
            "<td>Rank "+ i +" </td>\n" +
            "<td>Class "+ i +" </td>\n" +
        "<tr>\n";
}
table +="</table>";

console.log(table);
document.write(table);