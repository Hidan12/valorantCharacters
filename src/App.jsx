import { ContainerCard } from './assets/components/containerCard/ContainerCard' 
import { HeaderNav } from './assets/components/header/Header'
import { DetailCard } from './assets/components/detail/Detail'
import './App.css'
import { useEffect, useState } from 'react'



const Loading = ()=>{
  return(
    <button type="button" className="bg-indigo-500 ..." disabled>
  <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
  </svg>
  loading
</button>
  )
}


const infoCard = [
    {
      title: "Naruto",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_976989-MLA52691580275_122022-T.webp",
      description: "Naruto sigue la historia de un joven ninja llamado Naruto Uzumaki que sueña con convertirse en el ninja más fuerte y ser reconocido como el Hokage de su aldea. A lo largo de su viaje, Naruto enfrenta numerosos desafíos y hace amigos y enemigos, mientras descubre la verdad sobre su pasado."
    },
    {
      title: "Shinmai Ossan Boukensha",
      img: "https://a.storyblok.com/f/178900/750x1062/98ddfaa1e3/shinmaiossankv.jpg/m/filters:quality(95)format(webp)",
      description: "Shinmai Ossan Boukensha narra las aventuras de un aventurero veterano que decide regresar a la vida de aventuras después de años de retiro. A pesar de su edad, demuestra que la experiencia y la sabiduría son herramientas poderosas en su lucha contra los monstruos y desafíos del mundo."
    },
    {
      title: "One Punch Man",
      img: "https://somoskudasai.com/wp-content/uploads/2020/12/9784088824550.jpg",
      description: "One Punch Man cuenta la historia de Saitama, un héroe que puede derrotar a cualquier enemigo con un solo golpe. A pesar de su poder abrumador, Saitama enfrenta un profundo aburrimiento y busca un oponente digno que le proporcione un verdadero desafío."
    },
    {
      title: "Black Clover",
      img: "https://www.normaeditorial.com/upload/media/albumes/0001/27/thumb_26377_albumes_medium.jpeg",
      description: "Black Clover sigue a Asta y Yuno, dos huérfanos criados juntos, que aspiran a convertirse en el Rey Mago, el título más alto entre los magos. Aunque Asta no tiene habilidades mágicas, compensa con su tenacidad y fuerza física, mientras que Yuno es un prodigio con un inmenso poder mágico."
    },
    {
      title: "Black Lagoon",
      img: "https://manga-mon.com/cdn/shop/files/IMG_0931_49829dff-8562-4577-ba4f-63672376f1a2.jpg?v=1718328117",
      description: "Black Lagoon sigue a Rokuro Okajima, un empresario japonés que es secuestrado por la tripulación del Black Lagoon durante una misión en el sudeste asiático. Adaptándose a su nueva vida, Rokuro se convierte en Rock, un miembro de la tripulación, enfrentándose a peligrosos mafiosos y operaciones ilegales."
    },
    {
      title: "My Hero Academia",
      img: "https://http2.mlstatic.com/D_NQ_NP_862177-MLA52797831143_122022-O.webp",
      description: "My Hero Academia sigue a Izuku Midoriya, un joven sin poderes en un mundo donde los superpoderes son comunes. A pesar de ello, sueña con convertirse en un héroe y, después de ser elegido por el gran All Might, comienza su entrenamiento en la Academia U.A."
    },
    {
      title: "Attack on Titan",
      img: "https://acdn.mitiendanube.com/stores/001/184/069/products/aot_25_2da-edicion-cov1-4ceeca011fed9b58dd16203297955366-640-0.jpg",
      description: "Attack on Titan cuenta la historia de la humanidad luchando por sobrevivir dentro de muros gigantes que los protegen de los titanes, criaturas enormes y devoradoras de hombres. Eren Yeager, el protagonista, se une a la lucha después de presenciar la muerte de su madre a manos de un titán."
    },
    {
      title: "Death Note",
      img: "https://www.comicquestcol.com/wp-content/uploads/2018/06/1.-DEATH-NOTE.jpg",
      description: "Death Note sigue a Light Yagami, un estudiante de secundaria que encuentra un cuaderno sobrenatural que le permite matar a cualquiera cuyo nombre escriba en él. Con el poder en sus manos, Light decide limpiar el mundo de criminales, pero es perseguido por el brillante detective L."
    },
    {
      title: "Dragon Ball",
      img: "https://images.cdn1.buscalibre.com/fit-in/360x360/6b/f8/6bf8a5218db76936dc4e98b8d71e83a8.jpg",
      description: "Dragon Ball sigue las aventuras de Son Goku desde su niñez hasta la edad adulta mientras entrena en artes marciales y explora el mundo en busca de las siete esferas del dragón, que convocan a un dragón que concede deseos."
    },
    {
      title: "Bleach",
      img: "https://images.cdn1.buscalibre.com/fit-in/520x520/88/39/7650a32202139223b0b0c525d4ef3c6a.jpg",
      description: "Bleach narra la historia de Ichigo Kurosaki, un joven que accidentalmente obtiene los poderes de un Soul Reaper (dios de la muerte). A partir de ahí, debe asumir el deber de defender a los humanos de los espíritus malignos y guiar a las almas fallecidas al más allá."
    },
    {
      title: "Fairy Tail",
      img: "https://www.comicquestcol.com/wp-content/uploads/2020/07/1.-FAIRYTAIL.jpg",
      description: "Fairy Tail sigue las aventuras de Natsu Dragneel y sus amigos del gremio de magos Fairy Tail mientras enfrentan misiones peligrosas, luchan contra enemigos poderosos y descubren los secretos de sus pasados."
    },
    {
      title: "Tokyo Ghoul",
      img: "https://www.comicquestcol.com/wp-content/uploads/2020/11/11.-TOKYO-GHOUL-300x375.jpg",
      description: "Tokyo Ghoul sigue a Ken Kaneki, un joven que se convierte en mitad ghoul después de un encuentro mortal. Debe aprender a navegar su nueva vida como un ghoul, equilibrando su humanidad con su necesidad de consumir carne humana para sobrevivir."
    },
    {
      title: "Sword Art Online",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_860030-MLU70074341694_062023-T.webp",
      description: "Sword Art Online sigue a Kirito, un jugador atrapado en un videojuego de realidad virtual donde la muerte en el juego significa la muerte en la vida real. Kirito debe luchar para sobrevivir y encontrar una forma de salir del juego."
    },
    {
      title: "Fullmetal Alchemist",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/69/ac/69ac196a8035165fd8da6d4fb955b086.jpg",
      description: "Fullmetal Alchemist sigue a los hermanos Edward y Alphonse Elric, quienes usan la alquimia en un intento fallido de resucitar a su madre. Tras sufrir graves consecuencias, los hermanos buscan la Piedra Filosofal para restaurar sus cuerpos."
    },
    {
      title: "Demon Slayer",
      img: "https://www.pro-bems.com/IMAGES/images_1/DS08648950/m/DS08648950_1.jpg",
      description: "Demon Slayer sigue a Tanjiro Kamado, un joven que se convierte en cazador de demonios después de que su familia es asesinada y su hermana Nezuko se convierte en un demonio. Tanjiro busca una cura para Nezuko mientras lucha contra demonios y descubre la verdad detrás de su transformación."
    },
    {
      title: "The Seven Deadly Sins",
      img: "https://www.normaeditorial.com/upload/media/albumes/0001/07/thumb_6328_albumes_big.jpeg",
      description: "The Seven Deadly Sins sigue a un grupo de caballeros conocidos como los Siete Pecados Capitales, que son acusados de traicionar al reino. La princesa Elizabeth busca su ayuda para liberar al reino de los verdaderos villanos."
    },
    {
      title: "Hunter x Hunter",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2POw4nL26yXVeoz1E-PgwKraAh7hsriMLg&s",
      description: "Hunter x Hunter sigue a Gon Freecss, un joven que descubre que su padre, que él pensaba que estaba muerto, es un famoso cazador. Gon decide seguir sus pasos y convertirse en cazador, enfrentándose a numerosos desafíos y haciendo amigos en el camino."
    },
    {
      title: "One Piece",
      img: "https://www.comicquestcol.com/wp-content/uploads/2020/11/2.-ONE-PIECE.jpg",
      description: "One Piece sigue a Monkey D. Luffy y su tripulación de piratas en busca del legendario tesoro conocido como One Piece, que convertirá a Luffy en el Rey de los Piratas. En su viaje, enfrentan numerosos enemigos y descubren secretos del mundo."
    },
    {
      title: "Blue Exorcist",
      img: "https://images.cdn3.buscalibre.com/fit-in/360x360/59/02/5902b740c9c08691d3f86b4fa64cdd0a.jpg",
      description: "Blue Exorcist sigue a Rin Okumura, un joven que descubre que es el hijo de Satanás. Decidido a luchar contra su destino, Rin se entrena para convertirse en un exorcista y proteger al mundo de las fuerzas demoníacas."
    },
    {
      title: "Akame ga Kill!",
      img: "https://m.media-amazon.com/images/I/71F2DqnexKL._AC_UF894,1000_QL80_.jpg",
      description: "Akame ga Kill! sigue a Tatsumi, un joven que se une a un grupo de asesinos llamado Night Raid para luchar contra la corrupción en su imperio. Juntos, luchan contra enemigos poderosos y descubren los horrores de la tiranía."
    },
    {
      title: "Fairy Tail",
      img: "https://www.normaeditorial.com/upload/media/albumes/0001/06/thumb_5939_albumes_big.jpeg",
      description: "Fairy Tail sigue las aventuras de Natsu Dragneel y sus amigos del gremio de magos Fairy Tail mientras enfrentan misiones peligrosas, luchan contra enemigos poderosos y descubren los secretos de sus pasados."
    },
    {
      title: "No Game No Life",
      img: "https://images.cdn2.buscalibre.com/fit-in/360x360/e7/ac/e7ac0a2adc77f27ec931740064489936.jpg",
      description: "No Game No Life sigue a los hermanos Sora y Shiro, jugadores expertos que son transportados a un mundo donde todos los conflictos se resuelven a través de juegos. Juntos, buscan conquistar este mundo de juegos y desafiar al dios de los juegos."
    },
    {
      title: "Soul Eater",
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_966424-MCO75958077637_042024-T.webp",
      description: "Soul Eater sigue a estudiantes de la Academia Shibusen, quienes entrenan para convertirse en maestros de armas y cosechadores de almas. Maka Albarn y su compañero Soul Eater buscan recolectar 99 almas malignas y una de bruja para convertir a Soul en una Death Scythe."
    },
    {
      title: "Gintama",
      img: "https://i.pinimg.com/originals/57/92/1e/57921e1574c319a2cfc8da6663e3f993.jpg",
      description: "Gintama es una serie de comedia que sigue a Gintoki Sakata, un samurái sin trabajo en una versión alternativa del Japón feudal donde los extraterrestres han conquistado la Tierra. Junto a sus amigos, acepta trabajos extraños para sobrevivir."
    },
    {
      title: "Toriko",
      img: "https://images.cdn3.buscalibre.com/fit-in/360x360/c2/dc/c2dc551ab74c515f919e142357a8d5b5.jpg",
      description: "Toriko sigue a Toriko, un cazador gourmet que busca los ingredientes más raros y deliciosos del mundo para crear el menú perfecto. En su viaje, enfrenta peligrosos desafíos y criaturas extraordinarias."
    }
  ];

function App() {
  const [infoArray, setInfoArray] = useState([])
  const [search, setSearch] = useState('')
  const [clickDetail, setClickDetail] = useState(false)
  const [detail, setDetail] = useState({})
  const [page, setPaage] = useState(1)
  const [initialIndex, setInitialIndex] = useState(0)

 useEffect(()=>{
   const test = async ()=>{
      try {
        let tmp = await fetch("https://valorant-api.com/v1/agents")
        const data = await tmp.json()
        setInfoArray(tmp => tmp = data.data)  
      } catch (error) {
        console.log(error);
      }
     
   }
  test()
   
 },[])
 
 console.log("App",infoArray);
 
  const filter = (info, search)=>{  
    let temp = info.filter((info) => info.displayName.toLowerCase().includes(search.toLowerCase()))
    setInfoArray(temp)
    setPaage(1)
    setInitialIndex(0)
    
  }
  const handlePageNext = ()=>{
    let tempIndex = initialIndex + 10
    if(tempIndex < (infoCard.length)){
        let tempPage = page + 1
        setPaage(tempPage)
        setInitialIndex(tempIndex)
    }
  }
  const handlePagePrev = ()=>{
    if (initialIndex > 0) {    
        let tempPage = page - 1
        let tempIndex = initialIndex - 10
        setPaage(tempPage)
        setInitialIndex(tempIndex)
    }
  }
  
  const handerDetail = (click, infoDetail, location)=>{
    if (!click && location != "modal") {
      setClickDetail(!click)
    }else if (location == "modal") {
      setClickDetail(!click)
    }
    setDetail(infoDetail)
  }
  
  const handerSearchOnChange = (value)=>{
    let tmp = value
    //haciendo esta funcion dentro del set obliga que el set se ejecute y renderice con el nuevo valor  
    setSearch((vl)=> vl=tmp)
    filter(infoCard, value)
  }
  
  return (
    <div className='container-main'>
      <HeaderNav handerSearchOnChange={handerSearchOnChange}/>

      {infoArray.length == 0 ? <Loading/> : <ContainerCard infoArray={infoArray} handerDetail={handerDetail} clickDetail={clickDetail} handlePageNext={handlePageNext} handlePagePrev={handlePagePrev} initialIndex={initialIndex}/>}
      
      {clickDetail ? <DetailCard info={detail} handerDetail={handerDetail} clickDetail={clickDetail}/>: ""}
    </div>
  )
}

export default App
