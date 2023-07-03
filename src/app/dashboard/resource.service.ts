

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  currentDetail: any;



  constructor(private http: HttpClient) { }
//   postClientForm(formData){
//   return  this.http.post<any>(`${environment.baseUrl}/mail/send-client-mail`,formData);
//   }

//   postcareerForm(formData){
//   return  this.http.post<any>(`${environment.baseUrl}/mail/send-career-mail`,formData);
//   }

//   postWalkInForm(data:any){
//     return this.http.post<any>(`${environment.apiUrl}/user/add/techCandidate`,data)
//   }

//   getDriveName(){
//     return this.http.get<any>(`${environment.apiUrl}/user/get/available/drive`)
//   }

//   getUser() {
//     return this.http.get<{
//       isError: boolean,
//       data:any,
//       message:any;

//     }> (`${environment.baseUrl}/api/v1/users`)
//   }




//  addUser(datas:any){
//     return this.http.post<{
//       isError:boolean,
//       data:any,
//       message:any
//     }> (`${environment.baseUrl}/api/v1/user`,datas)
//   }


//   editUser(data:any,id:any){
//     return this.http.put<{
//       error:boolean,
//       userData:any,
//       message:string
//     }> (`${environment.baseUrl}/auth/update-user/${id}`,data)
//    }
//    deleteUser(id:any){
//     return this.http.delete<{
//       error:boolean,
//       userData:any,
//       message:string
//     }> (`${environment.baseUrl}/auth/delete-user/${id}`)
//    }

   getResourceInformation(){
    return this.http.get(`assets/data.json`)
   }

//    getUserPaginaton(datas:any) {
//     return this.http.post<{
//       isError: boolean;
//       message:any;
//       data: any;
//       totalmixed: number;
//     }>(
//       `${environment.baseUrl}/api/v1/users`,datas);
//   }


//   login(data:any) {
//     return this.http.post < {
//       error: boolean,
//       message: string,
//       response:any
//     } > (`${environment.baseUrl}/api/v1/auth/authenticate`,data)
//   }

//   ResendOtp(data:any) {
//     return this.http.post < {
//       error: boolean,
//       message: string,
//       data:any
//     } > (`${environment.baseUrl}/api/v1/auth/resend-otp`,data)
//   }

//   VerifyOtpData(userData: any) {
//     return this.http.post<{
//        error: boolean;
//         message: string;
//         data:any }>(
//       `${environment.baseUrl}/api/v1/auth/validate`, userData);
//   }
// needAccess(data:any){
//   return this.http.post<{
//     error: boolean;
//      message: string;
//      response:any }>(
//    `${environment.baseUrl}/auth/add-needAccess`, data);
// }
}
