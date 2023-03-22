import { useEffect, useState } from 'react'
import { Candidate } from './components/candidate'

import classes from './App.module.css'

const initialCandidates = [
  {
    name: 'tony',
    pic: 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/Tony-Ferreira.jpg?itok=kbyLvO1c',
    votes: 0,
  },
  {
    name: 'joe',
    pic: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F07%2Fjoe-dirt-2.jpg&q=60',
    votes: 0,
  },
  {
    name: 'jane',
    pic: 'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2022/09/GettyImages-1384757995.jpg',
    votes: 0,
  },
]

function App() {
  const [candidates, setCandidates] = useState(initialCandidates)
  const [winner, setWinner] = useState('')

  const setVote = (name, votes) => {
    setCandidates(
      candidates.map(candidate => {
        if (candidate.name === name) {
          return { ...candidate, votes: votes }
        }
        return candidate
      })
    )
  }

  useEffect(() => {
    const winner = candidates.reduce((acc, candidate) => {
      if (candidate.votes > acc.votes) {
        return candidate
      }
      return acc
    })

    setWinner(winner.name)
  }, candidates)

  return (
    <div className={classes.main}>
      <h1 className={classes.title}>VOTES</h1>
      {candidates.reduce((acc, candidate) => {
        return acc + candidate.votes
      }, 0) && <h3 className={classes.winner}>Current winner: {winner}</h3>}
      <div className={classes.candidates}>
        {candidates.map(({ name, pic, votes }) => (
          <Candidate
            handleVote={() => setVote(name, votes + 1)}
            key={name}
            name={name}
            pic={pic}
            votes={votes}
          />
        ))}
      </div>
    </div>
  )
}

export default App
