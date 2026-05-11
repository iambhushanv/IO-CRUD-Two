import { Component, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';
import { SnackBarService } from '../../services/snackBar.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.scss']
})
export class PostDashboardComponent implements OnInit {
  editPostObj !: Ipost
  constructor(
    private _snackBar : SnackBarService
  ) { }
  ngOnInit(): void {
  }

  postArr: Array<Ipost> = [
    {
      title: 'Angular',
      content: 'Angular is a TypeScript-based framework by Google used to build dynamic single-page web applications with powerful tools and structured architecture.',
      id: 'slkjf'
    },
    {
      title: 'React',
      content: 'React is a JavaScript library by Facebook for building fast user interfaces using reusable components and a virtual DOM rendering approach.',
      id: 'mxqrt'
    },
    {
      title: 'Express.js',
      content: 'Express.js is a minimal and flexible Node.js web framework that provides robust features for building fast and scalable backend web applications.',
      id: 'pqlmn'
    },
    {
      title: 'TypeScript',
      content: 'TypeScript is a strongly typed superset of JavaScript that compiles to plain JS, helping developers catch errors early during development.',
      id: 'kdvhy'
    },
    {
      title: 'Node.js',
      content: 'Node.js is a runtime environment that allows JavaScript to run on the server side, enabling fast and scalable backend application development.',
      id: 'trfep'
    },
    {
      title: 'MongoDB',
      content: 'MongoDB is a NoSQL database that stores data in flexible JSON-like documents, making it ideal for modern and scalable web applications.',
      id: 'xgcua'
    }
  ]

  getnewPost(newPost: Ipost){
    this.postArr.unshift(newPost)
    this._snackBar.openSnackBar(`The new Post ${newPost.title} is added Successfully !!!`)
  }

  getRemoveId(id: string){
    let getIndex = this.postArr.findIndex(t => t.id === id)
    let deletePost = this.postArr.splice(getIndex, 1)
    this._snackBar.openSnackBar(`The Post ${deletePost[0].title} is removed successfully !!!`)
  }

  getEditPost(editPost:Ipost){
    console.log(editPost);
    
    this.editPostObj = editPost
  }

  getUpdatePost(UpdatePost:Ipost){
    let getIndex = this.postArr.findIndex(t => t.id === UpdatePost.id)
    console.log(getIndex);
    this.postArr[getIndex]= UpdatePost
    this._snackBar.openSnackBar(`The Post with Id ${UpdatePost.id} is updated Successfully !!!`)
    
  }



}
