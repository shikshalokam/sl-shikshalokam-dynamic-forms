import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';


// @Injectable({
//   // providedIn: 'root'
// })
export class DynamicFormBuilderService {

  communicateSubject: Subject<any> = new Subject<any>();

  // private messageSource = new BehaviorSubject('default message');
  // currentMessage = this.messageSource.asObservable();

  list: any = [];
  pagelist: any;

  all: any = [];
  criteriaList: any = [];

  constructor() { }

  currentMessage() {
    return this.list;
  }

  sendData(obj) {

    console.log("obj", obj);

    this.list = obj;
    this.communicateSubject.next();
  }

  setPageNumber(data) {
    this.pagelist = data;
    this.communicateSubject.next();
  }

  getPageNumbers(): Observable<any> {
    return this.pagelist;

  }
  // setQuestionList(list){
  //   this.list = list;
  // }

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  // }

  getALl(): Observable<any> {

    // let all = {
    //   questionList:[]
    // }
    this.all = {
      criteriaList: this.criteriaList,
      questionList: this.list
    }

    console.log("executing in service",this.all);
    // return this.communicateSubject.asObservable();
    return this.all;
  }

  getQuestions(){
    return this.list;
  }
  setCriteria(list) {

    this.criteriaList = list;

  }

  updateQuestion(questionEle){

    console.log("update question",questionEle);
    this.list = this.list['questionList'].filter(item=>{
      if(item.field==questionEle.field){
        return questionEle;
      }else {
        return item;
      }
    })
  }

}