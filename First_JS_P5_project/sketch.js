function setup() // Функция, которая запускается один раз и используется для предустановки значений или установки размера полотна
{
    createCanvas(1000,800); // createCanvas - создания полотна с параметрами (width - ширина, height - высота)
    console.log("Центр по ширине:" + width/2);
    console.log("Центр по высоте:" + height/2);
}

function draw()
{
    let widthRect = 200; // Нейминг переменных должен быть осмысленным, 
    let heightRect = 300;
    background(100,20,0); // background - заполнения полотна определенным цветов в стиле RGB(Red, Green, Blue)
    fill(0,0,0); // fill - функция заливки фигур, которые будут отрисованы дальше (Red, Green, Blue)
    stroke(0,50,50); // stroke - установка цвета окантовки для следующих фигур(Red, Green, Blue)
    noFill(); // Команда, которая отключает заливку для следующих фигур
    rect(width/2-widthRect/2, height/2-heightRect/2, widthRect, heightRect); // rect - функция для отрисовки квадрата(x_left_upper_angle, y_left_upper_angle, width, height)
    fill(100,100,200);
    noStroke(); // noStroke() - отключение окантовки
    triangle(10,10, 10, 150, 130, 90); // triangle(x_first_point, y_first_point, x_second_point, y_second_point, x_third_point, y_third_point) - отрисовка треугольника по заданным точкам
    
    
}