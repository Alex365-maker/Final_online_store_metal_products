import "./stylesAbout.css"
// import {useContext} from "react";
// import {Context} from "../../../index";
// import {get} from "mobx";


function About() {
    return (
        <>
            <div className={"containerAbout"}>
                <img src={"https://westmet.by/assets/images/company-ban1.png"} style={{height:"293px", width:"100%", minWidth:"616px"}}/>
                <p>Компания ВестМеталлГрупп была основана в 2012 году. Именно с этого момента она начала свою работу в сфере торговли черным металлопрокатом и сопутствующими товарами. На сегодняшний день наша компания является одним из лидеров рынка строительных материалов нашего региона. Мы предлагаем своим клиентам широкий выбор товаров по самым лучшим ценам, как оптом, так и в розницу.</p>
                <p>Изначально офис и склад компании находились только в городе Кобрин. Но уже в 2018 году руководством было принято решение о расширении нашего торгового предприятия. Поэтому, в марте 2019 года был открыт дополнительный склад и офис в городе Брест.</p>
                <p>Вот уже более 7-ми лет ВестМеталлГрупп сотрудничает с различными покупателями из Кобрина, Бреста, Березы, Дрогичина и другие города Брестской области. Для нашей компании важен каждый клиент, а потому мы практикуем индивидуальный подход и гибкую систему скидок на многие товары. Каждому покупателю всегда уделяется должное внимание, учитываются его пожелания и требования.</p>
                <img src={"https://westmet.by/assets/images/company-ban2.png"} style={{height:"385px", width:"100%", minWidth:"616px"}}/>
                <p>Сотрудничая с нами, вы можете быть уверены в получении металлопроката высокого качества, который будет доставлен в удобное вам время по нужному адресу. Эта услуга особенно нужна тем, кто ценит своё время или не имеет возможности забрать заказ непосредственно со склада. Свяжитесь с нами, если у вас появились вопросы по поводу нашей работы. Наши консультанты дадут исчерпывающие ответы на любые интересующие вопросы.</p>
            </div>
        </>
    );
}

export default About;