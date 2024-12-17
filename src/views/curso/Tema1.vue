<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Impacto ético de la tecnología en el ámbito laboral y social     '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    p.mb-4 A lo largo de la evolución de las sociedades, el trabajo ha sido un pilar fundamental en la configuración de las relaciones sociales y en el desarrollo de capacidades individuales y colectivas. Más allá de su función económica, el trabajo es una expresión de dignidad humana y un espacio donde se reflejan los valores y derechos de una sociedad. Sin embargo, en el contexto de la globalización, los modelos productivos han introducido dinámicas complejas que afectan directamente estos valores fundamentales, poniendo a prueba los principios éticos que regulan el ámbito laboral y su impacto en el tejido social. La búsqueda de eficiencia y competitividad, ha generado prácticas que desafían el respeto por los derechos laborales y la cohesión social, requiriendo una reflexión ética profunda sobre las implicaciones de estos cambios.
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .p-4.mb-4(style="background-color: #eaf8fd ")
          p.mb-0 A medida que los mercados y las empresas trascienden fronteras, el entorno laboral se ve influenciado por una globalización que introduce nuevos dilemas éticos y tecnológicos; ejemplo de esto son las prácticas como la explotación laboral de trabajadores y el desplazamiento laboral por la tecnología, planteando interrogantes sobre la equidad, la seguridad laboral y el respeto a los derechos humanos, en diferentes contextos culturales y normativos. 
        p.mb-4 Estos dilemas éticos en el entorno laboral globalizado, exigen un análisis profundo de las implicaciones de tales prácticas, evaluando hasta qué punto el compromiso con los derechos laborales, se mantiene frente a las presiones económicas y los cambios tecnológicos que surgen.
          br
          br
          |Para abordar estos desafíos, es necesario profundizar las temáticas que se estudiarán a continuación.
      .col-lg-5.col-7: img(src='@/assets/curso/temas/3.png', alt='')
    .bg-full-width.bg-color-2.mb-lg-5(style="background-color: #f0e9f6")
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-5.col-7.mb-lg-0.mb-3
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/4.png', alt='')
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Dilemas éticos
            p.mb-4(data-aos="fade-right") En un mundo cada vez más interconectado, los avances tecnológicos y la globalización han redefinido las dinámicas laborales, introduciendo desafíos éticos significativos que requieren atención urgente. Desde el impacto de la automatización y la digitalización en la estabilidad laboral hasta las brechas de desigualdad generadas por la economía digital, los dilemas éticos se presentan como una constante que exige un análisis profundo y comprometido. En este contexto, el estudio de temas como la transformación tecnológica, la automatización y la inclusión digital se vuelve esencial para entender las implicaciones sociales y éticas que estos fenómenos traen consigo, así como para diseñar respuestas que promuevan una transición laboral inclusiva y equitativa. A continuación, el PDF Dilemas éticos , explora estas temáticas, ofreciendo un enfoque crítico sobre la necesidad de armonizar el progreso tecnológico con la protección de los derechos laborales y la dignidad humana.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Dilemas éticos.


    
      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1

.SplitContainer
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(232,238,253,1) 0%, rgba(232,238,253,1) 50%, rgba(255,255,255,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB

.PurpleContainer
  background-color: rgb(255,253,246)

.SplitContainer2
  background: rgb(85,122,250)
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,253,246,1) 50%)

  .yellowCard
    padding: 2rem
    background-color: #FBF6DB
</style>
