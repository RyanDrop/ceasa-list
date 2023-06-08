import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage = window.localStorage;

  setItem(key: string, value: any) {
    this.localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string) {
    const value = this.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string) {
    this.localStorage.removeItem(key);
  }

  clear() {
    this.localStorage.clear();
  }
}
