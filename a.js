/* Описание проекта:
программа генерирует случайное число в диапазоне от 1 до 100 и просит
пользователя угадать это число.
Если догадка пользователя больше случайного числа,
то программа должна вывести сообщение 'Слишком много, попробуйте еще раз'.
Если догадка меньше случайного числа, то программа должна вывести сообщение
'Слишком мало, попробуйте еще раз'. Если пользователь угадывает число, 
то программа должна поздравить его и вывести сообщение 'Вы угадали, поздравляем!'.
Составляющие проекта:
Целые числа; Переменные; Ввод / вывод данных; Условный оператор; Цикл;
 Бесконечный цикл;
Операторы break, continue; Работа с модулем random для генерации случайных чисел;
 Функции.
*/


const secretNum = Math.round(Math.random() * 100)

function tryPlay(secretNum) {
    let left = 0;
    let right = 100;
    let spin = prompt(`Программа задала рандомное число от ${left} до ${right}. Найдите его!\n Введите число`)


    for (let i = 0; i < 100; i++) {
        if (spin == secretNum) {
            alert(`Поздравляем, вы угадали правильное число! Число ${secretNum}\n Вам понадобилось ${i + 1} попыток`)
            break
        } else if (spin > secretNum) {
            right = spin
            spin = prompt(`Вы ввели число: ${spin} - Перебор! \n Попробуйте еще...  Введите число от ${left} до ${right}`)
        } else {
            left = spin
            spin = prompt(`Вы ввели число: ${spin} - Маловато! \n Попробуйте еще...  Введите число от ${left} до ${right}`)
        }
    }
    return secretNum
}

let res = tryPlay(secretNum)
console.log(res);


// class RandomNums {
//     secretNum = Math.round(Math.random() * 100);
//     controller(secretNum) {
//         const res = this.service(secretNum)
//         return res
//     }

//     service(secretNum) {
//         const res = this.repository(secretNum)
//         return res
//     }

//     repository(secretNum) {


//         tryPlay = () => {
//             let left = 0;
//             let right = 100;
//             let spin = prompt(`Программа задала рандомное число от ${left} до ${right}. Найдите его!\n Введите число`)


//             for (let i = 0; i < 100; i++) {
//                 if (spin == this.secretNum) {
//                     alert(`Поздравляем, вы угадали правильное число! Число ${this.secretNum}\n Вам понадобилось ${i + 1} попыток`)
//                     break
//                 } else if (spin > this.secretNum) {
//                     right = spin
//                     spin = prompt(`Вы ввели число: ${spin} - Перебор! \n Попробуйте еще...  Введите число от ${left} до ${right}`)
//                 } else {
//                     left = spin
//                     spin = prompt(`Вы ввели число: ${spin} - Маловато! \n Попробуйте еще...  Введите число от ${left} до ${right}`)
//                 }
//             }

//         }
//         return secretNum
//     }
// }


// const randomnums = new RandomNums()
// // randomnums.secretNum = Math.round(Math.random() * 100)
// randomnums.controller(secretNum)
// // let res = tryPlay(secretNum)
// // console.log(res);