import classes from './Candidate.module.css'

const Candidate = ({ handleVote, name, pic, votes }) => {
  return (
    <div className={classes.card}>
      <h3>Candidate: {name}</h3>
      <img
        alt={`Candidate ${name} picture`}
        className={classes.img}
        src={pic}
        width={224}
        height={162}
      />
      <h4>
        Votes: <span className={classes.votes}>{votes}</span>
      </h4>
      <button
        className={classes.button}
        onClick={() => handleVote(name, votes)}
      >
        Vote
      </button>
    </div>
  )
}

export default Candidate
