import { S } from "@fullcalendar/core/internal-common";

export interface Feed  {
     postId : number   ; 
     userId :String  ;
     content :String  ; 
     commentId :String | null; 
     commentContent :String | null; 
     commentCount :number | null; 
     role :String  | null;
     senderName :String  | null; 
     senderImg :any | null;
     createdAt :String | null; 
     anonymous :boolean | null;
}
