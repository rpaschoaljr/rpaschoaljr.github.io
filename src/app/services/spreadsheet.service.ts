import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class SpreadsheetService {
  private http = inject(HttpClient);

  async getFileData(fileName: string): Promise<any[][]> {
    try {
      const data = await firstValueFrom(this.http.get(fileName, { responseType: 'arraybuffer' }));
      const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      return XLSX.utils.sheet_to_json(worksheet, { header: 1 });
    } catch (error) {
      console.error(`Erro ao carregar a planilha ${fileName}:`, error);
      throw error;
    }
  }
}
