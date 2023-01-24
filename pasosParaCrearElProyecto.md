FRONT:
1. se crean los componentes pages/nombredelcomponente
2. Enroutar en app-routing.module.ts todos los componentes con PATH.
3. se crea componentes para nuestro navegador
4. dentro del html se dibuja un Nav con los enlaces a los componentes
5. se dibuja el navigator en html.componentx
6. creamos componentes de servicios ng g "s" services.


BACK:
1. npm init -y
2. npm i json-server
3. crear un archivo db.json con el array de objeto que quieres mostrar (endpoint)
4. en el scripts se borra el "tets" y se escribe un "start": "json-server --nombredeljason db.json --port  3000".

VOLVIENDO AL BACK:
7. en app module se debe importar HttpClientModule
import { HttpClientModule } from '@angular/common/http';
8. en el aechivo TS de .service se importa private http: HttpClient

Crear formulario
1. importar FormsModule y ReactiveFormsModule en app.module
2. en el archivo TS de newProductos s importa una carpeta al constructor FormBuilder
3. sobre el construcor se declara una variable productForm y se importa FormGroup
4. dentro de la funcion ngOnInit se declara la funcion this.productForm = this.formBuilder.group
