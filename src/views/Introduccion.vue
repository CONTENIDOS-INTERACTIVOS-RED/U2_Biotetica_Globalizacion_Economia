<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    p.mb-4 A lo largo de la historia, la humanidad ha enfrentado conflictos y desacuerdos que han conducido a violaciones de los derechos fundamentales, generando una necesidad constante de reflexión y acción, para proteger estos derechos. En respuesta, se han desarrollado mecanismos y documentos, como la Declaración Universal de Derechos Humanos, que buscan asegurar una convivencia justa, el derecho al trabajo, la justicia y la dignidad de las personas. La globalización, un fenómeno que conecta economías, culturas y personas a nivel mundial, plantea nuevos desafíos éticos en torno a estos mismos principios, afectando tanto al ámbito laboral y social, como el económico. 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-4 Esta unidad examina los dilemas morales que emergen actualmente, explorando temas como la equidad, la justicia social, la responsabilidad corporativa y el respeto por la diversidad cultural. Este análisis es fundamental para comprender los aspectos éticos en un contexto globalizado y para valorar la responsabilidad de cada individuo y organización en la construcción de un mundo más justo y sostenible. El resultado de aprendizaje que se aborda en esta unidad es:
        .p-4.mb-4(style="background-color: #eaf8fd ")
          p.mb-0 “Analizar dilemas éticos globales que afectan a diferentes áreas del conocimiento, como la tecnología, la economía y el medio ambiente, y evalúa sus implicaciones éticas”.  
        p.mb-0 El conocimiento de estos temas permite que, como futuros profesionales, puedan mediante la expresión tangible de las aspiraciones humanísticas, trascender la mera información hacia niveles de pensamiento y acción complejas, autónomas y propositivas, como parte constitutiva de su desarrollo integral. 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/2.png', alt='')
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Primer tema")
            p.mb-0 En el primer tema, se estudia el impacto ético en el ámbito laboral y social, profundizando sobre los dilemas éticos asociados con el trabajo en un entorno globalizado, sus efectos en la cohesión social y el respeto por la diversidad cultural.
          div(titulo="Segundo tema")
            p.mb-0 En el segundo tema se examina la economía global y su influencia en la equidad y justicia social, explorando acerca de la justicia económica y el papel de las instituciones internacionales, en la regulación de la equidad.
          div(titulo="Tercer tema")
            p.mb-0 En el tercer tema se revisa la responsabilidad social, corporativa y ética, en las decisiones empresariales, enfocándose en la ética empresarial y la responsabilidad social, en el contexto de la globalización.
    

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
