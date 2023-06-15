let urlPrincipal = 'https://api.themoviedb.org/3/movie/881?api_key=a9eb68592528577aaac0cb81e7a89a8c&language=es-MX';
        fetch(urlPrincipal)
            .then( response => response.json() )
            .then( pelicula_principal => mostrarPeliculaPrincipal(pelicula_principal) )
            .catch( error => console.log(error) )

        const mostrarPeliculaPrincipal = (pelicula_principal) => {
            console.log(pelicula_principal)
			console.log(pelicula_principal.title)
            let body = ""
			body = `<div class="pelicula" style="margin-top:10px"><img src="https://image.tmdb.org/t/p/w500/${pelicula_principal.poster_path}" alt=""></div><h3 class="titulo">${pelicula_principal.title}</h3><p class="descripcion">${pelicula_principal.overview}</p><button role="button" class="boton"><i class="fas fa-play"></i>Reproducir</button>
			<button role="button" class="boton"><i class="fas fa-info-circle"></i>Más información</button>`
            document.getElementById('pelicula_principal').innerHTML = body
        }
let urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=a9eb68592528577aaac0cb81e7a89a8c&language=es-MX';
        fetch(urlPopular)
            .then( response => response.json() )
            .then( data => mostrarPopulares(data) )
            .catch( error => console.log(error) )

        const mostrarPopulares = (data) => {
            console.log(data)
            console.log(data.results.length)
            let body = ""
            for (var i = 0; i < data.results.length; i++) {   
                //console.log(data.results[i].id)   
			   body+=`<div class="pelicula"><a href="#"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a></div>`
               
            }
            document.getElementById('Carousel_Populares').innerHTML = body
        }
let urlRecomendations = 'https://api.themoviedb.org/3/movie/385687/recommendations?api_key=a9eb68592528577aaac0cb81e7a89a8c&language=es-MX';
        fetch(urlRecomendations)
            .then( response => response.json() )
            .then( data => mostrarRecomendaciones(data) )
            .catch( error => console.log(error) )

        const mostrarRecomendaciones = (data) => {
            console.log(data)
            console.log(data.results.length)
            let body = ""
            for (var i = 0; i < data.results.length; i++) {   
                //console.log(data.results[i].id)   
			   body+=`<div class="pelicula2"><a href="#"><img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt=""></a></div>`
               
            }
            document.getElementById('Carousel_Recomendaciones').innerHTML = body
        }

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});

//-----------------------------------------------------------------------------------------------------

const fila2 = document.querySelector('.contenedor-carousel2');
const peliculas2 = document.querySelectorAll('.pelicula2');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// ? ----- ----- Paginacion ----- -----
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// ? ----- ----- Hover ----- -----
peliculas2.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas2.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila2.addEventListener('mouseleave', () => {
	peliculas2.forEach(pelicula => pelicula.classList.remove('hover'));
});