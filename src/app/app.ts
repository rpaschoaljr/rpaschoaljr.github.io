import { Component, OnInit, inject, signal, effect, untracked, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpreadsheetService } from './services/spreadsheet.service';
import { TranslationService, Language } from './services/translation.service';
import AOS from 'aos';
import gsap from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  private spreadsheetService = inject(SpreadsheetService);
  public ts = inject(TranslationService);
  
  projects = signal<any[]>([]);
  certifications = signal<any[]>([]);
  loadingProjects = signal<boolean>(false);
  loadingCertifications = signal<boolean>(false);
  isAtBottom = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Verifica se chegou ao fim da página (com margem de 100px)
    const scrolledToBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100);
    this.isAtBottom.set(scrolledToBottom);
  }

  scrollToNext() {
    if (this.isAtBottom()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    }
  }

  constructor() {
    // Re-carrega os dados se o idioma mudar e os dados já estiverem carregados
    effect(() => {
      const lang = this.ts.currentLang();
      
      untracked(() => {
        if (this.projects().length > 0) this.loadProjects(true);
        if (this.certifications().length > 0) this.loadCertifications(true);
      });
      
      setTimeout(() => AOS.refresh(), 200);
    });
  }

  ngOnInit() {
    AOS.init({ duration: 1000, once: true });
    this.animateSubtitle();
  }

  animateSubtitle() {
    gsap.from("#subtitulo", {
      duration: 1.5,
      opacity: 0,
      y: -50,
      ease: "power2.out"
    });
  }

  async loadProjects(silent = false) {
    if (!silent) this.loadingProjects.set(true);
    try {
      const data = await this.spreadsheetService.getFileData('portfolio.ods');
      let mapped = data
        .filter(row => row && row.length > 0 && row[0])
        .map(row => ({
          nome: row[0],
          link: row[1],
          resumo: row[2] || ''
        }));
        
      if (this.ts.currentLang() !== 'pt') {
        mapped = await Promise.all(mapped.map(async p => ({
          ...p,
          nome: await this.ts.translateDynamic(p.nome),
          resumo: await this.ts.translateDynamic(p.resumo)
        })));
      }
      this.projects.set(mapped);
    } catch (error) {
      console.error(error);
    } finally {
      if (!silent) this.loadingProjects.set(false);
    }
  }

  async loadCertifications(silent = false) {
    if (!silent) this.loadingCertifications.set(true);
    try {
      const data = await this.spreadsheetService.getFileData('certificados.ods');
      let mapped = data
        .filter(row => row && row.length > 0 && row[0])
        .map(row => ({
          nome: row[0],
          link: row[1],
          projetos: row.slice(2).filter(p => p)
        }));
        
      if (this.ts.currentLang() !== 'pt') {
        mapped = await Promise.all(mapped.map(async c => ({
          ...c,
          nome: await this.ts.translateDynamic(c.nome)
        })));
      }
      this.certifications.set(mapped);
    } catch (error) {
      console.error(error);
    } finally {
      if (!silent) this.loadingCertifications.set(false);
    }
  }
}
