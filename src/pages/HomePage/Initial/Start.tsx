import { useEffect, useRef } from "react";

import "./Start.css";
import imagePrevilegies from "../../assets/image/pacotes.png";
import Register from "../Access/Register/Register";
import ContactCard from "../Access/ContactCard/ContactCard";
import FunctionCard from "../Access/FunctionCard/FunctionCard";
import CourseCard from "../Access/CourseCard/CourseCard";
import Previlegies from "../Access/Previlegies/Previlegies";
import About from "../Access/About/About";
import Solution from "../Access/Solution/Solution";
import DepoimentsCard from "../Access/DepoimentsCard/DepoimentsCard";
import Faq from "../Access/Faq/Faq";
import { Link } from "react-router-dom";
import Slogan from "../Access/Slogan/Slogan";

import cursoIngles from "../../assets/image/cursos-ingles.jpg";
import cursoGestao from "../../assets/image/curso-gestao.jpeg";
import cursoPrevisoes from "../../assets/image/curso-previsoes.jpeg";

export default function Start() {
  const faqs = [
    {
      number: "01",
      question: "Quem somos?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aut, tempore incidunt reprehenderit autem eaque blanditiis!",
    },
    {
      number: "02",
      question: "O que fazemos?",
      answer:
        "A aliquam ab error non aspernatur. Similique molestiae at error nisi magnam laboriosam culpa.",
    },
    {
      number: "03",
      question: "Como nos contatar?",
      answer:
        "Non aspernatur. Similique molestiae at error nisi magnam laboriosam culpa.",
    },
  ];

  // Objeto com informações dos cursos
  const cursos = [
    {
      course: "Inglês",
      level: "Avançado",
      structor: "Fernandinho",
      structor_about: "Programador Frontend",
      course_state: "Em Andamento",
      imageCourse: cursoIngles,
    },
    {
      course: "Gestão de Empresas",
      level: "Intermediário",
      structor: "Ana Sousa",
      structor_about: "Especialista em Gestão",
      course_state: "Disponível",
      imageCourse: cursoGestao,
    },
    {
      course: "Previsões Econômicas",
      level: "Avançado",
      structor: "Carlos Silva",
      structor_about: "Economista",
      course_state: "Em Andamento",
      imageCourse: cursoPrevisoes,
    },
  ];

  return (
    <div className="home-page">
      {/*  <div className="hidden">
        <Slogan />
      </div>

      <div className="hidden">
        <Register />
      </div> */}

      {/* <div className="hidden card-contact">
        <ContactCard
          contentTitle="Possui alguma dúvida?"
          btnMsg="Chamar no WhatsApp"
          text="Envie uma mensagem e converse com uma pessoa real"
          borderColor="rgb(41, 224, 168)"
          textColor="rgb(41, 224, 168)"
          idButton="card-contact-whatsapp"
        />
        <div className="space-card"></div>
        <ContactCard
          contentTitle="Conheça as promoções"
          btnMsg="Ver promoções"
          text="Veja todas as ofertas existentes no momento"
          borderColor="var(--primary-color)"
          textColor="black"
          idButton="card-contant-normal"
        />
      </div> */}
      {/* <div className="funcionamento center-text">
        <h1>Como funciona a plataforma</h1>
        <div className="hidden card-funcionamento-content">
          <FunctionCard
            titulo="Conteúdo Atualizado"
            icon="bi-journal-check"
            text="Fique sempre à frente com atualizações constantes e melhorias em nosso conteúdo."
          />
          <FunctionCard
            titulo="Novos Lançamentos Inclusos"
            icon="bi-box-seam"
            text="Receba automaticamente novos lançamentos sem custos adicionais."
          />
          <FunctionCard
            titulo="Suporte Personalizado"
            icon="bi-headset"
            text="Contate nosso suporte 24/7 para tirar dúvidas e resolver problemas rapidamente."
          />
          <FunctionCard
            titulo="Certificação Reconhecida"
            icon="bi-award"
            text="Conquiste certificações validadas por especialistas da indústria ao completar cursos."
          />
        </div>
      </div> */}
{/* 
      <div className="courses">
        <div className="center-text">
          <h1>Veja a nossa gama de cursos</h1>
          <div className="hidden course-content">
            {cursos.map((curso, index) => (
              <CourseCard
                key={index}
                course={curso.course}
                level={curso.level}
                structor={curso.structor}
                structor_about={curso.structor_about}
                course_state={curso.course_state}
                imageCourse={curso.imageCourse}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="promotions">
        <div className="center-text">
          <h3>Além de formações, ganhe acesso a diversos previlégios</h3>
          <div className="hidden card-previlegies-content">
            <Previlegies image={imagePrevilegies} type="Gold" clr="#f3d678" />
            <Previlegies image={imagePrevilegies} type="Silver" clr="#afaeae" />
            <Previlegies image={imagePrevilegies} type="Bronze" clr="#eef08e" />
          </div>
        </div>
      </div>
      <div className="center-text">
        <div className="hidden about-container">
          <About
            title="Excelentes avaliações"
            icon="bi-star-fill"
            text="Essa é a média de avaliação das nossas aulas na plataforma."
          />
          <About
            title="+30 Cursos"
            icon="bi-person-video3"
            text="Acesso imediato a todo conteúdo disponível na plataforma para assistir no seu ritmo. Com atualizações inclusas na assinatura."
          />
          <About
            title="Inúmeros de conteúdo"
            icon="bi-clock"
            text="Você tem acesso a benefícios para assinantes: mentorias, masterclass ao vivo e eventos exclusivos para alunos."
          />
          <About
            title="Exercícios práticos"
            icon="bi-play-btn"
            text="Você vai aprender na prática com diversos projetos e cases reais pra evoluir o seu portfólio, além de colecionar certificados para o seu currículo."
          />
        </div>
      </div>

      <div className="solution-container">
        <Solution />
      </div> */}

      {/*  <div className="depoiments">
        <div className="center-text">
          <div className="depoiments-top">
            <h1>Veja o depoimento de quem passou pela nossa instituição</h1>
            <div>
              <p>O próximo depoimento pode ser seu!</p>
              <i className="bi bi-arrow-down"></i>
            </div>
          </div>
          <div className="hidden depoiments-downn">
            <DepoimentsCard />
            <DepoimentsCard />
            <DepoimentsCard />
          </div>
        </div>
      </div> */}
      {/* 
      <div className="faq">
        <div className="center-text">
          <h1 className="faq-top">Perguntas e respostas mais frequentes</h1>
          <div className="question">
            <ul className="hidden">
              {faqs.map((faq, index) => (
                <Faq
                  key={index}
                  number={faq.number}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </ul>
            <div className="call-whatsapp">
              <div className="call-what-content">
                <div className="whatsapp-icon">
                  <i className="bi bi-whatsapp"></i>
                </div>
                <h1 className="call-w-title">Ficou com alguma dúvida?</h1>
                <p className="call-text">
                  Envie uma mensagem e converse com uma pessoal real.
                </p>
              </div>
              <button>
                <Link to="">Chamar no WhatsApp</Link>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
