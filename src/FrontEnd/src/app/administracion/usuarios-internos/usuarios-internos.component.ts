import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-usuarios-internos',
  templateUrl: './usuarios-internos.component.html',
  styleUrls: ['./usuarios-internos.component.css']
})
export class UsuariosInternosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  verAlerta () {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info', 
      iconColor: "var(--bs-primary)", 
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="bi bi-hand-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="bi bi-hand-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

}
