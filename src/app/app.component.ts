import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTailwind';
  genero:any=[];
  genero2020:any;
  genero2021:any;
  genero2022:any=[];
  confirm=true;
  texto:any=[];
  
  ocultar= false;

  

  solos:any=[];
  hijos:any=[];
  emparejados:any=[];

  mostrando(){
  this.genero=[{sexo1: "femenino: ", resultado:"257"},
                {sexo1: "masculino: ",resultado:"219"}];

  this.solos=[{sexo1: "femenino: ", cantidad:282},
              {sexo1: "masculino: ", cantidad:121}],
                
  this.hijos=[{more2:"+2 hijos=90"},
       {less:"<2 hijos=79"}
      ],
  this.emparejados=[{cantchild:290}],

  this.texto=[
    {sexo1: "Total Mujeres: ", resultado:"257"},
    {sexo1: "Total Hombres: ",resultado:"219"},
    {sexo1: "Mujeres solas: ", cantidad:282},
    {sexo1: "Hombres solos: ", cantidad:121},
    {more2:"Parejas 2 hijos ++=90"},
       {less:"Prejas - 2 hijos=79"},
       {cantchild:290}
  ]
  
};

mostrando20(){
  this.genero=[{sexo1: "femenino: ", resultado:"300"},
                    {sexo1: "masculino: ",resultado:"202"}];

  this.solos=[{sexo1: "femenino: ", cantidad:182},
       {sexo1: "masculino: ", cantidad:121}],
                
  this.hijos=[{more2:"+2 hijos=50"},
       {less:"<2 hijos=70"}
      ],
  this.emparejados=[{cantchild:198}],

  this.texto=[
    {sexo1: "Total Mujeres: ", resultado:"300"},
    {sexo1: "Total Hombres: ",resultado:"202"},
    {sexo1: "Mujeres solas: ", cantidad:182},
    {sexo1: "Hombres solos: ", cantidad:121},
    {more2:"Parejas 2 hijos ++=50"},
       {less:"Prejas - 2 hijos=70"},
       {cantchild:290}
  ]

};

mostrando21(){
  this.genero=[{sexo1: "femenino: ", resultado:"310"},
                    {sexo1: "masculino: ",resultado:"99"}];
  this.solos=[{sexo1: "femenino: ", cantidad:192},
       {sexo1: "masculino: ", cantidad:161}],
                
  this.hijos=[{more2:"+2 hijos=70"},
       {less:"<2 hijos=82"}
      ],
  this.emparejados=[{cantchild:203}],

  this.texto=[
    {sexo1: "Total Mujeres: ", resultado:"310"},
    {sexo1: "Total Hombres: ",resultado:"99"},
    {sexo1: "Mujeres solas: ", cantidad:192},
    {sexo1: "Hombres solos: ", cantidad:161},
    {more2:"Parejas 2 hijos ++=70"},
       {less:"Prejas - 2 hijos=82"},
       {cantchild:290}
  ]
};

mostrando22(){
  this.genero=[{sexo1: "femenino: ", resultado:"200"},
                    {sexo1: "masculino: ",resultado:"79"}];

  this.solos=[{sexo1: "femenino: ", cantidad:102},
       {sexo1: "masculino: ", cantidad:151}],
                
  this.hijos=[{more2:"+2 hijos=60"},
       {less:"<2 hijos=75"}
      ],
  this.emparejados=[{cantchild:293}],

  this.texto=[
    {sexo1: "Total Mujeres: ", resultado:"200"},
    {sexo1: "Total Hombres: ",resultado:"79"},
    {sexo1: "Mujeres solas: ", cantidad:102},
    {sexo1: "Hombres solos: ", cantidad:151},
    {more2:"Parejas 2 hijos ++=60"},
       {less:"Prejas - 2 hijos=75"},
       {cantchild:290}
  ]
};
 
 

  mostrar(){
    const mostrar = document.querySelector('#mostrar')
      mostrar?.classList.toggle('hidden'); 
   }

   
   

//  CONSTRUCTOR PARA UN SOLO LLAMADO, LAS VARIABLE = VARIABLE:ANY[]
  //  constructor(){
  //   // this.genero2019=[
  //   //   {sexo1: "femenino", resultado:"257"},
  //   //   {sexo1: "masculino",resultado:"219"}
  //   // ],
  //   this.solos=[
  //     {sexo1: "femenino", cantidad:182},
  //     {sexo1: "masculino", cantidad:121},

  //   ],
  //   this.emparejados=[
  //     {cantchild:223}
  //   ],
  //   this.hijos=[
  //     {more2:"+2 resultado=50"},
  //     {less:"<2 resultado=70"}

  //   ]
    
   //}
   
  
  imagenes(){
  const cl =document.querySelector('.imagen')
  const homes = document.querySelector('.homes')
  cl?.classList.toggle('sobre'); 
  homes?.classList.toggle('hidden')
  
 }
casa=true
cuarto=true
bano=true
terraza=true
cocina=true

 jome(){
  this.casa=true
  this.cuarto=false
  this.bano=false
  this.terraza=false
  this.cocina=false
}

room(){
  this.cuarto=true
  this.casa=false
  this.bano=false
  this.terraza=false
  this.cocina=false

}

bath(){
  this.bano=true
  this.casa=false
  this.cuarto=false
  this.terraza=false
  this.cocina=false
}
porshe(){
  this.terraza=true
  this.casa=false
  this.cuarto=false
  this.cocina=false
  this.bano=false

}
kitchen(){
  this.cocina=true
  this.casa=false
  this.cuarto=false
  this.terraza=false
  this.bano=false


}

 mobileBreakpoint = 480; // definimos el breakpoint para dispositivos móviles

 toggleMobileClass() {
  const isMobile = window.innerWidth <= this.mobileBreakpoint;
  const rem = document.querySelector('.homes');
  
  if (isMobile) {
    console.log("removido") // agregamos la clase "mobile"
  } 
}

}
