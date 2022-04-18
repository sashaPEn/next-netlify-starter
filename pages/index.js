import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Домашние задание</title>
        <link rel="icon" href="/icon-removebg-preview.png" />
      </Head>

      <main>
       // <Header title="Welcome to my app!" />
        // <p className="description">
          // Get started by editing <code>pages/index.js</code>
       </p> 
    <center>
<div class="Homework">
<h1><center>Домашние задание</center></h1>
<h2>!Внимание!Домашние задание только для 8б Столинской государственной гимназии</h2>
<p>Чтобы узнать домашние задание:</p>
<p>1.Выберите неделю(текущую или следующую)</p>
<p>2.Выберите день недели(понедельник-пятница)</p>
<p>3.Нажмите кнопку "Посмотреть" </p>

</br>
<!-- <p>Домашннего задания нет</p></br>--> 



<form>
  <select  name="week" id="sa1" class="homework_menu" class="Homework">
    
        <optgroup label="Текущая неделя">
           <option  value="11.04.2022 Апрель
            1.Математика(Алгебра)-№3.218, №3.220
            2.Физкультура и здоровье-
            3.Англисский язык(у группы Жанны Яраславовны)-у.5 с.118-119
            3.Информатика(у группы Людмилы Михайловны)-§21
            3.Англисский язык(у группы Жанны Яраславовны)-с.188 сочинение-описание по картине
            4.Русский язык-
            5.Англисский язык(у группы Людмилы Михайловны)-
            5.Информатика(у группы Жанны Яраславовны)-§21
            6.Химия-повторить §36-43 с.190 №5,6
            7.Биология-§53">Понедельник</option>
            <option  value="12.04.2022 Апрель
            1.Физика-§33 контрольные вопросы
            2.Математика(Геометрия)-§28 №402
            3.Искусство-
            4.География-§46 доделать контурную карту с.40
            5.Беларуская мова-§40 Пр.334
            6.Беларуская литература-Сочинение разважание что ёсть на свеце горыш ад помства(шаблон на сайте bel.lit.8bstolingymnasium.ml) ">Вторник</option>
            <option value="13.04.2022 Апрель
            1.Биология-§54
            2.Всемирная История-§26
            3.Математика(Алгебра)-повторить главу 1 именно 1, №3.226, №3.224, №3.219
            4.Физкультура и здоровье-
            5.Труды-
            6.Англисский язык(Жанна Яраславовна)-слова 1-5 выучить, у.1 с.125 выучить, у. 2b c.126-127 (читать и переводить и подготовить сообщение про книгу которая есть в этом тексте, для тех кого не было подготовить про любую книгу)
            6.Англисский язык(Людмила Михайловна)-">Среда</option>
            <option value="14.04.2022 Апрель
            1.Беларуская мова-§41 Пр.345
            2.Руский язык-Упражнение 347(устно)
            3.Русская литература-Чем занимался Андрей Соколов, побег и встреча с Ваней
            4.Математика(Геометрия)-повторить 1-2 раздел, №404, №405
            5.История Беларуси-§28 с.131-134 (с.134 первые две строчки)
            6.Химия-§46">Четверг</option>
            <option value="15.04.2022 Апрель
            1.Физкультура и здоровье-
            2.Физика-§34 контрольные вопросы, упражнение 22 задание 5
            3.Математика(Алгебра)-№3.222, №3.227 просмотреть главу 1,2
            4.География-§47 доделать контурную карту с. 40-41
            5.Англисский язык(Жанна Яраславовна)-у.8а (для тех кого не было, написать про дз в viber)
            5.Англисский язык(Людмила Михайловна)-
            6.Русская литература-">Пятница</option>
          </optgroup>
<optgroup label="Следующая неделя">
        <option  value="18.04.2022 Апрель
            1.Математика(Алгебра)-построить график по функции y=2х²-8х+6, №3.228
            2.Физкультура и здоровье-
            3.Англисский язык(у группы Жанны Яраславовны)-у.8b с.132
            3.Информатика(у группы Людмилы Михайловны)-§21
            4.Русский язык-с.200-201(устно)
            5.Англисский язык(у группы Людмилы Михайловны)-
            5.Информатика(у группы Жанны Яраславовны)-§21
            6.Химия-§47 упр. 7 готовимся к олимпиаде
            7.Биология-§55">Понедельник</option>
            <option  value="19.04.2022 Апрель
            1.Физика-повторить §32-34, упражнение 22 задача 5
            2.Математика(Геометрия)-§29 №474, №414, №416
            3.Искусство-
            4.География-§48
            5.Беларуская мова-Пр.345
            6.Беларуская литература-с.232-234(выр.чыт) ">Вторник</option>
            <option value="20.04.2022 Апрель
            1.Биология-
            2.Всемирная История-§27
            3.Математика(Алгебра)-
            4.Физкультура и здоровье-
            5.Труды-
            6.Англисский язык(Жанна Яраславовна)-
            6.Англисский язык(Людмила Михайловна)-">Среда</option>
            <option value="21.04.2022 Апрель
            1.Беларуская мова-
            2.Руский язык-
            3.Русская литература-с.142
            4.Математика(Геометрия)-
            5.История Беларуси-с.134-135
            6.Химия-">Четверг</option>
            <option value="22.04.2022 Апрель
            1.Физкультура и здоровье-
            2.Физика-
            3.Математика(Алгебра)-
            4.География-
            5.Англисский язык(Жанна Яраславовна)-
            5.Англисский язык(Людмила Михайловна)-
            6.Русская литература-с.244-245 (выучить)">Пятница</option>
          </optgroup>
     


      </select> 
	</form>
<input  type="button" onclick="f1()" value="Посмотреть" class="homework_button"> 


function f1(){
var a=document.getElementById('sa1').value;
alert(a);
}

<style>
.alert {
    padding: 20px;
    background-color: #f44336;
    color: white;
}

.closebtn {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
}

.closebtn:hover {
    color: black;
}
</style>
<style>
.homework_button{
    height:50px;
    width:400px;
    background-color: #FFFFFF;
   border: 1px solid #CCCCCC;
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
   transition: border 0.2s linear 0s, box-shadow 0.2s linear 0s;
       border-radius: 4px;
   color: #555555;
   display:block;
       width:400px;
       margin: 20px auto;
   font-size: 14px;
       text-align:center;
   height: 50px;
   line-height: 20px;
   margin-bottom: 10px;
   padding: 4px 6px;
   vertical-align: middle;
       text-decoration:none;

}
.homework_button:hover, .homework_button:focus {
   border-color: rgba(82, 168, 236, 0.8);
   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 8px rgba(82, 168, 236, 0.6);
   outline: 0 none;
}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
<style>
.Homework{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.homework_menu{
    height:50px;
    width:400px;
}
</style>
      </main>

      <Footer />
    </div>
  )
}
