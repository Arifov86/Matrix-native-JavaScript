// Домашнее задание №14, задача №4

/*
Напишите функцию, которая принимает аргумент number, создает матрицу в виде таблицы следующего типа:
первая ячейка в первой строке содержит значение «1», а каждая следующая ячейка должна быть больше на «1»;
первая ячейка второй строки содержит значение «2» и так далее...
Напишите фукнцию, которая меняет цвет ячейкам в таблице, расположенным на обратной диагонали матрицы.
*/

// Решение


function matrix (num) {
    const table = document.querySelector('table');
    for(let i = 1; i <= num; i++) {
        const row = document.createElement('tr');
        table.append(row);
        for(let j = 1;  j <= num; j++) {
            let x = num - j + i;
            let column;          
            if (x !== num) {
              column = document.createElement('th');  
            }
            else {
              column = document.createElement('td');  
            }
            column.textContent = num - j + i;
            row.prepend(column);            
        }
    }
}
matrix(22);

