import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  // const item1 = {
  //   nome: 'Rick Sanchez',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  //   tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
  // }
  // const item2 = {
  //   nome: 'Morty Smith',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //   tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
  // }
  // const item3 = {
  //   nome: 'Summer Smith',
  //   imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
  //   tag: ['Status: Vivo', 'Espécie: Humana', 'Origem: Terra C-137']
  // }

  const [itens, setItens] = useState([])
  async function carregarDadosApi(){
    const response = await fetch("https://rickandmortyapi.com/api/character/")
    const json = await response.json()
    const results = json.results
    console.log('results: ' , results)
    setItens(results)
  }
  useEffect(function(){ 
    carregarDadosApi();
  }, [])
  
  return (
    <>
      {itens.map(function (item, index) {
        return <Card item={item} key={`card_${index}`}/>
      })}
    </>
  )
}

export default App
