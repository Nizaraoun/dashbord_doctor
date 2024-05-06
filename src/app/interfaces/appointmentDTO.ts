export interface appointmentDTO {
    id: number;
    jour: string;
    heure: string;
    username: string | null;
    doctorname: string | null;
    id_patient: string;
    id_praticien: string | null;
    specialty: string | null;
    image: string | null;
    cancel: boolean;
    completed: number;
    patientname: string;
    patientphone: string;
    patientemail: string | null;
}
