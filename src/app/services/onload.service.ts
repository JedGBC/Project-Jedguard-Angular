import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnloadService {

  constructor() { }

  private loadPics = [
    "https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_11849.jpg",
    "https:\/\/images.dog.ceo\/breeds\/kuvasz\/n02104029_792.jpg",
    "https:\/\/images.dog.ceo\/breeds\/tervuren\/yoda_on_terrace.jpg",
    "https:\/\/images.dog.ceo\/breeds\/spaniel-irish\/n02102973_4511.jpg",
    "https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg",
    "https:\/\/images.dog.ceo\/breeds\/terrier-silky\/n02097658_2271.jpg",
    "https:\/\/images.dog.ceo\/breeds\/setter-irish\/n02100877_123.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-afghan\/n02088094_907.jpg",
    "https:\/\/images.dog.ceo\/breeds\/dingo\/n02115641_6575.jpg",
    "https:\/\/images.dog.ceo\/breeds\/spaniel-irish\/n02102973_3344.jpg",
    "https:\/\/images.dog.ceo\/breeds\/spaniel-cocker\/n02102318_3511.jpg",
    "https:\/\/images.dog.ceo\/breeds\/whippet\/n02091134_9433.jpg",
    "https:\/\/images.dog.ceo\/breeds\/basenji\/n02110806_3978.jpg",
    "https:\/\/images.dog.ceo\/breeds\/hound-blood\/n02088466_9533.jpg",
    "https:\/\/images.dog.ceo\/breeds\/spitz-japanese\/tofu.jpg"
];

  fillData(){
  let verify = sessionStorage.getItem("picsServiceResponse")?.length;
    if (verify === 0 ||
      verify === null || 
      verify === undefined){
        sessionStorage.setItem("picsServiceResponse",JSON.stringify(this.loadPics));
    }
  }
}
