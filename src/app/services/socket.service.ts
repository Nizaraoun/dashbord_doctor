import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import io from "socket.io-client";
import { socketUrl } from "../components/constants/socketUrl";

@Injectable({
  providedIn: "root",
})
export class SocketService {
  private socket = io(socketUrl);
  constructor() {}

  getDatosPacientes(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on("datos", (data: any) => {
        observer.next(data); 
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }

  getPacientesPorGenero(): Observable<any> {
    return new Observable<any>((observer) => {
      this.socket.on("pacientesPorGenero", (data: any) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      };
    });
  }
}
