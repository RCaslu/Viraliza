import Layout from "@/src/layout/Layout";
import { sliderProps } from "@/src/sliderProps";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

const Counter = dynamic(() => import("@/src/components/Counter"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout dark>
      {/* Hero Section Start */}
      <section className="hero-area pt-185 rpt-150 rel z-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero-content wow fadeInLeft delay-0-2s">
                <h1>
                  Viraliza
                </h1>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hero-right-image mt-20 wow fadeInUp delay-0-4s">
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="hero-bottom-image">
            <img src="assets/images/hero/hero.jpg" alt="Hero" />
            <div className="hero-social">
              <a href="#">
                <i className="fab fa-facebook-f" /> <span>Facebook</span>
              </a>
              <a href="#">
                <i className="fab fa-twitter" /> <span>Twitter</span>
              </a>
              <a href="#">
                <i className="fab fa-dribbble" /> <span>Dribbble</span>
              </a>
              <a href="#">
                <i className="fab fa-behance" /> <span>Behance</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hero-bg">
          <img src="assets/images/hero/hero-bg.png" alt="lines" />
        </div>
      </section>
      {/* Hero Section End */}
      {/* About Us Area start */}
      <section className="about-area pt-130 rpt-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-3">
              
            </div>
            <div className="col-xl-7 col-lg-9">
              <div className="about-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Sobre Nós</span>
                  <h2>
                  Transforme a presença digital da sua marca e impulsione os resultados do seu negócio.
                  </h2>
                </div>
                <div className="content">
                  <p>
                  Seja visível, relevante e memorável no mercado digital. Na Viraliza Marketing, 
                  criamos estratégias que conectam sua marca com o público certo, através de 
                  conteúdos que engajam e produções audiovisuais de impacto.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Pedir Orçamento <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-90 rpt-85 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              Marketing <span>Digital</span>
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* What We Do start */}
      <section className="what-we-do-area pt-90 rpt-80 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-8">
              <div className="what-we-do-content mb-55">
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                  <span className="sub-title mb-15">O que fazemos?</span>
                </div>
                <div className="what-we-do-item wow fadeInUp delay-0-3s">
                  <div className="number">
                    <span>01</span>
                  </div>
                  <div className="content">
                    <h5>Está cansado de investir em marketing sem retorno?</h5>
                    <p>
                    Sentiu que todo o seu esforço em redes sociais, vídeos e podcasts não está a gerar os resultados que esperava?
                    Está a perder oportunidades de venda porque o conteúdo não chama a atenção ou a produção é amadora?
                    Muitos negócios enfrentam o mesmo desafio: falta de estratégia e de uma imagem profissional que verdadeiramente vende. O resultado? Desperdício de tempo e dinheiro em conteúdos que simplesmente não convertem.

                    </p>
                    <Link legacyBehavior href="/service-details">
                      <a className="read-more style-two">
                        <span>Read More</span>{" "}
                        <i className="far fa-arrow-right" />
                      </a>
                    </Link>
                  </div>
                  
                </div>
                <div className="section-title mb-60 wow fadeInUp delay-0-2s">
                    <h2>
                    A solução para o seu marketing está aqui.
                  </h2>
                  <div className="content">
                  <p>
                  Na Viraliza, acreditamos que um conteúdo bem pensado e produzido pode mudar o rumo do seu negócio. 
                  Com a nossa experiência em marketing estratégico e audiovisual, já ajudámos empresas a conquistar mais clientes, 
                  aumentar vendas e fortalecer a marca no mercado. Quando alia estratégia a uma produção profissional, os resultados aparecem  
                  e nós fazemos isso acontecer.
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                      Quero Marketing com Resultado! <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  </div>
                    </div>
                
                
              </div>
            </div>
            <div className="col-xl-6">
              <div className="what-we-do-image mb-55 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/news/exemple img.png"
                  alt="What We Do"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What We Do end */}
      {/* Statistics Area start */}
      
      {/* Statistics Area end */}
      {/* Service Style Three start */}
      <section className="service-three-area pt-70 rpt-40 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Nossos Serviços</span>
                <h2>We Provide Amazing Web Design Solutions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Gestão de redes sociais</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/gestao.svg" width={50} alt="Icon" />
                </div>
                <div className="content">
                  <p>Deixe a estratégia, o design e a gestão das suas redes sociais connosco.
                  A Internet é a nova avenida mais movimentada do mundo, e a sua empresa ainda não 
                  começou a investir em marketing digital? A Viraliza ajuda com estratégias personalizadas 
                  que colocam o seu negócio em evidência. Vamos garantir mais leads, clientes e, o mais importante, 
                  clientes fiéis à sua marca. Utilizamos as melhores ferramentas para fazer a sua empresa destacar-se 
                  nas redes sociais!</p>

                  <h5>Sabia que cerca de 75% dos portugueses utilizam a Internet? Aposte onde o seu público está: online!</h5>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                    Quero um plano de gestão de redes sociais! <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInDown delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Produção de vídeos externa</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/camera2.svg" width={50} alt="Icon" />
                </div>
                <div className="content">
                  <p>Vai organizar um evento e ainda não tem uma equipa de vídeo? Os vídeos são o formato que 
                    mais cresce, e o seu evento merece uma cobertura profissional. Oferecemos gravação com 
                    equipamentos de última geração e edição de alta qualidade, entregando vídeos que capturam 
                    os momentos mais importantes com rapidez e precisão. Quer seja para eventos, lançamentos ou 
                    anúncios, nós garantimos uma produção impecável.</p>
                    <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                    Quero vídeos profissionais de qualidade <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="service-three-item wow fadeInUp delay-0-2s">
                <div className="title-icon">
                  <h5>
                    <Link legacyBehavior href="/service-details">
                      <a>Estúdio de Podcast e Vídeos</a>
                    </Link>
                  </h5>
                  <img src="assets/images/services/videos.svg" width={50} alt="Icon" />
                </div>
                <div className="content">
                  <p>Temos um estúdio equipado com tecnologia avançada, 
                    desde câmaras de televisão até cenários que se adaptam às suas necessidades. 
                    A nossa edição é profissional e rápida, perfeita para quem precisa de qualidade e 
                    eficiência. Além disso, oferecemos uma área dedicada para gravações de vídeos e 
                    fotografia, tudo com o mais alto padrão de qualidade.
                    E tudo isso em plena Lisboa!
                  </p>
                  <Link legacyBehavior href="/about">
                    <a className="read-more mt-10">
                    Quero gravar podcasts e vídeos de alto padrão <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Service Style Three end */}
      {/* Headline area start */}

      {/* Headline Area end */}
      {/* Project Timeline Area start */}

      {/* Project Timeline Area end */}
      {/* Team Area start */}

      {/* Team Area end */}
      {/* Headline area start */}

      {/* Pricing style three end */}
      {/* Why Choose Us Area start */}

      {/* Why Choose Us Area end */}
      {/* Headline area start */}
      <div className="headline-area pt-60 rpt-50 rel z-1">
        <div className="container-fluid">
          <div className="headline-text marquee">
            <span>
              <span>Clientes </span>que<span> confiam em</span> Nós
            </span>
          </div>
        </div>
      </div>
      {/* Headline Area end */}
      {/* Testimonial Area start */}
      <section className="testimonials-three-area pt-95 rpt-70">
        <div className="container container-1260">
          <div className="row gap-120 align-items-center">
            <div className="col-lg-6">
              <div className="testimonial-one-right-part rmb-75">
                <Swiper
                  {...sliderProps.testimonialsThreeActiveSwiper}
                  className="testimonials-three-active wow fadeInUp delay-0-2s"
                >
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="author-speech">
                    <img src="assets/images/services/videos.svg"  />
                    </div>


                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="author-speech">
                    <img src="assets/images/services/videos.svg"  />
                    </div>


                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="author-speech">
                    <img src="assets/images/services/videos.svg"  />
                    </div>


                  </SwiperSlide>
                  <SwiperSlide className="testimonial-item style-three">
                    <div className="author-speech">
                    <img src="assets/images/services/videos.svg"  />
                    </div>


                  </SwiperSlide>
                </Swiper>
                <div className="testimonial-controls style-three mt-65 rmt-40 wow fadeInUp delay-0-3s animated">

                </div>
              </div>
            </div>
            <div className="col-lg-6">
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Area end */}
      {/* Blog Style Two start */}
      
      {/* Blog Style Two end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Index;
