import NavBar from '../components/nav-components/nav-bar'

const Home = () => {
  return (
    <>
      <NavBar />
      <div style={{ marginLeft: 250, marginRight: 'auto', marginTop: 150 }}>
        <p>Welcome to iO meeting room app where you can see available meeting rooms in real time</p>
      </div>
    </>
  )
}

export default Home;