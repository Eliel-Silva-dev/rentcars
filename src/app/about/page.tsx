import style from './style.min.module.css';

const About = () => {
  return (
    <main className={style.main_about}>
      <div className={style.header}></div>
      <section className={style.about_info}>
        <h2>Sobre nós: Conheça mais a história da Rentcars</h2>
        <p>
          A Rentcars é a maior plataforma de locação de veículos on-line na
          América Latina e uma das líderes globais do segmento. Pelo site ou
          aplicativo, entregamos soluções em mobilidade em mais de 160 países e
          comparamos preços de mais de 300 locadoras, reunindo as melhores
          opções em um só lugar.
        </p>
        <p>
          Fundada em 2009, a Rentcars tem como propósito conectar pessoas às
          melhores opções de carros em todo o mundo e oferecer o melhor
          atendimento para que cada cliente possa viver uma experiência incrível
          e satisfatória do início ao fim de sua jornada.
        </p>
      </section>
    </main>
  );
};

export default About;
