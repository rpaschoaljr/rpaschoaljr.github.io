import { Injectable, signal } from '@angular/core';

export type Language = 'pt' | 'en' | 'es';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLang = signal<Language>('pt');

  private translations: any = {
    pt: {
      subtitle: 'Desenvolvedor de Software',
      about_title: 'Resumo Sobre Mim',
      about_text: 'Olá! Sou um desenvolvedor de software apaixonado por tecnologia. Com formação em Engenharia de Software e background técnico em Mecatrônica, possuo uma visão analítica e sistêmica para resolver problemas. Tenho foco em desenvolvimento web, integração de sistemas e infraestrutura em nuvem, sempre em busca de criar soluções eficientes e de alta qualidade.',
      objective_title: 'Objetivo',
      objective_text: 'Atuar como Desenvolvedor de Software, contribuindo com proatividade, rápido aprendizado e forte lógica de programação. Busco projetar e aprimorar soluções tecnológicas, utilizando práticas modernas e código limpo para entregar resultados de excelência e alto desempenho.',
      exp_title: 'Experiência Profissional',
      exp_role: 'Técnico em Mecatrônica I – Razek Equipamentos Ltda',
      exp_period: 'Janeiro 2019 – Atualmente',
      exp_item1: 'Atuação na área da qualidade e manutenção de equipamentos médicos.',
      exp_item2: 'Realização de montagem mecânica e eletrônica, manutenção e controle documental.',
      edu_title: 'Formação',
      edu_course1: 'Engenharia de Software',
      edu_school1: 'Centro Universitário Anhanguera',
      edu_date1: 'Concluído em 2026',
      edu_course2: 'Técnico em Mecatrônica',
      edu_school2: 'SENAI Antônio Adolpho Lobbe – São Carlos',
      edu_date2: 'Concluído em 2018',
      proj_title: 'Projetos Relevantes',
      proj_btn: 'Carregar Projetos',
      proj_loading: 'Lendo planilha...',
      proj_empty: 'Clique no botão para ver os projetos.',
      proj_view: 'Ver Projeto',
      cert_title: 'Certificações',
      cert_btn: 'Carregar Certificações',
      cert_empty: 'Clique no botão para ver as certificações.',
      skills_title: 'Competências Técnicas',
      skills_lang: 'Linguagens',
      skills_tools: 'Ferramentas',
      skills_soft: 'Habilidades',
      skills_soft_text: 'Trabalho em equipe, aprendizado rápido e raciocínio lógico.',
      footer_contact: 'Contato',
      translation_warning: 'Este site é traduzido automaticamente, portanto, erros de tradução podem ocorrer.'
    },
    en: {
      subtitle: 'Software Developer',
      about_title: 'About Me',
      about_text: 'Hello! I am a software developer passionate about technology. With a degree in Software Engineering and a technical background in Mechatronics, I have an analytical and systemic approach to problem-solving. I focus on web development, system integration, and cloud infrastructure, always seeking to build efficient and high-quality solutions.',
      objective_title: 'Objective',
      objective_text: 'Work as a Software Developer, contributing with proactivity, fast learning, and strong programming logic. I seek to design and improve technological solutions, using modern practices and clean code to deliver excellent and high-performance results.',
      exp_title: 'Professional Experience',
      exp_role: 'Mechatronics Technician I – Razek Equipamentos Ltda',
      exp_period: 'January 2019 – Present',
      exp_item1: 'Acting in the area of quality and maintenance of medical equipment.',
      exp_item2: 'Performance of mechanical and electronic assembly, maintenance and documentary control.',
      edu_title: 'Education',
      edu_course1: 'Software Engineering',
      edu_school1: 'Anhanguera University Center',
      edu_date1: 'Completed in 2026',
      edu_course2: 'Mechatronics Technician',
      edu_school2: 'SENAI Antônio Adolpho Lobbe – São Carlos',
      edu_date2: 'Completed in 2018',
      proj_title: 'Relevant Projects',
      proj_btn: 'Load Projects',
      proj_loading: 'Reading spreadsheet...',
      proj_empty: 'Click the button to see the projects.',
      proj_view: 'View Project',
      cert_title: 'Certifications',
      cert_btn: 'Load Certifications',
      cert_empty: 'Click the button to see the certifications.',
      skills_title: 'Technical Skills',
      skills_lang: 'Languages',
      skills_tools: 'Tools',
      skills_soft: 'Soft Skills',
      skills_soft_text: 'Teamwork, fast learning, and logical reasoning.',
      footer_contact: 'Contact',
      translation_warning: 'This site is automatically translated, so translation errors may occur.'
    },
    es: {
      subtitle: 'Desarrollador de Software',
      about_title: 'Resumen Sobre Mí',
      about_text: '¡Hola! Soy un desarrollador de software apasionado por la tecnología. Con una licenciatura en Ingeniería de Software y experiencia técnica en Mecatrónica, tengo un enfoque analítico y sistémico para resolver problemas. Me enfoco en el desarrollo web, integración de sistemas e infraestructura en la nube, buscando siempre crear soluciones eficientes y de alta calidad.',
      objective_title: 'Objetivo',
      objective_text: 'Trabajar como Desarrollador de Software, contribuyendo con proactividad, rápido aprendizaje y fuerte lógica de programación. Busco diseñar y mejorar soluciones tecnológicas, utilizando prácticas modernas y código limpio para entregar resultados de excelencia y alto rendimiento.',
      exp_title: 'Experiencia Profesional',
      exp_role: 'Técnico en Mecatrónica I – Razek Equipamentos Ltda',
      exp_period: 'Enero 2019 – Actualidad',
      exp_item1: 'Actuación en el área de calidad y mantenimiento de equipos médicos.',
      exp_item2: 'Realización de montaje mecánico y electrónico, mantenimiento y control documental.',
      edu_title: 'Educación',
      edu_course1: 'Ingeniería de Software',
      edu_school1: 'Centro Universitario Anhanguera',
      edu_date1: 'Concluido en 2026',
      edu_course2: 'Técnico en Mecatrónica',
      edu_school2: 'SENAI Antônio Adolpho Lobbe – São Carlos',
      edu_date2: 'Concluido en 2018',
      proj_title: 'Proyectos Relevantes',
      proj_btn: 'Cargar Proyectos',
      proj_loading: 'Leyendo hoja de cálculo...',
      proj_empty: 'Haz clic en el botón para ver los proyectos.',
      proj_view: 'Ver Proyecto',
      cert_title: 'Certificaciones',
      cert_btn: 'Cargar Certificaciones',
      cert_empty: 'Haz clic en el botón para ver las certificaciones.',
      skills_title: 'Competencias Técnicas',
      skills_lang: 'Lenguajes',
      skills_tools: 'Herramientas',
      skills_soft: 'Habilidades',
      skills_soft_text: 'Trabajo en equipo, aprendizaje rápido y razonamiento lógico.',
      footer_contact: 'Contacto',
      translation_warning: 'Este sitio está traducido automáticamente, por lo que pueden ocurrir errores de traducción.'
    }
  };

  constructor() {
    this.detectLanguage();
  }

  private detectLanguage() {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) {
      this.currentLang.set('pt');
    } else if (browserLang.startsWith('es')) {
      this.currentLang.set('es');
    } else {
      this.currentLang.set('en');
    }
  }

  async translateDynamic(text: string): Promise<string> {
    if (!text || this.currentLang() === 'pt') return text;
    try {
      const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=${this.currentLang()}&dt=t&q=${encodeURIComponent(text)}`;
      const res = await fetch(url);
      const json = await res.json();
      return json[0].map((item: any) => item[0]).join('');
    } catch (e) {
      console.error('Translation error:', e);
      return text;
    }
  }

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }
}
