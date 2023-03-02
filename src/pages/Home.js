import { FcAssistant } from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(99, 212, 174)',
    marginLeft: '40px',

    marginRight: '40px',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};
const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to contacts manager page <FcAssistant />
      </h1>
    </div>
  );
};

export default Home;
